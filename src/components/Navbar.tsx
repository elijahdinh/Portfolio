import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          Elijah Dinh
        </div>
        <div className="navbar-links">
          <button onClick={() => scrollToSection('about')} className="nav-btn">About</button>
          <button onClick={() => scrollToSection('work')} className="nav-btn">Work</button>
          <button onClick={() => scrollToSection('school')} className="nav-btn">School</button>
          <button onClick={() => scrollToSection('activities')} className="nav-btn">Activities</button>
          <button onClick={() => scrollToSection('sports')} className="nav-btn">Sports</button>
          <button onClick={() => scrollToSection('hobbies')} className="nav-btn">Hobbies</button>
          <button onClick={() => scrollToSection('contact')} className="nav-btn contact-btn">Contact</button>
        </div>
      </div>
    </nav>
  );
};
