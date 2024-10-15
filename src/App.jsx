import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Skills from './components/Skills.jsx';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}
