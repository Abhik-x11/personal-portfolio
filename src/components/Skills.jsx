import React, { useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = [
    {
      name: 'React.js & Hooks',
      category: 'frontend',
      level: 95,
      icon: '⚛️',
      tags: ['Components', 'Hooks', 'State Management', 'Vite']
    },
    {
      name: 'JSX & Component Architecture',
      category: 'frontend',
      level: 95,
      icon: '📐',
      tags: ['Modular Design', 'Props', 'Lifecycle', 'Virtual DOM']
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      level: 90,
      icon: '💛',
      tags: ['Async/Await', 'Promises', 'Closures', 'ESNext']
    },
    {
      name: 'HTML5 & Semantic Structure',
      category: 'frontend',
      level: 95,
      icon: '🌐',
      tags: ['Accessibility', 'SEO', 'Semantic Tags', 'DOM']
    },
    {
      name: 'External CSS & Responsive Styling',
      category: 'frontend',
      level: 92,
      icon: '🎨',
      tags: ['Flexbox', 'CSS Grid', 'Keyframe Animations', 'Media Queries']
    },
    {
      name: 'Node.js & Express.js',
      category: 'backend',
      level: 80,
      icon: '🟢',
      tags: ['REST APIs', 'Middleware', 'Routing', 'JSON Server']
    },
    {
      name: 'Database & Data Storage',
      category: 'backend',
      level: 75,
      icon: '🗄️',
      tags: ['MongoDB', 'SQL Basics', 'Local Storage', 'Indexing']
    },
    {
      name: 'Git & GitHub Version Control',
      category: 'tools',
      level: 90,
      icon: '🐙',
      tags: ['Branching', 'Commits', 'Pull Requests', 'Git CLI']
    },
    {
      name: 'Vite & Modern Build Tools',
      category: 'tools',
      level: 88,
      icon: '⚡',
      tags: ['Fast HMR', 'Bundling', 'npm Packages', 'Config']
    }
  ];

  const softSkills = [
    'Analytical Problem Solving',
    'Clean Code & Documentation',
    'Component-First Thinking',
    'Cross-Browser Testing',
    'Agile Collaboration',
    'Time Management'
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Expertise</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of technologies, frameworks, and tools I use to build scalable web software.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Technologies
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('frontend')}
          >
            Frontend &amp; React
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('backend')}
          >
            Backend &amp; Data
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tools')}
          >
            Workflow &amp; Tools
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className="skill-info">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>

              <div className="skill-bar-bg">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="skill-tags">
                {skill.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="skill-badge">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="soft-skills-container">
          <h3 className="soft-skills-title">Professional Mindset &amp; Methodologies</h3>
          <div className="soft-skills-list">
            {softSkills.map((item, idx) => (
              <span key={idx} className="soft-pill">✓ {item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
