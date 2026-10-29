import React, { useState, useRef, useEffect } from 'react';
import type { ProjectDetailsItem } from './projectDetailsData';
import './ProjectCard.css';

export type ProjectNavSource = 'home-work' | 'all-projects';

interface ProjectCardProps {
  project: ProjectDetailsItem;
  className?: string;
  style?: React.CSSProperties;
  source?: ProjectNavSource;
  onNavigate?: (project: ProjectDetailsItem, source?: ProjectNavSource) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = '',
  style,
  source = 'home-work',
  onNavigate,
}) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close active overlay on touch when tapping outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };
    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const navigateToProject = () => {
    if (onNavigate) {
      onNavigate(project, source);
    } else {
      const sourceQuery = source ? `?from=${source}` : '';
      window.location.hash = `${project.link}${sourceQuery}`;
    }
  };

  const handleActivation = (e: React.MouseEvent | React.TouchEvent) => {
    // If it's a touch event or coarse pointer (mobile/tablet touch)
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      if (!isActive) {
        e.preventDefault();
        setIsActive(true);
        return;
      }
    }

    navigateToProject();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigateToProject();
    }
  };

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigateToProject();
  };

  return (
    <div
      ref={cardRef}
      className={`project-card ${isActive ? 'is-active' : ''} ${className}`}
      style={style}
      role="button"
      tabIndex={0}
      data-project-id={project.id}
      data-nav-source={source}
      data-cursor-theme="image"
      data-cursor-project="true"
      aria-label={`View project: ${project.name}`}
      onClick={handleActivation}
      onKeyDown={handleKeyDown}
    >
      {/* Underlying Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="project-card-image"
        loading="lazy"
        draggable={false}
      />

      {/* Base 20% Black Overlay (Unifies images and improves contrast) */}
      <div className="project-card-base-overlay" aria-hidden="true" />

      {/* Top-Right Project Type SVG Icon (Layered Above Overlay) */}
      <div className="project-card-type-icon-wrapper" aria-hidden="true">
        <img
          src={project.iconSrc}
          alt=""
          className="project-card-type-icon"
        />
      </div>

      {/* Translucent Dark Overlay with Reveal Information */}
      <div className="project-overlay" aria-hidden={!isActive}>
        <div className="project-overlay-content">
          <div className="project-overlay-text">
            <h3 className="project-card-title">{project.name}</h3>
            <p className="project-card-category">{project.category}</p>
          </div>

          <button
            type="button"
            className="project-action-btn"
            aria-label={`Open ${project.name}`}
            onClick={handleActionClick}
            tabIndex={-1}
          >
            <svg
              className="project-action-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
