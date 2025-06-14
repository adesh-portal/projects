import React, { useState, useEffect } from 'react';
import './Css/header.css';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './Css/App.css';

// Import components
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import ExperiencePage from './components/ExperiencePage';
import EducationPage from './components/EducationPage';
import ContactPage from './components/ContactPage';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentPage(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
    <div className="app">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} scrollToSection={scrollToSection} />
        <ThemeToggle />
        <main>
          <section id="home">
            <HomePage />
          </section>
          <section id="about">
            <AboutPage />
          </section>
          <section id="education">
            <EducationPage/>
          </section>
          <section id="skills">
            <SkillsPage />
          </section>
          <section id="projects">
            <ProjectsPage />
          </section>
          <section id="experience">
            <ExperiencePage />
          </section>
          <section id="contact">
            <ContactPage />
          </section>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;