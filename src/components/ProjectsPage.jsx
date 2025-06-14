import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ecommerceImage from '../assets/E-commerce Platform.webp';
import taskManagementImage from '../assets/Task Management App.jpg';
import weatherDashboardImage from '../assets/Weather Dashboard.png';
import portfolioImage from '../assets/Portfolio.png';

// Projects Page Component
const ProjectsPage = () => {
  const [projectsRef, projectsVisible] = useScrollAnimation(0.2);

  const projects = [
    { 
      title: "E-commerce Platform", 
      tech: "React, Node.js, MongoDB", 
      description: "Full-stack e-commerce solution",
      image: ecommerceImage,
      liveLink: "https://ecommerce-demo.com",
      githubLink: "https://github.com/ecommerce-platform"
    },
    { 
      title: "Task Management App", 
      tech: "React, Firebase", 
      description: "Collaborative task management tool",
      image: taskManagementImage,
      liveLink: "https://task-manager.com",
      githubLink: "https://github.com/task-manager"
    },
    { 
      title: "Weather Dashboard", 
      tech: "JavaScript, API Integration", 
      description: "Real-time weather tracking",
      image: weatherDashboardImage,
      liveLink: "https://weather-dashboard.com",
      githubLink: "https://github.com/weather-dashboard"
    },
    { 
      title: "Portfolio Website", 
      tech: "React, CSS3", 
      description: "Responsive portfolio design",
      image: portfolioImage,
      liveLink: "https://portfolio.com",
      githubLink: "https://github.com/portfolio"
    }
  ];

  const handleViewProject = (project) => {
    window.open(project.liveLink, '_blank');
  };

  const handleViewCode = (project) => {
    window.open(project.githubLink, '_blank');
  };

  return (
    <div className="page">
      <section 
        ref={projectsRef}
        className={`projects-section ${projectsVisible ? 'animate-fade-in' : ''}`}
      >
        <div className="container">
          <h1 className="page-title">My Projects</h1>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-card animate-slide-up-delay-${index % 4}`}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-tech">{project.tech}</p>
                  <p>{project.description}</p>
                  <div className="project-buttons">
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleViewProject(project)}
                    >
                      View Project
                    </button>
                    <button 
                      className="btn btn-outline"
                      onClick={() => handleViewCode(project)}
                    >
                      View Code
                    </button>
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

export default ProjectsPage; 