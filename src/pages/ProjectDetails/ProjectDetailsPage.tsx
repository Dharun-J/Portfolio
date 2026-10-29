import React from 'react';
import type { ProjectDetailsItem } from '../../components/work/projectDetailsData';
import leftRoundIcon from '../../assets/icons/left-round.svg';
import rightRoundIcon from '../../assets/icons/right-round.svg';

import fullWebsiteImg from '../../assets/images/projects/soundzone/full-website.png';
import heroSectionImg from '../../assets/images/projects/soundzone/hero-section.png';
import productDiscoveryImg from '../../assets/images/projects/soundzone/product-discovery.png';
import featureStorytellingImg from '../../assets/images/projects/soundzone/feature-storytelling.png';
import whyChooseImg from '../../assets/images/projects/soundzone/why-choose.png';
import brandShowcaseImg from '../../assets/images/projects/soundzone/brand-showcase.png';
import footerSectionImg from '../../assets/images/projects/soundzone/footer-section.png';

import petFullWebsiteImg from '../../assets/images/projects/pet/full-website.png';
import petHeroImg from '../../assets/images/projects/pet/hero-section.png';
import petAllPetsImg from '../../assets/images/projects/pet/all-pets.png';
import petLunaOverlayImg from '../../assets/images/projects/pet/luna-overlay.png';
import petAdoptionProcessImg from '../../assets/images/projects/pet/adoption-process.png';
import petWhyAdoptImg from '../../assets/images/projects/pet/why-adopt.png';
import petHelpFaqImg from '../../assets/images/projects/pet/help-faq.png';

import ecomHeroImg from '../../assets/images/projects/ecommerce/hero.png';
import ecomOnboardingImg from '../../assets/images/projects/ecommerce/onboarding.png';
import ecomRegistrationImg from '../../assets/images/projects/ecommerce/registration.png';
import ecomMembersImg from '../../assets/images/projects/ecommerce/members.png';
import ecomWireframesImg from '../../assets/images/projects/ecommerce/wireframes.png';

import memberJourneyVideo from '../../assets/videos/Member.mp4';
import nonMemberJourneyVideo from '../../assets/videos/NonMember.mp4';

import './ProjectDetailsPage.css';
import { MathmosCaseStudy } from './MathmosCaseStudy';
import { ApprenticeCaseStudy } from './ApprenticeCaseStudy';
import { PortfolioCaseStudy } from './PortfolioCaseStudy';
import { ChatCaseStudy } from './ChatCaseStudy';
import { MedicalCaseStudy } from './MedicalCaseStudy';
import { HomeManagerCaseStudy } from './HomeManagerCaseStudy';

export type ProjectNavSource = 'home-work' | 'all-projects';

interface ProjectDetailsPageProps {
  project: ProjectDetailsItem;
  previousProject: ProjectDetailsItem;
  nextProject: ProjectDetailsItem;
  navSource?: ProjectNavSource;
  onNavigateProject: (project: ProjectDetailsItem) => void;
  onBackToWork: (source?: ProjectNavSource) => void;
}

export const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({
  project,
  previousProject,
  nextProject,
  navSource = 'home-work',
  onNavigateProject,
  onBackToWork,
}) => {
  return (
    <main
      className="project-details-page"
      id="main-content"
      data-cursor-theme="dark"
      aria-label={`Project Case Study: ${project.title}`}
    >
      <div className="project-details-container">
        {/* Circular Top Navigation: Previous Project (left) & Next Project (right) */}
        <nav
          className="project-details-nav"
          aria-label="Project pagination"
        >
          <button
            type="button"
            className="project-nav-btn project-nav-prev"
            onClick={() => onNavigateProject(previousProject)}
            aria-label={`Previous project: ${previousProject.title}`}
          >
            <img
              src={leftRoundIcon}
              alt=""
              className="project-nav-icon project-nav-icon-prev"
              aria-hidden="true"
            />
            <span className="project-nav-label">Previous Project</span>
          </button>

          <button
            type="button"
            className="project-nav-btn project-nav-next"
            onClick={() => onNavigateProject(nextProject)}
            aria-label={`Next project: ${nextProject.title}`}
          >
            <span className="project-nav-label">Next Project</span>
            <img
              src={rightRoundIcon}
              alt=""
              className="project-nav-icon project-nav-icon-next"
              aria-hidden="true"
            />
          </button>
        </nav>

        {/* Project Title: H3 style, Color: White / On Secondary */}
        <header className="project-details-header">
          <h1 className="project-details-title">{project.title}</h1>
          {project.subtitle && (
            <p className="project-details-subtitle">{project.subtitle}</p>
          )}
        </header>

        {/* Summary Section */}
        <section
          className="project-details-summary"
          aria-label="Project Summary"
        >
          <h2 className="project-details-heading">Summary:</h2>
          <p className="project-details-body">{project.summary}</p>
        </section>

        {/* Project Information Metadata Grid */}
        <section
          className="project-details-info"
          aria-label="Project Information"
        >
          <div className="project-info-grid">
            {project.duration ? (
              <div className="project-info-item project-info-item-duration">
                <span className="project-info-label">Duration:</span>
                <span className="project-info-value">{project.duration}</span>
              </div>
            ) : null}
            <div className="project-info-item project-info-item-role">
              <span className="project-info-label">Role:</span>
              <span className="project-info-value">{project.role}</span>
            </div>
            <div className="project-info-item project-info-item-tools">
              <span className="project-info-label">
                {project.id === 'chat' || project.iconType === 'code' ? 'Technologies:' : 'Tools:'}
              </span>
              <span className="project-info-value">{project.tools}</span>
            </div>
            <div className="project-info-item project-info-item-type">
              <span className="project-info-label">Type:</span>
              <span className="project-info-value">{project.type}</span>
            </div>
            {project.focus ? (
              <div className="project-info-item project-info-item-focus">
                <span className="project-info-label">Focus:</span>
                <span className="project-info-value">{project.focus}</span>
              </div>
            ) : null}
          </div>
        </section>

        {/* Main Content Area */}
        {project.id === 'mathmos' ? (
          <MathmosCaseStudy />
        ) : project.id === 'soundzone' ? (
          <div className="soundzone-editorial-case-study">
            {/* Prominent Full-Width Presentation of the Complete Website */}
            <section
              className="soundzone-showcase-section"
              aria-label="Complete SoundZone Website Overview"
            >
              <div className="soundzone-showcase-meta">
                <h2 className="project-details-heading">The Complete Website Experience</h2>
                <p className="project-details-body soundzone-showcase-caption">
                  A full-page view of SoundZone, from its expressive hero and product collection to its feature highlights, brand showcase, testimonials, and footer. This overview shows how the individual sections work together as one cohesive shopping experience.
                </p>
              </div>

              <figure className="soundzone-full-website-figure">
                <img
                  src={fullWebsiteImg}
                  alt="A full-page view of SoundZone, from its expressive hero and product collection to its feature highlights, brand showcase, testimonials, and footer"
                  className="soundzone-full-website-img"
                  loading="eager"
                  draggable={false}
                />
              </figure>
            </section>

            {/* Alternating Two-Column Sections */}
            <div className="soundzone-editorial-pairs" aria-label="Visual Case Study Sections">
              {/* Section A: First Impressions — Typography and Visual Hierarchy (Content Left, Image Right) */}
              <section className="soundzone-pair-row" aria-labelledby="sz-heading-a">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">A · First Impressions</span>
                  <h2 id="sz-heading-a" className="soundzone-pair-title">
                    Typography and Visual Hierarchy
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The hero section uses oversized display typography that blends filled and outlined letterforms behind the featured headphone. Layering the product over the headline creates visual depth and immediately directs attention to the hardware without relying on decorative background elements.
                    </p>
                    <p>
                      A distinct scale contrast separates the expressive display lettering from the compact header navigation, concise value proposition, and paired action buttons. This typographic hierarchy establishes the store's visual identity while keeping navigation and product links easy to locate.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={heroSectionImg}
                    alt="SoundZone hero section featuring oversized layered typography and violet ambient lighting"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section B: Product Discovery — Making the Collection Scannable (Image Left, Content Right) */}
              <section className="soundzone-pair-row is-reversed" aria-labelledby="sz-heading-b">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">B · Product Discovery</span>
                  <h2 id="sz-heading-b" className="soundzone-pair-title">
                    Making the Collection Scannable
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The product discovery section organizes featured headphones into a modular four-card layout. Each card uses a uniform container size and consistent image alignment, placing different headphone silhouettes on a shared visual baseline so listeners can compare models side by side.
                    </p>
                    <p>
                      Within each card, structured hierarchy guides the eye from the centered product image down through the brand and model name, concise descriptive label, and clearly visible price. Paired action buttons for purchasing and viewing details offer direct next steps with consistent styling across every card.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={productDiscoveryImg}
                    alt="Headphone collection section displaying four structured product cards"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section C: Visual Storytelling — Turning Features into Benefits (Content Left, Image Right) */}
              <section className="soundzone-pair-row" aria-labelledby="sz-heading-c">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">C · Visual Storytelling</span>
                  <h2 id="sz-heading-c" className="soundzone-pair-title">
                    Turning Features into Benefits
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The “Hear the Difference” section combines lifestyle imagery within a structured feature layout to provide human context alongside product specifications. Pairing a framed portrait of a listener in use with an adjacent content block breaks the rhythm of repetitive product cards and adds visual variety to the page.
                    </p>
                    <p>
                      Instead of presenting raw technical specifications, the layout translates key highlights into clear listener benefits: studio-grade clarity, active noise cancellation, and all-day comfort. Each benefit is paired with an icon and brief supporting copy, followed by a direct call to action to discover more headphones.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={featureStorytellingImg}
                    alt="Hear the Difference section pairing lifestyle photography with concise audio benefit highlights"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section D: Trust and Service — Supporting Purchase Confidence (Image Left, Content Right) */}
              <section className="soundzone-pair-row is-reversed" aria-labelledby="sz-heading-d">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">D · Trust and Service</span>
                  <h2 id="sz-heading-d" className="soundzone-pair-title">
                    Supporting Purchase Confidence
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The “Why Choose SoundZone” section introduces three illustrated service cards to address common purchase concerns within an e-commerce concept. Each card highlights a distinct concept message—authenticity verification, shipping and return terms, and specialist audio guidance.
                    </p>
                    <p>
                      Custom illustrations distinguish each message at a glance, giving each card an individual focal point while shared border styling, dark card backgrounds, and structured text alignment maintain visual unity with the rest of the store interface.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={whyChooseImg}
                    alt="Why Choose SoundZone section highlighting authentic brands, fast delivery, and expert audio support"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section E: Brand Identity — Creating a Cohesive Experience (Content Left, Image Right) */}
              <section className="soundzone-pair-row" aria-labelledby="sz-heading-e">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">E · Brand Identity</span>
                  <h2 id="sz-heading-e" className="soundzone-pair-title">
                    Creating a Cohesive Experience
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The brand showcase features prominent audio manufacturer logos—including JBL, Sennheiser, Sony, Bowers &amp; Wilkins, Apple, and Bose—to reinforce the store's curated product catalogue.
                    </p>
                    <p>
                      To maintain a clean visual aesthetic, partner marks are rendered as monochrome white vector logos on the dark background. Symmetrical grid spacing and optical sizing balance logos with varying proportions, presenting recognized brands with consistent visual weight.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={brandShowcaseImg}
                    alt="Brands We Bring to You showcase featuring monochrome partner audio brands"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section F: A Clear and Structured Finish (Image Left, Content Right) */}
              <section className="soundzone-pair-row is-reversed" aria-labelledby="sz-heading-f">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">F · Page Closure</span>
                  <h2 id="sz-heading-f" className="soundzone-pair-title">
                    A Clear and Structured Finish
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The page concludes with a structured footer designed to provide clear navigation and essential support resources at the end of the customer journey. Grouped columns organize quick links, customer service channels, and warranty details into easily scannable lists.
                    </p>
                    <p>
                      Alongside navigation, social platform links and the SoundZone brand signature—complete with logo and brand tagline—anchor the base of the page. This clear layout establishes an orderly close to the storefront without distracting from the primary browsing path above.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={footerSectionImg}
                    alt="SoundZone footer section displaying navigation links, customer support resources, and brand social channels"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>
            </div>

            {/* Design Rationale: The Thinking Behind the Visual System */}
            <section
              className="soundzone-rationale-section"
              aria-labelledby="sz-rationale-title"
            >
              <div className="soundzone-rationale-header">
                <h2 id="sz-rationale-title" className="soundzone-rationale-heading">
                  The Thinking Behind the Visual System
                </h2>
                <p className="soundzone-rationale-lead">
                  A summary of intentional visual and structural decisions made during the design process:
                </p>
              </div>

              <div className="soundzone-rationale-grid">
                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Typography and hierarchy</h3>
                  <p className="soundzone-rationale-item-body">
                    Pairing large solid and outlined display lettering in the hero with clean sans-serif typography throughout ensures strong brand character without sacrificing legibility across navigation, body text, and pricing.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Colour and contrast</h3>
                  <p className="soundzone-rationale-item-body">
                    A dark palette transitioning from deep purple tones to charcoal black establishes an immersive backdrop, allowing high-contrast white text, subtle violet borders, and product visuals to remain prominently visible.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Product scanability</h3>
                  <p className="soundzone-rationale-item-body">
                    Standardized card proportions, aligned product baselines, and consistent placement for titles, prices, and dual action buttons enable effortless comparison across multiple models.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Imagery and context</h3>
                  <p className="soundzone-rationale-item-body">
                    Combining isolated product cutouts with contextual lifestyle photography balances close-up hardware evaluation with relatable imagery of audio equipment in everyday use.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Layout rhythm and consistency</h3>
                  <p className="soundzone-rationale-item-body">
                    Alternating between full-width showcases, multi-column card grids, and two-column editorial sections creates visual momentum down the page while unified corner radii and spacing maintain continuity.
                  </p>
                </div>
              </div>
            </section>
          </div>
        ) : project.id === 'project-07' || project.id === 'pet-adoption' || project.id === 'pet' ? (
          <div className="pet-editorial-case-study">
            {/* Prominent Full-Width Presentation of the Complete Website */}
            <section
              className="soundzone-showcase-section"
              aria-label="Complete Pet Adoption Website Overview"
            >
              <div className="soundzone-showcase-meta">
                <h2 className="project-details-heading">The Complete Website Experience</h2>
                <p className="project-details-body soundzone-showcase-caption">
                  A full-page overview of the Pet Adoption Centre website concept, showing how landing introductions, animal discovery, step-by-step guidance, trust elements, and support channels come together into one welcoming, transparent adoption journey.
                </p>
              </div>

              <figure className="soundzone-full-website-figure">
                <img
                  src={petFullWebsiteImg}
                  alt="A full-page view of the Pet Adoption Centre website concept showing hero, pet cards, adoption process, testimonials, trust points, and help resources"
                  className="soundzone-full-website-img"
                  loading="eager"
                  draggable={false}
                />
              </figure>
            </section>

            {/* Alternating Two-Column Sections */}
            <div className="soundzone-editorial-pairs" aria-label="Visual Case Study Sections">
              {/* Section A: Visual Identity and Hierarchy (Content Left, Image Right) */}
              <section className="soundzone-pair-row" aria-labelledby="pet-heading-a">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">A · Visual Identity</span>
                  <h2 id="pet-heading-a" className="soundzone-pair-title">
                    Warmth, Clarity and Approachability
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The landing page introduces a warm, approachable atmosphere designed to make prospective adopters feel comfortable from their first interaction. Rounded display typography gives headlines an inviting, friendly character, while candid animal photography grounds the design in warmth and personality.
                    </p>
                    <p>
                      A dark blue-grey font provides a softer visual contrast than pure black, preserving readability against crisp white surfaces. Calm forest green anchors primary interactive elements—such as “View Pets” and key navigation links—while warm orange accents highlight pet badges and callouts, establishing a predictable hierarchy across the interface.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={petHeroImg}
                    alt="Pet Adoption Centre landing page hero section featuring rounded display typography, green action buttons, and a welcoming dog portrait"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section B: Pet Discovery (Image Left, Content Right) */}
              <section className="soundzone-pair-row is-reversed" aria-labelledby="pet-heading-b">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">B · Pet Discovery</span>
                  <h2 id="pet-heading-b" className="soundzone-pair-title">
                    Making Pet Discovery Effortless
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The All Pets collection organizes available animals into a structured, image-led card grid where individual animal portraits take center stage. Standardized card geometry, consistent photo framing, and aligned name, age, and breed labels establish a predictable browsing rhythm across multiple animal types.
                    </p>
                    <p>
                      Category filter chips—such as Friendly, Young, Vaccinated, and Trained—along with a dedicated sorting control allow visitors to quickly narrow the selection to fit their household. Prominent “View Details” action buttons on every card provide an unambiguous next step for exploring each animal's personality.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media pet-pair-media-tall">
                  <img
                    src={petAllPetsImg}
                    alt="All Pets page displaying a structured collection of animal cards with filter tags and sorting controls"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section C: Pet Details Interaction (Content Left, Image Right) */}
              <section className="soundzone-pair-row" aria-labelledby="pet-heading-c">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">C · Pet Details Interaction</span>
                  <h2 id="pet-heading-c" className="soundzone-pair-title">
                    More Information Without Losing Context
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      When visitors select a pet card, the interface displays an expanded modal profile overlay rather than navigating to a separate page. This focused presentation allows people to explore comprehensive details—including a high-resolution close-up portrait, age, breed, and personality traits—without losing their browsing position in the collection.
                    </p>
                    <p>
                      A descriptive narrative outlines the animal's temperament, favorite habits, and ideal home environment. A visible close control in the top-right corner ensures visitors can effortlessly dismiss the profile and continue exploring other animals.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media pet-pair-media-portrait">
                  <img
                    src={petLunaOverlayImg}
                    alt="Focused pet profile modal overlay showing close-up cat photography, age, breed, personality tags, and descriptive bio"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section D: Illustration and Adoption Guidance (Image Left, Content Right) */}
              <section className="soundzone-pair-row is-reversed" aria-labelledby="pet-heading-d">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">D · Adoption Guidance</span>
                  <h2 id="pet-heading-d" className="soundzone-pair-title">
                    Turning the Adoption Journey into a Visual Story
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The “How Adoption Works?” section breaks down the adoption journey into three clear, sequential stages: choosing a pet, visiting the shelter, and completing the adoption. Illustrative artwork gives each phase an identifiable visual anchor that reinforces the friendly, supportive personality of the centre.
                    </p>
                    <p>
                      A gentle palette of soft green, warm yellow, and light blue tones establishes a welcoming visual language across all three steps. Concise numbered headings and brief descriptions outline what to expect at each stage, making the adoption path straightforward and transparent at a glance.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={petAdoptionProcessImg}
                    alt="Three-step illustrated adoption process explaining choosing a pet, visiting the shelter, and completing adoption"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section E: Trust and Reassurance (Content Left, Image Right) */}
              <section className="soundzone-pair-row" aria-labelledby="pet-heading-e">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">E · Trust and Reassurance</span>
                  <h2 id="pet-heading-e" className="soundzone-pair-title">
                    Building Confidence Beyond the First Impression
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The “Why Adopt From Us?” section pairs real adopter stories with practical trust assurances to build confidence when considering pet adoption. Three testimonial cards feature authentic photos of adopters with their rescued pets alongside first-hand reflections on health transparency and shelter support.
                    </p>
                    <p>
                      Below the stories, a structured checklist highlights essential trust points—including verified veterinary medical records, accurate personality profiles, experienced shelter staff, and ongoing post-adoption support. Paired with arch-framed portraits of different animal species, this layout addresses common adopter questions in a clear, scannable format.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={petWhyAdoptImg}
                    alt="Why Adopt From Us section pairing real adopter testimonials with a verified trust points checklist and species portraits"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section F: Responsive Design & Support Resources (Image Left, Content Right) */}
              <section className="soundzone-pair-row is-reversed" aria-labelledby="pet-heading-f">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">F · Responsive Design &amp; Support</span>
                  <h2 id="pet-heading-f" className="soundzone-pair-title">
                    One Experience Across Different Screens
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The website layout adapts systematically across viewport widths to preserve visual hierarchy and legibility. On desktop, structured multi-column grids allow visitors to browse pet listings, adopter testimonials, and support cards efficiently. On narrower screens, the layout transitions to a balanced single-column flow where cards, action buttons, and touch targets maintain generous spacing without horizontal crowding.
                    </p>
                    <p>
                      This responsive discipline extends directly into support resources and site closure. The “Need Help With Adoption?” section stacks its Getting Started, Security, and Account Settings cards cleanly above an expandable FAQ accordion, ensuring visitors can troubleshoot common questions or review documentation without navigating away. Together with structured footer columns, the interface delivers a consistent, reassuring experience across devices.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={petHelpFaqImg}
                    alt="Need Help With Adoption section showing support topic cards and an expandable FAQ accordion addressing common questions"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>
            </div>

            {/* Design Rationale: The Thinking Behind the Visual System */}
            <section
              className="soundzone-rationale-section"
              aria-labelledby="pet-rationale-title"
            >
              <div className="soundzone-rationale-header">
                <h2 id="pet-rationale-title" className="soundzone-rationale-heading">
                  The Thinking Behind the Visual System
                </h2>
                <p className="soundzone-rationale-lead">
                  A summary of intentional visual and structural decisions made during the design process:
                </p>
              </div>

              <div className="soundzone-rationale-grid">
                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Typography and hierarchy</h3>
                  <p className="soundzone-rationale-item-body">
                    Rounded display lettering introduces a gentle, welcoming personality in headings, while neutral sans-serif typography ensures effortless scanning across pet details, descriptive badges, and key animal traits.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Colour and contrast</h3>
                  <p className="soundzone-rationale-item-body">
                    A clean white background paired with dark blue-grey text softens the visual tone while preserving readability. Nature-inspired green accents guide primary interactive actions, complemented by warm orange badges for key animal attributes.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Pet discovery and scanability</h3>
                  <p className="soundzone-rationale-item-body">
                    Uniform card bounding boxes, aligned photography baselines, and standardized metadata structures enable visitors to compare multiple animals side by side without visual friction.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Imagery and context</h3>
                  <p className="soundzone-rationale-item-body">
                    Expressive candid animal portraits provide emotional resonance, while the focused modal overlay allows in-depth review of an animal's personality and habits without disrupting the user's place in the collection.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Layout rhythm and consistency</h3>
                  <p className="soundzone-rationale-item-body">
                    Alternating between image-led pet cards, three-stage illustrated walkthroughs, adopter testimonials, and structured FAQ accordions sustains visual interest while maintaining consistent corner radii and spacing tokens.
                  </p>
                </div>
              </div>
            </section>
          </div>
        ) : project.id === 'ecommerce' || project.id === 'ecommerce-mobile-app' || project.id === 'ecommerce-app' ? (
          <div className="ecommerce-editorial-case-study">
            {/* Prominent Showcase of the Mobile Experience Hero */}
            <section
              className="soundzone-showcase-section"
              aria-label="E-Commerce Mobile App Overview"
            >
              <div className="soundzone-showcase-meta">
                <h2 className="project-details-heading">The Personalized Mobile Shopping Experience</h2>
                <p className="project-details-body soundzone-showcase-caption">
                  An overview of the Habitual e-commerce concept, bringing together custom onboarding, tailored product discovery, dynamic member profiles, and streamlined checkout into an intuitive mobile interface.
                </p>
              </div>

              <figure className="soundzone-full-website-figure ecom-hero-figure">
                <img
                  src={ecomHeroImg}
                  alt="3D isometric mobile mockup presenting multiple app screens alongside floating lifestyle products"
                  className="soundzone-full-website-img"
                  loading="eager"
                  draggable={false}
                />
              </figure>
            </section>

            {/* Alternating Two-Column Sections */}
            <div className="soundzone-editorial-pairs" aria-label="Visual Case Study Sections">
              {/* Section A: Onboarding & First Impressions (Content Left, Image Right) */}
              <section className="soundzone-pair-row" aria-labelledby="ecom-heading-a">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">A · Onboarding &amp; Discovery</span>
                  <h2 id="ecom-heading-a" className="soundzone-pair-title">
                    Guiding First-Time Shoppers
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The four-screen onboarding sequence welcomes first-time visitors by introducing Habitual as “the world's largest you store.” Rather than dropping users directly into an overwhelming catalog, the initial screen establishes a customer-first tone with immediate entry points for new and existing accounts.
                    </p>
                    <p>
                      Subsequent screens tackle common e-commerce frustrations, explaining how habit-based suggestions eliminate irrelevant search results while highlighting professional product curation and complimentary concierge delivery. Visible “Skip” and “Next” controls give shoppers autonomy throughout their first interaction.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={ecomOnboardingImg}
                    alt="Four mobile onboarding screens explaining customer-centric value, curated feeds, and concierge delivery"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section B: Personalization & Account Setup (Image Left, Content Right) */}
              <section className="soundzone-pair-row is-reversed" aria-labelledby="ecom-heading-b">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">B · Personalization &amp; Setup</span>
                  <h2 id="ecom-heading-b" className="soundzone-pair-title">
                    Tailoring the Feed to User Interests
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The registration process actively shapes each user's shopping experience before they begin browsing. After uploading a profile photo and selecting primary shopping goals, users choose interactive interest cards across categories such as Reading, Music, Fashion, and Gaming.
                    </p>
                    <p>
                      A secondary “Let's dig deeper!” step allows shoppers to refine their selections with granular sub-category checkboxes (such as Vinyl, Hip Hop, or Instruments). A celebratory confirmation screen confirms that personalized recommendations are ready, creating positive momentum into the store.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={ecomRegistrationImg}
                    alt="Five-step registration and interest selection flow gathering shopper preferences"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section C: Member Experience & Core Screens (Content Left, Image Right) */}
              <section className="soundzone-pair-row" aria-labelledby="ecom-heading-c">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">C · Member Experience</span>
                  <h2 id="ecom-heading-c" className="soundzone-pair-title">
                    Personalized Feeds, Wishlists, and Order Tracking
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      For authenticated members, the home screen prioritizes a horizontal “Just for you” card carousel alongside curated deals and category filter tabs. Consistent card geometry, soft pastel product cards, and visible ratings allow shoppers to browse items with minimal visual friction.
                    </p>
                    <p>
                      The member profile combines account settings with active order tracking, displaying a live delivery route map alongside user interest badges. In the wishlist view, saved items are organized into distinct lists (Personal and Work Items) with direct “Add to cart” triggers, shortening the path from interest to purchase.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={ecomMembersImg}
                    alt="Four core member screens showing personalized recommendations, profile with live order map, and segmented wishlists"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>

              {/* Section D: Information Architecture & Wireframing (Image Left, Content Right) */}
              <section className="soundzone-pair-row is-reversed" aria-labelledby="ecom-heading-d">
                <div className="soundzone-pair-content">
                  <span className="soundzone-section-tag">D · Wireframing &amp; Structure</span>
                  <h2 id="ecom-heading-d" className="soundzone-pair-title">
                    High-Fidelity Wireframes and Content Hierarchy
                  </h2>
                  <div className="soundzone-pair-body">
                    <p>
                      The high-fidelity wireframes established layout proportion, component spacing, and content hierarchy across the primary views: Home, My Wishlist, Profile, and My Cart. Designing these views in monochrome allowed structural decisions to be evaluated independently of color and branding.
                    </p>
                    <p>
                      Key structural priorities included keeping search and primary filters within comfortable thumb reach, creating consistent bounding boxes for multi-attribute products, and providing an orderly checkout summary with transparent delivery fees and prominent action buttons.
                    </p>
                  </div>
                </div>
                <figure className="soundzone-pair-media">
                  <img
                    src={ecomWireframesImg}
                    alt="High-fidelity monochrome wireframes outlining layout structure for Home, Wishlist, Profile, and Cart"
                    className="soundzone-pair-img"
                    loading="eager"
                    draggable={false}
                  />
                </figure>
              </section>
            </div>

            {/* Section E: User Journey Walkthroughs (Dedicated Video Section) */}
            <section
              className="ecom-journeys-section"
              aria-labelledby="ecom-journeys-title"
            >
              <div className="ecom-journeys-header">
                <span className="soundzone-section-tag">E · Prototype Walkthroughs</span>
                <h2 id="ecom-journeys-title" className="soundzone-pair-title">
                  User Journey
                </h2>
                <p className="ecom-journeys-lead">
                  Interactive video walkthroughs capturing the end-to-end shopping experience across both returning member and first-time guest flows.
                </p>
              </div>

              <div className="ecom-videos-grid">
                {/* Member Journey Video */}
                <div className="ecom-video-card">
                  <div className="ecom-video-meta">
                    <span className="ecom-video-pill">Authenticated Flow</span>
                    <h3 className="ecom-video-title">Member Journey</h3>
                    <p className="ecom-video-desc">
                      Demonstrates the authenticated member flow—exploring personalized recommendations, tracking an active order on the live map, managing categorized wishlists, and proceeding through checkout.
                    </p>
                  </div>
                  <figure className="ecom-video-wrapper">
                    <video
                      className="ecom-video-player"
                      controls
                      playsInline
                      preload="metadata"
                      aria-label="Member Journey interactive prototype video"
                    >
                      <source src={memberJourneyVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </figure>
                </div>

                {/* Non-Member Journey Video */}
                <div className="ecom-video-card">
                  <div className="ecom-video-meta">
                    <span className="ecom-video-pill">Guest Flow</span>
                    <h3 className="ecom-video-title">Non-Member Journey</h3>
                    <p className="ecom-video-desc">
                      Illustrates the guest visitor flow—browsing general trending collections without an account, encountering contextual prompts on empty wishlists, and progressing into guided registration.
                    </p>
                  </div>
                  <figure className="ecom-video-wrapper">
                    <video
                      className="ecom-video-player"
                      controls
                      playsInline
                      preload="metadata"
                      aria-label="Non-Member Journey interactive prototype video"
                    >
                      <source src={nonMemberJourneyVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </figure>
                </div>
              </div>
            </section>

            {/* Design Rationale: The Thinking Behind the Mobile Experience */}
            <section
              className="soundzone-rationale-section"
              aria-labelledby="ecom-rationale-title"
            >
              <div className="soundzone-rationale-header">
                <h2 id="ecom-rationale-title" className="soundzone-rationale-heading">
                  The Thinking Behind the Mobile Experience
                </h2>
                <p className="soundzone-rationale-lead">
                  A summary of intentional visual and structural decisions made during the design process:
                </p>
              </div>

              <div className="soundzone-rationale-grid">
                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Interest-led personalization</h3>
                  <p className="soundzone-rationale-item-body">
                    Gathering shopper preferences during onboarding ensures the home feed serves curated recommendations immediately, addressing search fatigue from the first session.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Dual-journey architecture</h3>
                  <p className="soundzone-rationale-item-body">
                    Clearly separating member and non-member flows allows first-time guests to explore trending collections freely while offering authenticated members persistent wishlists and live order tracking.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Scannable card hierarchy</h3>
                  <p className="soundzone-rationale-item-body">
                    Consistent image framing, pastel accent backgrounds, aligned price labels, and prominent primary action buttons help shoppers evaluate products side by side effortlessly.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Contextual empty states</h3>
                  <p className="soundzone-rationale-item-body">
                    Informative empty states—such as illustration-supported prompts to add interests or start a wishlist—convert inactive screens into engaging invitations to interact.
                  </p>
                </div>

                <div className="soundzone-rationale-item">
                  <h3 className="soundzone-rationale-item-title">Thumb-friendly mobile ergonomics</h3>
                  <p className="soundzone-rationale-item-body">
                    Placing bottom navigation, horizontal filter chips, and primary checkout buttons within comfortable thumb zones supports natural single-handed mobile use.
                  </p>
                </div>
              </div>
            </section>
          </div>
        ) : project.id === 'project-08' || project.id === 'apprentice' || project.id === 'apprentice-app' ? (
          <ApprenticeCaseStudy />
        ) : project.id === 'project-09' || project.id === 'portfolio' || project.id === 'personal-portfolio' || project.id === 'personal-portfolio-website' ? (
          <PortfolioCaseStudy />
        ) : project.id === 'chat' || project.id === 'chat-app' || project.id === 'chat-application' || project.id === 'chat-web-application' ? (
          <ChatCaseStudy />
        ) : project.id === 'medical' || project.id === 'medical-lab-system' || project.id === 'medical-lab-booking-system' || project.id === 'medical-management' ? (
          <MedicalCaseStudy />
        ) : project.id === 'home-manager' || project.id === 'home_manager' || project.id === 'home-manager-app' ? (
          <HomeManagerCaseStudy />
        ) : (
          <>
            {/* Reusable Project Presentation Area */}
            <figure
              className={`project-details-image-area is-${project.imageOrientation || 'landscape'}`}
              style={{
                maxWidth: project.imageMaxWidth ? `${project.imageMaxWidth}px` : undefined,
              }}
            >
              <img
                src={project.mainImage || project.image}
                alt={project.title}
                className="project-details-img"
                style={{
                  maxHeight: project.imageMaxHeight ? `${project.imageMaxHeight}px` : undefined,
                }}
                loading="eager"
                draggable={false}
              />
            </figure>

            {/* Impact Section */}
            <section
              className="project-details-impact"
              aria-label="Project Impact"
            >
              <h2 className="project-details-heading">Impact:</h2>
              <p className="project-details-body">{project.impact}</p>
            </section>
          </>
        )}

        {/* Back To My Work Button (Reuses View More Button Variant Styling) */}
        <div className="project-details-action">
          <button
            type="button"
            className="work-view-more-btn project-details-back-btn"
            onClick={() => onBackToWork(navSource)}
            aria-label="Back to my work"
          >
            Back To My Work
          </button>
        </div>

        {/* Footer / Copyright */}
        <footer className="project-details-copyright">
          © 2026 Dharun J
        </footer>
      </div>
    </main>
  );
};
