import React from 'react';
import './AboutUs.css';
import aboutus from "./Aboutus.png";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h3 className="about-us-heading">ABOUT OUR COMPANY</h3>
      <h1 className="about-us-title">Using Technology to Empower Enterprises</h1>
      <p className="about-us-description">
        Bhavantu Software started its journey with an ambition to build a software team which will provide software services using cutting edge technologies ensuring quality and reliability. We were already working to define our standards and be proficient in the industry best practices. The plan was to do something so that we can overcome the challenges we experienced in the previous companies we served.
      </p>
      <div className="about-us-bottom">
        <div className="about-us-points">
          <div className="about-us-point">
            <i className="fa fa-check-circle"></i>
            <span>Comprehensive Solutions</span>
          </div>
          <div className="about-us-point">
            <i className="fa fa-check-circle"></i>
            <span>Continuous Improvement</span>
          </div>
          <div className="about-us-point">
            <i className="fa fa-check-circle"></i>
            <span>Scalability and Flexibility</span>
          </div>
          <div className="about-us-point">
            <i className="fa fa-check-circle"></i>
            <span>Compliance and Regulation</span>
          </div>
        </div>
        <div className="about-us-image">
          <img src={aboutus} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
