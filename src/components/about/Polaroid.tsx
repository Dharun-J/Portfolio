import React, { useState, useEffect, useRef } from 'react';
import './Polaroid.css';
import pinImg from '../../assets/images/Pin.png';
import portraitImg from '../../assets/images/about-portrait.jpg';

interface PolaroidProps {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export const Polaroid: React.FC<PolaroidProps> = ({
  imageSrc = portraitImg,
  imageAlt = 'Portrait photograph',
  className = ''
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsTouched(true);
    } else {
      setIsTouched(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) {
      setIsTouched(false);
      return;
    }
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!target || !containerRef.current?.contains(target)) {
      setIsTouched(false);
    }
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  // Reset touch state on scroll, window blur, or tab switch to avoid sticky hover
  useEffect(() => {
    const handleReset = () => setIsTouched(false);

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
    <div
      ref={containerRef}
      className={`polaroid-container ${isTouched ? 'is-straightened' : ''} ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <img
        src={pinImg}
        alt=""
        aria-hidden="true"
        className="polaroid-pin"
      />
      <div className="polaroid-frame">
        <div className="polaroid-photo-wrapper">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="polaroid-photo"
          />
        </div>
      </div>
    </div>
  );
};
