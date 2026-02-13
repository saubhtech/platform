'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'hi', label: 'हिन्दी', short: 'HI' },
  { code: 'bn', label: 'বাংলা', short: 'BN' },
  { code: 'te', label: 'తెలుగు', short: 'TE' },
  { code: 'mr', label: 'मराठी', short: 'MR' },
  { code: 'ta', label: 'தமிழ்', short: 'TA' },
  { code: 'gu', label: 'ગુજરાતી', short: 'GU' },
  { code: 'ur', label: 'اردو', short: 'UR' },
  { code: 'kn', label: 'ಕನ್ನಡ', short: 'KN' },
  { code: 'or', label: 'ଓଡ଼ିଆ', short: 'OR' },
  { code: 'ml', label: 'മലയാളം', short: 'ML' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', short: 'PA' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleLangSelect = (lang: typeof languages[0]) => {
    setSelectedLang(lang);
    setLangOpen(false);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`nav${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          <a href="/" className="nav-logo" aria-label="Saubh.Tech Home">
            <Image
              src="/images/Saubh-logo.png"
              alt="Saubh.Tech Logo"
              width={40}
              height={40}
            />
            <span>
              Saubh<span className="dot">.</span>Tech
            </span>
          </a>

          <div className="nav-links">
            <a href="#gig-work">
              <i className="fas fa-briefcase"></i> Gig-work
            </a>
            <a href="#branding">
              <i className="fas fa-bullhorn"></i> Branding
            </a>
            <a href="#saubhos">
              <i className="fas fa-microchip"></i> SaubhOS
            </a>
            <a href="#learning">
              <i className="fas fa-graduation-cap"></i> Academy
            </a>
            <a href="#faq">
              <i className="fas fa-headset"></i> Support
            </a>

            <div className="lang-switcher" ref={langRef}>
              <button
                className="lang-btn"
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Select language"
              >
                <i className="fas fa-globe"></i> {selectedLang.short}{' '}
                <i className="fas fa-chevron-down" style={{ fontSize: '.6rem' }}></i>
              </button>
              <div className={`lang-dropdown${langOpen ? ' open' : ''}`}>
                <div className="lang-dropdown-inner">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`lang-option${lang.code === selectedLang.code ? ' active' : ''}`}
                      onClick={() => handleLangSelect(lang)}
                    >
                      <span className="lang-label">{lang.label}</span>
                      <span className="lang-code">{lang.short}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a href="#login" className="nav-cta">
              <i className="fas fa-arrow-right-to-bracket"></i> Login
            </a>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        <a href="#gig-work" onClick={closeMenu}>
          <i className="fas fa-briefcase"></i> Gig-work
        </a>
        <a href="#branding" onClick={closeMenu}>
          <i className="fas fa-bullhorn"></i> Branding
        </a>
        <a href="#saubhos" onClick={closeMenu}>
          <i className="fas fa-microchip"></i> SaubhOS
        </a>
        <a href="#learning" onClick={closeMenu}>
          <i className="fas fa-graduation-cap"></i> Academy
        </a>
        <a href="#faq" onClick={closeMenu}>
          <i className="fas fa-headset"></i> Support
        </a>

        <div className="mobile-lang-grid">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`mobile-lang-btn${lang.code === selectedLang.code ? ' active' : ''}`}
              onClick={() => { 
                handleLangSelect(lang); 
                closeMenu(); 
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>

        <a href="#login" onClick={closeMenu} className="mobile-login-btn">
          <i className="fas fa-arrow-right-to-bracket"></i> Login
        </a>
      </div>
    </>
  );
}
