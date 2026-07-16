import React from 'react';

interface WorkItemProps {
  role: string;
  company: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

const WorkItem: React.FC<WorkItemProps> = ({ role, company, duration, description, icon }) => (
  <div className="experience-card">
    <div className="experience-header">
      <div className="experience-icon">{icon}</div>
      <div className="experience-info">
        <h3>{role}</h3>
        <h4 className="company-name">{company}</h4>
      </div>
      <span className="experience-date">{duration}</span>
    </div>
    <p className="experience-desc">{description}</p>
  </div>
);

export const Work: React.FC = () => {
  return (
    <section id="work" className="section-container">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        <WorkItem
          role="Academic Tutor"
          company="CrossRoads Tutoring"
          duration="2025 - Present"
          description="Assisted students in breaking down complex mathematics and scientific coursework into intuitive, digestible concepts. Designed personalized learning strategies to strengthen academic foundation and confidence."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          }
        />
        <WorkItem
          role="Camp Counselor"
          company="Santaluz Camp Counselor"
          duration="Summer 2024"
          description="Managed, mentored, and organized group activities for youth campers. Led sports exercises and coordinated daily events, fostering a highly collaborative, safe, and engaging environment."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        />
      </div>
    </section>
  );
};
