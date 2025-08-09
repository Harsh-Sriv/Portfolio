import React from 'react';
import '../CSS/Footer.css';

// Import the icons
import LinkedinIcon from '../assets/linkedin.png';
import GithubIcon from '../assets/github.png';
import InstagramIcon from '../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Add the new heading and description here */}
        <h2 className="footer-heading">Let's Connect</h2>
        <p className="footer-description">
          I'm currently looking for new opportunities. If you're seeking a developer
          with a passion for building beautiful and functional web applications, feel free to reach out.
        </p>

        <div className="social-links">
          <a href="www.linkedin.com/in/harsh-srivastava-4a54b8251" className="social-link" aria-label="LinkedIn">
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Harsh-Sriv" className="social-link" aria-label="GitHub">
            <img src={GithubIcon} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/harsh_srivastava1000/" className="social-link" aria-label="Instagram">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Harsh Srivastava. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;