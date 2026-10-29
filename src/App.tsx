import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header/Header';
import { HomePage } from './pages/Home/HomePage';
import { AllProjectsPage } from './pages/AllProjects/AllProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetails/ProjectDetailsPage';
import {
  getProjectDetailsById,
  getCircularProjectNavigation,
  type ProjectDetailsItem,
} from './components/work/projectDetailsData';
import { CustomCursor } from './components/common/CustomCursor/CustomCursor';
import './styles/globals.css';

export type ProjectNavSource = 'home-work' | 'all-projects';

interface HashLocationState {
  page: 'home' | 'all-projects' | 'project-details';
  projectId: string;
  source: ProjectNavSource;
}

const parseLocationHash = (hash: string): HashLocationState => {
  const [rawHash, queryString] = (hash || '').split('?');
  const cleanHash = rawHash || '';
  const searchParams = new URLSearchParams(queryString || '');
  const fromParam = searchParams.get('from') || searchParams.get('source');

  let source: ProjectNavSource = 'home-work';
  if (fromParam === 'all-projects') {
    source = 'all-projects';
  } else if (fromParam === 'home-work') {
    source = 'home-work';
  }

  let page: 'home' | 'all-projects' | 'project-details' = 'home';
  let projectId = 'mathmos';

  if (cleanHash === '#all-projects' || cleanHash === '#view-more') {
    page = 'all-projects';
  } else if (
    cleanHash.startsWith('#project-') ||
    cleanHash.startsWith('#work-') ||
    cleanHash === '#project-details'
  ) {
    page = 'project-details';
    const id = cleanHash.replace(/^#(project-|work-)/, '');
    if (id && id !== 'details') {
      projectId = id;
    }
  }

  return { page, projectId, source };
};

export const App: React.FC = () => {
  const initialLocation =
    typeof window !== 'undefined'
      ? parseLocationHash(window.location.hash)
      : { page: 'home' as const, projectId: 'mathmos', source: 'home-work' as const };

  const [currentPage, setCurrentPage] = useState<'home' | 'all-projects' | 'project-details'>(
    initialLocation.page
  );
  const [currentProjectId, setCurrentProjectId] = useState<string>(initialLocation.projectId);
  const [projectNavSource, setProjectNavSource] = useState<ProjectNavSource>(initialLocation.source);
  const [activeNav, setActiveNav] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseLocationHash(window.location.hash);
      setCurrentPage(parsed.page);
      setActiveNav('');

      if (parsed.page === 'project-details') {
        setCurrentProjectId(parsed.projectId);
        setProjectNavSource(parsed.source);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (parsed.page === 'all-projects') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (parsed.page === 'home') {
        // Handled via scroll or section anchors
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic scroll spy for section active indicators on home page
  useEffect(() => {
    if (currentPage !== 'home') {
      setActiveNav('');
      return;
    }

    const sections = ['contact', 'work', 'skills', 'about'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutEl = document.getElementById('about');
      const aboutThreshold = aboutEl ? aboutEl.offsetTop - 150 : 600;

      if (scrollY < aboutThreshold) {
        setActiveNav('');
        return;
      }

      const scrollPosition = scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveNav(sectionId);
          return;
        }
      }
      setActiveNav('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavSelect = (id: string) => {
    if (id === 'home') {
      setActiveNav('');
    } else {
      setActiveNav(id);
    }
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = id === 'home' ? '' : `#${id}`;
      setTimeout(() => {
        if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    if (id === 'about') {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'skills') {
      const el = document.getElementById('skills');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'work') {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToAllProjects = () => {
    setCurrentPage('all-projects');
    window.location.hash = '#all-projects';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToWork = (source?: ProjectNavSource) => {
    const destination = source || projectNavSource;

    if (destination === 'all-projects') {
      setCurrentPage('all-projects');
      window.location.hash = '#all-projects';
      setTimeout(() => {
        const cardEl = document.getElementById(`project-card-${currentProjectId}`);
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, 50);
    } else {
      // Return to main portfolio Work section
      setCurrentPage('home');
      window.location.hash = '#work';
      const scrollToWork = () => {
        const el = document.getElementById('work');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };
      setTimeout(scrollToWork, 50);
      setTimeout(scrollToWork, 150);
    }
  };

  const handleNavigateProject = (targetProject: ProjectDetailsItem) => {
    setCurrentProjectId(targetProject.id);
    const sourceParam = projectNavSource ? `?from=${projectNavSource}` : '';
    window.location.hash = `#project-${targetProject.id}${sourceParam}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const currentProject = getProjectDetailsById(currentProjectId);
  const { previous, next } = getCircularProjectNavigation(currentProject.id);

  return (
    <div
      className={`portfolio-app ${
        currentPage === 'all-projects'
          ? 'page-all-projects'
          : currentPage === 'project-details'
          ? 'page-project-details'
          : 'page-home'
      }`}
    >
      <CustomCursor />
      <Header activeNavId={activeNav} onNavSelect={handleNavSelect} />
      {currentPage === 'project-details' ? (
        <ProjectDetailsPage
          project={currentProject}
          previousProject={previous}
          nextProject={next}
          navSource={projectNavSource}
          onNavigateProject={handleNavigateProject}
          onBackToWork={handleBackToWork}
        />
      ) : currentPage === 'all-projects' ? (
        <AllProjectsPage onBack={() => handleBackToWork('home-work')} />
      ) : (
        <HomePage onViewMore={handleNavigateToAllProjects} />
      )}
    </div>
  );
};

export default App;
