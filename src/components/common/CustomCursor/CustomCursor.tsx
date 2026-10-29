import React, { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

export type CursorTheme = 'blue' | 'light' | 'dark';
export type CursorVariant = 'default' | 'link' | 'button' | 'project' | 'text';

interface CursorState {
  theme: CursorTheme;
  variant: CursorVariant;
}

interface RgbColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

// Fast RGB string parser
const parseRgbValues = (colorStr: string): RgbColor | null => {
  if (!colorStr) return null;
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return null;
  return {
    r: parseInt(match[1], 10),
    g: parseInt(match[2], 10),
    b: parseInt(match[3], 10),
    a: match[4] !== undefined ? parseFloat(match[4]) : 1,
  };
};

// Relative luminance (standard sRGB perceived brightness formula)
const getLuminance = (r: number, g: number, b: number): number => {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};

// Check if color is a vibrant blue shade (e.g. portfolio primary blue #2A4FF1)
const isBlueColor = (r: number, g: number, b: number): boolean => {
  return b > 140 && b > r * 1.3 && b > g * 1.05;
};

// 1x1 In-memory canvas for instant real-time image pixel sampling
let sampleCanvas: HTMLCanvasElement | null = null;
let sampleCtx: CanvasRenderingContext2D | null = null;

const getSampleContext = () => {
  if (typeof document === 'undefined') return null;
  if (!sampleCanvas) {
    sampleCanvas = document.createElement('canvas');
    sampleCanvas.width = 1;
    sampleCanvas.height = 1;
    sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });
  }
  return sampleCtx;
};

// Sample the brightness of the pixel immediately beneath the cursor on an image
const sampleImageBrightness = (
  img: HTMLImageElement,
  clientX: number,
  clientY: number
): number | null => {
  try {
    if (!img.complete || img.naturalWidth === 0 || img.naturalHeight === 0) {
      return null;
    }
    const rect = img.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;

    const relX = (clientX - rect.left) / rect.width;
    const relY = (clientY - rect.top) / rect.height;
    if (relX < 0 || relX > 1 || relY < 0 || relY > 1) return null;

    const sourceX = Math.floor(relX * img.naturalWidth);
    const sourceY = Math.floor(relY * img.naturalHeight);

    const ctx = getSampleContext();
    if (!ctx) return null;

    ctx.clearRect(0, 0, 1, 1);
    ctx.drawImage(img, sourceX, sourceY, 1, 1, 0, 0, 1, 1);
    const data = ctx.getImageData(0, 0, 1, 1).data;
    if (data[3] < 30) return null; // Transparent pixel

    return getLuminance(data[0], data[1], data[2]);
  } catch {
    // Cross-origin image or security constraint fallback
    return null;
  }
};

// Ascend DOM to discover effective rendered background color
const getEffectiveBackgroundColor = (startEl: Element | null): RgbColor | null => {
  let curr = startEl;
  while (curr && curr !== document.documentElement) {
    const explicitTheme = curr.getAttribute('data-cursor-theme');
    if (explicitTheme === 'blue') {
      return { r: 42, g: 79, b: 241, a: 1 };
    }
    if (explicitTheme === 'dark') {
      return { r: 8, g: 9, b: 13, a: 1 };
    }
    if (explicitTheme === 'light') {
      return { r: 255, g: 255, b: 255, a: 1 };
    }

    const style = window.getComputedStyle(curr);
    const bg = style.backgroundColor;
    if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
      const parsed = parseRgbValues(bg);
      if (parsed && parsed.a > 0.15) {
        return parsed;
      }
    }
    curr = curr.parentElement;
  }
  return null;
};

// Continuous context-aware cursor state resolution
const getCursorState = (
  target: Element | null,
  clientX: number,
  clientY: number
): CursorState => {
  if (!target || typeof window === 'undefined') {
    return { theme: 'blue', variant: 'default' };
  }

  // 1. Text input / textarea -> native I-beam cursor
  if (target.closest('input, textarea, select, [contenteditable="true"]')) {
    return { theme: 'light', variant: 'text' };
  }

  // 2. Action button inside project card
  const isProjectActionBtn = !!target.closest('.project-action-btn');

  // 3. Project Card (shows refined VIEW state)
  const isProjectCard =
    !isProjectActionBtn &&
    !!target.closest('.project-card, [data-cursor-project="true"]');

  // 4. Interactive elements
  const isLink = !!target.closest('a, [role="link"], .contact-link, .desktop-nav-link');
  const isButton =
    isProjectActionBtn ||
    !!target.closest(
      'button, [role="button"], .about-tab-btn, .all-projects-back-btn, .project-nav-btn, .work-view-more-btn'
    );

  let variant: CursorVariant = 'default';
  if (isProjectCard) {
    variant = 'project';
  } else if (isButton) {
    variant = 'button';
  } else if (isLink) {
    variant = 'link';
  }

  // 5. Dynamic Visual Content Adaptation
  // Method A: Direct pixel sampling if cursor is traversing an image
  const imgEl = (target instanceof HTMLImageElement
    ? target
    : target.querySelector('img') ||
      target.closest('picture, .project-card, .about-polaroid-col, .hero-image-wrapper')?.querySelector('img')) as HTMLImageElement | null;

  if (imgEl) {
    const sampledLum = sampleImageBrightness(imgEl, clientX, clientY);
    if (sampledLum !== null) {
      // If the pixel under pointer is bright (>= 0.5), use contrasting 'blue'; otherwise 'light' (white)
      return {
        theme: sampledLum >= 0.5 ? 'blue' : 'light',
        variant,
      };
    }
  }

  // Method B: Content analysis (Text, Background color, Contrasting surfaces)
  const effectiveBg = getEffectiveBackgroundColor(target);
  const bgLuminance = effectiveBg ? getLuminance(effectiveBg.r, effectiveBg.g, effectiveBg.b) : 0.05;
  const isBgBlue = effectiveBg ? isBlueColor(effectiveBg.r, effectiveBg.g, effectiveBg.b) : false;

  // Check if pointer is on text content
  const isTextElement = !!target.closest(
    '.hero-letter, .hero-role, .hero-description, .hero-mobile-intro, .contact-letter, .contact-heading, p, h1, h2, h3, h4, span, label'
  );

  if (isTextElement) {
    const computedStyle = window.getComputedStyle(target);
    const textColorParsed = parseRgbValues(computedStyle.color);
    if (textColorParsed) {
      const textLum = getLuminance(textColorParsed.r, textColorParsed.g, textColorParsed.b);
      const isTextBlue = isBlueColor(textColorParsed.r, textColorParsed.g, textColorParsed.b);

      // Scenario: White / Light text on Blue background (e.g. DHARUN J in Hero, hero description)
      // Cursor shifts to dark navy so it remains distinguishable against BOTH the white text AND surrounding blue
      if (textLum >= 0.65 && isBgBlue) {
        return { theme: 'dark', variant };
      }

      // Scenario: Blue text on Black background (e.g. LET'S CONNECT in footer)
      // Cursor remains white so it is visible against both lettering and background
      if (isTextBlue && bgLuminance < 0.25) {
        return { theme: 'light', variant };
      }
    }
  }

  // General surface background evaluation:
  // - Blue surfaces (Hero section, blue buttons, bento title tile):
  //   Contrasting light/white cursor
  if (isBgBlue) {
    return { theme: 'light', variant };
  }

  // - White / Light surfaces (About section, Work cards, All Projects page, white buttons):
  //   Contrasting blue cursor matching the attached reference image
  if (bgLuminance > 0.6) {
    return { theme: 'blue', variant };
  }

  // - Black / Dark surfaces (What I Work With, Contact footer, Site Header):
  //   Contrasting light/white cursor
  return { theme: 'light', variant };
};

const checkDeviceCapability = (): boolean => {
  if (typeof window === 'undefined') return false;
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  const hasHover = window.matchMedia('(hover: hover)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return hasFinePointer && hasHover && !prefersReducedMotion;
};

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(checkDeviceCapability);
  const [cursorState, setCursorState] = useState<CursorState>({
    theme: 'blue',
    variant: 'default',
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Single unified hardware position tracker: dot and ring share exact identical concentric origin
  const cursorTrackerRef = useRef<HTMLDivElement>(null);

  const lastPos = useRef({ x: -100, y: -100 });
  const isVisibleRef = useRef(false);
  const lastTargetRef = useRef<Element | null>(null);
  const lastSampleTime = useRef(0);

  // Check device capability: only enable on devices with hover + fine pointer, and no reduced motion
  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapability = () => {
      const enabled = checkDeviceCapability();
      setIsEnabled(enabled);
      if (!enabled) {
        document.body.classList.remove('has-custom-cursor');
      }
    };

    hoverQuery.addEventListener('change', updateCapability);
    motionQuery.addEventListener('change', updateCapability);

    return () => {
      hoverQuery.removeEventListener('change', updateCapability);
      motionQuery.removeEventListener('change', updateCapability);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  // Main cursor event listeners: Synchronous hardware tracking (0ms latency)
  useEffect(() => {
    if (!isEnabled) {
      document.body.classList.remove('has-custom-cursor');
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const updatePosition = (x: number, y: number) => {
      lastPos.current.x = x;
      lastPos.current.y = y;
      if (cursorTrackerRef.current) {
        cursorTrackerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      // 1. Direct hardware position tracking - 0ms lag, zero positional easing
      updatePosition(e.clientX, e.clientY);

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // 2. Continuous context-aware color & variant adaptation
      const target = e.target as Element | null;
      const isImg = target instanceof HTMLImageElement || target?.closest('.project-card, img');
      const now = performance.now();

      // Avoid redundant calculations unless target changes or cursor is traversing an image
      if (!isImg && target === lastTargetRef.current) {
        return;
      }
      if (isImg && target === lastTargetRef.current && now - lastSampleTime.current < 32) {
        return;
      }

      lastTargetRef.current = target;
      lastSampleTime.current = now;

      const nextState = getCursorState(target, e.clientX, e.clientY);
      setCursorState((prev) => {
        if (prev.theme !== nextState.theme || prev.variant !== nextState.variant) {
          return nextState;
        }
        return prev;
      });
    };

    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
      lastTargetRef.current = null;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const handleScroll = () => {
      if (!isVisibleRef.current) return;
      const target = document.elementFromPoint(lastPos.current.x, lastPos.current.y);
      if (target && target !== lastTargetRef.current) {
        lastTargetRef.current = target;
        const nextState = getCursorState(target, lastPos.current.x, lastPos.current.y);
        setCursorState((prev) => {
          if (prev.theme !== nextState.theme || prev.variant !== nextState.variant) {
            return nextState;
          }
          return prev;
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      className={`custom-cursor-wrapper custom-cursor--theme-${cursorState.theme} custom-cursor--${cursorState.variant} ${
        isVisible ? 'is-visible' : ''
      } ${isPressed ? 'is-pressed' : ''}`}
      aria-hidden="true"
    >
      <div ref={cursorTrackerRef} className="custom-cursor-tracker">
        <div className="custom-cursor-ring">
          <span className="custom-cursor-label">VIEW</span>
        </div>
        <div className="custom-cursor-dot" />
      </div>
    </div>
  );
};
