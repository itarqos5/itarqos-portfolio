import { useState, useCallback } from 'react';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import BugBounties from './components/BugBounties/BugBounties';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';
import './App.css';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  if (!introComplete) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Hero />
        <Experience />
        <BugBounties />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
