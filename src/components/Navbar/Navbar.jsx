import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ searchQuery, handleSearchChange, clearInput, setCurrentSection, currentSection }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    setShowSearch(currentSection === 'module');
  }, [currentSection]);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchClick = () => {
    if (searchQuery.trim() === '') {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
  };

  const getNavLinkClass = (section) => {
    return `nav-link ${currentSection === section ? 'w--current' : ''}`;
  };

  return (
    <nav className="navbar">
      <div className={`nav-menu ${showSearch ? "hidden" : ""}`}>
        <button className={getNavLinkClass('module')} onClick={() => setCurrentSection('module')}>
          Modules
        </button>
        <button className={getNavLinkClass('about')} onClick={() => setCurrentSection('about')}>
          About Us
        </button>
        <button className={getNavLinkClass('suggest')} onClick={() => setCurrentSection('suggest')}>
          Contact Us
        </button>
      </div>
      {currentSection === 'module' && (
        <form className={`search-form ${showSearch ? "expand" : ""}`}>
          <input
            type="search"
            placeholder={searchError ? "Please Enter Anything" : "Search..."}
            autoFocus={showSearch}
            required
            onChange={handleSearchChange}
            value={searchQuery}
            className={searchError ? "error" : ""}
          />
          <i className="fa fa-search" onClick={handleSearchClick}></i>
        </form>
      )}
    </nav>
  );
};

export default Navbar;
