import React from 'react';
import { WORK_WITH_DATA } from './workWithData';
import { WorkWithCard } from './WorkWithCard';
import './WorkWithSection.css';

export const WorkWithSection: React.FC = () => {
  return (
    <section
      className="work-with-section"
      id="skills"
      data-cursor-theme="dark"
      aria-labelledby="work-with-heading"
    >
      <div className="work-with-container">
        <h2 id="work-with-heading" className="work-with-heading">
          What I Work With
        </h2>
        <div className="work-with-cards-grid" role="region" aria-label="Skills and technologies">
          {WORK_WITH_DATA.map((item) => (
            <WorkWithCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
