import { useRef, useEffect, useState } from 'react';
import './IntroAnimation.css';

const letters = 'LITERAL'.split('');

export default function IntroAnimation({ onComplete }) {
  const wrapperRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));

    const timer = setTimeout(() => {
      if (wrapperRef.current) {
        wrapperRef.current.classList.add('fade-out');
      }
      setTimeout(() => {
        onComplete();
      }, 700);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div ref={wrapperRef} className="intro-wrapper">
      <div className="intro-bg" />
      <div className="intro-loader">
        <div className={`intro-ring${mounted ? ' ring-enter' : ''}`}>
          {letters.map((char, i) => (
            <span
              key={i}
              className={`intro-letter${mounted ? ' letter-enter' : ''}`}
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="intro-line-track">
          <div className={`intro-line-fill${mounted ? ' line-run' : ''}`} />
        </div>
      </div>
    </div>
  );
}
