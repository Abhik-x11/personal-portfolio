import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <span className="logo-symbol">&lt;</span>
          <span>Abhik</span>
          <span className="gradient-text">.Dev</span>
          <span className="logo-symbol">/&gt;</span>
        </a>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="#education" className="nav-link" onClick={closeMenu}>Education</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          <a href="#contact" className="btn btn-primary mobile-action-btn" onClick={closeMenu}>
            Hire Me
          </a>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary nav-btn">
            Hire Me
          </a>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
