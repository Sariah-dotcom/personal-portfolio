import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

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
            <HashLink to='#about' onClick={toggleMenu} className='header-link'><li>About</li></HashLink>
            <HashLink to='#projects' onClick={toggleMenu} className='header-link'><li>Projects</li></HashLink>
            <HashLink to='#contact' onClick={toggleMenu} className='header-link'><li>Contact</li></HashLink>

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
