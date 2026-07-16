import React from 'react';

interface ActivityProps {
  title: string;
  role: string;
  description: string;
  icon: React.ReactNode;
}

const ActivityCard: React.FC<ActivityProps> = ({ title, role, description, icon }) => (
  <div className="activity-card animate-hover-lift">
    <div className="activity-icon-container">{icon}</div>
    <div className="activity-details">
      <span className="activity-role">{role}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export const Extracurriculars: React.FC = () => {
  return (
    <section id="activities" className="section-container">
      <h2 className="section-title">Extracurricular Activities</h2>
      <div className="activities-grid">
        <ActivityCard
          title="MasterSports"
          role="Basketball Coach"
          description="Instructed youth basketball teams, teaching physical fundamentals, offensive/defensive strategy, and collaborative sportsmanship."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <circle cx="12" cy="12" r="10" />
              <path d="M6.2 6.2c2.4 2.4 2.4 6.4 0 8.8M17.8 6.2c-2.4 2.4-2.4 6.4 0 8.8" />
              <path d="M2 12h20M12 2v20" />
            </svg>
          }
        />
        <ActivityCard
          title="Peer Counseling"
          role="Student Support Mentor"
          description="Volunteered as a trusted listener and counselor, helping fellow students navigate stress, social conflicts, and academic challenges."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          }
        />
        <ActivityCard
          title="Leukemia & Lymphoma Society"
          role="Campaign Volunteer"
          description="Raised funding, organized community events, and supported research initiatives to cure blood cancers and support patients."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          }
        />
        <ActivityCard
          title="Associated Student Body (ASB)"
          role="Class Representative"
          description="Collaborated with campus leadership to plan high school social events, manage school funds, and advocate for student requests."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <polygon points="12 2 2 7 12 12 22 7 12 2 12 2" />
              <polygon points="2 17 12 22 22 17 2 17" />
              <polygon points="2 12 12 17 22 12 2 12" />
            </svg>
          }
        />
        <ActivityCard
          title="Second Chance Society"
          role="Executive Officer"
          description="Organized food drives, clothing drops, and fundraising drives to help rehabilitate and support homeless populations."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 8v4l3 3" />
            </svg>
          }
        />
      </div>
    </section>
  );
};
