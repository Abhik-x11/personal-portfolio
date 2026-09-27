import React from 'react';
import './Projects.css';

export default function Projects() {
  const projectsData = [
    {
      title: 'Personal Developer Portfolio',
      category: 'React & JSX',
      icon: '💼',
      description: 'A responsive, modular personal portfolio built with React 19, JSX, and customized external CSS following component-driven architecture.',
      tech: ['React.js', 'JSX', 'External CSS', 'Vite', 'Responsive'],
      demoLink: '#home',
      githubLink: 'https://github.com/Abhik-x11/personal-portfolio'
    },
    {
      title: 'TaskFlow Agile Kanban Board',
      category: 'Web Application',
      icon: '📊',
      description: 'Productivity and project management tool featuring drag-and-drop tasks, custom sprint lanes, deadline alerts, and localStorage sync.',
      tech: ['React Hooks', 'State Management', 'Flexbox', 'Web Storage API'],
      demoLink: '#projects',
      githubLink: 'https://github.com'
    },
    {
      title: 'WeatherSphere Real-time Dashboard',
      category: 'API Integration',
      icon: '🌤️',
      description: 'Dynamic climate dashboard delivering interactive 7-day meteorological forecasts, interactive charts, and geolocation searches.',
      tech: ['React', 'Async/Fetch', 'REST API', 'CSS Grid', 'JSON'],
      demoLink: '#projects',
      githubLink: 'https://github.com'
    },
    {
      title: 'DevLearn Online Code Playground',
      category: 'EdTech App',
      icon: '💻',
      description: 'In-browser interactive coding sandbox supporting live HTML/CSS/JS execution, instant console logging, and sharable snippets.',
      tech: ['JavaScript ES6+', 'React Components', 'External CSS', 'Vite'],
      demoLink: '#projects',
      githubLink: 'https://github.com'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Showcase</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of modern web applications showcasing modular JSX structure, clean code, and user-centric design.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-banner">
                <span className="project-icon-large">{project.icon}</span>
                <span className="project-category-tag">{project.category}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-stack">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.demoLink} className="btn btn-primary project-btn">
                    Live Demo ↗
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-secondary project-btn"
                  >
                    GitHub ⌥
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
