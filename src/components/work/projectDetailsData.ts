import ecommerceHeroImg from '../../assets/images/projects/ecommerce/hero.png';
import ecommerceImg from '../../assets/images/projects/ecommerce.png';
import homeManagerImg from '../../assets/images/projects/home manager.png';
import homeManagerHeroImg from '../../assets/images/projects/home_manager/Home Manager_hero.png';
import soundzoneImg from '../../assets/images/projects/soundzone.png';
import mathmosImg from '../../assets/images/projects/mathmos.png';
import medicalImg from '../../assets/images/projects/medical.png';
import medicalHeroImg from '../../assets/images/projects/medical/Medical Lab_hero.png';
import chatImg from '../../assets/images/projects/chat.png';
import chatHeroImg from '../../assets/images/projects/chat/Chat_hero.png';
import petAdoptionImg from '../../assets/images/projects/pet adoption.jpg';
import apprenticeImg from '../../assets/images/projects/apprentice.jpg';
import apprenticeHeroImg from '../../assets/images/projects/apprentice/Apprentice App Hero.png';
import portfolioImg from '../../assets/images/projects/portfolio.jpg';

import figmaIcon from '../../assets/icons/figma.svg';
import codeIcon from '../../assets/icons/code.svg';

export type ProjectNavSource = 'home-work' | 'all-projects';

export interface ProjectDetailsItem {
  id: string;
  name: string;
  title: string;
  category: string;
  image: string;
  mainImage: string;
  imageOrientation: 'landscape' | 'portrait' | 'phone-group';
  imageMaxWidth?: number;
  imageMaxHeight?: number;
  iconType: 'figma' | 'code';
  iconSrc: string;
  link: string;
  order: number;

  // Dynamic project details
  summary: string;
  duration: string;
  role: string;
  tools: string;
  type: string;
  impact: string;
  focus?: string;
  subtitle?: string;
}

/**
 * CANONICAL PROJECT DETAILS COLLECTION
 * 
 * Single source of truth for all projects across Portfolio Work, View More, and Project Details.
 * The order is canonical and circular:
 * 1. Ecommerce
 * 2. Home Manager
 * 3. SoundZone
 * 4. Mathmos
 * 5. Medical
 * 6. Chat Application
 * 7. Adoption Design (Project 7)
 * 8. Apprentice Learning Tracker (Project 8)
 * 9. Portfolio Website (Project 9)
 */
export const PROJECT_DETAILS_LIST: ProjectDetailsItem[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Mobile App',
    title: 'E-Commerce Mobile App',
    category: 'UI/UX Design • Mobile Application',
    image: ecommerceImg,
    mainImage: ecommerceHeroImg,
    imageOrientation: 'phone-group',
    imageMaxWidth: 960,
    imageMaxHeight: 440,
    iconType: 'figma',
    iconSrc: figmaIcon,
    link: '#project-ecommerce',
    order: 1,
    summary:
      'Designed a personalized mobile shopping experience that helps users discover products based on their interests, explore curated recommendations, and manage wishlists, profiles, and shopping carts. The concept covers both member and non-member journeys, including onboarding, personalization, product discovery, and checkout, with a focus on making the shopping experience intuitive and engaging.',
    duration: '2 Months',
    role: 'UI/UX Designer',
    tools: 'Figma',
    type: 'Concept Project · Course Assignment',
    impact:
      'Aims to make everyday online shopping more convenient through intuitive navigation, clear product presentation, and a straightforward browsing experience, helping users explore products with minimal friction.',
  },
  {
    id: 'home-manager',
    name: 'Home Manager',
    title: 'Home Manager',
    category: 'Application Development',
    image: homeManagerImg,
    mainImage: homeManagerHeroImg,
    imageOrientation: 'landscape',
    imageMaxWidth: 1000,
    imageMaxHeight: 560,
    iconType: 'code',
    iconSrc: codeIcon,
    link: '#project-home-manager',
    order: 2,
    summary:
      'Developed an Android application that brings everyday tasks, important documents, and daily news together in one place. Built using Java, XML, and Firebase, the app features three core modules: a Reminder system to track vehicle, appliance, and short-term tasks; a Digital Locker to store important images and documents digitally; and an integrated News section with search capabilities. User authentication manages access to features, while a centralized dashboard coordinates utility management.',
    duration: '5 Months',
    role: 'Developer',
    tools: 'Java, XML, Android Studio, Firebase',
    type: 'Mobile App Development · Academic Project',
    impact:
      'Brings essential everyday utilities into a single mobile application, helping users keep track of tasks, access important digital documents, and stay informed about current events without switching between separate apps.',
  },
  {
    id: 'soundzone',
    name: 'SoundZone',
    title: 'SoundZone Audio Experience',
    category: 'Product Design • Audio Web Experience',
    image: soundzoneImg,
    mainImage: soundzoneImg,
    imageOrientation: 'landscape',
    imageMaxWidth: 1000,
    imageMaxHeight: 560,
    iconType: 'figma',
    iconSrc: figmaIcon,
    link: '#project-soundzone',
    order: 3,
    summary:
      'Designed a premium headphone shopping experience in Figma, built around the connection between sound, technology, and product aesthetics. The interface brings product discovery and visual storytelling together through a clean layout, bold product imagery, and a cohesive visual identity, creating a shopping experience that feels modern, intuitive, and immersive.',
    duration: '1 Month',
    role: 'UI/UX Designer',
    tools: 'Figma',
    type: 'Website Design',
    impact:
      'Designed to make headphone discovery feel as considered as the listening experience itself, helping users explore audio products through clear product presentation, intuitive navigation, and a visually engaging shopping interface.',
  },
  {
    id: 'mathmos',
    name: 'Mathmos',
    title: 'Mathmos',
    category: 'E-Commerce Experience • Mobile App',
    image: mathmosImg,
    mainImage: mathmosImg,
    imageOrientation: 'portrait',
    imageMaxWidth: 540,
    imageMaxHeight: 760,
    iconType: 'figma',
    iconSrc: figmaIcon,
    link: '#project-mathmos',
    order: 4,
    summary:
      'An independent mobile app concept for Mathmos, reimagining its iconic lava lamp shopping experience for smartphones. Designed in Figma, the concept brings together product discovery, lamp customization, collections, wishlists, checkout, and a reusable component system to explore how the brand’s shopping experience could translate to mobile.',
    duration: '2 Months',
    role: 'UI/UX Designer',
    tools: 'Figma',
    type: 'Mobile App Concept Project',
    impact:
      'Demonstrated how a mobile-first experience could simplify product exploration and customization, creating a more engaging and accessible customer journey for the brand.',
  },
  {
    id: 'medical',
    name: 'Medical Lab Booking System',
    title: 'Medical Lab Booking System',
    subtitle: 'Healthcare Appointment and Laboratory Management System',
    category: 'Full-Stack Web Application',
    image: medicalImg,
    mainImage: medicalHeroImg,
    imageOrientation: 'landscape',
    imageMaxWidth: 1000,
    imageMaxHeight: 560,
    iconType: 'code',
    iconSrc: codeIcon,
    link: '#project-medical',
    order: 5,
    summary:
      'A healthcare management web application designed to organize patient and hospital workflows, doctor appointments, laboratory test booking, and medical report access. Built with Python, Django, and SQLite, the system coordinates appointment scheduling, doctor availability, patient records, laboratory test booking, and medical report access.',
    duration: '',
    role: 'Developer',
    tools: 'Python, Django, HTML, CSS, JavaScript, SQLite',
    type: 'Full-Stack Web Application',
    impact:
      'Addresses the organizational challenges of healthcare administration by bringing patient records, doctor scheduling, hospital administration, and laboratory services into a unified Django web application.',
  },
  {
    id: 'chat',
    name: 'Chat App',
    title: 'Chat App',
    subtitle: 'Real-Time-Style Messaging with Django',
    category: 'Full-Stack Web Application',
    image: chatImg,
    mainImage: chatHeroImg,
    imageOrientation: 'landscape',
    imageMaxWidth: 1000,
    imageMaxHeight: 560,
    iconType: 'code',
    iconSrc: codeIcon,
    link: '#project-chat',
    order: 6,
    summary:
      'The Chat App is a Django-based web application that enables registered users to communicate through individual conversations. It combines user authentication, a user directory, message sending, conversation history, and periodic message updates within a simple browser-based messaging interface. Built with Django on the backend and HTML, CSS, JavaScript, and jQuery on the frontend, the application uses AJAX requests to send messages and retrieve newer messages without requiring a full-page reload for each update.',
    duration: '',
    role: 'Developer',
    tools: 'Python, Django, HTML, CSS, JavaScript, jQuery, Bootstrap, SQLite',
    type: 'Full-Stack Web Application',
    impact:
      'Demonstrates how a browser-based messaging application can coordinate user authentication, conversation history, and asynchronous AJAX message updates within a unified Django architecture.',
  },
  {
    id: 'project-07',
    name: 'Pet Adoption Website',
    title: 'Pet Adoption Website',
    category: 'Website Design • Concept',
    image: petAdoptionImg,
    mainImage: petAdoptionImg,
    imageOrientation: 'landscape',
    imageMaxWidth: 1000,
    imageMaxHeight: 560,
    iconType: 'figma',
    iconSrc: figmaIcon,
    link: '#project-project-07',
    order: 7,
    summary:
      'Designed a pet adoption website concept that helps people discover available animals, explore their profiles, and understand the adoption journey.  The goal was to make pet discovery feel approachable while presenting essential information clearly throughout the journey.',
    duration: '2 Weeks',
    role: 'UI/UX Designer',
    tools: 'Figma',
    type: 'Pet Adoption Website Concept',
    impact:
      'Aims to make pet adoption feel more approachable by presenting available animals clearly, explaining the adoption process, and building trust through transparent information, detailed profiles, and accessible support resources.',
  },
  {
    id: 'project-08',
    name: 'Apprentice App',
    title: 'Apprentice App',
    category: 'Mobile App UI/UX Concept',
    image: apprenticeImg,
    mainImage: apprenticeHeroImg,
    imageOrientation: 'landscape',
    imageMaxWidth: 1000,
    imageMaxHeight: 560,
    iconType: 'figma',
    iconSrc: figmaIcon,
    link: '#project-project-08',
    order: 8,
    summary:
      'Apprentice App is a mobile app concept designed to help apprentices record their learning activities, organise their learning journey, set goals, and track their progress. The project combines UX research and information architecture with a clean, approachable mobile interface designed to make learning activities easier to document and manage.',
    duration: '',
    role: 'UI/UX Designer',
    tools: 'Figma',
    type: 'Mobile App UI/UX Concept',
    focus: 'UX Research, Information Architecture, User Flows, Wireframing, and UI Design',
    impact:
      'Designed to turn scattered learning experiences into an organized, motivating record of growth, helping apprentices reflect on what they have learned, identify areas for improvement, and build a clearer picture of their developing skills.',
  },
  {
    id: 'project-09',
    name: 'Personal Portfolio',
    title: 'Personal Portfolio',
    category: 'UI/UX Design • Frontend Development',
    image: portfolioImg,
    mainImage: portfolioImg,
    imageOrientation: 'landscape',
    imageMaxWidth: 1000,
    imageMaxHeight: 560,
    iconType: 'code',
    iconSrc: codeIcon,
    link: '#project-project-09',
    order: 9,
    summary:
      'Designed in Figma and developed as a responsive web experience, this personal portfolio bridges UI/UX design with frontend implementation. The project showcases a design-led process where intentional typography, dark visual hierarchy, and component consistency were translated into a high-performance website using React, TypeScript, and an AI-assisted coding workflow in Google Antigravity IDE.',
    duration: '1.5 Months',
    role: 'UI/UX Designer & Frontend Developer',
    tools: 'Figma • Google Antigravity IDE • React • TypeScript • Vite • CSS',
    type: 'Portfolio',
    focus: 'UI/UX Design, Responsive Design, Frontend Development, AI-Assisted Coding',
    impact:
      'Brings design and development work together into a single platform, demonstrating the ability to craft refined interface designs in Figma and translate them into a responsive, accessible website through a modern AI-assisted engineering workflow.',
  },
];

/**
 * Helper to fetch a project by its id (case-insensitive fallback)
 */
export const getProjectDetailsById = (id?: string | null): ProjectDetailsItem => {
  if (!id) return PROJECT_DETAILS_LIST[3]; // Default to Project 4 (Mathmos)
  const normalized = id.toLowerCase().replace(/^(project-|work-)/, '');
  if (
    normalized === '01' ||
    normalized === '1' ||
    normalized === 'ecommerce' ||
    normalized === 'ecommerce-mobile-app' ||
    normalized === 'ecommerce-app'
  ) {
    const ecomProj = PROJECT_DETAILS_LIST.find((p) => p.id === 'ecommerce');
    if (ecomProj) return ecomProj;
  }
  if (
    normalized === '02' ||
    normalized === '2' ||
    normalized === 'home-manager' ||
    normalized === 'home_manager' ||
    normalized === 'home-manager-app'
  ) {
    const hmProj = PROJECT_DETAILS_LIST.find((p) => p.id === 'home-manager');
    if (hmProj) return hmProj;
  }
  if (
    normalized === '05' ||
    normalized === '5' ||
    normalized === 'medical' ||
    normalized === 'medical-lab-system' ||
    normalized === 'medical-lab-booking-system' ||
    normalized === 'medical-management' ||
    normalized === 'medical-healthcare-management'
  ) {
    const medProj = PROJECT_DETAILS_LIST.find((p) => p.id === 'medical');
    if (medProj) return medProj;
  }
  if (
    normalized === '06' ||
    normalized === '6' ||
    normalized === 'chat' ||
    normalized === 'chat-app' ||
    normalized === 'chat-application' ||
    normalized === 'chat-web-application'
  ) {
    const chatProj = PROJECT_DETAILS_LIST.find((p) => p.id === 'chat');
    if (chatProj) return chatProj;
  }
  if (
    normalized === '07' ||
    normalized === '7' ||
    normalized === 'pet-adoption' ||
    normalized === 'pet' ||
    normalized === 'adoption'
  ) {
    const petProj = PROJECT_DETAILS_LIST.find((p) => p.id === 'project-07');
    if (petProj) return petProj;
  }
  if (
    normalized === '08' ||
    normalized === '8' ||
    normalized === 'apprentice' ||
    normalized === 'apprentice-app' ||
    normalized === 'apprentice-learning-tracker'
  ) {
    const appProj = PROJECT_DETAILS_LIST.find((p) => p.id === 'project-08');
    if (appProj) return appProj;
  }
  if (
    normalized === '09' ||
    normalized === '9' ||
    normalized === 'portfolio' ||
    normalized === 'personal-portfolio' ||
    normalized === 'personal-portfolio-website'
  ) {
    const portProj = PROJECT_DETAILS_LIST.find((p) => p.id === 'project-09');
    if (portProj) return portProj;
  }
  const num = parseInt(normalized, 10);
  if (!isNaN(num) && num >= 1 && num <= PROJECT_DETAILS_LIST.length) {
    return PROJECT_DETAILS_LIST[num - 1];
  }
  const found = PROJECT_DETAILS_LIST.find(
    (p) => p.id.toLowerCase() === normalized || p.id.toLowerCase() === id.toLowerCase()
  );
  return found || PROJECT_DETAILS_LIST[3];
};

/**
 * Circular navigation helper:
 * Calculates Previous and Next in circular fashion:
 * 1 ⇄ 2 ⇄ 3 ⇄ 4 ⇄ 5 ⇄ 6 ⇄ 7 ⇄ 8 ⇄ 9 ⇄ 1
 */
export const getCircularProjectNavigation = (
  currentId: string
): { previous: ProjectDetailsItem; next: ProjectDetailsItem } => {
  const currentProject = getProjectDetailsById(currentId);
  const validIndex = PROJECT_DETAILS_LIST.findIndex((p) => p.id === currentProject.id);
  const index = validIndex >= 0 ? validIndex : 3;
  const count = PROJECT_DETAILS_LIST.length;

  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  return {
    previous: PROJECT_DETAILS_LIST[prevIndex],
    next: PROJECT_DETAILS_LIST[nextIndex],
  };
};
