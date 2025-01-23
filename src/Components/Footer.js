// Footer.js
import React from 'react';
import '../CSS/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">&copy; 2025 Ali Qaish. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/AliQas-7" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ali-qaish-410969210/" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="qashdev7@gmail.com" className="social-link">Email</a>
        </div>
      </div>
    </footer>
  );
};  

export default Footer;