import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sync theme with HTML data attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle scroll to add navbar shadow/blur adjustments
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`app-container ${theme}-theme`}>
      {/* Sticky Glass Navbar */}
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#hero" className="logo" onClick={closeMobileMenu}>
            RITIK<span>.dev</span>
          </a>

          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#hero" onClick={closeMobileMenu}>Home</a>
            <a href="#skills" onClick={closeMobileMenu}>Skills</a>
            <a href="#experience" onClick={closeMobileMenu}>Experience</a>
            <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            <a href="#terminal" onClick={closeMobileMenu}>Terminal</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? (
                <i className="fa-solid fa-sun icon-sun"></i>
              ) : (
                <i className="fa-solid fa-moon icon-moon"></i>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Terminal />
        <Contact />
      </main>

      {/* Modern Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Ritik. All rights reserved.
          </p>
          <p className="tagline">
            Designed & Built with <i className="fa-solid fa-heart" style={{ color: 'var(--primary-color)' }}></i> in Bangalore
          </p>
          <div className="footer-links">
            <a href="https://github.com/ritiksalariya" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/ritiksalariya" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
