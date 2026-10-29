import React from 'react';

interface IconProps {
  className?: string;
}

export const CodeIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg
    className={`work-with-icon work-with-icon-code ${className}`.trim()}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M33 28L12 50L33 72"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M59 10L41 90"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <path
      d="M67 28L88 50L67 72"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FigmaIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg
    className={`work-with-icon work-with-icon-figma ${className}`.trim()}
    viewBox="0 0 70 104"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Top-left */}
    <path
      d="M 19 4 H 35 V 36 H 19 C 10.7 36 4 28.8 4 20 C 4 11.2 10.7 4 19 4 Z"
      stroke="currentColor"
      strokeWidth="6.5"
      strokeLinejoin="round"
    />
    {/* Top-right */}
    <path
      d="M 35 4 H 51 C 59.3 4 66 11.2 66 20 C 66 28.8 59.3 36 51 36 H 35 V 4 Z"
      stroke="currentColor"
      strokeWidth="6.5"
      strokeLinejoin="round"
    />
    {/* Mid-left */}
    <path
      d="M 19 36 H 35 V 68 H 19 C 10.7 68 4 60.8 4 52 C 4 43.2 10.7 36 19 36 Z"
      stroke="currentColor"
      strokeWidth="6.5"
      strokeLinejoin="round"
    />
    {/* Mid-right (Circle) */}
    <circle
      cx="51"
      cy="52"
      r="15"
      stroke="currentColor"
      strokeWidth="6.5"
    />
    {/* Bottom-left (Teardrop) */}
    <path
      d="M 19 68 H 35 V 84 C 35 92.8 28.3 100 20 100 C 11.2 100 4 92.8 4 84 C 4 75.2 10.7 68 19 68 Z"
      stroke="currentColor"
      strokeWidth="6.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const AndroidIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg
    className={`work-with-icon work-with-icon-android ${className}`.trim()}
    viewBox="0 0 100 70"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line
      x1="26"
      y1="23"
      x2="19"
      y2="9"
      stroke="currentColor"
      strokeWidth="4.2"
      strokeLinecap="round"
    />
    <line
      x1="74"
      y1="23"
      x2="81"
      y2="9"
      stroke="currentColor"
      strokeWidth="4.2"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      d="
        M 6 56
        A 44 44 0 0 1 94 56
        Z
        M 30 36
        A 3.6 3.6 0 1 0 30 43.2
        A 3.6 3.6 0 1 0 30 36
        Z
        M 70 36
        A 3.6 3.6 0 1 0 70 43.2
        A 3.6 3.6 0 1 0 70 36
        Z
      "
    />
  </svg>
);
