import React from 'react';

interface SportCardProps {
  name: string;
  position: string;
  details: string;
  icon: React.ReactNode;
}

const SportCard: React.FC<SportCardProps> = ({ name, position, details, icon }) => (
  <div className="sport-card">
    <div className="sport-icon-wrapper">{icon}</div>
    <div className="sport-info">
      <h3>{name}</h3>
      <span className="sport-position">{position}</span>
      <p>{details}</p>
    </div>
  </div>
);

export const Sports: React.FC = () => {
  return (
    <section id="sports" className="section-container">
      <h2 className="section-title">Athletics & Sports</h2>
      <div className="sports-grid">
        <SportCard
          name="Basketball"
          position="Point Guard / Shooting Guard"
          details="Active member in varsity and local clubs. Focused on court vision, passing accuracy, tactical plays, and scoring under pressure."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20M2 12a14.5 14.5 0 0 0 20 0" />
              <path d="M6.2 6.2c2.4 2.4 2.4 6.4 0 8.8M17.8 6.2c-2.4 2.4-2.4 6.4 0 8.8" />
            </svg>
          }
        />
        <SportCard
          name="Lacrosse"
          position="Midfielder"
          details="Played midfielder running transit plays. Developed strong stick skills, endurance for full-field coverage, and quick defensive reactions."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <line x1="6" y1="18" x2="18" y2="6" />
              <circle cx="18" cy="6" r="3" />
              <path d="M12 6l3 3M9 15l3 3M3 21l3-3" />
              <path d="M15 3h6v6" />
            </svg>
          }
        />
        <SportCard
          name="Football"
          position="Wide Receiver / Safety"
          details="Played both offensive and defensive roles. Focused on route-running speed, reading quarterback coverage, and open-field tackling."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 .87.11 1.71.32 2.52C4.1 19.3 8.35 22 12 22s7.9-2.7 9.68-7.48c.21-.81.32-1.65.32-2.52 0-5.52-4.48-10-10-10z" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="8" y1="8" x2="8" y2="16" />
              <line x1="16" y1="8" x2="16" y2="16" />
              <path d="M12 9v6" />
            </svg>
          }
        />
      </div>
    </section>
  );
};
