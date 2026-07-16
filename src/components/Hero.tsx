import React from 'react';

export const Hero: React.FC = () => {
  const handleExplore = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge animate-fade-in-up">Software Engineer & Creator</div>
        <h1 className="hero-title animate-title">
          Elijah Dinh
        </h1>
        <p className="hero-subtitle animate-fade-in-up-delayed">
          Welcome to Greatness
        </p>
        <div className="hero-actions animate-fade-in-up-more">
          <button onClick={handleExplore} className="hero-btn-primary">
            Explore Portfolio
          </button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};
