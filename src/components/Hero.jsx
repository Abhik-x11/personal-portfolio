import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="pulse-dot"></span>
            <span>Available for New Opportunities</span>
          </div>

          <p className="hero-greeting">Hello, world! I am</p>
          <h1 className="hero-title">
            <span className="gradient-text">Abhik</span>
          </h1>

          <h2 className="hero-role">
            Full Stack <span className="cyan-gradient-text">React Developer</span> & UI Builder
          </h2>

          <p className="hero-desc">
            Passionate about transforming creative ideas into interactive, scalable, and responsive web applications with React, modern JavaScript, and clean component-driven architecture.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore Projects ➔
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num gradient-text">12+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-num cyan-gradient-text">100%</span>
              <span className="stat-label">Responsive Design</span>
            </div>
            <div className="stat-item">
              <span className="stat-num gradient-text">Modern</span>
              <span className="stat-label">Tech Stack</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="avatar-glow-ring"></div>
            <div className="avatar-card">
              <img 
                src="/avatar.jpg" 
                alt="Abhik - React Developer" 
                className="avatar-image" 
              />
            </div>
            <div className="hero-floating-badge">
              <span className="badge-icon">⚡</span>
              <div>
                <span className="badge-text-primary">React 19 & JSX</span>
                <span className="badge-text-sub">Fast & Modular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
