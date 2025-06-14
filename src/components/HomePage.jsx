import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';
import my_pic from '../assets/My_pic.png';
import '../css/arrow.css';

const DownArrow = () => (
  <div className="down-arrow">
    <svg width="40" height="40"viewBox="0 0 24 24"fill="none" stroke="currentColor"strokeWidth="2"strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  </div>
);

const HomePage = ({ setCurrentPage, scrollToSection }) => {
  const [heroRef, heroVisible] = useScrollAnimation(0.2);
  const [introRef, introVisible] = useScrollAnimation(0.3);

  const imageRef = React.useRef(null);
  const inView = useInView(imageRef, { amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: 100, opacity: 0 });
    }
  }, [inView, controls]);

  const handleViewProjects = () => {
    setCurrentPage('projects');
    scrollToSection('projects');
  };

  const handleLinkedIn = () => {
    window.open(
      'your_linkedin_profile_url', // Replace with your LinkedIn profile URL
      '_blank'
    );
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`hero-section ${heroVisible ? 'animate-fade-in' : ''}`}
      >
        <div className="hero-content">
          <div className="text-section">
            <h1 className="heading animate-slide-up-delay-1">Hello, my name is Your name </h1>
            <p className="body-text animate-slide-up-delay-2">
              I'm a passionate developer with expertise in modern web technologies.
              I love creating innovative solutions and bringing ideas to life through code.
            </p>
            <div className="btn-group animate-slide-up-delay-3">
              <button 
                className="btn btn-primary"
                onClick={handleViewProjects}
              >
                View Projects
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleLinkedIn}
              >
                LinkedIn
              </button>
            </div>
          </div>

          <motion.div
            ref={imageRef}
            animate={controls}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="image-section"
          >
            <div className="profile-image">
              <img src={my_pic} alt="Adesh Trivedi" className="profile-img" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section
        ref={introRef}
        className={`welcome-section ${introVisible ? 'animate-fade-in' : ''}`}
      >
        {/* Add more content here if needed */}
      </section>
    </div>
  );
};

export default HomePage;
