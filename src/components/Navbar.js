import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Shruti Jha</h1>
      </div>
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </div>
    </nav>
  );
}

export default Navbar;
