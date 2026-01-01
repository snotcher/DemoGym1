import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle transparent/scrolled navbar state
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy Logic
      const sections = ['hero', 'about', 'features', 'packages', 'testimonials', 'contact'];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset)
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className={`hamburger ${click ? 'active' : ''}`} onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <a href="#hero" className="logo" onClick={closeMobileMenu}>
          IRON<span>ZONE</span>
        </a>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMobileMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#packages" className={`nav-link ${activeSection === 'packages' ? 'active' : ''}`} onClick={closeMobileMenu}>Packages</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</a>
          </li>
        </ul>

        <a href="#contact" className="btn btn-primary nav-btn desktop-only" onClick={closeMobileMenu}>Join Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
