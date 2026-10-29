import React from 'react';
import logoSvg from '../../../assets/logo.svg';
import './Logo.css';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <a
      href="#"
      className={`site-logo ${className}`}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label="Portfolio home"
    >
      <img
        src={logoSvg}
        alt="Portfolio home"
        className="header-logo"
        width="1493"
        height="384"
      />
    </a>
  );
};
