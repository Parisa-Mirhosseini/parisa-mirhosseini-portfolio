import React from 'react';
import './Footer.scss'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {currentYear} Parisa Mirhosseini. All rights reserved.</p>
        <div className="footer__links">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
