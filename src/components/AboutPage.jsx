import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

// About Page Component
const AboutPage = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '-10% 0px',
    delay: 100
  });
  
  const [statsRef, statsVisible] = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '-10% 0px',
    delay: 200
  });

  return (
    <div className="page">
      <section 
        ref={aboutRef}
        className={`about-section ${aboutVisible ? 'animate-fade-in' : 'animate-fade-out'}`}
      >
        <div className="container">
          <h1 className={`page-title ${aboutVisible ? 'animate-slide-up' : ''}`}>Introduction</h1>
          <div className="about-content">
            <div className="about-text">
              <p className={`animate-slide-up ${aboutVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
                Hi, I'm [Your name] — a passionate <span className="highlight">developer</span> from [place].
                I'm currently pursuing [course] at [college name] and specialize in
                <span className="highlight"> Web Development</span> and penetration testing.
                I'm skilled in Python, React, HTML, CSS, and cybersecurity tools.
                I love turning ideas into powerful <span className="highlight">digital solutions</span>.
                I've participated in tech workshops and seminars to stay ahead.
                I'm always exploring the latest trends in technology.
                My focus is on building smart, secure, and scalable projects.
                Passionate about solving real-world problems with code.
                Let's explore my journey through innovation and creativity!
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default AboutPage; 