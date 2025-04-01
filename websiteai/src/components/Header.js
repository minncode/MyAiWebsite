import React, { useState, useEffect } from 'react';
import styles from '../css/Header.module.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Change header style on scroll
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = ['home', 'about', 'projects', 'contact', 'chat'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logoLink}>
          <img className={styles.logo} src="/images/sitelogo.png" alt="Site Logo" />
        </a>
        
        <button 
          className={`${styles.menuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li>
              <a 
                href="#home" 
                className={`${styles.link} ${activeSection === 'home' ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`${styles.link} ${activeSection === 'about' ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`${styles.link} ${activeSection === 'contact' ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="#chat" 
                className={`${styles.link} ${activeSection === 'chat' ? styles.active : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chat
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;