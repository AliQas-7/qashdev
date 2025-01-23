// Header.js
import React, { useState } from 'react';
import '../CSS/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close the menu on section click
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">QashinCode</div> 
        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
