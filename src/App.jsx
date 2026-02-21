import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BentoBackground from './components/layout/BentoBackground';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import styles from './styles/App.module.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={styles.appContainer}>
      <BentoBackground />
      
      <Header 
        activeSection="" 
        onNavClick={scrollToSection} 
        isScrolled={isScrolled} 
      />

      <main className={styles.mainContent}>
        <section id="home" className={styles.section}>
          <Hero />
        </section>

        <section id="about" className={styles.section}>
          <About />
        </section>

        <section id="skills" className={styles.section}>
          <Skills />
        </section>

        <section id="contact" className={styles.section}>
          <Contact />
        </section>
      </main>

      <Footer onHomeClick={scrollToSection} />
    </div>
  );
}

export default App;