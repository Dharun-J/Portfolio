import React, { useState, useEffect, useRef } from 'react';
import type { WorkWithItem } from './workWithData';
import codeSvg from '../../assets/icons/code.svg';
import figmaSvg from '../../assets/icons/figma.svg';
import androidSvg from '../../assets/icons/android.svg';
import './WorkWithCard.css';

interface WorkWithCardProps {
  item: WorkWithItem;
}

const ICON_MAP: Record<WorkWithItem['iconType'], string> = {
  code: codeSvg,
  figma: figmaSvg,
  android: androidSvg,
};

export const WorkWithCard: React.FC<WorkWithCardProps> = ({ item }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const touchStartTimeRef = useRef<number>(0);
  const timeoutRef = useRef<number | null>(null);

  const handleTouchStart = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    touchStartTimeRef.current = Date.now();
    setIsActive(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsActive(false);
      return;
    }
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!target || !cardRef.current?.contains(target)) {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsActive(false);
    }
  };

  const handleTouchEnd = () => {
    const elapsed = Date.now() - touchStartTimeRef.current;
    const remaining = Math.max(0, 300 - elapsed);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsActive(false);
      timeoutRef.current = null;
    }, remaining);
  };

  const handleTouchCancel = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsActive(false);
  };

  // Reset active state when scrolling, window blur, or tab visibility change
  useEffect(() => {
    const handleReset = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsActive(false);
    };

    window.addEventListener('scroll', handleReset, { passive: true });
    window.addEventListener('blur', handleReset);
    document.addEventListener('visibilitychange', handleReset);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('scroll', handleReset);
      window.removeEventListener('blur', handleReset);
      document.removeEventListener('visibilitychange', handleReset);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`work-with-card ${isActive ? 'is-active' : ''}`}
      aria-label={item.title}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div className="work-with-card-icon-container" aria-hidden="true">
        <img
          src={ICON_MAP[item.iconType]}
          alt=""
          className={`work-with-icon work-with-icon-${item.iconType}`}
        />
      </div>
      <h3 className="work-with-card-title">{item.title}</h3>
      <p className="work-with-card-description">{item.description}</p>
    </article>
  );
};
