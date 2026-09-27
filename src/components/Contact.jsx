import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get in Touch</span>
          <h2 className="section-title">
            Contact <span className="gradient-text">Information</span>
          </h2>
          <p className="section-subtitle">
            Have a project idea, an internship opportunity, or just want to connect? Send a message or reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-card">
            <div className="contact-info-header">
              <h3>Let's Collaborate</h3>
              <p>
                I am actively seeking software development roles, internships, and collaborative open-source projects. Feel free to contact me through any channel.
              </p>
            </div>

            <div className="contact-channels">
              <div className="channel-item">
                <div className="channel-icon">✉️</div>
                <div className="channel-details">
                  <span className="channel-label">Email Address</span>
                  <a href="mailto:abhik.dev@example.com" className="channel-value">
                    abhik.dev@example.com
                  </a>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon">📞</div>
                <div className="channel-details">
                  <span className="channel-label">Phone / WhatsApp</span>
                  <a href="tel:+919876543210" className="channel-value">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon">📍</div>
                <div className="channel-details">
                  <span className="channel-label">Location</span>
                  <span className="channel-value">
                    Bangalore / Kolkata, India
                  </span>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon">⏱️</div>
                <div className="channel-details">
                  <span className="channel-label">Response Time</span>
                  <span className="channel-value">
                    Within 24 Hours
                  </span>
                </div>
              </div>
            </div>

            <div className="social-links-box">
              <p className="social-title">Connect on Professional Networks</p>
              <div className="social-buttons">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn">
                  <span>GitHub</span> ↗
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">
                  <span>LinkedIn</span> ↗
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn">
                  <span>Twitter / X</span> ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-card">
            {submitted && (
              <div className="form-success-banner">
                <span>✓</span>
                <span>Thank you! Your message has been received. I will get back to you shortly.</span>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Job Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message ➔'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
