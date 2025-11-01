import { useState, useEffect, useRef, useCallback } from 'react';
import MatrixRain from './MatrixRain';
import { FiArrowUp } from 'react-icons/fi';
import styles from './styles/App.module.css';

// Import components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

// Smooth scroll to section
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const sections = useRef([]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100;
      
      sections.current.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    // Initialize sections
    sections.current = document.querySelectorAll('section');
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = useCallback((section) => {
    scrollToSection(section);
    setActiveSection(section);
  }, []);

  // Handle contact button click in Hero
  const handleContactClick = useCallback(() => {
    handleNavClick('contact');
  }, [handleNavClick]);

  // Scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className={styles.app}>
      {/* Animated Background */}
      <div className={styles.background}>
        <MatrixRain />
      </div>
      
      {/* Header */}
      <Header 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        isScrolled={isScrolled} 
      />
      
      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <Hero 
          onContactClick={handleContactClick}
          onAboutClick={() => handleNavClick('about')}
        />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer onHomeClick={() => handleNavClick('home')} />
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`${styles.scrollToTop} ${!isScrolled ? styles.scrollToTopHidden : ''}`}
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
