"use client";

import { useMemo } from "react";

function wavePath(segments: number, amplitude: number): string {
  const w = 100;
  const step = w / segments;
  const midY = 15;
  let d = `M 0 ${midY}`;
  for (let i = 0; i < segments; i++) {
    const x0 = i * step;
    const x2 = (i + 1) * step;
    const cx = x0 + step / 2;
    const dir = i % 2 === 0 ? -1 : 1;
    const cy = midY + dir * amplitude;
    d += ` Q ${cx} ${cy}, ${x2} ${midY}`;
  }
  return d;
}

export default function HeroSection() {
  const path = useMemo(() => wavePath(20, 12), []);

  return (
    <section className="relative z-10 flex min-h-screen flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-20 gap-12 md:gap-0">
      <div className="flex flex-col gap-5 shrink-0 text-center md:text-left">
        <p className="font-sans text-sm tracking-[0.3em] text-neutral-500 uppercase">
          Developer &amp; engineer
        </p>
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-neutral-100 tracking-tight leading-none">
          Literal
        </h1>
        <p className="font-sans text-base md:text-lg text-neutral-500 max-w-sm leading-relaxed mx-auto md:mx-0">
          Building things that matter — one line at a time.
        </p>
      </div>

      <div className="hidden md:block flex-1 mx-4">
        <svg
          width="100%"
          height="60"
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
          className="overflow-visible"
        >
          <path
            d={path}
            fill="none"
            stroke="#3f3f46"
            strokeWidth="0.8"
            strokeDasharray="3 3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="relative z-0 shrink-0">
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden ring-1 ring-neutral-800">
          <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}