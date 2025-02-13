'use client';

import { useState } from 'react';
import "./Nav.css";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="logo"></div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" onClick={closeMenu} className="hire-btn">Hire Me</a>
        </div>
      </div>
    </nav>
  );
}
