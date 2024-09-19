import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Module from '../Module/Module';
import ContactUs from '../ContactUs/ContactUs';
import AboutUs from '../AboutUs/AboutUs';
import './Home.css';
import '../Module/Module.css';
import '../ContactUs/ContactUs.css';
import '../AboutUs/AboutUs.css';
import bhavantu from "./bhavantu.png"

const HomePage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSection, setCurrentSection] = useState('module');
  
  useEffect(() => {
    const featuredContent = document.querySelector('.featured-content');
    featuredContent.classList.add('animate');
  }, []);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const clearInput = () => {
    setSearchQuery('');
    document.querySelector('.search-form input').value = '';
  };

  return (
    <div className="home-container">
      <div className="left-section">
        <div className="featured-content">
          <img src={bhavantu} alt="Bhavantu Software Logo" className="company-logo" />
          <button className="cta-button">SUBSCRIBE</button>
        </div>
        <Footer />
      </div>
      <div className="right-section">
        <Navbar
          showSearch={showSearch}
          toggleSearch={toggleSearch}
          handleSearchChange={handleSearchChange}
          clearInput={clearInput}
          setCurrentSection={setCurrentSection}
           currentSection={currentSection}
        />
        {currentSection === 'module' && <Module searchQuery={searchQuery} />}
        {currentSection === 'suggest' && <ContactUs />}
        {currentSection === 'about' && <AboutUs />}
      </div>
    </div>
  );
};

export default HomePage;
