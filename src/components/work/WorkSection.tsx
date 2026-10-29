import React from 'react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS, PROJECTS_MAP } from './workData';
import './WorkSection.css';

interface WorkSectionProps {
  onViewMore?: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onViewMore }) => {
  const handleViewMore = () => {
    if (onViewMore) {
      onViewMore();
      return;
    }
    window.location.hash = '#all-projects';
  };

  return (
    <section className="work-section" id="work" data-cursor-theme="light" aria-label="Work and Projects">
      <div className="work-container">
        {/* Mobile / Small Screens: Section Heading above projects */}
        <div className="work-mobile-header">
          <h2 className="work-mobile-heading">Things I’ve Made</h2>
        </div>

        {/* Desktop Bento Grid Composition */}
        <div className="work-bento-grid" aria-label="Projects Bento Showcase">
          {/* Main Left Column Zone (Cols 1 & 2) */}
          <div className="work-bento-main">
            {/* Row 1: Ecommerce wide horizontal card */}
            <div className="work-slot work-slot-ecommerce">
              <ProjectCard project={PROJECTS_MAP.ecommerce} source="home-work" />
            </div>

            {/* Row 2: SoundZone horizontal card + Center Title Tile */}
            <div className="work-bento-row work-bento-row-middle">
              <div className="work-slot work-slot-soundzone">
                <ProjectCard project={PROJECTS_MAP.soundzone} source="home-work" />
              </div>

              {/* Central Non-Interactive Blue Gradient Title Tile */}
              <div
                className="work-slot work-slot-center-title"
                aria-hidden="true"
              >
                <div className="bento-title-tile" data-cursor-theme="blue">
                  <h2 className="bento-title-text">
                    Things<br />I’ve<br />Made
                  </h2>
                </div>
              </div>
            </div>

            {/* Row 3: Medical card + Chat wide horizontal card */}
            <div className="work-bento-row work-bento-row-bottom">
              <div className="work-slot work-slot-medical">
                <ProjectCard project={PROJECTS_MAP.medical} source="home-work" />
              </div>
              <div className="work-slot work-slot-chat">
                <ProjectCard project={PROJECTS_MAP.chat} source="home-work" />
              </div>
            </div>
          </div>

          {/* Side Right Column Zone (Col 3) */}
          <div className="work-bento-side">
            {/* Row 1: Home Manager vertical card */}
            <div className="work-slot work-slot-home-manager">
              <ProjectCard project={PROJECTS_MAP['home-manager']} source="home-work" />
            </div>

            {/* Row 2 & 3: Mathmos tall vertical card */}
            <div className="work-slot work-slot-mathmos">
              <ProjectCard project={PROJECTS_MAP.mathmos} source="home-work" />
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Project List (Rendered in canonical sequence) */}
        <div className="work-mobile-list" aria-label="Projects Mobile List">
          {PROJECTS.map((project) => (
            <div key={project.id} className="work-mobile-card-item">
              <ProjectCard project={project} source="home-work" />
            </div>
          ))}
        </div>

        {/* Centered "View More" Action Button */}
        <div className="work-action-wrapper">
          <button
            type="button"
            className="work-view-more-btn"
            onClick={handleViewMore}
            aria-label="View more projects"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};
