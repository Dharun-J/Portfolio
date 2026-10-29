import React from 'react';
import { PROJECT_DETAILS_LIST } from '../../components/work/projectDetailsData';
import { ProjectCard } from '../../components/work/ProjectCard';
import leftRoundIcon from '../../assets/icons/left-round.svg';
import './AllProjectsPage.css';

interface AllProjectsPageProps {
  onBack: () => void;
}

export const AllProjectsPage: React.FC<AllProjectsPageProps> = ({ onBack }) => {
  return (
    <main className="all-projects-page" id="main-content" data-cursor-theme="light" aria-label="All Projects Showcase">
      <div className="all-projects-container">
        {/* Back Button (Button Medium variant with left-round.svg) */}
        <div className="all-projects-back-wrapper">
          <button
            type="button"
            className="all-projects-back-btn"
            onClick={onBack}
            aria-label="Back to main portfolio page"
          >
            <img
              src={leftRoundIcon}
              alt=""
              className="all-projects-back-icon"
              aria-hidden="true"
            />
            <span className="all-projects-back-label">Back</span>
          </button>
        </div>

        {/* Page Heading: "Things I’ve Made" in H1 style with Tertiary color */}
        <header className="all-projects-header">
          <h1 className="all-projects-heading">Things I’ve Made</h1>
        </header>

        {/* Responsive Reusable Projects Grid */}
        <section
          className="all-projects-grid"
          aria-label="All portfolio projects"
        >
          {PROJECT_DETAILS_LIST.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="all-projects-card-item"
            >
              <ProjectCard project={project} source="all-projects" />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};
