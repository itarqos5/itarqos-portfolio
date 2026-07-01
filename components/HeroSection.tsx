"use client";

import { useState, useEffect, useRef, useMemo } from "react";

export default function HeroSection() {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const wavelength = 120;

  const path = useMemo(() => {
    if (width === 0) return "";
    const amplitude = 8;
    const midY = 15;
    let d = `M 0 ${midY}`;
    const totalWidth = width + wavelength;
    for (let x = 0; x <= totalWidth; x += 2) {
      const y = midY + amplitude * Math.sin((2 * Math.PI * x) / wavelength);
      d += ` L ${x} ${y}`;
    }
    return d;
  }, [width]);

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-20 gap-12 md:gap-0 pt-20 md:pt-0"
    >
      <div className="flex flex-col gap-5 shrink-0 text-center md:text-left select-none animate-blur-in">
        <p className="font-sans text-xs tracking-[0.3em] text-neutral-500 uppercase">
          Developer &amp; engineer
        </p>
        <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-400">
          Literal
        </h1>
        <p className="font-sans text-sm md:text-base text-neutral-500 max-w-sm leading-relaxed mx-auto md:mx-0">
          Building things that matter — one line at a time.
        </p>
      </div>

      <div
        ref={containerRef}
        className="hidden md:block flex-grow mx-12 lg:mx-20 overflow-hidden relative h-[40px] flex items-center"
      >
        {width > 0 && (
          <svg
            width={width + wavelength}
            height="30"
            viewBox={`0 0 ${width + wavelength} 30`}
            className="overflow-visible animate-wave-flow absolute left-0"
            style={{ width: `${width + wavelength}px` }}
          >
            <path
              d={path}
              fill="none"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      <div className="relative z-0 shrink-0 group animate-blur-in [animation-delay:200ms]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden ring-2 ring-neutral-800/80 hover:ring-neutral-700/80 transition-all duration-500 hover:scale-[1.02] shadow-2xl">
          <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}