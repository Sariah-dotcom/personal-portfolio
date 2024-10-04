import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav>
        <img src="/logo.png" alt="logo" className='logo' />

        <div className="desktop-nav-links">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Nav Links */}
        <div className={`mobile-nav-links ${menuOpen ? 'open' : ''}`}>
          <p onClick={toggleMenu} style={{ fontSize:'2rem', position:'absolute', right:'2rem', top:'2rem' }}>&#x2715;</p>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </div>
  );
}
