import { useState, useEffect } from 'react';
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import styles from '../../styles/Header.module.css';

export default function Header({ activeSection, onNavClick, isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (section) => {
    onNavClick(section);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <div className={styles.container}>
          <a 
            href="#" 
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              handleNavItemClick('home');
            }}
          >
            itarqos
          </a>
          
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {['home', 'about', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavItemClick(item)}
                    className={`${styles.navLink} ${
                      activeSection === item ? styles.navLinkActive : ''
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/itarqos" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href="https://discord.com/users/1184539864360816772" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Discord"
            >
              <FaDiscord size={20} />
            </a>
          </div>
          
          <button 
            className={styles.mobileMenuButton} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`${styles.overlay} ${isMenuOpen ? styles.overlayActive : ''}`} onClick={toggleMenu} />
      
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuActive : ''}`}>
        <ul className={styles.mobileNavList}>
          {['home', 'about', 'skills', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNavItemClick(item)}
                className={`${styles.mobileNavLink} ${
                  activeSection === item ? styles.mobileNavLinkActive : ''
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
