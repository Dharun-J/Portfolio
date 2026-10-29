import React from 'react';
import './AboutCard.css';
import { AboutTabs } from './AboutTabs';

export const AboutCard: React.FC = () => {
  return (
    <article className="about-card">
      <div className="about-card-body">
        <p className="about-paragraph">
          MCA graduate with a background in Computer Science, focused on building clean and functional digital experiences.
        </p>
        <p className="about-paragraph">
          Combining design thinking with logical problem-solving to create practical and user-friendly solutions.
        </p>
        <p className="about-paragraph">
          Open to opportunities in the tech field to learn, contribute, and grow.
        </p>

        <div className="about-card-tabs-wrapper">
          <AboutTabs />
        </div>
      </div>
    </article>
  );
};
