import React, { useState } from 'react';
import './AboutTabs.css';
import { ABOUT_TABS_DATA, type AboutTabData } from './aboutData';

interface AboutTabsProps {
  tabs?: AboutTabData[];
  defaultTabId?: string;
}

export const AboutTabs: React.FC<AboutTabsProps> = ({
  tabs = ABOUT_TABS_DATA,
  defaultTabId = 'education'
}) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <div className="about-tabs-container">
      <div className="about-tabs-nav" role="tablist" aria-label="About Me categories">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`about-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`about-tabpanel-${tab.id}`}
              className={`about-tab-btn ${isActive ? 'about-tab-btn-active' : 'about-tab-btn-inactive'}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        className="about-tab-panel"
        id={`about-tabpanel-${activeTab.id}`}
        role="tabpanel"
        aria-labelledby={`about-tab-${activeTab.id}`}
      >
        <div className="about-tab-items">
          {activeTab.items.map((item, index) => (
            <div key={index} className="about-tab-item">
              <span className="about-item-heading">{item.heading}</span>
              <span className="about-item-detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
