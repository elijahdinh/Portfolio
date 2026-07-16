import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-card">
          <div className="about-card-header">
            <span className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <h3>Who I Am</h3>
          </div>
          <p>
            I am a student software engineer, creator, and athlete dedicated to building clean, powerful digital tools. I have a passion for problem-solving, structural design, and visual styling, which I channel into web application development.
          </p>
          <p>
            By blending my dedication to academics, active team sports, and leadership roles, I aim to cultivate a mindset of grit, consistent learning, and continuous improvement in all of my endeavors.
          </p>
        </div>
        <div className="about-card highlight">
          <div className="about-card-header">
            <span className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </span>
            <h3>My Core Pillars</h3>
          </div>
          <div className="pillars-list">
            <div className="pillar-item">
              <strong>💻 Development:</strong> Crafting modular interfaces using React, TypeScript, and modern layouts.
            </div>
            <div className="pillar-item">
              <strong>📚 Academics:</strong> Engaging in advanced calculus and science curricula with deep curiosity.
            </div>
            <div className="pillar-item">
              <strong>🏀 Athletics:</strong> Participating in fast-paced varsity and community team sports.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
