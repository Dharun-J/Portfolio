import React from 'react';

// Desktop Screenshots
import heroDesktopImg from '../../assets/images/projects/Personal Portfolio/Desktop/Hero_Page.png';
import aboutDesktopImg from '../../assets/images/projects/Personal Portfolio/Desktop/About_Me_Page.png';
import workDesktopImg from '../../assets/images/projects/Personal Portfolio/Desktop/Work_page.png';
import detailsDesktopImg from '../../assets/images/projects/Personal Portfolio/Desktop/Details_Page.png';
import viewMoreDesktopImg from '../../assets/images/projects/Personal Portfolio/Desktop/View_More_Page.png';

// Mobile Screenshots
import workMobileImg from '../../assets/images/projects/Personal Portfolio/Mobile/Mobile_Work.png';

import './PortfolioCaseStudy.css';

export const PortfolioCaseStudy: React.FC = () => {
  return (
    <div className="portfolio-editorial-case-study">
      {/* ====================================================================
          Hero Showcase: Complete Portfolio Desktop Experience
          Following SoundZone & Apprentice showcase structure
          ==================================================================== */}
      <section
        className="soundzone-showcase-section portfolio-hero-showcase"
        aria-label="Personal Portfolio Web Experience Overview"
      >
        <div className="soundzone-showcase-meta">
          <h2 className="project-details-heading">The Complete Portfolio Experience</h2>
          <p className="project-details-body soundzone-showcase-caption">
            A cohesive personal portfolio conceived and designed in Figma, then implemented as a responsive web experience using React, TypeScript, and Vite. Guided by a design-led development workflow with Google Antigravity IDE, the site merges visual storytelling, fluid responsive typography, and subtle micro-interactions to showcase design engineering and frontend capabilities.
          </p>
        </div>

        <figure className="portfolio-hero-figure">
          <img
            src={heroDesktopImg}
            alt="Personal portfolio desktop hero interface featuring greeting headline, introduction copy, social triggers, and dark atmospheric aesthetic"
            className="portfolio-hero-img"
            loading="eager"
            draggable={false}
          />
        </figure>
      </section>

      {/* ====================================================================
          Alternating Editorial Pairs: UX Process, Figma Design & Frontend
          Four Core Case Study Sections (A–D)
          ==================================================================== */}
      <div className="soundzone-editorial-pairs" aria-label="Personal Portfolio Case Study Sections">
        {/* ------------------------------------------------------------------
            Section A: Design Direction & Planning (Content Left, Media Right)
            ------------------------------------------------------------------ */}
        <section className="soundzone-pair-row" aria-labelledby="portfolio-heading-a">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">A · Design Direction &amp; Planning</span>
            <h2 id="portfolio-heading-a" className="soundzone-pair-title">
              Crafting a Cohesive Identity &amp; Visual Hierarchy
            </h2>
            <div className="soundzone-pair-body">
              <p>
                The primary objective was to design a personal portfolio that communicates both creative design sensibility and technical engineering discipline. Rather than relying on generic website patterns, the design language was built around a high-contrast dark aesthetic that directs focus toward project deliverables and visual case studies.
              </p>
              <p>
                A carefully balanced typographic hierarchy pairs crisp headings with legible body copy (Plus Jakarta Sans and Urbanist). Generous spatial breathing room, disciplined border treatments, and an electric blue accent (<code className="portfolio-inline-code">#2A4FF1</code>) establish immediate visual clarity, guiding the visitor seamlessly from high-level personal introductions down into structured work showcases.
              </p>
              <p>
                Content presentation was structured modularly across clear chapters—Hero introduction, About Me narrative, Core Competencies, Selected Works, and Contact channels—creating a logical storytelling progression tailored to hiring managers and collaborators.
              </p>
            </div>
          </div>

          <figure className="soundzone-pair-media portfolio-media-frame">
            <div className="portfolio-single-screen-card">
              <span className="portfolio-screen-tag">Visual Hierarchy &amp; Storytelling</span>
              <div className="portfolio-screen-window">
                <img
                  src={aboutDesktopImg}
                  alt="Portfolio About Me desktop screen showcasing structured personal introduction, career background, and framed portrait photography"
                  className="portfolio-desktop-screen-img"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <span className="portfolio-screen-caption">Desktop About Section: Balanced Personal &amp; Professional Narrative</span>
            </div>
          </figure>
        </section>

        {/* ------------------------------------------------------------------
            Section B: UI Design in Figma (Image Left, Content Right)
            Comparing Desktop Work Section with Mobile Work Section
            ------------------------------------------------------------------ */}
        <section className="soundzone-pair-row is-reversed" aria-labelledby="portfolio-heading-b">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">B · UI Design in Figma</span>
            <h2 id="portfolio-heading-b" className="soundzone-pair-title">
              Form Factor Parity &amp; Layout Adaptation
            </h2>
            <div className="soundzone-pair-body">
              <p>
                Every page and layout pattern was carefully designed in Figma across both desktop and mobile viewports before implementation. Rather than treating mobile as a trimmed-down afterthought, the interface was conceptualized as a singular, adaptive experience that responds naturally to varying screen constraints.
              </p>
              <p>
                Desktop multi-column project cards, navigation bars, and editorial layouts translate into thumb-friendly single-column stacks on mobile. Consistent corner radii, aligned text baselines, and standardized interactive hit areas preserve brand cohesion regardless of viewport width.
              </p>

              {/* Subtle Placeholder Content Disclosure */}
              <div className="portfolio-disclosure-card" role="note" aria-label="Design Content Disclosure">
                <div className="portfolio-disclosure-icon-wrap" aria-hidden="true">
                  <svg className="portfolio-disclosure-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <p className="portfolio-disclosure-text">
                  Placeholder names and imagery are used in parts of the design to demonstrate the visual direction and layout.
                </p>
              </div>
            </div>
          </div>

          <figure className="soundzone-pair-media portfolio-media-frame">
            <div className="portfolio-responsive-duo">
              {/* Desktop Screen View */}
              <div className="portfolio-duo-desktop">
                <span className="portfolio-screen-tag">Desktop Viewport</span>
                <div className="portfolio-screen-window">
                  <img
                    src={workDesktopImg}
                    alt="Desktop Selected Work grid showcasing case study cards, titles, categories, and tags"
                    className="portfolio-desktop-screen-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <span className="portfolio-screen-caption">Desktop Selected Work Grid</span>
              </div>

              {/* Companion Mobile Screen View: Mobile Work section */}
              <div className="portfolio-duo-mobile">
                <span className="portfolio-screen-tag">Mobile Viewport</span>
                <div className="portfolio-phone-mockup">
                  <img
                    src={workMobileImg}
                    alt="Mobile Selected Work layout displaying single-column project cards, category tags, and touch-friendly navigation"
                    className="portfolio-phone-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <span className="portfolio-screen-caption">Mobile Selected Work Layout</span>
              </div>
            </div>
          </figure>
        </section>

        {/* ------------------------------------------------------------------
            Section C: Frontend Implementation & AI-Assisted Coding (Content Left, Media Right)
            ------------------------------------------------------------------ */}
        <section className="soundzone-pair-row" aria-labelledby="portfolio-heading-c">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">C · Frontend Implementation &amp; AI-Assisted Coding</span>
            <h2 id="portfolio-heading-c" className="soundzone-pair-title">
              Translating Figma into Code with Google Antigravity IDE
            </h2>
            <div className="soundzone-pair-body">
              <p>
                The frontend was developed using a modern web stack: React 19, TypeScript, and Vite, styled with custom CSS and CSS variables for lightweight, uncompromised control.
              </p>
              <p>
                Implementation was approached as a collaborative, design-led workflow combining personal design decisions and architectural standards with AI-assisted coding via Google Antigravity IDE. Rather than writing boilerplate manually or generating unvetted code, Antigravity IDE was leveraged to translate Figma spacing tokens and layout geometries into scalable CSS, scaffold modular components, and systematically resolve visual discrepancies.
              </p>
              <p>
                Key technical accomplishments include engineering circular project pagination, managing smooth hash-based route navigation, enforcing strict TypeScript interfaces across all project metadata, and building fluid typography scales using CSS <code className="portfolio-inline-code">clamp()</code> functions that adapt seamlessly across viewports without layout shifts.
              </p>
            </div>
          </div>

          <figure className="soundzone-pair-media portfolio-media-frame">
            <div className="portfolio-single-screen-card">
              <span className="portfolio-screen-tag">Component Architecture &amp; Case Study Framework</span>
              <div className="portfolio-screen-window">
                <img
                  src={detailsDesktopImg}
                  alt="Case study details page layout showcasing modular editorial pair structure, project metadata grid, and typography styling"
                  className="portfolio-desktop-screen-img"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <span className="portfolio-screen-caption">Structured Editorial Framework Implemented in React &amp; TypeScript</span>
            </div>
          </figure>
        </section>
      </div>

      {/* ====================================================================
          Section D: Final Responsive Experience
          Showcasing desktop archive & mobile companion screens, with reflection
          ==================================================================== */}
      <section
        className="portfolio-final-experience-section"
        aria-labelledby="portfolio-experience-title"
      >
        <div className="portfolio-final-header">
          <span className="soundzone-section-tag">D · Final Responsive Experience</span>
          <h2 id="portfolio-experience-title" className="soundzone-pair-title portfolio-experience-title">
            Unified Experience Across Every Screen
          </h2>
          <p className="portfolio-experience-lead">
            A comprehensive look at how desktop and mobile viewports deliver a continuous, engaging user experience. Every interaction, typographic scale, and card proportion was calibrated to ensure seamless navigation whether browsing on a high-resolution desktop monitor or a mobile device.
          </p>
        </div>

        {/* Primary Desktop Feature Visual: View More Project Archive */}
        <div className="portfolio-primary-feature">
          <figure className="portfolio-primary-figure">
            <img
              src={viewMoreDesktopImg}
              alt="Desktop Portfolio Archive page showcasing the comprehensive grid of UI/UX design case studies and development projects"
              className="portfolio-primary-img"
              loading="lazy"
              draggable={false}
            />
          </figure>
          <div className="portfolio-primary-caption">
            <span className="portfolio-screen-pill">Desktop Experience</span>
            <h3 className="portfolio-primary-title">Comprehensive Project Directory &amp; Archive</h3>
            <p className="portfolio-primary-desc">
              Presents the complete collection of design and development projects through a structured 3×3 grid. Each card displays key project thumbnails, domain badges (Figma and Code), and direct entry points into dedicated editorial case studies.
            </p>
          </div>
        </div>

        {/* Design-Engineering Reflection Banner (Live button removed as requested) */}
        <div className="portfolio-reflection-banner">
          <div className="portfolio-reflection-badge">
            <span className="portfolio-screen-pill">Reflection</span>
            <h3 className="portfolio-reflection-title">Bridging Design &amp; Frontend Engineering</h3>
          </div>
          <p className="portfolio-reflection-text">
            Building this portfolio reinforced the value of bridging visual design and frontend implementation. By driving the creative process from initial Figma layouts to production-ready React components, and integrating an AI-assisted coding workflow with Google Antigravity IDE to accelerate iteration and maintain pixel accuracy, the project demonstrates how design leadership and engineering discipline unite to create a cohesive, responsive web presence.
          </p>
        </div>
      </section>

      {/* ====================================================================
          The Thinking Behind the Visual & Technical System (Rationale Grid)
          SoundZone & Apprentice matching rationale format
          ==================================================================== */}
      <section
        className="soundzone-rationale-section portfolio-rationale-section"
        aria-labelledby="portfolio-rationale-title"
      >
        <div className="soundzone-rationale-header">
          <h2 id="portfolio-rationale-title" className="soundzone-rationale-heading">
            The Thinking Behind the Visual System
          </h2>
          <p className="soundzone-rationale-lead">
            A summary of intentional visual, architectural, and development decisions made throughout the project:
          </p>
        </div>

        <div className="soundzone-rationale-grid">
          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Visual Identity &amp; Contrast</h3>
            <p className="soundzone-rationale-item-body">
              Deep dark surfaces (<code className="portfolio-inline-code">#0C0C0E</code>) paired with crisp white typography and vibrant blue accents (<code className="portfolio-inline-code">#2A4FF1</code>) establish a sleek, design-forward aesthetic that allows project imagery and case study content to take center stage.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Design-Led AI Collaboration</h3>
            <p className="soundzone-rationale-item-body">
              Using Google Antigravity IDE as an intelligent pair-programmer accelerated repetitive coding tasks and layout discrepancy checks, while human design direction ensured all typography, spacing, and micro-interactions adhered strictly to the Figma vision.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Component-Driven Architecture</h3>
            <p className="soundzone-rationale-item-body">
              Developing modular React components for project cards, circular navigation, and editorial pairs ensures visual consistency, rapid extensibility for new case studies, and effortless codebase maintenance.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Fluid Responsive Ergonomics</h3>
            <p className="soundzone-rationale-item-body">
              Implementing fluid CSS scales with <code className="portfolio-inline-code">clamp()</code> provides smooth typographic and spacing transitions between screen sizes, while thumb-friendly navigation supports natural mobile interaction.
            </p>
          </div>

          <div className="soundzone-rationale-item">
            <h3 className="soundzone-rationale-item-title">Lightweight CSS Architecture</h3>
            <p className="soundzone-rationale-item-body">
              Relying on modern CSS with structured design tokens rather than bulky utility libraries delivered fast load times, zero styling conflicts, and precise control over layout boundaries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
