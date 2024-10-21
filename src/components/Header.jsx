import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className='px-5 py-8 flex justify-between items-center'>
        <img src="/logo.png" alt="logo" className='h-[3rem] w-[2.7rem]' />

        <div className='hidden'>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Nav Links */}
        <div className={`fixed flex flex-col gap-10 top-0 right-0 pl-10 pt-24 h-screen w-[20rem] bg-coral z-50 text-2xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <p onClick={toggleMenu} className='text-[2rem] text-white'>&#x2715;</p>
          
          <ul className='flex flex-col gap-10 font-bold'>
            <HashLink to='#about' onClick={toggleMenu} className='text-3xl font-inter text-white'><li>About</li></HashLink>
            <HashLink to='#projects' onClick={toggleMenu} className='text-3xl font-inter text-white'><li>Projects</li></HashLink>
            <HashLink to='#contact' onClick={toggleMenu} className='text-3xl font-inter text-white'><li>Contact</li></HashLink>

          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="text-coral text-3xl" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </div>
  );
}
