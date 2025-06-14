import React from 'react';

// Header Component
const Header = ({ currentPage, setCurrentPage, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Intro' },
    // { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Internship' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    setCurrentPage(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">Portfolio</div>
        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header; 