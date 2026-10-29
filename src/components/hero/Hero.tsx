import React, { useState, useEffect, useCallback } from 'react';
import samPortrait from '../../assets/images/sam-portrait.png';
import './Hero.css';

const FIRST_NAME_LETTERS = ['D', 'H', 'A', 'R', 'U', 'N'];

export const Hero: React.FC = () => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  // Helper to extract the letter under the touch point
  const updateTouchLetter = useCallback((touch: React.Touch) => {
    const elem = document.elementFromPoint(touch.clientX, touch.clientY);
    const letterSpan = elem?.closest('.hero-letter') as HTMLElement | null;
    const letter = letterSpan?.dataset.letter || null;
    setActiveLetter((prev) => (prev === letter ? prev : letter));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      updateTouchLetter(e.touches[0]);
    } else {
      setActiveLetter(null);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      updateTouchLetter(e.touches[0]);
    } else {
      setActiveLetter(null);
    }
  };

  const handleTouchEnd = () => {
    setActiveLetter(null);
  };

  // Reset touch active state on scroll, window blur, or tab switch to avoid sticky enlargement
  useEffect(() => {
    const handleReset = () => {
      setActiveLetter(null);
    };

    window.addEventListener('scroll', handleReset, { passive: true });
    window.addEventListener('blur', handleReset);
    document.addEventListener('visibilitychange', handleReset);

    return () => {
      window.removeEventListener('scroll', handleReset);
      window.removeEventListener('blur', handleReset);
      document.removeEventListener('visibilitychange', handleReset);
    };
  }, []);

  return (
    <section className="hero-section" id="home" data-cursor-theme="blue">
      <div className="hero-container">
        {/* Text Content */}
        <div className="hero-content">
          {/* Mobile-only greeting */}
          <div className="hero-mobile-intro">
            <span className="hero-intro-hi">Hi,</span>
            <span className="hero-intro-iam">I AM</span>
          </div>

          {/* Name Display: DHARUN (Solid) + J (Outlined) with individual letter hover & touch interactions */}
          <h1
            className="hero-name"
            aria-label="Dharun J"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <span className="hero-name-sam" aria-hidden="true">
              {FIRST_NAME_LETTERS.map((char) => (
                <span
                  key={char}
                  className={`hero-letter ${activeLetter === char ? 'is-touch-active' : ''}`}
                  data-letter={char}
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="hero-name-gold" aria-hidden="true">
              <span
                className={`hero-letter ${activeLetter === 'J' ? 'is-touch-active' : ''}`}
                data-letter="J"
              >
                J
              </span>
            </span>
          </h1>

          {/* Role & Tagline */}
          <div className="hero-details">
            <h2 className="hero-role">UI/UX Designer</h2>
            <p className="hero-description">Designing with logic, not just visuals</p>
          </div>
        </div>

        {/* Portrait Image Container */}
        <div className="hero-image-wrapper">
          <img
            src={samPortrait}
            alt="Dharun J - UI/UX Designer"
            className="hero-portrait"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
