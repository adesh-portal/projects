import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Education Page Component
const EducationPage = () => {
  const [eduRef, eduVisible] = useScrollAnimation(0.2);

  return (
    <div className="page">
      <section 
        ref={eduRef}
        className={`education-section ${eduVisible ? 'animate-fade-in' : ''}`}
      >
        <div className="container">
  <h1 className="page-title">Education</h1>
  <div className="education-grid">
    <div className="education-card animate-slide-up">
      <h3>[coourse ]</h3>
      <h4>[college name]</h4>
      <p>[passing / present]</p>
      <p>Specializing in Web Development and web Testing</p>
    </div>
    <div className="education-card animate-slide-up-delay-1">
      <h3>Certifications</h3>
      <ul>
        <li>Certification</li>
        <li>Certification</li>
        <li>Certification</li>
        {/* <li>Google Analytics Certified</li> */}
      </ul>
    </div>
  </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage; 