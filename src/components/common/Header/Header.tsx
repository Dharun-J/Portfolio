import React, { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { MobileNav } from '../MobileNav/MobileNav';
import { NAV_ITEMS_DESKTOP } from '../../../types/navigation';
import './Header.css';

interface HeaderProps {
  activeNavId?: string;
  onNavSelect?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeNavId = '',
  onNavSelect,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header" data-cursor-theme="dark">
      <div className="header-container">
        <div className="header-left">
          <Logo onClick={() => onNavSelect && onNavSelect('home')} />
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav-desktop" aria-label="Main Navigation">
          <ul className="desktop-nav-list">
            {NAV_ITEMS_DESKTOP.map((item) => {
              const isActive = item.id === activeNavId;
              return (
                <li key={item.id} className="desktop-nav-item">
                  <a
                    href={item.href}
                    className={`desktop-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavSelect) onNavSelect(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="header-nav-mobile-trigger">
          <button
            type="button"
            className="hamburger-button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </div>

      {/* Slide-out Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        activeId={activeNavId === 'about' ? 'home' : activeNavId}
        onClose={() => setMobileMenuOpen(false)}
        onSelect={(id) => {
          if (onNavSelect) onNavSelect(id);
        }}
      />
    </header>
  );
};
