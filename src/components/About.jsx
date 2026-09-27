import React from 'react';
import './About.css';

export default function About() {
  const highlights = [
    {
      icon: '🧩',
      title: 'Component Architecture',
      desc: 'Crafting clean, decoupled, and reusable JSX components following industry-standard React design patterns.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      desc: 'Guaranteeing seamless, pixel-perfect user experiences across smartphones, tablets, laptops, and ultra-wide displays.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      desc: 'Minimizing render cycles, utilizing fast build tooling with Vite, and writing performant modern CSS.'
    },
    {
      icon: '🚀',
      title: 'Modern Tooling',
      desc: 'Expertise with Git version control, GitHub workflows, npm package management, and modern Web APIs.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get to Know Me</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A developer dedicated to writing elegant code and building interactive digital experiences.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I am Abhik, a dedicated software developer specializing in React.js and modern front-end engineering. I love building web applications that not only look visually stunning but are also fast, accessible, and structured with clean, maintainable code.
            </p>
            <p>
              My journey began with curiosity about how websites operate behind the scenes. Today, I build dynamic user interfaces using JSX, manage complex state efficiently, and integrate external CSS modules to create polished, high-conversion user interfaces.
            </p>

            <div className="about-highlight-box">
              <p className="about-highlight-text">
                "Great software is built at the intersection of robust architecture, intuitive design, and clean code that solves real human problems."
              </p>
            </div>

            <div className="about-meta-list">
              <div className="meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-val">India (Available Globally)</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Focus Area</span>
                <span className="meta-val">React & Modern Web Apps</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Experience</span>
                <span className="meta-val">Academic & Freelance Projects</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Status</span>
                <span className="meta-val">Open for Opportunities</span>
              </div>
            </div>
          </div>

          <div className="about-cards-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon-wrapper">{item.icon}</div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
