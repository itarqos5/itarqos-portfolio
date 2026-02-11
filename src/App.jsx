import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BentoBackground from './components/layout/BentoBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import styles from './styles/App.module.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className={styles.appContainer}>
      <BentoBackground />

      <main className={styles.bentoWrapper}>
        <div className="bento-grid">
          {/* Main Hero Card - Spans 2x2 */}
          <motion.div
            layoutId="hero"
            className="glass-card col-span-2 row-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
          </motion.div>

          {/* About Card - Spans 2x1 */}
          <motion.div
            layoutId="about"
            className="glass-card col-span-2 row-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <About />
          </motion.div>

          {/* Skills Card - Spans 1x2 */}
          <motion.div
            layoutId="skills"
            className="glass-card col-span-1 row-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Skills />
          </motion.div>

          {/* Contact Card - Spans 1x1 */}
          <motion.div
            layoutId="contact"
            className="glass-card col-span-1 row-span-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Contact />
          </motion.div>

          {/* Additional Dynamic Cards can go here */}
          <div className="glass-card col-span-1 row-span-1 flex items-center justify-center">
            <span className="text-muted text-sm font-medium">Coming Soon</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;