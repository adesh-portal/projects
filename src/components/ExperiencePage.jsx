import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Experience Page Component
const ExperiencePage = () => {
  const [expRef, expVisible] = useScrollAnimation(0.2);

  const experiences = [
    {
      title: "Web Development Intern",
      company: "name of the campany",
      period: "2028 - Present",
      description: "Working on web development projects, learning and implementing modern technologies, and contributing to real-world applications."
    },
    {
      title: "Cybersecurity Intern",
      company: "company name",
      period: "6 Months",
      description: "Participated in a cybersecurity internship program focusing on ethical hacking, web application security, and vulnerability assessments."
    }
  ];

  return (
    <div className="page">
      <section
        ref={expRef}
        className={`experience-section ${expVisible ? 'animate-fade-in' : ''}`}
      >
        <div className="container">
          <h1 className="page-title">Internship</h1>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className={`timeline-item animate-slide-up-delay-${index}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="period">{exp.period}</span>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
