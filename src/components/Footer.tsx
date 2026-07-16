import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <p>&copy; {currentYear} Elijah Dinh. All rights reserved.</p>
          <p className="footer-tagline">Designed & Built with React, TypeScript & Vite.</p>
        </div>
        <div className="footer-right">
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
