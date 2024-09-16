import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <a href="/" aria-current="page" className="footer-nav-link w--current">
        <i className="fas fa-home"></i>
      </a>
      <a href="https://twitter.com/software88820" className="footer-nav-link">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.facebook.com/profile.php?id=61559122352690&is_tour_dismissed" className="footer-nav-link">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/bhavantu_657/" aria-current="page" className="footer-nav-link">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="/subscribe" className="footer-nav-link">
        <div className="subscribe">Subscribe</div>
      </a>
    </div>
  );
};

export default Footer;
