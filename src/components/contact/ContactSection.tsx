import React, { useState, useEffect, useCallback } from 'react';
import { CONTACT_LINKS, CONTACT_CONFIG, type ContactActionId } from './contactData';
import arrowSvg from '../../assets/icons/arrow.svg';
import './ContactSection.css';

const WORD1_LETTERS = ['L', 'E', 'T', '’', 'S'];
const WORD2_LETTERS = ['C', 'O', 'N', 'N', 'E', 'C', 'T'];

export const ContactSection: React.FC = () => {
  const [hoveredLinkId, setHoveredLinkId] = useState<ContactActionId | null>(null);
  const [activeLetterIdx, setActiveLetterIdx] = useState<number | null>(null);

  // Helper to extract the letter index under touch point
  const updateTouchLetter = useCallback((touch: React.Touch) => {
    const elem = document.elementFromPoint(touch.clientX, touch.clientY);
    const letterSpan = elem?.closest('.contact-letter') as HTMLElement | null;
    if (letterSpan && letterSpan.dataset.index !== undefined) {
      const idx = Number(letterSpan.dataset.index);
      setActiveLetterIdx((prev) => (prev === idx ? prev : idx));
    } else {
      setActiveLetterIdx(null);
    }
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      updateTouchLetter(e.touches[0]);
    } else {
      setActiveLetterIdx(null);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      updateTouchLetter(e.touches[0]);
    } else {
      setActiveLetterIdx(null);
    }
  };

  const handleTouchEnd = () => {
    setActiveLetterIdx(null);
  };

  // Reset touch active state on scroll, window blur, or tab switch
  useEffect(() => {
    const handleReset = () => setActiveLetterIdx(null);

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
    <section className="contact-section" id="contact" data-cursor-theme="dark" aria-label="Contact">
      {/* Noise Texture Layer using actual noise.png asset */}
      <div className="contact-noise-overlay" aria-hidden="true" />

      <div className="contact-container">
        {/* Main Heading: Hero typography style with individual letter hover interaction */}
        <h2
          className="contact-heading"
          aria-label="Let’s Connect"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <span className="contact-word" aria-hidden="true">
            {WORD1_LETTERS.map((char, index) => (
              <span
                key={index}
                className={`contact-letter ${activeLetterIdx === index ? 'is-touch-active' : ''}`}
                data-index={index}
              >
                {char}
              </span>
            ))}
          </span>
          <span className="contact-word" aria-hidden="true">
            {WORD2_LETTERS.map((char, index) => {
              const overallIndex = WORD1_LETTERS.length + index;
              return (
                <span
                  key={overallIndex}
                  className={`contact-letter ${activeLetterIdx === overallIndex ? 'is-touch-active' : ''}`}
                  data-index={overallIndex}
                >
                  {char}
                </span>
              );
            })}
          </span>
        </h2>

        {/* Supporting Text: MADE Okine Sans Regular 40px desktop */}
        <p className="contact-supporting">
          Open to opportunities. Let’s build something meaningful.
        </p>

        {/* Interactive Contact Actions */}
        <div
          className="contact-links-group"
          role="navigation"
          aria-label="Contact options"
          onMouseLeave={() => setHoveredLinkId(null)}
        >
          {CONTACT_LINKS.map((link) => {
            const isHovered = hoveredLinkId === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                className={`contact-link ${isHovered ? 'is-hovered' : ''}`}
                onMouseEnter={() => setHoveredLinkId(link.id)}
                onMouseLeave={() => setHoveredLinkId(null)}
                onFocus={() => setHoveredLinkId(link.id)}
                onBlur={() => setHoveredLinkId(null)}
                aria-label={link.ariaLabel}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-link-label">{link.label}</span>
                <img
                  src={arrowSvg}
                  alt=""
                  className="contact-link-arrow"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>

        {/* Footer / Copyright */}
        <footer className="contact-copyright">
          © {CONTACT_CONFIG.year} {CONTACT_CONFIG.copyrightOwner}
        </footer>
      </div>
    </section>
  );
};
