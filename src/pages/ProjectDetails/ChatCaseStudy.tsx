import React, { useState, useRef, useEffect } from 'react';

// Project Screenshots
import chatHeroImg from '../../assets/images/projects/chat/Chat_hero.png';
import registerImg from '../../assets/images/projects/chat/Register.png';
import loginImg from '../../assets/images/projects/chat/Login.png';
import startImg from '../../assets/images/projects/chat/Start.png';
import chatImg from '../../assets/images/projects/chat/Chat.png';
import logoutImg from '../../assets/images/projects/chat/Logout.png';

import './ChatCaseStudy.css';

interface FlowStep {
  step: number;
  title: string;
  shortTitle: string;
  route: string;
  image: string;
  alt: string;
  badge: string;
  description: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    step: 1,
    title: 'User Registration',
    shortTitle: 'Registration',
    route: '127.0.0.1:8000/register/',
    image: registerImg,
    alt: 'Chat App registration screen displaying user account creation form and input validation',
    badge: 'Step 1 of 5 · User Registration',
    description:
      'New users register through a structured account creation form collecting username, personal details, and password confirmation with form validation.',
  },
  {
    step: 2,
    title: 'Account Authentication',
    shortTitle: 'Login',
    route: '127.0.0.1:8000/login/',
    image: loginImg,
    alt: 'Chat App login screen with username and password inputs and navigation to register',
    badge: 'Step 2 of 5 · Authentication',
    description:
      'Registered users authenticate with their username and password via a focused login card to start an active session and access protected application views.',
  },
  {
    step: 3,
    title: 'User Directory',
    shortTitle: 'Directory',
    route: '127.0.0.1:8000/',
    image: startImg,
    alt: 'Chat App home screen displaying registered user directory in the sidebar and the start chat prompt',
    badge: 'Step 3 of 5 · User Directory',
    description:
      'Authenticated users access the main messaging view featuring a sidebar directory of available users queried from the database and an invitation to select a contact.',
  },
  {
    step: 4,
    title: 'Active Conversation Interface',
    shortTitle: 'Messaging',
    route: '127.0.0.1:8000/home/?u=8',
    image: chatImg,
    alt: 'Chat App active conversation view showing contact selection, message bubbles with timestamps, and message composer',
    badge: 'Step 4 of 5 · One-to-One Messaging',
    description:
      'Selecting a user opens an individual conversation displaying message history, timestamps, message composition, and periodic AJAX updates approximately every 2.5 seconds.',
  },
  {
    step: 5,
    title: 'Session Logout',
    shortTitle: 'Logout',
    route: '127.0.0.1:8000/logout/',
    image: logoutImg,
    alt: 'Chat App logout confirmation screen confirming session termination',
    badge: 'Step 5 of 5 · Session Termination',
    description:
      'Clicking logout in the navigation bar terminates the active user session and redirects to a logout confirmation screen with an option to log in again.',
  },
];

export const ChatCaseStudy: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const stepperNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = stepperNavRef.current;
    if (!container) return;
    const activeBtn = container.querySelector('.is-active') as HTMLElement | null;
    if (!activeBtn) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();

    if (btnRect.left < containerRect.left) {
      container.scrollBy({ left: btnRect.left - containerRect.left - 12, behavior: 'smooth' });
    } else if (btnRect.right > containerRect.right) {
      container.scrollBy({ left: btnRect.right - containerRect.right + 12, behavior: 'smooth' });
    }
  }, [activeStep]);

  const currentFlowStep =
    FLOW_STEPS.find((s) => s.step === activeStep) || FLOW_STEPS[0];

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev > 1 ? prev - 1 : FLOW_STEPS.length));
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev < FLOW_STEPS.length ? prev + 1 : 1));
  };

  return (
    <div className="chat-editorial-case-study">
      {/* ====================================================================
          Section 1: Hero Showcase
          ==================================================================== */}
      <section
        className="soundzone-showcase-section chat-hero-showcase"
        aria-label="Chat App Project Overview"
      >
        <div className="soundzone-showcase-meta">
          <h2 className="project-details-heading">Real-Time-Style Messaging with Django</h2>
          <p className="project-details-body soundzone-showcase-caption">
            A browser-based messaging platform developed with Django on the backend and HTML, CSS, JavaScript, and jQuery on the frontend, enabling registered users to communicate through individual conversations with periodic AJAX message updates.
          </p>
        </div>

        <figure className="chat-hero-figure">
          <img
            src={chatHeroImg}
            alt="Chat App desktop isometric preview displaying the messaging interface alongside registration, login, and logout views"
            className="chat-hero-img"
            loading="eager"
            draggable={false}
          />
        </figure>
      </section>

      {/* ====================================================================
          Section 2: Project Overview & Section 3: Problem Statement
          (Alternating Editorial Pair Rows)
          ==================================================================== */}
      <div className="soundzone-editorial-pairs" aria-label="Chat App Case Study Sections">
        {/* Section 2: Project Overview */}
        <section className="soundzone-pair-row" aria-labelledby="chat-heading-overview">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">A · Project Overview</span>
            <h2 id="chat-heading-overview" className="soundzone-pair-title">
              Browser-Based Messaging with Django &amp; AJAX Updates
            </h2>
            <div className="soundzone-pair-body">
              <p>
                The Chat App is a Django-based web application that enables registered users to communicate through individual conversations. It combines user authentication, a user directory, message sending, conversation history, and periodic message updates within a simple browser-based messaging interface.
              </p>
              <p>
                Built with Django on the backend and HTML, CSS, JavaScript, and jQuery on the frontend, the application uses AJAX requests to send messages and retrieve newer messages without requiring a full-page reload for each update.
              </p>
            </div>
          </div>

          <figure className="soundzone-pair-media chat-media-frame">
            <div className="chat-browser-window">
              <div className="chat-window-bar">
                <div className="chat-window-dots">
                  <span className="chat-dot chat-dot-red" />
                  <span className="chat-dot chat-dot-yellow" />
                  <span className="chat-dot chat-dot-green" />
                </div>
                <div className="chat-window-address">
                  <svg className="chat-lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="chat-address-text">127.0.0.1:8000/home/?u=8</span>
                </div>
                <span className="chat-window-badge">Messaging Workspace</span>
              </div>
              <img
                src={chatImg}
                alt="Active conversation view showing contact selection, message bubbles with timestamps, and message composer"
                className="chat-window-img"
                loading="lazy"
                draggable={false}
              />
              <figcaption className="chat-window-caption">
                Chat Workspace: Active Conversation View with Contact Directory, Message Thread &amp; Input Composer
              </figcaption>
            </div>
          </figure>
        </section>

        {/* Section 3: Problem Statement */}
        <section className="soundzone-pair-row is-reversed" aria-labelledby="chat-heading-problem">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">B · Problem Statement</span>
            <h2 id="chat-heading-problem" className="soundzone-pair-title">
              Straightforward Web Communication &amp; Development Considerations
            </h2>
            <div className="soundzone-pair-body">
              <div className="chat-problem-box">
                <div className="chat-box-badge chat-badge-objective">Project Objective</div>
                <h3 className="chat-box-title">Direct Web-Based Communication</h3>
                <p>
                  The project's objective was to create a straightforward web-based communication experience with authenticated users and individual conversations, allowing users to exchange messages directly in the browser without installing separate software.
                </p>
              </div>

              <div className="chat-solution-box">
                <div className="chat-box-badge chat-badge-considerations">Development Considerations</div>
                <h3 className="chat-box-title">Key Architectural Focus Areas</h3>
                <ul className="chat-considerations-list">
                  <li>Organizing user registration and authentication to secure application access.</li>
                  <li>Providing an intuitive user directory to select another user for an individual conversation.</li>
                  <li>Sending and displaying messages cleanly within a dedicated conversation pane.</li>
                  <li>Maintaining persistent conversation history between user pairs.</li>
                  <li>Retrieving new messages without repeatedly reloading the entire page.</li>
                </ul>
              </div>
            </div>
          </div>

          <figure className="soundzone-pair-media chat-media-frame">
            <div className="chat-dual-screen-grid">
              {/* Registration View */}
              <div className="chat-browser-window chat-compact-window">
                <div className="chat-window-bar">
                  <div className="chat-window-dots">
                    <span className="chat-dot chat-dot-red" />
                    <span className="chat-dot chat-dot-yellow" />
                    <span className="chat-dot chat-dot-green" />
                  </div>
                  <div className="chat-window-address">
                    <span className="chat-address-text">127.0.0.1:8000/register/</span>
                  </div>
                </div>
                <img
                  src={registerImg}
                  alt="Registration form interface displaying required input fields and password constraints"
                  className="chat-window-img"
                  loading="lazy"
                  draggable={false}
                />
                <span className="chat-window-caption">
                  Registration View: Account Creation Form &amp; Validation Rules
                </span>
              </div>

              {/* Login View */}
              <div className="chat-browser-window chat-compact-window">
                <div className="chat-window-bar">
                  <div className="chat-window-dots">
                    <span className="chat-dot chat-dot-red" />
                    <span className="chat-dot chat-dot-yellow" />
                    <span className="chat-dot chat-dot-green" />
                  </div>
                  <div className="chat-window-address">
                    <span className="chat-address-text">127.0.0.1:8000/login/</span>
                  </div>
                </div>
                <img
                  src={loginImg}
                  alt="Authentication card featuring username and password inputs with Login and Register triggers"
                  className="chat-window-img"
                  loading="lazy"
                  draggable={false}
                />
                <span className="chat-window-caption">
                  Login View: Credential Authentication Card &amp; Navigation
                </span>
              </div>
            </div>
          </figure>
        </section>
      </div>

      {/* ====================================================================
          Section 4: Key Features
          ==================================================================== */}
      <section className="chat-features-section" aria-labelledby="chat-heading-features">
        <div className="chat-section-header">
          <span className="soundzone-section-tag">C · Key Features</span>
          <h2 id="chat-heading-features" className="soundzone-pair-title chat-section-title">
            Key Functional Features
          </h2>
          <p className="chat-section-lead">
            The application focuses on essential communication capabilities, organized into five core functional areas:
          </p>
        </div>

        <div className="chat-features-grid">
          {/* Feature A: User Authentication */}
          <div className="chat-feature-card">
            <div className="chat-feature-header">
              <div className="chat-feature-icon-wrap" aria-hidden="true">
                <svg className="chat-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <span className="chat-feature-tag">Authentication</span>
            </div>
            <h3 className="chat-feature-title">A. User Authentication</h3>
            <p className="chat-feature-desc">
              Handles user registration, login, and logout. Restricts access to authenticated application pages, ensuring that only authenticated users can browse the user directory and participate in conversations.
            </p>
          </div>

          {/* Feature B: User Directory */}
          <div className="chat-feature-card">
            <div className="chat-feature-header">
              <div className="chat-feature-icon-wrap" aria-hidden="true">
                <svg className="chat-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="chat-feature-tag">Directory</span>
            </div>
            <h3 className="chat-feature-title">B. User Directory</h3>
            <p className="chat-feature-desc">
              Displays available registered users queried from the database. Allows an authenticated user to select any contact from the directory and navigate directly to an individual conversation.
            </p>
          </div>

          {/* Feature C: One-to-One Messaging */}
          <div className="chat-feature-card">
            <div className="chat-feature-header">
              <div className="chat-feature-icon-wrap" aria-hidden="true">
                <svg className="chat-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span className="chat-feature-tag">Conversations</span>
            </div>
            <h3 className="chat-feature-title">C. One-to-One Messaging</h3>
            <p className="chat-feature-desc">
              Enables individual conversations between users. Supports message composition and sending through a dedicated text input, while maintaining complete conversation history between user pairs.
            </p>
          </div>

          {/* Feature D: AJAX-Based Message Updates */}
          <div className="chat-feature-card">
            <div className="chat-feature-header">
              <div className="chat-feature-icon-wrap" aria-hidden="true">
                <svg className="chat-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 4 23 10 17 10" />
                  <polyline points="1 20 1 14 7 14" />
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
              </div>
              <span className="chat-feature-tag">Asynchronous</span>
            </div>
            <h3 className="chat-feature-title">D. AJAX-Based Message Updates</h3>
            <p className="chat-feature-desc">
              Sends messages through asynchronous requests and retrieves newer messages through periodic requests (polling approximately every 2.5 seconds), updating the conversation interface without requiring a full-page reload for every message.
            </p>
          </div>

          {/* Feature E: Message Timestamps */}
          <div className="chat-feature-card">
            <div className="chat-feature-header">
              <div className="chat-feature-icon-wrap" aria-hidden="true">
                <svg className="chat-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="chat-feature-tag">Metadata</span>
            </div>
            <h3 className="chat-feature-title">E. Message Timestamps</h3>
            <p className="chat-feature-desc">
              Displays message timestamps as part of the conversation interface, giving users clear visibility into when each message was sent within the active conversation thread.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 5: User Workflow
          ==================================================================== */}
      <section className="chat-workflow-section" aria-labelledby="chat-heading-workflow">
        <div className="chat-section-header">
          <span className="soundzone-section-tag">D · User Workflow</span>
          <h2 id="chat-heading-workflow" className="soundzone-pair-title chat-section-title">
            Application User Workflow
          </h2>
          <p className="chat-section-lead">
            The application organizes user interactions across a clean, sequential operational flow:
          </p>
        </div>

        {/* Horizontal Sequence Workflow Component */}
        <div className="chat-workflow-sequence-card">
          <div className="chat-workflow-header">
            <span className="chat-workflow-badge">Sequential Path</span>
            <h3 className="chat-workflow-title">Messaging Interaction Flow</h3>
          </div>
          <div className="chat-workflow-steps">
            <div className="chat-workflow-step">
              <span className="chat-step-num-badge">01</span>
              <span className="chat-step-name">Registration / Login</span>
            </div>
            <div className="chat-workflow-arrow" aria-hidden="true">→</div>
            <div className="chat-workflow-step">
              <span className="chat-step-num-badge">02</span>
              <span className="chat-step-name">User Directory</span>
            </div>
            <div className="chat-workflow-arrow" aria-hidden="true">→</div>
            <div className="chat-workflow-step">
              <span className="chat-step-num-badge">03</span>
              <span className="chat-step-name">Select a User</span>
            </div>
            <div className="chat-workflow-arrow" aria-hidden="true">→</div>
            <div className="chat-workflow-step">
              <span className="chat-step-num-badge">04</span>
              <span className="chat-step-name">Send Messages</span>
            </div>
            <div className="chat-workflow-arrow" aria-hidden="true">→</div>
            <div className="chat-workflow-step">
              <span className="chat-step-num-badge">05</span>
              <span className="chat-step-name">View History &amp; New Messages</span>
            </div>
          </div>
          <p className="chat-workflow-note">
            Users authenticate, select another user, and exchange messages through an individual conversation. The application stores messages and periodically retrieves newer messages to update the conversation interface.
          </p>
        </div>

        {/* Interactive 5-Step Preview Stepper */}
        <div className="chat-flow-section chat-stepper-wrap">
          <div className="chat-flow-header">
            <span className="soundzone-section-tag">Interface Preview</span>
            <h3 className="soundzone-pair-title chat-flow-title">
              Inside the Chat Application
            </h3>
            <p className="chat-flow-lead">
              Review verified interface screens across authentication, contact directory, conversation view, and session termination:
            </p>
          </div>

          {/* Stepper Navigation Pills */}
          <div ref={stepperNavRef} className="chat-stepper-nav" role="tablist" aria-label="Application flow steps">
            {FLOW_STEPS.map((step) => {
              const isCurrent = step.step === activeStep;
              return (
                <button
                  key={step.step}
                  type="button"
                  role="tab"
                  id={`chat-step-tab-${step.step}`}
                  aria-selected={isCurrent}
                  aria-controls={`chat-step-panel-${step.step}`}
                  className={`chat-stepper-btn ${isCurrent ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(step.step)}
                >
                  <span className="chat-stepper-num">{step.step}</span>
                  <span className="chat-stepper-label">{step.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div
            id={`chat-step-panel-${currentFlowStep.step}`}
            role="tabpanel"
            aria-labelledby={`chat-step-tab-${currentFlowStep.step}`}
            className="chat-step-showcase"
          >
            <div className="chat-step-info">
              <div className="chat-step-badge-wrap">
                <span className="chat-step-pill">{currentFlowStep.badge}</span>
                <span className="chat-step-route-badge">{currentFlowStep.route}</span>
              </div>
              <h4 className="chat-step-heading">{currentFlowStep.title}</h4>
              <p className="chat-step-desc">{currentFlowStep.description}</p>

              <div className="chat-step-controls">
                <button
                  type="button"
                  className="chat-step-nav-btn"
                  onClick={handlePrevStep}
                  aria-label="Previous step"
                >
                  ← Previous Step
                </button>
                <span className="chat-step-indicator">
                  {activeStep} of {FLOW_STEPS.length}
                </span>
                <button
                  type="button"
                  className="chat-step-nav-btn chat-step-nav-next"
                  onClick={handleNextStep}
                  aria-label="Next step"
                >
                  Next Step →
                </button>
              </div>
            </div>

            <figure className="chat-step-figure">
              <div className="chat-browser-window">
                <div className="chat-window-bar">
                  <div className="chat-window-dots">
                    <span className="chat-dot chat-dot-red" />
                    <span className="chat-dot chat-dot-yellow" />
                    <span className="chat-dot chat-dot-green" />
                  </div>
                  <div className="chat-window-address">
                    <svg className="chat-lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="chat-address-text">{currentFlowStep.route}</span>
                  </div>
                </div>
                <img
                  src={currentFlowStep.image}
                  alt={currentFlowStep.alt}
                  className="chat-window-img chat-step-img"
                  loading="eager"
                  draggable={false}
                />
                <figcaption className="chat-window-caption">
                  {currentFlowStep.title} ({currentFlowStep.route})
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 6: Technical Implementation
          ==================================================================== */}
      <section className="soundzone-rationale-section chat-tech-section" aria-labelledby="chat-heading-tech">
        <div className="soundzone-rationale-header">
          <span className="soundzone-section-tag">E · Technical Implementation</span>
          <h2 id="chat-heading-tech" className="soundzone-rationale-heading">
            Confirmed Technical Implementation
          </h2>
          <p className="soundzone-rationale-lead">
            The application stack and architecture reflect the confirmed Django and SQLite implementation:
          </p>
        </div>

        <div className="soundzone-rationale-grid chat-tech-grid">
          {/* Backend: Django */}
          <div className="soundzone-rationale-item chat-tech-card">
            <div className="chat-tech-icon-wrap" aria-hidden="true">
              <svg className="chat-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Django Backend</h3>
            <span className="chat-tech-role">Python &amp; Django Web Framework</span>
            <p className="soundzone-rationale-item-body">
              The application uses Django to handle URL routing, user authentication and application views, message storage and retrieval, conversation history, and requests for sending messages and retrieving newer messages.
            </p>
          </div>

          {/* Data Model: Message */}
          <div className="soundzone-rationale-item chat-tech-card">
            <div className="chat-tech-icon-wrap" aria-hidden="true">
              <svg className="chat-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Message Data Model</h3>
            <span className="chat-tech-role">Relational Message Entity</span>
            <p className="soundzone-rationale-item-body">
              The message model stores the core attributes of each communication: sender, recipient, message text, and timestamp.
            </p>
          </div>

          {/* Frontend: HTML, CSS, JavaScript, jQuery, Bootstrap */}
          <div className="soundzone-rationale-item chat-tech-card">
            <div className="chat-tech-icon-wrap" aria-hidden="true">
              <svg className="chat-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Frontend Templates &amp; Styling</h3>
            <span className="chat-tech-role">HTML, CSS, JavaScript, jQuery, Bootstrap</span>
            <p className="soundzone-rationale-item-body">
              The interface uses HTML, CSS, JavaScript, jQuery, and Bootstrap. The templates include the base layout and pages for the home screen, login, registration, and logout.
            </p>
          </div>

          {/* Asynchronous Communication: AJAX */}
          <div className="soundzone-rationale-item chat-tech-card">
            <div className="chat-tech-icon-wrap" aria-hidden="true">
              <svg className="chat-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Asynchronous Communication</h3>
            <span className="chat-tech-role">AJAX &amp; Periodic Polling</span>
            <p className="soundzone-rationale-item-body">
              The application uses AJAX requests to send messages and retrieve updates. Periodic polling (approximately every 2.5 seconds) allows the interface to display newer messages without requiring a full-page reload for every update.
            </p>
          </div>

          {/* Database: SQLite */}
          <div className="soundzone-rationale-item chat-tech-card chat-tech-card-wide">
            <div className="chat-tech-icon-wrap" aria-hidden="true">
              <svg className="chat-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">SQLite Database</h3>
            <span className="chat-tech-role">Application Data Storage</span>
            <p className="soundzone-rationale-item-body">
              SQLite is used for application data storage, maintaining user accounts, profile details, and persistent message records.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 7: Technical Challenges and Learnings
          ==================================================================== */}
      <section className="chat-challenges-section" aria-labelledby="chat-heading-challenges">
        <div className="chat-section-header">
          <span className="soundzone-section-tag">F · Technical Challenges</span>
          <h2 id="chat-heading-challenges" className="soundzone-pair-title chat-section-title">
            Implementation Considerations &amp; Learnings
          </h2>
          <p className="chat-section-lead">
            Key implementation considerations and learning outcomes addressed during development:
          </p>
        </div>

        <div className="chat-challenges-grid">
          {/* Challenge 1 */}
          <div className="chat-challenge-card">
            <span className="chat-challenge-num">01</span>
            <h3 className="chat-challenge-title">Managing Conversation Data</h3>
            <p className="chat-challenge-body">
              Structuring message records around senders, recipients, message text, and timestamps to maintain consistent, chronological conversation threads between user pairs.
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="chat-challenge-card">
            <span className="chat-challenge-num">02</span>
            <h3 className="chat-challenge-title">Retrieving New Messages</h3>
            <p className="chat-challenge-body">
              Using asynchronous requests and periodic polling to retrieve new messages without repeatedly reloading the page, preserving interface state and scroll position.
            </p>
          </div>

          {/* Challenge 3 */}
          <div className="chat-challenge-card">
            <span className="chat-challenge-num">03</span>
            <h3 className="chat-challenge-title">Organizing the Application</h3>
            <p className="chat-challenge-body">
              Separating URL routing, views, message models, and templates within a Django application structure for clear code organization and maintainability.
            </p>
          </div>

          {/* Challenge 4 */}
          <div className="chat-challenge-card">
            <span className="chat-challenge-num">04</span>
            <h3 className="chat-challenge-title">Integrating Frontend and Backend</h3>
            <p className="chat-challenge-body">
              Connecting the messaging interface to Django endpoints for sending messages and retrieving conversation data asynchronously through structured HTTP requests.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 8: Project Outcome
          ==================================================================== */}
      <section className="chat-outcome-section" aria-labelledby="chat-heading-outcome">
        <div className="chat-outcome-banner">
          <div className="chat-outcome-meta">
            <span className="soundzone-section-tag">G · Project Outcome</span>
            <h2 id="chat-heading-outcome" className="soundzone-pair-title chat-outcome-title">
              Full-Stack Messaging Architecture &amp; AJAX Integration
            </h2>
          </div>
          <div className="chat-outcome-body">
            <p>
              The Chat App demonstrates the development of a Django-based messaging application with user authentication, individual conversations, persistent message records, and AJAX-based message updates. The project provided practical experience connecting frontend interactions with backend views, database models, and asynchronous HTTP requests.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
