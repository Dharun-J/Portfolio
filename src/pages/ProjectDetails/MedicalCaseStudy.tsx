import React, { useState, useRef, useEffect } from 'react';

// Project Screenshots
import medicalHeroImg from '../../assets/images/projects/medical/Medical Lab_hero.png';
import loginImg from '../../assets/images/projects/medical/Login.png';
import patientImg from '../../assets/images/projects/medical/Patient.png';
import doctorImg from '../../assets/images/projects/medical/Doctor.png';
import labDocImg from '../../assets/images/projects/medical/Labdoc.png';
import labsImg from '../../assets/images/projects/medical/Labs.png';
import timeSlotImg from '../../assets/images/projects/medical/TimeSlot.png';
import reportImg from '../../assets/images/projects/medical/Report.png';

import './ChatCaseStudy.css';
import './MedicalCaseStudy.css';

interface MedicalFlowStep {
  step: number;
  badge: string;
  shortTitle: string;
  title: string;
  route: string;
  description: string;
  caption: string;
  image: string;
  alt: string;
}

const MEDICAL_FLOW_STEPS: MedicalFlowStep[] = [
  {
    step: 1,
    badge: 'Stage 01 · Access',
    shortTitle: 'Authentication',
    title: 'Authentication — Login Screen',
    route: '127.0.0.1:8000/login/',
    description:
      'The authentication gateway enables patients and hospital administrators to sign into their respective accounts using their credentials, with direct navigation to new account registration and password assistance.',
    caption: 'Login Screen: Username and password authentication with integrated registration navigation.',
    image: loginImg,
    alt: 'System login interface with Username and Password fields, Register link, and Login button',
  },
  {
    step: 2,
    badge: 'Stage 02 · Patient',
    shortTitle: 'Patient Portal',
    title: 'Patient Portal — Profile & Appointment Booking',
    route: '127.0.0.1:8000/patient/profile/',
    description:
      'The patient management dashboard displays personal profile information, real-time appointment metrics (Waiting, Upcoming, Completed, and Rejected), and an appointment booking form with hospital and doctor dropdowns.',
    caption: 'Patient Profile & Appointment Booking: Displays personal information, appointment status tracking, and doctor booking inputs.',
    image: patientImg,
    alt: 'Patient profile dashboard displaying appointment history counts and appointment booking form with hospital and doctor dropdowns',
  },
  {
    step: 3,
    badge: 'Stage 03 · Doctor Records',
    shortTitle: 'Doctor Records',
    title: 'Doctor Profile & Schedule — Managed Practitioner View',
    route: '127.0.0.1:8000/doctor/dashboard/',
    description:
      'Displays doctor qualifications (MBBS), medical speciality (ENT), associated hospital, and a structured listing of upcoming and historical patient appointments. Within the system, doctors are managed professionals affiliated with hospital facilities.',
    caption: 'Doctor Profile & Appointment Listing: Displays doctor qualifications, speciality, associated hospital, and scheduled appointments.',
    image: doctorImg,
    alt: 'Doctor profile view with qualifications, speciality, associated hospital, and appointment table',
  },
  {
    step: 4,
    badge: 'Stage 04 · Staffing',
    shortTitle: 'Doctor Management',
    title: 'Doctor Information Management — Add Doctor Form',
    route: '127.0.0.1:8000/lab/doctors/add/',
    description:
      'An administrative interface enabling hospital personnel to register affiliated doctors, configure contact details and medical specialities, and assign dedicated working time slots.',
    caption: 'Doctor Information Management: Allows hospital administrators to register new doctors, assign specialities, and configure time slots.',
    image: labDocImg,
    alt: 'Doctor information management form with fields for name, qualification, email, speciality, phone, and time slots',
  },
  {
    step: 5,
    badge: 'Stage 05 · Facility',
    shortTitle: 'Hospital Profile',
    title: 'Hospital & Laboratory Management — Profile & Roster',
    route: '127.0.0.1:8000/lab/profile/',
    description:
      'The facility administration view presents hospital location details, bed capacity metrics, appointment statistics, and an editable staff roster of affiliated doctors.',
    caption: 'Hospital Profile & Management: Details facility location, bed capacity metrics, appointment counts, and affiliated doctor directory.',
    image: labsImg,
    alt: 'Hospital administration profile showing hospital details, bed capacity, and doctor roster table',
  },
  {
    step: 6,
    badge: 'Stage 06 · Scheduling',
    shortTitle: 'Time Slots',
    title: 'Scheduling Interface — Available Time-Slot Selection',
    route: '127.0.0.1:8000/lab/slots/15-01-2023/',
    description:
      'An interactive scheduling view visualizing available appointment timings across morning, afternoon, and evening booking slots for a selected date, accounting for existing bookings and scheduling restrictions.',
    caption: 'Available Time-Slot Interface: Visualizes scheduled timings across morning, afternoon, and evening hours for a selected appointment date.',
    image: timeSlotImg,
    alt: 'Available timings view showing multiple time slot options for a specific test date',
  },
  {
    step: 7,
    badge: 'Stage 07 · Delivery',
    shortTitle: 'Report Delivery',
    title: 'Medical Report Access & Dispatch — Diagnostic Report Submission',
    route: '127.0.0.1:8000/doctor/report/send/',
    description:
      'Medical report delivery capability allowing diagnostic reports and clinical comments to be associated with patient records and accessed online.',
    caption: 'Medical Report Delivery: Interface for associating clinical remarks and diagnostic reports with patient records.',
    image: reportImg,
    alt: 'Send Mail Report to Patient form with Name, Email, Comments, and File attachment controls',
  },
];

export const MedicalCaseStudy: React.FC = () => {
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
    MEDICAL_FLOW_STEPS.find((s) => s.step === activeStep) || MEDICAL_FLOW_STEPS[0];

  const handlePrevStep = () => {
    setActiveStep((prev) => (prev > 1 ? prev - 1 : MEDICAL_FLOW_STEPS.length));
  };

  const handleNextStep = () => {
    setActiveStep((prev) => (prev < MEDICAL_FLOW_STEPS.length ? prev + 1 : 1));
  };

  return (
    <div className="medical-editorial-case-study">
      {/* ====================================================================
          Section 1: Hero Showcase
          ==================================================================== */}
      <section
        className="soundzone-showcase-section medical-hero-showcase"
        aria-label="Medical Lab Booking System Overview"
      >
        <div className="soundzone-showcase-meta">
          <h2 className="project-details-heading">Healthcare Appointment and Laboratory Management System</h2>
          <p className="project-details-body soundzone-showcase-caption">
            A healthcare management web application designed to organize patient information, doctor appointments, hospital administration, and laboratory-related services.
          </p>
        </div>

        <figure className="medical-hero-figure">
          <div className="medical-hero-img-wrap">
            <img
              src={medicalHeroImg}
              alt="Medical Lab Booking System desktop laptop mockup showing laboratory profile and doctor management interface"
              className="medical-hero-img"
              loading="eager"
              draggable={false}
            />
          </div>
        </figure>
      </section>

      {/* ====================================================================
          Section 2: Project Overview & Section 3: Problem Statement
          (Alternating Editorial Pair Rows)
          ==================================================================== */}
      <div className="soundzone-editorial-pairs" aria-label="Medical Lab Booking System Case Study Sections">
        {/* Section 2: Project Overview */}
        <section className="soundzone-pair-row" aria-labelledby="medical-heading-overview">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">A · Project Overview</span>
            <h2 id="medical-heading-overview" className="soundzone-pair-title">
              Centralized Healthcare Workflows &amp; Service Coordination
            </h2>
            <div className="soundzone-pair-body">
              <p>
                The Medical Lab Booking System is a healthcare management web application designed to organize patient and hospital workflows, doctor appointments, laboratory test booking, and medical report access within a unified digital environment.
              </p>
              <p>
                The system brings together patient account management, doctor and hospital administration, appointment scheduling, laboratory test booking, and access to medical reports, supporting a more organized healthcare service experience.
              </p>
            </div>
          </div>

          <figure className="soundzone-pair-media medical-media-frame">
            <div className="medical-screenshot-card">
              <div className="medical-screen-topbar">
                <span className="medical-screen-tag">Hospital Administration Portal</span>
              </div>
              <div className="medical-screen-viewport">
                <img
                  src={labsImg}
                  alt="Hospital administration profile dashboard showing contact info, bed capacity, and doctor management table"
                  className="medical-screen-img"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <figcaption className="medical-screen-caption">
                Hospital Administration: Profile Overview &amp; Available Doctor Roster
              </figcaption>
            </div>
          </figure>
        </section>

        {/* Section 3: Problem Statement */}
        <section className="soundzone-pair-row is-reversed" aria-labelledby="medical-heading-problem-solution">
          <div className="soundzone-pair-content">
            <span className="soundzone-section-tag">B · Problem Statement</span>
            <h2 id="medical-heading-problem-solution" className="soundzone-pair-title">
              Overcoming Fragmentation in Clinical Scheduling
            </h2>
            <div className="soundzone-pair-body">
              <div className="medical-problem-box">
                <div className="medical-box-badge medical-badge-problem">The Organizational Challenge</div>
                <h3 className="medical-box-title">Disconnected Appointment &amp; Facility Logistics</h3>
                <p>
                  Managing patient appointments, doctor availability, hospital scheduling, and laboratory-related services across separate, disconnected workflows presents significant administrative challenges. Without a centralized system, clinics risk double-booking, scheduling conflicts with practitioner holidays, and fragmented communication between patients and healthcare administrators.
                </p>
              </div>

              <div className="medical-solution-box">
                <div className="medical-box-badge medical-badge-solution">The System Design Approach</div>
                <h3 className="medical-box-title">Coordinated Multi-Stakeholder Management</h3>
                <p>
                  The project addressed this operational problem by establishing a structured web application that links patient profiles, doctor availability parameters, and hospital administrative controls. By automating time-slot allocation and status tracking, the system demonstrates how scheduling logistics can be coordinated systematically without relying on ad-hoc communication.
                </p>
              </div>
            </div>
          </div>

          <figure className="soundzone-pair-media medical-media-frame">
            <div className="medical-screenshot-card">
              <div className="medical-screen-topbar">
                <span className="medical-screen-tag">Patient Booking Workspace</span>
              </div>
              <div className="medical-screen-viewport">
                <img
                  src={patientImg}
                  alt="Patient portal showing profile information and appointment booking form with hospital and doctor selection"
                  className="medical-screen-img"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <figcaption className="medical-screen-caption">
                Patient Portal: Appointment History Metrics &amp; Hospital/Doctor Booking Form
              </figcaption>
            </div>
          </figure>
        </section>
      </div>

      {/* ====================================================================
          Section 4: User Roles
          ==================================================================== */}
      <section className="medical-roles-section" aria-labelledby="medical-heading-roles">
        <div className="medical-section-header">
          <span className="soundzone-section-tag">C · User Roles</span>
          <h2 id="medical-heading-roles" className="soundzone-pair-title medical-features-title">
            System Roles &amp; Operational Responsibilities
          </h2>
          <p className="medical-features-lead">
            The platform establishes distinct boundaries between patient self-service, administrative operations, and managed practitioner profiles:
          </p>
        </div>

        <div className="medical-roles-grid">
          {/* Role 1: Patients */}
          <div className="medical-role-card">
            <div className="medical-role-header">
              <div className="medical-role-icon-wrap" aria-hidden="true">
                <svg className="medical-role-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <span className="medical-role-tag">Authenticated Role</span>
                <h3 className="medical-role-title">Patients</h3>
              </div>
            </div>
            <p className="medical-role-desc">
              Patients interact with the application through dedicated self-service workflows centered on consultation scheduling and healthcare tracking.
            </p>
            <ul className="medical-role-list">
              <li>Register personal accounts and authenticate securely.</li>
              <li>Create and update patient profile and demographic information.</li>
              <li>Access a personalized dashboard tracking appointment statuses (Waiting, Upcoming, Completed, Rejected).</li>
              <li>Select hospitals and available doctors to schedule appointment slots.</li>
              <li>Book laboratory diagnostic tests and access medical reports through the application.</li>
            </ul>
          </div>

          {/* Role 2: Hospital Users / Administrators */}
          <div className="medical-role-card">
            <div className="medical-role-header">
              <div className="medical-role-icon-wrap" aria-hidden="true">
                <svg className="medical-role-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18" />
                  <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                  <path d="M9 7h1" />
                  <path d="M9 11h1" />
                  <path d="M9 15h1" />
                  <path d="M14 7h1" />
                  <path d="M14 11h1" />
                  <path d="M14 15h1" />
                </svg>
              </div>
              <div>
                <span className="medical-role-tag">Authenticated Role</span>
                <h3 className="medical-role-title">Hospital Administrators</h3>
              </div>
            </div>
            <p className="medical-role-desc">
              Hospital personnel oversee facility data, doctor affiliations, and incoming patient booking requests through administrative dashboards.
            </p>
            <ul className="medical-role-list">
              <li>Sign in to access administrative facility controls.</li>
              <li>Maintain hospital facility profiles, contact information, and bed capacity.</li>
              <li>Register and manage doctor profiles, specialities, and qualifications.</li>
              <li>Configure availability parameters, including working time slots, weekly days off, and holidays.</li>
              <li>Review appointment requests to confirm, reject, or mark appointments completed.</li>
            </ul>
          </div>

          {/* Managed Entities: Doctors */}
          <div className="medical-role-card">
            <div className="medical-role-header">
              <div className="medical-role-icon-wrap" aria-hidden="true">
                <svg className="medical-role-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="18" y1="8" x2="23" y2="8" />
                  <line x1="20.5" y1="5.5" x2="20.5" y2="10.5" />
                </svg>
              </div>
              <div>
                <span className="medical-role-tag">Managed Professional</span>
                <h3 className="medical-role-title">Doctors</h3>
              </div>
            </div>
            <p className="medical-role-desc">
              Within the implemented source code, doctors are managed professionals affiliated with hospital facilities rather than an independent authenticated user role.
            </p>
            <ul className="medical-role-list">
              <li>Profiles record medical qualifications (e.g. MBBS) and clinical specialities.</li>
              <li>Explicitly linked to specific hospital facilities in the relational database.</li>
              <li>Consultation availability and daily time slots are maintained by hospital administrators.</li>
              <li>Patient appointment bookings are mapped against configured doctor schedules.</li>
              <li>Appointment rosters display allocated patient consultations per doctor profile.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 5: Key Features
          ==================================================================== */}
      <section className="medical-features-section" aria-labelledby="medical-heading-features">
        <div className="medical-section-header">
          <span className="soundzone-section-tag">D · Key Features</span>
          <h2 id="medical-heading-features" className="soundzone-pair-title medical-features-title">
            Key Functional Features
          </h2>
          <p className="medical-features-lead">
            The system organizes functionality into structured feature groups covering identity management, patient care, administrative configuration, and scheduling logistics:
          </p>
        </div>

        <div className="medical-feature-groups-grid">
          {/* Group A: User Authentication and Accounts */}
          <div className="medical-feature-card">
            <div className="medical-feature-card-header">
              <div className="medical-feature-icon-wrap" aria-hidden="true">
                <svg className="medical-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <span className="medical-feature-group-tag">Authentication</span>
            </div>
            <h3 className="medical-feature-title">A. User Authentication &amp; Accounts</h3>
            <p className="medical-feature-desc">
              Provides dedicated user registration and credential login backed by Django authentication. Features role-based navigation for patients and hospital users, email confirmation, password reset workflows, and session termination.
            </p>
          </div>

          {/* Group B: Patient Management */}
          <div className="medical-feature-card">
            <div className="medical-feature-card-header">
              <div className="medical-feature-icon-wrap" aria-hidden="true">
                <svg className="medical-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="medical-feature-group-tag">Patient Portal</span>
            </div>
            <h3 className="medical-feature-title">B. Patient Management</h3>
            <p className="medical-feature-desc">
              Supports patient profile creation, editing, and personal information management. A dedicated patient dashboard summarizes appointment counts and tracks appointment statuses across waiting, upcoming, completed, and rejected states.
            </p>
          </div>

          {/* Group C: Doctor and Hospital Management */}
          <div className="medical-feature-card">
            <div className="medical-feature-card-header">
              <div className="medical-feature-icon-wrap" aria-hidden="true">
                <svg className="medical-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="medical-feature-group-tag">Directory</span>
            </div>
            <h3 className="medical-feature-title">C. Doctor &amp; Hospital Management</h3>
            <p className="medical-feature-desc">
              Maintains doctor profiles with professional qualifications and specialities, establishing relationships between doctors and hospitals. Captures hospital facility information, doctor availability schedules, hospital holidays, and weekly days off.
            </p>
          </div>

          {/* Group D: Appointment Scheduling */}
          <div className="medical-feature-card">
            <div className="medical-feature-card-header">
              <div className="medical-feature-icon-wrap" aria-hidden="true">
                <svg className="medical-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <span className="medical-feature-group-tag">Scheduling</span>
            </div>
            <h3 className="medical-feature-title">D. Appointment Scheduling</h3>
            <p className="medical-feature-desc">
              Enables patients to book and manage doctor appointments by selecting available dates and non-overlapping time slots. Checks existing bookings against doctor availability and tracks appointment status transitions through confirmation, rejection, and completion.
            </p>
          </div>

          {/* Group E: Laboratory Test Booking */}
          <div className="medical-feature-card">
            <div className="medical-feature-card-header">
              <div className="medical-feature-icon-wrap" aria-hidden="true">
                <svg className="medical-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
                </svg>
              </div>
              <span className="medical-feature-group-tag">Diagnostics</span>
            </div>
            <h3 className="medical-feature-title">E. Laboratory Test Booking</h3>
            <p className="medical-feature-desc">
              Allows patients to book laboratory diagnostic tests through the application, complementing doctor appointments within the healthcare workflow.
            </p>
          </div>

          {/* Group F: Medical Report Access */}
          <div className="medical-feature-card">
            <div className="medical-feature-card-header">
              <div className="medical-feature-icon-wrap" aria-hidden="true">
                <svg className="medical-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <span className="medical-feature-group-tag">Reports</span>
            </div>
            <h3 className="medical-feature-title">F. Medical Report Access</h3>
            <p className="medical-feature-desc">
              Provides patients with access to medical reports through the application, bringing diagnostic information into the same healthcare service experience.
            </p>
          </div>

          {/* Group G: Hospital Administration */}
          <div className="medical-feature-card medical-feature-card-wide">
            <div className="medical-feature-card-header">
              <div className="medical-feature-icon-wrap" aria-hidden="true">
                <svg className="medical-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <path d="M9 14l2 2 4-4" />
                </svg>
              </div>
              <span className="medical-feature-group-tag">Administration</span>
            </div>
            <h3 className="medical-feature-title">G. Hospital Administration</h3>
            <p className="medical-feature-desc">
              Empowers administrators to review incoming patient appointment requests, confirm or reject bookings, mark appointments as completed, maintain doctor rosters and facility details, configure scheduling restrictions such as holidays and weekly days off, and monitor key facility counts.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 6: User Workflows
          ==================================================================== */}
      <section className="medical-workflows-section" aria-labelledby="medical-heading-workflows">
        <div className="medical-section-header">
          <span className="soundzone-section-tag">E · User Workflows</span>
          <h2 id="medical-heading-workflows" className="soundzone-pair-title medical-features-title">
            Operational Workflows
          </h2>
          <p className="medical-features-lead">
            The system separates patient interaction from hospital administration into clearly delineated, sequential operational workflows:
          </p>
        </div>

        <div className="medical-workflows-container">
          {/* Patient Workflow */}
          <div className="medical-workflow-card">
            <div className="medical-workflow-header">
              <span className="medical-workflow-badge">Patient Workflow</span>
              <h3 className="medical-workflow-title">Self-Service Appointment Journey</h3>
            </div>
            <div className="medical-workflow-steps">
              <div className="medical-workflow-step">
                <span className="medical-step-num">01</span>
                <span className="medical-step-text">Registration / Login</span>
              </div>
              <div className="medical-workflow-arrow" aria-hidden="true">→</div>
              <div className="medical-workflow-step">
                <span className="medical-step-num">02</span>
                <span className="medical-step-text">Patient Dashboard</span>
              </div>
              <div className="medical-workflow-arrow" aria-hidden="true">→</div>
              <div className="medical-workflow-step">
                <span className="medical-step-num">03</span>
                <span className="medical-step-text">Appointment Management</span>
              </div>
              <div className="medical-workflow-arrow" aria-hidden="true">→</div>
              <div className="medical-workflow-step">
                <span className="medical-step-num">04</span>
                <span className="medical-step-text">Status Tracking</span>
              </div>
            </div>
            <p className="medical-workflow-note">
              Patients register, access their personal dashboard to check existing metrics, select a hospital and affiliated doctor with an open time slot, and track appointment progression across waiting, upcoming, completed, and rejected states.
            </p>
          </div>

          {/* Hospital Workflow */}
          <div className="medical-workflow-card">
            <div className="medical-workflow-header">
              <span className="medical-workflow-badge medical-badge-admin">Hospital Workflow</span>
              <h3 className="medical-workflow-title">Administrative Facility Management</h3>
            </div>
            <div className="medical-workflow-steps">
              <div className="medical-workflow-step">
                <span className="medical-step-num">01</span>
                <span className="medical-step-text">Administrative Login</span>
              </div>
              <div className="medical-workflow-arrow" aria-hidden="true">→</div>
              <div className="medical-workflow-step">
                <span className="medical-step-num">02</span>
                <span className="medical-step-text">Manage Hospital &amp; Doctors</span>
              </div>
              <div className="medical-workflow-arrow" aria-hidden="true">→</div>
              <div className="medical-workflow-step">
                <span className="medical-step-num">03</span>
                <span className="medical-step-text">Configure Availability</span>
              </div>
              <div className="medical-workflow-arrow" aria-hidden="true">→</div>
              <div className="medical-workflow-step">
                <span className="medical-step-num">04</span>
                <span className="medical-step-text">Review Requests</span>
              </div>
              <div className="medical-workflow-arrow" aria-hidden="true">→</div>
              <div className="medical-workflow-step">
                <span className="medical-step-num">05</span>
                <span className="medical-step-text">Update Status</span>
              </div>
            </div>
            <p className="medical-workflow-note">
              Hospital staff sign in, update facility profile data and doctor directories, define available time slots and scheduling constraints (weekly days off, holidays), review pending patient requests, and update statuses to confirmed, rejected, or completed.
            </p>
          </div>

          {/* Laboratory Workflow */}
          <div className="medical-workflow-card">
            <div className="medical-workflow-header">
              <span className="medical-workflow-badge">Laboratory Workflow</span>
              <h3 className="medical-workflow-title">Test Booking &amp; Report Access</h3>
            </div>
            <div className="medical-workflow-steps">
              <div className="medical-workflow-step">
                <span className="medical-step-num">01</span>
                <span className="medical-step-text">Laboratory Test Booking</span>
              </div>
              <div className="medical-workflow-arrow" aria-hidden="true">→</div>
              <div className="medical-workflow-step">
                <span className="medical-step-num">02</span>
                <span className="medical-step-text">Medical Report Access</span>
              </div>
            </div>
            <p className="medical-workflow-note">
              The laboratory workflow allows patients to book required diagnostic tests through the application and access their medical reports online.
            </p>
          </div>
        </div>

        {/* Application Screenshots Stepper (Inside the Medical Lab Booking System) */}
        <div className="chat-flow-section medical-stepper-wrap">
          <div className="chat-flow-header">
            <span className="soundzone-section-tag">Interactive Preview</span>
            <h3 className="soundzone-pair-title chat-flow-title">
              Inside the Medical Lab Booking System
            </h3>
            <p className="chat-flow-lead">
              Review verified interface screens across authentication, patient dashboards, doctor directory configuration, time slot allocation, and report management:
            </p>
          </div>

          {/* Stepper Navigation Pills */}
          <div ref={stepperNavRef} className="chat-stepper-nav" role="tablist" aria-label="Application flow steps">
            {MEDICAL_FLOW_STEPS.map((step) => {
              const isCurrent = step.step === activeStep;
              return (
                <button
                  key={step.step}
                  type="button"
                  role="tab"
                  id={`medical-step-tab-${step.step}`}
                  aria-selected={isCurrent}
                  aria-controls={`medical-step-panel-${step.step}`}
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
            id={`medical-step-panel-${currentFlowStep.step}`}
            role="tabpanel"
            aria-labelledby={`medical-step-tab-${currentFlowStep.step}`}
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
                  {activeStep} of {MEDICAL_FLOW_STEPS.length}
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
              <div className="chat-browser-window medical-flow-window">
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
                  <span className="chat-window-badge">Medical Lab</span>
                </div>
                <img
                  src={currentFlowStep.image}
                  alt={currentFlowStep.alt}
                  className="chat-window-img chat-step-img"
                  loading="eager"
                  draggable={false}
                />
                <figcaption className="chat-window-caption">
                  {currentFlowStep.caption}
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 7: Technical Implementation
          ==================================================================== */}
      <section className="soundzone-rationale-section medical-tech-section" aria-labelledby="medical-heading-tech">
        <div className="soundzone-rationale-header">
          <span className="soundzone-section-tag">F · Technical Implementation</span>
          <h2 id="medical-heading-tech" className="soundzone-rationale-heading">
            Confirmed Technical Implementation
          </h2>
          <p className="soundzone-rationale-lead">
            The project architecture is built upon confirmed Django and SQLite capabilities for server-side logic, data modeling, and scheduling enforcement:
          </p>
        </div>

        <div className="soundzone-rationale-grid medical-tech-grid">
          {/* Tech 1: Django Backend */}
          <div className="soundzone-rationale-item medical-tech-card">
            <div className="medical-tech-icon-wrap" aria-hidden="true">
              <svg className="medical-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Django Backend Architecture</h3>
            <span className="medical-tech-role">Server Framework &amp; Request Handling</span>
            <p className="soundzone-rationale-item-body">
              Python and Django drive the application's core backend, handling server-side request routing, view logic, role-specific navigation, and session management between patient and hospital interfaces.
            </p>
          </div>

          {/* Tech 2: SQLite Database */}
          <div className="soundzone-rationale-item medical-tech-card">
            <div className="medical-tech-icon-wrap" aria-hidden="true">
              <svg className="medical-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">SQLite Database Storage</h3>
            <span className="medical-tech-role">Relational Data Persistence</span>
            <p className="soundzone-rationale-item-body">
              SQLite serves as the relational database engine configured in the project settings, persistently storing user accounts, patient profiles, hospital records, doctor profiles, and appointment entries.
            </p>
          </div>

          {/* Tech 3: URL Routing & Views */}
          <div className="soundzone-rationale-item medical-tech-card">
            <div className="medical-tech-icon-wrap" aria-hidden="true">
              <svg className="medical-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Django URL Routing &amp; Views</h3>
            <span className="medical-tech-role">Endpoint Dispatching &amp; Context Binding</span>
            <p className="soundzone-rationale-item-body">
              Configured Django URLs route HTTP requests to dedicated view functions that query the database, enforce permission checks, bind data context, and render appropriate server-side templates.
            </p>
          </div>

          {/* Tech 4: Database Models */}
          <div className="soundzone-rationale-item medical-tech-card">
            <div className="medical-tech-icon-wrap" aria-hidden="true">
              <svg className="medical-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Entity Database Models</h3>
            <span className="medical-tech-role">Relational Schema Structure</span>
            <p className="soundzone-rationale-item-body">
              Django ORM models establish entity relationships connecting patients, hospital facilities, managed doctors, and appointments, maintaining relational integrity across clinical entities.
            </p>
          </div>

          {/* Tech 5: Authentication & Role Workflows */}
          <div className="soundzone-rationale-item medical-tech-card">
            <div className="medical-tech-icon-wrap" aria-hidden="true">
              <svg className="medical-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Role-Based Authentication</h3>
            <span className="medical-tech-role">Access Control &amp; Workflows</span>
            <p className="soundzone-rationale-item-body">
              Django user authentication handles credential verification, email confirmation, password resets, and session tracking, routing users to either patient or hospital administrative interfaces.
            </p>
          </div>

          {/* Tech 6: Scheduling & Availability */}
          <div className="soundzone-rationale-item medical-tech-card">
            <div className="medical-tech-icon-wrap" aria-hidden="true">
              <svg className="medical-tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="soundzone-rationale-item-title">Scheduling &amp; Status Engine</h3>
            <span className="medical-tech-role">Availability &amp; Lifecycle Logic</span>
            <p className="soundzone-rationale-item-body">
              Enforces scheduling logic by checking doctor working hours, hospital holidays, and weekly days off, while managing appointment transitions across waiting, confirmed, completed, and rejected states.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 8: Technical Challenges
          ==================================================================== */}
      <section className="medical-challenges-section" aria-labelledby="medical-heading-challenges">
        <div className="medical-section-header">
          <span className="soundzone-section-tag">G · Technical Challenges</span>
          <h2 id="medical-heading-challenges" className="soundzone-pair-title medical-features-title">
            Implementation Considerations
          </h2>
          <p className="medical-features-lead">
            Key architectural and operational challenges addressed during the design and development of the system:
          </p>
        </div>

        <div className="medical-challenges-grid">
          {/* Challenge 1: Appointment States */}
          <div className="medical-challenge-card">
            <span className="medical-challenge-num">01</span>
            <h3 className="medical-challenge-title">Managing Appointment States</h3>
            <p className="medical-challenge-body">
              Implementing reliable state progression across waiting, upcoming (confirmed), completed, and rejected statuses. State updates require validation to ensure that hospital administrators can transition appointment records cleanly while keeping patient dashboard counters synchronized.
            </p>
          </div>

          {/* Challenge 2: Availability Verification */}
          <div className="medical-challenge-card">
            <span className="medical-challenge-num">02</span>
            <h3 className="medical-challenge-title">Checking Availability Before Scheduling</h3>
            <p className="medical-challenge-body">
              Ensuring that time slots displayed during appointment booking accurately reflect available openings. The system must verify that a doctor has an active time slot and that no concurrent booking exists for the same practitioner at the selected time.
            </p>
          </div>

          {/* Challenge 3: Existing Bookings & Restrictions */}
          <div className="medical-challenge-card">
            <span className="medical-challenge-num">03</span>
            <h3 className="medical-challenge-title">Accounting for Scheduling Restrictions</h3>
            <p className="medical-challenge-body">
              Incorporating calendar restrictions into slot generation, including doctor working hours, recurring weekly days off, and hospital holidays. The scheduling logic must cross-reference these restrictions to prevent appointments from being booked on non-operational days.
            </p>
          </div>

          {/* Challenge 4: Organizing Relational Information */}
          <div className="medical-challenge-card">
            <span className="medical-challenge-num">04</span>
            <h3 className="medical-challenge-title">Organizing Patient, Doctor &amp; Hospital Data</h3>
            <p className="medical-challenge-body">
              Designing relational schemas in SQLite that structure associations between patient accounts, hospital facilities, and managed doctor profiles without data duplication, ensuring foreign-key relationships remain consistent across scheduling queries.
            </p>
          </div>

          {/* Challenge 5: Separating Workflows */}
          <div className="medical-challenge-card">
            <span className="medical-challenge-num">05</span>
            <h3 className="medical-challenge-title">Separating Patient &amp; Hospital Workflows</h3>
            <p className="medical-challenge-body">
              Maintaining clear operational boundaries between patient-facing booking views and hospital administrative screens. Ensuring that view routing, navigation menus, and data mutations are strictly segmented based on user authorization.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 9: Outcome and Learnings
          ==================================================================== */}
      <section className="medical-outcome-section" aria-labelledby="medical-heading-outcome">
        <div className="medical-outcome-banner">
          <div className="medical-outcome-meta">
            <span className="soundzone-section-tag">H · Outcome &amp; Learnings</span>
            <h2 id="medical-heading-outcome" className="soundzone-pair-title medical-outcome-title">
              Practical Development &amp; Healthcare Information Management
            </h2>
          </div>
          <div className="medical-outcome-body">
            <p>
              The Medical Lab Booking System provided an opportunity to design and develop a full-stack Django web application combining user authentication, relational database workflows, and healthcare scheduling logic.
            </p>
            <p>
              The project provided hands-on experience in modeling multi-entity relationships in SQLite, coordinating doctor availability against facility restrictions, managing appointment state lifecycles, and keeping patient self-service distinct from hospital administrative controls. Bringing together patient management, appointment scheduling, laboratory test booking, and medical report access within a single architecture reinforced practical insights into structuring complex healthcare logistics on the web.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
