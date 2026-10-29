import React from 'react';
import { Hero } from '../../components/hero/Hero';
import { AboutSection } from '../../components/about/AboutSection';
import { WorkWithSection } from '../../components/workWith/WorkWithSection';
import { WorkSection } from '../../components/work/WorkSection';
import { ContactSection } from '../../components/contact/ContactSection';
import './HomePage.css';

interface HomePageProps {
  onViewMore?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onViewMore }) => {
  return (
    <main className="home-page" id="main-content">
      <Hero />
      <AboutSection />
      <WorkWithSection />
      <WorkSection onViewMore={onViewMore} />
      <ContactSection />
    </main>
  );
};

