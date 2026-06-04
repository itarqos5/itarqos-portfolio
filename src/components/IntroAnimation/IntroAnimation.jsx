import { useRef, useEffect } from 'react';
import './IntroAnimation.css';

export default function IntroAnimation({ onComplete }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (wrapperRef.current) {
        wrapperRef.current.classList.add('fade-out');
      }
      setTimeout(() => {
        onComplete();
      }, 600);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div ref={wrapperRef} className="intro-wrapper">
      <div className="intro-bg" />
      <div className="intro-loader">
        <div className="intro-ring">
          <span className="intro-letter">L</span>
        </div>
      </div>
    </div>
  );
}
