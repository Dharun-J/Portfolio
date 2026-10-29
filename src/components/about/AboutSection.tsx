import React from 'react';
import './AboutSection.css';
import { Polaroid } from './Polaroid';
import { AboutCard } from './AboutCard';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about" data-cursor-theme="light" aria-label="About Me">
      <div className="about-container">
        <h2 className="about-heading">A Little About Me</h2>

        <div className="about-content-grid">
          <div className="about-polaroid-col">
            <Polaroid />
          </div>
          <div className="about-card-col">
            <AboutCard />
          </div>
        </div>
      </div>
    </section>
  );
};
