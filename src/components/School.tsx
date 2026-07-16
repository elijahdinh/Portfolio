import React from 'react';

export const School: React.FC = () => {
  const apCourses = [
    { name: 'AP Calculus AB', code: 'MATH 310', desc: 'Differential and integral calculus, mathematical modeling, and series.' },
    { name: 'AP Biology', code: 'SCI 450', desc: 'Cell biology, genetics, evolutionary theory, and ecological systems.' },
    { name: 'AP Chinese', code: 'LANG 200', desc: 'Advanced language proficiency, culture, and context synthesis.' }
  ];

  return (
    <section id="school" className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="education-card">
        <div className="education-header">
          <div className="edu-badge-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="svg-icon">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
          </div>
          <div>
            <h3>Del Norte High School</h3>
            <p className="school-location">San Diego, CA | College Preparatory</p>
          </div>
        </div>

        <div className="ap-courses-section">
          <h4>Advanced Placement (AP) Curriculum</h4>
          <p className="ap-intro">Currently pursuing advanced coursework to develop analytical thinking and quantitative skills:</p>
          <div className="ap-courses-grid">
            {apCourses.map((course, idx) => (
              <div key={idx} className="ap-course-card">
                <span className="course-code">{course.code}</span>
                <h5>{course.name}</h5>
                <p>{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
