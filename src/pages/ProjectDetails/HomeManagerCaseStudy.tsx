import React, { useState } from 'react';

// Hero Visual (Newly added widescreen showcase image)
import homeManagerHeroImg from '../../assets/images/projects/home_manager/Home Manager_hero.png';

// Application Screenshots
import loginImg from '../../assets/images/projects/home_manager/Login.png';
import registerImg from '../../assets/images/projects/home_manager/Register.jpg';
import mainImg from '../../assets/images/projects/home_manager/Main.jpg';
import reminderHubImg from '../../assets/images/projects/home_manager/Reminder_Page.jpg';
import vehiclesImg from '../../assets/images/projects/home_manager/Vehicles.png';
import appliancesImg from '../../assets/images/projects/home_manager/Appliances.png';
import shortTermImg from '../../assets/images/projects/home_manager/ST.jpg';
import digiLockImg from '../../assets/images/projects/home_manager/Digi_lock.jpg';
import docPickerImg from '../../assets/images/projects/home_manager/Img.jpg';
import newsImg from '../../assets/images/projects/home_manager/News.png';

import './ChatCaseStudy.css';
import './HomeManagerCaseStudy.css';

interface FlowStep {
  step: number;
  badge: string;
  shortTitle: string;
  title: string;
  screenType: string;
  description: string;
  image: string;
  caption: string;
  alt: string;
}

const HOME_MANAGER_FLOW_STEPS: FlowStep[] = [
  {
    step: 1,
    badge: 'Stage 01 · Access & Onboarding',
    shortTitle: 'Login / Sign Up',
    title: 'User Authentication & Registration',
    screenType: 'Mobile Screen · Login & Sign Up Activities',
    description:
      'The authentication and onboarding gateway providing email/password credential sign in alongside multi-field user registration (Name, Email, Phone, Password) with Firebase validation and loading indicators.',
    caption: 'Authentication & Account Creation: Login and registration interfaces powered by Firebase.',
    image: loginImg,
    alt: 'Home Manager authentication interface',
  },
  {
    step: 2,
    badge: 'Stage 02 · Hub',
    shortTitle: 'Main Menu',
    title: 'Central Application Navigation Hub',
    screenType: 'Mobile Screen · Main Activity Dashboard',
    description:
      'The primary dashboard organizing the application into three core functional modules: Reminder, Digital Locker, and News, alongside a session logout action to terminate user access.',
    caption: 'Main Dashboard: Central navigation hub connecting Reminders, Digital Locker, and News.',
    image: mainImg,
    alt: 'Home Manager main dashboard screen displaying Reminder, Digital Locker, News, and Logout pill buttons',
  },
  {
    step: 3,
    badge: 'Stage 03 · Reminders',
    shortTitle: 'Reminder Hub',
    title: 'Reminder Category Selector',
    screenType: 'Mobile Screen · Reminder Hub Activity',
    description:
      'A dedicated routing menu allowing users to select between Vehicle maintenance, Home Appliance servicing, or Short-Term task alerts based on the nature of the upcoming obligation.',
    caption: 'Reminder Category Selector: Dedicated routing to Vehicle, Appliance, and Short-Term tracking.',
    image: reminderHubImg,
    alt: 'Reminder category screen with buttons for Vehicle, Appliance, Short Term, and Back',
  },
  {
    step: 4,
    badge: 'Stage 04 · Vehicles',
    shortTitle: 'Vehicles',
    title: 'Vehicle Maintenance & EMI Scheduling',
    screenType: 'Mobile Screen · Vehicle Reminder Form',
    description:
      'Structured input form supporting Car and Bike/other vehicle selections. Captures vehicle Model, Service Date, Last Service Amount, recurring EMI Amount, and Next EMI Due Date to prevent maintenance and financial oversights.',
    caption: 'Vehicle Tracker: Maintenance intervals, service expenditure, and recurring EMI schedules.',
    image: vehiclesImg,
    alt: 'Vehicle reminder form interface with vehicle type radio buttons and service and EMI fields',
  },
  {
    step: 5,
    badge: 'Stage 05 · Appliances',
    shortTitle: 'Appliances',
    title: 'Appliance Service & Warranty Tracking',
    screenType: 'Mobile Screen · Appliance Reminder Form',
    description:
      'Household equipment manager recording Appliance Name, Service Date, Last Service Amount, EMI Amount, and Next EMI Date, helping households monitor appliance upkeep and installment payments.',
    caption: 'Appliance Tracker: Service dates, maintenance costs, and installment tracking.',
    image: appliancesImg,
    alt: 'Appliance reminder form with inputs for Appliance Name, Service Date, Amount, and EMI Date',
  },
  {
    step: 6,
    badge: 'Stage 06 · Tasks',
    shortTitle: 'Short-Term',
    title: 'Quick Task & Immediate Reminders',
    screenType: 'Mobile Screen · Short-Term Reminder Activity',
    description:
      'Rapid-entry interface for urgent everyday to-dos, allowing users to enter a Task description and trigger Time, activated through a dedicated "REMIND ME!" button.',
    caption: 'Short-Term Reminder: Time-sensitive everyday to-do scheduling and alert activation.',
    image: shortTermImg,
    alt: 'Short-term task reminder interface with Task and Time fields and Remind Me action button',
  },
  {
    step: 7,
    badge: 'Stage 07 · Vault',
    shortTitle: 'Digital Locker',
    title: 'Document & Image Vault Gateway',
    screenType: 'Mobile Screen · Digital Locker Gateway',
    description:
      'Secure digital vault interface featuring an upload icon and primary actions: "UPLOAD" to add new document snapshots and "SHOW ALL" to browse stored files and certificates.',
    caption: 'Digital Locker: Central document management screen for uploading and reviewing files.',
    image: digiLockImg,
    alt: 'Digital locker gateway interface showing upload icon, Upload button, and Show All button',
  },
  {
    step: 8,
    badge: 'Stage 08 · Upload',
    shortTitle: 'Media Picker',
    title: 'Scoped Android Photo & Document Selector',
    screenType: 'Mobile Screen · Android Photo Picker Integration',
    description:
      'Integration with Android native photo picker ("This app can only access the photos you select") displaying local document photos, study notes, and certificates ready for digital storage.',
    caption: 'Document Upload Picker: Native Android media selector for choosing document photos.',
    image: docPickerImg,
    alt: 'Android photo picker bottom sheet displaying document images and handwritten notes',
  },
  {
    step: 9,
    badge: 'Stage 09 · News',
    shortTitle: 'News Feed',
    title: 'Real-Time News Feed & Keyword Search',
    screenType: 'Mobile Screen · News API Activity',
    description:
      'An API-powered news reader with real-time keyword search and structured story cards. The captured screen preserves news stories at the time of development.',
    caption: 'News Interface: In-app news feed with search bar and historical 2021 news cards.',
    image: newsImg,
    alt: 'News feed screen displaying search bar and 5 historical news cards from 2021',
  },
];

export const HomeManagerCaseStudy: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [authSubView, setAuthSubView] = useState<'login' | 'signup'>('login');

  const currentFlowStep =
    HOME_MANAGER_FLOW_STEPS.find((s) => s.step === activeStep) || HOME_MANAGER_FLOW_STEPS[0];

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev > 1 ? prev - 1 : HOME_MANAGER_FLOW_STEPS.length));
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev < HOME_MANAGER_FLOW_STEPS.length ? prev + 1 : 1));
  };

  const isAuthStep = activeStep === 1;
  const activeImage = isAuthStep
    ? authSubView === 'login'
      ? loginImg
      : registerImg
    : currentFlowStep.image;

  const activeTitle = isAuthStep
    ? authSubView === 'login'
      ? 'Authentication — Session Sign In'
      : 'Account Registration — Sign Up'
    : currentFlowStep.title;

  const activeScreenType = isAuthStep
    ? authSubView === 'login'
      ? 'Mobile Screen · Login Activity'
      : 'Mobile Screen · Registration Activity'
    : currentFlowStep.screenType;

  const activeDescription = isAuthStep
    ? authSubView === 'login'
      ? 'The authentication gateway providing email and password input fields with Firebase validation. Includes a direct link to new account registration to prevent user navigation dead-ends.'
      : 'Account creation form collecting full Name, Email, Phone Number, and Password. Features integrated input validation and active loading spinner feedback during Firebase account creation.'
    : currentFlowStep.description;

  const activeCaption = isAuthStep
    ? authSubView === 'login'
      ? 'Login Screen: Email and password credential authentication with account creation trigger.'
      : 'Sign Up Screen: Multi-field account registration with Firebase Authentication.'
    : currentFlowStep.caption;

  const activeAlt = isAuthStep
    ? authSubView === 'login'
      ? 'Home Manager login screen with email and password fields, login button, and create account link'
      : 'Home Manager registration screen with Name, Email, Phone Number, and Password input fields'
    : currentFlowStep.alt;

  return (
    <div className="hm-editorial-case-study">
      {/* ====================================================================
          Section 1: Hero Showcase
          ==================================================================== */}
      <section
        className="soundzone-showcase-section hm-hero-showcase"
        aria-label="Home Manager Application Overview"
      >
        <div className="soundzone-showcase-meta">
          <span className="soundzone-section-tag">APPLICATION DEVELOPMENT</span>
          <h2 className="project-details-heading">
            Home Manager
          </h2>
          <p className="project-details-body soundzone-showcase-caption">
            An Android mobile application developed using Java, XML layouts, and Google Firebase—centralizing task reminders, secure digital document storage, and daily news browsing into a single cohesive interface.
          </p>
        </div>

        <figure className="hm-hero-figure">
          <img
            src={homeManagerHeroImg}
            alt="Home Manager Android application showcase displaying mobile interfaces for appliances, news feed, and authentication alongside feature categories"
            className="hm-hero-img"
            loading="eager"
            draggable={false}
          />
        </figure>
      </section>

      {/* ====================================================================
          Section 2: Project Overview & Motivation (Alternating Two-Column Row)
          ==================================================================== */}
      <div className="soundzone-editorial-pairs" aria-label="Home Manager Case Study Sections">
        <section className="soundzone-pair-row" aria-labelledby="hm-heading-overview">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">A · Project Overview</span>
            <h2 id="hm-heading-overview" className="soundzone-pair-title">
              Consolidating Household Utilities Into One Mobile Platform
            </h2>
            <div className="soundzone-pair-body">
              <p>
                Managing modern household logistics frequently requires toggling between separate utilities: calendar apps for servicing deadlines and bill EMIs, gallery folders or cloud storage for document photos, and web browsers for daily news. This fragmentation leads to missed service dates, misplaced paperwork, and app fatigue.
              </p>
              <p>
                Home Manager addresses this challenge by providing a unified mobile hub. Developed as an Android application, it integrates three essential everyday modules: a Reminder system with custom tracking for vehicles and appliances, a Digital Locker for capturing and storing physical document snapshots, and a live News Feed.
              </p>
              <p>
                The project was developed to explore native Android application development, combining responsive XML user interface layouts with Java object-oriented logic and Firebase cloud backend integration.
              </p>
            </div>
          </div>

          <figure className="hm-media-frame">
            <div className="hm-dual-phone-grid">
              {/* Main Menu Dashboard */}
              <div className="hm-phone-device">
                <div className="hm-phone-topbar">
                  <span className="hm-phone-tag">Dashboard</span>
                  <span className="hm-phone-notch" />
                </div>
                <div className="hm-phone-img-wrap">
                  <img
                    src={mainImg}
                    alt="Main dashboard screen of Home Manager showing Reminder, Digital Locker, News, and Logout buttons"
                    className="hm-phone-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <p className="hm-phone-caption">Main Navigation Hub</p>
              </div>

              {/* Reminder Category Hub */}
              <div className="hm-phone-device">
                <div className="hm-phone-topbar">
                  <span className="hm-phone-tag">Reminders</span>
                  <span className="hm-phone-notch" />
                </div>
                <div className="hm-phone-img-wrap">
                  <img
                    src={reminderHubImg}
                    alt="Reminder category selector with options for Vehicle, Appliance, Short Term, and Back"
                    className="hm-phone-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <p className="hm-phone-caption">Reminder Category Hub</p>
              </div>
            </div>
          </figure>
        </section>

        {/* ====================================================================
            Section 3: Authentication & Access Control (Alternating Row)
            ==================================================================== */}
        <section className="soundzone-pair-row is-reversed" aria-labelledby="hm-heading-auth">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">B · Authentication &amp; Access Control</span>
            <h2 id="hm-heading-auth" className="soundzone-pair-title">
              User Registration &amp; Account Protection
            </h2>
            <div className="soundzone-pair-body">
              <p>
                The application secures user data through dedicated sign-in and sign-up interfaces connected to Firebase Authentication. The registration screen collects essential user profile information, including Name, Email, Phone Number, and Password.
              </p>
              <p>
                Integrated validation ensures mandatory fields are verified prior to account creation. An active circular loading indicator provides clear visual feedback during network transactions with Firebase.
              </p>
              <p>
                The login interface provides a clean, focused form with Email and Password inputs. Direct cross-linking between Login and Sign Up views prevents navigational dead-ends and ensures a smooth onboarding flow.
              </p>
            </div>
          </div>

          <figure className="hm-media-frame">
            <div className="hm-dual-phone-grid">
              {/* Login View */}
              <div className="hm-phone-device">
                <div className="hm-phone-topbar">
                  <span className="hm-phone-tag">Login</span>
                  <span className="hm-phone-notch" />
                </div>
                <div className="hm-phone-img-wrap">
                  <img
                    src={loginImg}
                    alt="Home Manager login view with email and password inputs and create account link"
                    className="hm-phone-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <p className="hm-phone-caption">Login Interface</p>
              </div>

              {/* Registration View */}
              <div className="hm-phone-device">
                <div className="hm-phone-topbar">
                  <span className="hm-phone-tag">Sign Up</span>
                  <span className="hm-phone-notch" />
                </div>
                <div className="hm-phone-img-wrap">
                  <img
                    src={registerImg}
                    alt="Home Manager registration view with name, email, phone, and password inputs with loading indicator"
                    className="hm-phone-img"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <p className="hm-phone-caption">Registration Interface</p>
              </div>
            </div>
          </figure>
        </section>
      </div>

      {/* ====================================================================
          Section 4: Core Functional Modules (Features Grid)
          ==================================================================== */}
      <section className="hm-features-section" aria-labelledby="hm-heading-features">
        <div className="soundzone-rationale-header">
          <span className="soundzone-section-tag">C · Key Functional Features</span>
          <h2 id="hm-heading-features" className="soundzone-pair-title">
            Application Features &amp; Verified Capabilities
          </h2>
          <p className="soundzone-rationale-lead">
            The core functional capabilities verified through the application codebase and authentic interface screens:
          </p>
        </div>

        <div className="hm-features-grid">
          {/* Feature 1 */}
          <div className="hm-feature-card">
            <div className="hm-feature-icon-wrap" aria-hidden="true">
              <svg className="hm-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="hm-feature-title">User Authentication</h3>
            <p className="hm-feature-desc">
              Dedicated Login and Sign Up screens with field validation and Firebase Authentication integration to protect personal records.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="hm-feature-card">
            <div className="hm-feature-icon-wrap" aria-hidden="true">
              <svg className="hm-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3 className="hm-feature-title">Central Module Hub</h3>
            <p className="hm-feature-desc">
              A streamlined main menu dashboard organizing access into Reminders, Digital Locker, News, and Session Logout.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="hm-feature-card">
            <div className="hm-feature-icon-wrap" aria-hidden="true">
              <svg className="hm-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="hm-feature-title">Reminder Category Hub</h3>
            <p className="hm-feature-desc">
              A categorized navigation selector enabling users to choose between Vehicle, Appliance, or Short-Term task tracking.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="hm-feature-card">
            <div className="hm-feature-icon-wrap" aria-hidden="true">
              <svg className="hm-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.9 2 11.2 2 11.5V16c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <h3 className="hm-feature-title">Vehicle Maintenance Tracker</h3>
            <p className="hm-feature-desc">
              Form supporting Car and Bike radio options, tracking vehicle model, service dates, expenditure, and recurring EMI deadlines.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="hm-feature-card">
            <div className="hm-feature-icon-wrap" aria-hidden="true">
              <svg className="hm-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="12" y2="14" />
              </svg>
            </div>
            <h3 className="hm-feature-title">Appliance Service Tracker</h3>
            <p className="hm-feature-desc">
              Dedicated form recording appliance names, service intervals, repair amounts, and upcoming EMI installment dates.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="hm-feature-card">
            <div className="hm-feature-icon-wrap" aria-hidden="true">
              <svg className="hm-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <h3 className="hm-feature-title">Short-Term Task Reminders</h3>
            <p className="hm-feature-desc">
              Quick-entry interface for time-sensitive tasks with custom task descriptions, trigger times, and a "REMIND ME!" button.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="hm-feature-card">
            <div className="hm-feature-icon-wrap" aria-hidden="true">
              <svg className="hm-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <h3 className="hm-feature-title">Digital Locker &amp; Media Picker</h3>
            <p className="hm-feature-desc">
              Secure document storage hub with native Android photo picker integration to capture and store images of physical documents and notes.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="hm-feature-card">
            <div className="hm-feature-icon-wrap" aria-hidden="true">
              <svg className="hm-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
            </div>
            <h3 className="hm-feature-title">In-App News Feed &amp; Search</h3>
            <p className="hm-feature-desc">
              API-driven news reader featuring structured headline cards with imagery, summaries, dates, and an in-app keyword search bar.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 5: Application Screenshots & Sequential Stepper Flow (Section D)
          9 Sequentially Numbered Steps · Single Horizontal Row on Desktop
          ==================================================================== */}
      <section className="chat-flow-section" aria-labelledby="hm-heading-screens">
        <div className="chat-flow-header">
          <span className="soundzone-section-tag">D · Application Screenshots</span>
          <h2 id="hm-heading-screens" className="soundzone-pair-title chat-flow-title">
            Inside the Home Manager Application
          </h2>
          <p className="chat-flow-lead">
            Explore the authentic Android interface across authentication, dashboard navigation, reminder scheduling, digital locker document selection, and the API-driven news reader:
          </p>
        </div>

        {/* Stepper Navigation Pills - Fits in 1 horizontal line on desktop */}
        <div className="hm-stepper-nav" role="tablist" aria-label="Home Manager application screens">
          {HOME_MANAGER_FLOW_STEPS.map((step) => {
            const isCurrent = step.step === activeStep;
            return (
              <button
                key={step.step}
                type="button"
                role="tab"
                id={`hm-step-tab-${step.step}`}
                aria-selected={isCurrent}
                aria-controls={`hm-step-panel-${step.step}`}
                className={`hm-stepper-btn ${isCurrent ? 'is-active' : ''}`}
                onClick={() => setActiveStep(step.step)}
              >
                <span className="hm-stepper-num">{step.step}</span>
                <span className="hm-stepper-label">{step.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        <div
          id={`hm-step-panel-${currentFlowStep.step}`}
          role="tabpanel"
          aria-labelledby={`hm-step-tab-${currentFlowStep.step}`}
          className="hm-flow-showcase"
        >
          {/* Left Metadata Column */}
          <div className="chat-step-info">
            <div className="chat-step-badge-wrap">
              <span className="chat-step-pill">{currentFlowStep.badge}</span>
              <span className="chat-step-route-badge">{activeScreenType}</span>
            </div>
            <h3 className="chat-step-heading">{activeTitle}</h3>
            <p className="chat-step-desc">{activeDescription}</p>

            {/* If Login / Sign Up Step (Step 1), render sub-view toggle to switch between Login and Sign Up screens */}
            {isAuthStep && (
              <div className="hm-auth-sub-nav" role="tablist" aria-label="Authentication views">
                <button
                  type="button"
                  role="tab"
                  id="hm-auth-tab-login"
                  aria-selected={authSubView === 'login'}
                  className={`hm-auth-sub-btn ${authSubView === 'login' ? 'is-active' : ''}`}
                  onClick={() => setAuthSubView('login')}
                >
                  <span className="hm-auth-sub-dot" />
                  Login Screen
                </button>
                <button
                  type="button"
                  role="tab"
                  id="hm-auth-tab-signup"
                  aria-selected={authSubView === 'signup'}
                  className={`hm-auth-sub-btn ${authSubView === 'signup' ? 'is-active' : ''}`}
                  onClick={() => setAuthSubView('signup')}
                >
                  <span className="hm-auth-sub-dot" />
                  Sign Up Screen
                </button>
              </div>
            )}

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
                {activeStep} of {HOME_MANAGER_FLOW_STEPS.length}
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

          {/* Right Phone Mockup Column */}
          <figure className="hm-phone-frame-wrapper">
            <div className="hm-phone-mockup">
              {/* Simulated Mobile Status Bar */}
              <div className="hm-mockup-statusbar">
                <span className="hm-mockup-time">9:41</span>
                <span className="hm-mockup-camera" />
                <div className="hm-mockup-icons">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" />
                  </svg>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 17h20v4H2v-4zm4-6h12v4H6v-4zm4-6h4v4h-4V5z" />
                  </svg>
                </div>
              </div>

              {/* High-Resolution Screen Viewport */}
              <div className="hm-mockup-screen-wrap">
                <img
                  src={activeImage}
                  alt={activeAlt}
                  className="hm-mockup-img"
                  loading="eager"
                  draggable={false}
                />
              </div>

              {/* Bottom Caption Bar */}
              <figcaption className="hm-mockup-caption-bar">
                <p className="hm-mockup-caption-text">{activeCaption}</p>
                {isAuthStep && (
                  <button
                    type="button"
                    className="hm-caption-sub-toggle"
                    onClick={() => setAuthSubView(authSubView === 'login' ? 'signup' : 'login')}
                  >
                    {authSubView === 'login' ? 'View Sign Up Screen →' : '← View Login Screen'}
                  </button>
                )}
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ====================================================================
          Section 6: Development & Technology Stack (Section E)
          ==================================================================== */}
      <section className="hm-tech-section" aria-labelledby="hm-heading-tech">
        <div className="soundzone-rationale-header">
          <span className="soundzone-section-tag">E · Development &amp; Technology</span>
          <h2 id="hm-heading-tech" className="soundzone-rationale-heading">
            Technology Stack &amp; Implementation
          </h2>
          <p className="soundzone-rationale-lead">
            The core engineering technologies and APIs verified through the project source code and implementation artifacts:
          </p>
        </div>

        <div className="hm-tech-grid">
          {/* Tech 1 */}
          <div className="hm-tech-card">
            <div className="hm-tech-icon-wrap" aria-hidden="true">
              <svg className="hm-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Java (Android SDK)</h3>
            <span className="hm-tech-role">Core Application Logic &amp; Activities</span>
            <p className="soundzone-rationale-item-body">
              Powers client application logic, Activity lifecycle management, user input validation, intent-based activity transitions, and asynchronous operations.
            </p>
          </div>

          {/* Tech 2 */}
          <div className="hm-tech-card">
            <div className="hm-tech-icon-wrap" aria-hidden="true">
              <svg className="hm-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Android XML Layouts</h3>
            <span className="hm-tech-role">User Interface Design &amp; Styling</span>
            <p className="soundzone-rationale-item-body">
              Declarative XML layout files defining custom multi-stop gradient backgrounds, rounded pill buttons, edit text input styling, and responsive constraint views.
            </p>
          </div>

          {/* Tech 3 */}
          <div className="hm-tech-card">
            <div className="hm-tech-icon-wrap" aria-hidden="true">
              <svg className="hm-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Google Firebase</h3>
            <span className="hm-tech-role">Authentication &amp; Cloud Database</span>
            <p className="soundzone-rationale-item-body">
              Provides cloud backend infrastructure for secure email and password user authentication and real-time database storage for user profiles and records.
            </p>
          </div>

          {/* Tech 4 */}
          <div className="hm-tech-card">
            <div className="hm-tech-icon-wrap" aria-hidden="true">
              <svg className="hm-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">News API Integration</h3>
            <span className="hm-tech-role">RESTful News Data Consumption</span>
            <p className="soundzone-rationale-item-body">
              Connects to an external REST news API to query, parse, and render structured news articles containing headlines, synopses, publication dates, and imagery.
            </p>
          </div>

          {/* Tech 5 */}
          <div className="hm-tech-card">
            <div className="hm-tech-icon-wrap" aria-hidden="true">
              <svg className="hm-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Android Media Picker</h3>
            <span className="hm-tech-role">Local Document &amp; Photo Access</span>
            <p className="soundzone-rationale-item-body">
              Utilizes Android platform media selection with scoped permissions, allowing users to pick physical document snapshots and study notes for locker storage.
            </p>
          </div>

          {/* Tech 6 */}
          <div className="hm-tech-card">
            <div className="hm-tech-icon-wrap" aria-hidden="true">
              <svg className="hm-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Android Studio &amp; Gradle</h3>
            <span className="hm-tech-role">Development Environment &amp; Build System</span>
            <p className="soundzone-rationale-item-body">
              Official IDE utilized for Android application development, virtual device emulator testing, layout editing, and Gradle dependency orchestration.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 7: Project Outcome & Architecture Reflection (Section F)
          ==================================================================== */}
      <section className="chat-reflection-section" aria-labelledby="hm-heading-reflection">
        <div className="chat-reflection-banner">
          <div className="chat-reflection-meta">
            <span className="soundzone-section-tag">F · Project Outcome &amp; Reflection</span>
            <h2 id="hm-heading-reflection" className="soundzone-pair-title chat-reflection-title">
              Engineering Takeaways &amp; Architectural Learnings
            </h2>
          </div>
          <div className="chat-reflection-body">
            <p>
              The Home Manager project demonstrates the integration of multiple distinct functional domains—temporal reminder scheduling, digital document image storage, and live news data consumption—into a coherent Android mobile application.
            </p>
            <p>
              Developing the application provided practical experience in structuring Android Activities, managing user authentication lifecycles with Firebase, handling camera and photo storage access on mobile devices, and integrating RESTful APIs to deliver structured content in real time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
