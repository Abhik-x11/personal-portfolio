import React from 'react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              &lt;<span>Abhik</span><span className="gradient-text">.Dev</span> /&gt;
            </a>
            <p className="footer-tagline">
              Crafting modern, responsive user interfaces and scalable web applications with React and clean architecture.
            </p>
          </div>

          <div className="footer-nav">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Abhik. Built with React &amp; JSX. All rights reserved.
            <span className="footer-pill-assignment">Assignment 1: React Portfolio</span>
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <span>↑ Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
