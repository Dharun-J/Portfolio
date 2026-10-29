import React from 'react';

// Hero Showcase Asset
import apprenticeHeroImg from '../../assets/images/projects/apprentice/Apprentice App Hero.png';

// Research & Discovery Assets
import userInterviewImg from '../../assets/images/projects/apprentice/user_interview.png';
import userSurveyResultsImg from '../../assets/images/projects/apprentice/user_survey_results.png';

// Architecture & User Flows Assets
import infoArchImg from '../../assets/images/projects/apprentice/information_architecture.png';
import decisionTreeImg from '../../assets/images/projects/apprentice/decision_tree.png';

// Wireframe Assets
import midFidelityImg from '../../assets/images/projects/apprentice/mid_fidelity.png';

// Final Mobile Interface Screens
import dashboardImg from '../../assets/images/projects/apprentice/Dashboard.png';
import learningPageImg from '../../assets/images/projects/apprentice/Learning Page.png';
import addLearningImg from '../../assets/images/projects/apprentice/Add Learning Page.png';
import editLearningImg from '../../assets/images/projects/apprentice/Edit Learning Page.png';
import deletePageImg from '../../assets/images/projects/apprentice/Delete Page.png';

import './ApprenticeCaseStudy.css';

const FIGJAM_RESEARCH_BOARD_URL =
  'https://www.figma.com/board/WFhiqZRqfPdfJoQJeVgkKx/Apprentice-App-Case-Study?node-id=0-1&t=a3gFd1dVXz3blXKq-1';

export const ApprenticeCaseStudy: React.FC = () => {
  return (
    <div className="apprentice-editorial-case-study">
      {/* ====================================================================
          1. Hero Showcase: Mobile Experience in Context
          Following SoundZone's full website showcase structure
          ==================================================================== */}
      <section
        className="soundzone-showcase-section apprentice-hero-showcase"
        aria-label="Apprentice App Mobile Experience Overview"
      >
        <div className="soundzone-showcase-meta">
          <h2 className="project-details-heading">The Apprentice Learning Experience</h2>
          <p className="project-details-body soundzone-showcase-caption">
            An end-to-end mobile concept designed to help apprentices record daily learning activities, monitor training progress, set milestone goals, and reflect on their professional development through an approachable, structured interface.
          </p>
        </div>

        <figure className="soundzone-full-website-figure apprentice-hero-figure">
          <img
            src={apprenticeHeroImg}
            alt="Apprentice App mobile showcase displaying dashboard metrics, activity logging, and learning progress on smartphone screens"
            className="soundzone-full-website-img apprentice-hero-img"
            loading="eager"
            draggable={false}
          />
        </figure>
      </section>

      {/* ====================================================================
          2. Alternating Editorial Pairs: UX Process and Implementation
          Reusing SoundZone's two-column editorial structure
          ==================================================================== */}
      <div className="soundzone-editorial-pairs" aria-label="Apprentice App Case Study Sections">
        {/* ------------------------------------------------------------------
            Section B: Research & Discovery (Content Left, Media Right)
            ------------------------------------------------------------------ */}
        <section className="soundzone-pair-row" aria-labelledby="apprentice-heading-b">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">A · Research &amp; Discovery</span>
            <h2 id="apprentice-heading-b" className="soundzone-pair-title">
              Understanding the Apprentice Journey
            </h2>
            <div className="soundzone-pair-body">
              <p>
                The discovery process began on a collaborative FigJam canvas to explore how apprentices manage day-to-day training logs, satisfy off-the-job training documentation, and maintain learning momentum throughout their qualifications.
              </p>
              <p>
                Qualitative interview questions and quantitative survey responses highlighted recurring friction: fragmented documentation across disparate notes apps and physical notebooks, difficulty recalling past achievements during portfolio reviews, and a desire for clear visual progress indicators without unnecessary administrative overhead.
              </p>
              <p>
                User insights and behavioural patterns were synthesised into empathy maps and user personas, ensuring every interface decision was grounded in authentic apprentice workflows.
              </p>

              {/* Prominent, Clearly Visible FigJam Research Board Button */}
              <div className="apprentice-figjam-callout">
                <a
                  href={FIGJAM_RESEARCH_BOARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apprentice-figjam-btn"
                  id="explore-figjam-board-btn"
                  aria-label="Explore Research Board on FigJam (opens in new browser tab)"
                >
                  <svg
                    className="apprentice-figjam-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                  <span className="apprentice-figjam-btn-text">Explore Research Board</span>
                  <svg
                    className="apprentice-figjam-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
                <span className="apprentice-figjam-hint">
                  Detailed discovery canvas, empathy maps, and survey data documented in FigJam
                </span>
              </div>
            </div>
          </div>

          <figure className="soundzone-pair-media apprentice-research-media">
            <div className="apprentice-research-grid">
              <div className="apprentice-research-card">
                <span className="apprentice-artifact-tag">Qualitative Research</span>
                <div className="apprentice-artifact-box">
                  <img
                    src={userInterviewImg}
                    alt="User interview questions exploring apprentice learning habits, documentation challenges, and reflection methods"
                    className="apprentice-artifact-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <span className="apprentice-artifact-label">User Interview Guide &amp; Key Inquiries</span>
              </div>

              <div className="apprentice-research-card">
                <span className="apprentice-artifact-tag">Quantitative Insights</span>
                <div className="apprentice-artifact-box">
                  <img
                    src={userSurveyResultsImg}
                    alt="User survey results presenting data charts on documentation frequency and tool preferences"
                    className="apprentice-artifact-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <span className="apprentice-artifact-label">Survey Analytics &amp; Response Distribution</span>
              </div>
            </div>
          </figure>
        </section>

        {/* ------------------------------------------------------------------
            Section C: Information Architecture & User Flows (Image Left, Content Right)
            ------------------------------------------------------------------ */}
        <section className="soundzone-pair-row is-reversed" aria-labelledby="apprentice-heading-c">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">B · Architecture &amp; User Flows</span>
            <h2 id="apprentice-heading-c" className="soundzone-pair-title">
              Organizing Structure &amp; Decision Pathways
            </h2>
            <div className="soundzone-pair-body">
              <p>
                To translate research findings into an actionable product structure, an information architecture was defined around four essential operational pillars: the Home Dashboard, My Learning, Log Activity, and Settings.
              </p>
              <p>
                Decision trees and user flow pathways were mapped to streamline core apprentice journeys. By simplifying branch points—such as quick-logging a brief note versus cataloguing multi-hour project work—the structure reduces cognitive friction so logging takes moments rather than minutes.
              </p>
              <p>
                Critical state transitions, including editing records and confirming deletions, were given unambiguous confirmation steps to safeguard apprentice training data.
              </p>
            </div>
          </div>

          <figure className="soundzone-pair-media apprentice-diagram-media">
            <div className="apprentice-diagrams-stack">
              <div className="apprentice-diagram-card">
                <span className="apprentice-artifact-tag">Information Architecture</span>
                <div className="apprentice-diagram-frame">
                  <img
                    src={infoArchImg}
                    alt="Information architecture hierarchy diagram mapping dashboard, learning lists, logging forms, and settings modules"
                    className="apprentice-diagram-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <span className="apprentice-artifact-label">App Information Hierarchy &amp; Navigation Structure</span>
              </div>

              <div className="apprentice-diagram-card">
                <span className="apprentice-artifact-tag">Decision Logic</span>
                <div className="apprentice-diagram-frame">
                  <img
                    src={decisionTreeImg}
                    alt="Mind map and decision tree outlining user pathways for logging, categorizing, and reviewing learning entries"
                    className="apprentice-diagram-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <span className="apprentice-artifact-label">Decision Pathways &amp; Task Flows</span>
              </div>
            </div>
          </figure>
        </section>

        {/* ------------------------------------------------------------------
            Section D: Wireframes (Content Left, Image Right)
            ------------------------------------------------------------------ */}
        <section className="soundzone-pair-row" aria-labelledby="apprentice-heading-d">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">C · Wireframing &amp; Structure</span>
            <h2 id="apprentice-heading-d" className="soundzone-pair-title">
              Validating Layout and Interaction Rhythm
            </h2>
            <div className="soundzone-pair-body">
              <p>
                Mid-fidelity wireframes established layout proportion, component hierarchy, and content density across primary views—including onboarding, the progress dashboard, the learning directory, and logging forms.
              </p>
              <p>
                Designing in a structured monochrome format allowed interaction patterns, touch ergonomics, and thumb-zone reachability to be evaluated independently of color and branding.
              </p>
              <p>
                Key structural decisions included standardizing form fields for predictable data entry, creating scannable card baselines for learning entries, and positioning primary action buttons within effortless thumb reach.
              </p>
            </div>
          </div>

          <figure className="soundzone-pair-media apprentice-wireframe-media">
            <div className="apprentice-wireframe-card">
              <span className="apprentice-artifact-tag">Mid-Fidelity Wireframes</span>
              <div className="apprentice-wireframe-frame">
                <img
                  src={midFidelityImg}
                  alt="Comprehensive mid-fidelity wireframes showing login, learning list, add learning, edit learning, and settings screen layouts"
                  className="apprentice-wireframe-img"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <span className="apprentice-artifact-label">Layout Hierarchy &amp; Component Arrangement</span>
            </div>
          </figure>
        </section>
      </div>

      {/* ====================================================================
          3. Section E: Final UI Design Showcase
          Prominent visual gallery of the actual mobile screens
          ==================================================================== */}
      <section
        className="apprentice-final-ui-section"
        aria-labelledby="apprentice-ui-title"
      >
        <div className="apprentice-final-ui-header">
          <span className="soundzone-section-tag">D · Final UI Design</span>
          <h2 id="apprentice-ui-title" className="soundzone-pair-title apprentice-gallery-title">
            Core Mobile Interface Screens
          </h2>
          <p className="apprentice-gallery-lead">
            A balanced selection of final mobile screens demonstrating how research and information architecture come together in an approachable, polished interface. Built around generous whitespace, legible typography, and intuitive color coding.
          </p>
        </div>

        <div className="apprentice-screens-grid">
          {/* Screen 1: Dashboard */}
          <div className="apprentice-screen-card">
            <div className="apprentice-phone-frame">
              <img
                src={dashboardImg}
                alt="Apprentice App Dashboard screen showing personalized greeting, lessons counter, goals counter, and 75% weekly progress circle"
                className="apprentice-phone-img"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="apprentice-screen-meta">
              <span className="apprentice-screen-pill">Overview</span>
              <h3 className="apprentice-screen-name">Dashboard</h3>
              <p className="apprentice-screen-desc">
                Presents the apprentice's weekly momentum at a glance with a circular completion meter, quick metrics for completed lessons and goals, and immediate action buttons.
              </p>
            </div>
          </div>

          {/* Screen 2: Learning List */}
          <div className="apprentice-screen-card">
            <div className="apprentice-phone-frame">
              <img
                src={learningPageImg}
                alt="My Learning list view displaying search bar, filter controls, and categorized learning cards with edit and delete triggers"
                className="apprentice-phone-img"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="apprentice-screen-meta">
              <span className="apprentice-screen-pill">Directory</span>
              <h3 className="apprentice-screen-name">My Learning Feed</h3>
              <p className="apprentice-screen-desc">
                Organizes logged activities into uniform, scannable cards with color-coded domain badges (UI/UX, Research, Animation) and inline action buttons for editing and deletion.
              </p>
            </div>
          </div>

          {/* Screen 3: Add Learning Form */}
          <div className="apprentice-screen-card">
            <div className="apprentice-phone-frame">
              <img
                src={addLearningImg}
                alt="Log New Learning form screen featuring title input, date picker, category dropdown, notes area, and save button"
                className="apprentice-phone-img"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="apprentice-screen-meta">
              <span className="apprentice-screen-pill">Logging</span>
              <h3 className="apprentice-screen-name">Log New Learning</h3>
              <p className="apprentice-screen-desc">
                A clean, distraction-free logging form with clear input boundaries for title, date selection, category assignment, and detailed reflective notes.
              </p>
            </div>
          </div>

          {/* Screen 4: Edit Learning Form */}
          <div className="apprentice-screen-card">
            <div className="apprentice-phone-frame">
              <img
                src={editLearningImg}
                alt="Edit Learning form screen with populated title, date, category, reflective notes, and update action"
                className="apprentice-phone-img"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="apprentice-screen-meta">
              <span className="apprentice-screen-pill">Modification</span>
              <h3 className="apprentice-screen-name">Edit Learning Entry</h3>
              <p className="apprentice-screen-desc">
                Enables apprentices to revisit and enrich previous entries with additional insights, updated hours, or supervisor feedback as their learning evolves.
              </p>
            </div>
          </div>

          {/* Screen 5: Delete Confirmation Modal */}
          <div className="apprentice-screen-card">
            <div className="apprentice-phone-frame">
              <img
                src={deletePageImg}
                alt="Delete confirmation modal dialog overlay confirming removal of a learning record while preserving background context"
                className="apprentice-phone-img"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="apprentice-screen-meta">
              <span className="apprentice-screen-pill">Safety</span>
              <h3 className="apprentice-screen-name">Delete</h3>
              <p className="apprentice-screen-desc">
                A focused modal overlay that prevents accidental deletion of valuable training records while keeping the underlying feed visible for contextual awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. Section F: Design Highlights (The Thinking Behind the Visual System)
          Reusing SoundZone's rationale grid format
          ==================================================================== */}
      <section
        className="soundzone-rationale-section apprentice-rationale-section"
        aria-labelledby="apprentice-rationale-title"
      >
        <div className="soundzone-rationale-header">
          <h2 id="apprentice-rationale-title" className="soundzone-rationale-heading">
            The Thinking Behind the Visual System
          </h2>
          <p className="soundzone-rationale-lead">
            A summary of intentional visual and structural decisions made during the design process:
          </p>
        </div>

        <div className="soundzone-rationale-grid">
          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Visual hierarchy and organization</h3>
            <p className="soundzone-rationale-item-body">
              A deliberate typographic hierarchy and generous spacing guide the eye smoothly from high-level weekly summaries down into individual activity cards, ensuring apprentices can check progress or find specific entries without visual clutter.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Colour-coded learning categories</h3>
            <p className="soundzone-rationale-item-body">
              Distinct accent tags distinguish core disciplines—such as UI/UX, Research, and Animation—allowing apprentices to scan their learning history quickly and maintain a balanced mix of training topics.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Progress visualisation</h3>
            <p className="soundzone-rationale-item-body">
              A circular completion percentage indicator paired with clear lesson and goal counters provides immediate positive feedback, motivating consistent documentation habits throughout the apprenticeship.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Consistent form layouts</h3>
            <p className="soundzone-rationale-item-body">
              Standardized input fields, native-feeling date pickers, dropdown selectors, and paired primary (&lsquo;Save&rsquo; / &lsquo;Update&rsquo;) and secondary (&lsquo;Cancel&rsquo;) buttons create a predictable and low-friction logging flow.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Reusable interface patterns</h3>
            <p className="soundzone-rationale-item-body">
              Uniform card geometries, persistent bottom dock navigation, and contextual modal overlays establish intuitive mental models, ensuring the app feels consistent and familiar across all primary screens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
