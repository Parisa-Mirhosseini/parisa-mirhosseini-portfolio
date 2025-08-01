import React from 'react';
import './Footer.scss'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {currentYear} Parisa Mirhosseini. All rights reserved.</p>
        <div className="footer__links">
          <a 
            href="https://github.com/Parisa-Mirhosseini" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/parisa-miehosseini"  
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:parisamirhosseini2@gmail.com" 
            aria-label="Send email to Parisa"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
