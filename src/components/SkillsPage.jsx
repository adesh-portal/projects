import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../css/skills.css';

// Skills Page Component
const SkillsPage = () => {
  const [skillsRef, skillsVisible] = useScrollAnimation(0.2);

  const skills = [
    { 
      name: "React", 
      icon: "⚛️",
      color: "#61DAFB"
    },
    { 
      name: "Python", 
      icon: "🐍",
      color: "#3776AB"
    },
    { 
      name: "HTML/CSS", 
      icon: "🎨",
      color: "#E34F26"
    },
    { 
      name: "Cybersecurity", 
      icon: "🔒",
      color: "#2D3748"
    }
  ];

  return (
    <div className="page">
      <section 
        ref={skillsRef}
        className={`skills-section ${skillsVisible ? 'animate-fade-in' : ''}`}
      >
        <div className="container">
          <h1 className="page-title">My Skills</h1>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`skill-card animate-slide-up-delay-${index % 3}`}
                style={{ '--skill-color': skill.color }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-details">
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-progress-ring">
                    <svg className="progress-ring" width="120" height="120">
                      <circle
                        className="progress-ring-circle-bg"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="52"
                        cx="60"
                        cy="60"
                      />
                      <circle
                        className="progress-ring-circle"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="52"
                        cx="60"
                        cy="60"
                        style={{
                          strokeDasharray: `${2 * Math.PI * 52}`,
                          strokeDashoffset: skillsVisible 
                            ? `${2 * Math.PI * 52 * 0.25}`
                            : `${2 * Math.PI * 52}`
                        }}
                      />
                    </svg>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage; 