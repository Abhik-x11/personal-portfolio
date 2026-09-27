import React from 'react';
import './Education.css';

export default function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science',
      institution: 'University Institute of Engineering & Technology',
      period: '2022 – 2026',
      score: 'CGPA: 8.9 / 10',
      description: 'Specialized in Core Computer Science fundamentals, Software Engineering, Object-Oriented Analysis, and modern Web Technologies. Active participant in coding hackathons and technical symposiums.',
      coursework: [
        'Data Structures & Algorithms',
        'Web Application Architecture',
        'Database Management Systems',
        'Object-Oriented Programming (Java/C++)',
        'Operating Systems',
        'Computer Networks'
      ]
    },
    {
      degree: 'Senior Secondary School (Class XII - Science stream)',
      institution: 'Higher Secondary School',
      period: '2020 – 2022',
      score: 'Grade: 92%',
      description: 'Major subjects: Physics, Chemistry, Mathematics, and Computer Science. Built early foundational interest in programming algorithms, logic, and web layouts.',
      coursework: [
        'Advanced Mathematics',
        'Physics',
        'Computer Science (Python & SQL)',
        'Data Handling'
      ]
    },
    {
      degree: 'Secondary School Certificate (Class X)',
      institution: 'Public High School',
      period: '2019 – 2020',
      score: 'Grade: 94%',
      description: 'Completed high school with Academic Distinction. Awarded school topper badge in Mathematics and Science.',
      coursework: [
        'General Science',
        'Mathematics',
        'Information Technology',
        'English Language & Literature'
      ]
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Academic Journey</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            My formal academic background and coursework that solidified my engineering fundamentals.
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="degree-title">{item.degree}</h3>
                    <p className="institution-name">{item.institution}</p>
                    <span className="timeline-score">{item.score}</span>
                  </div>
                  <span className="timeline-badge">📅 {item.period}</span>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Relevant Coursework:
                  </span>
                  <div className="coursework-tags">
                    {item.coursework.map((course, cIdx) => (
                      <span key={cIdx} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
