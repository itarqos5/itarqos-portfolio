"use client";

import { useEffect, useRef, useState } from "react";

const LANGUAGE_ICONS: Record<string, string> = {
  JavaScript: "https://cdn.jsdelivr.net/npm/simple-icons@14/icons/javascript.svg",
  TypeScript: "https://cdn.jsdelivr.net/npm/simple-icons@14/icons/typescript.svg",
  Python:     "https://cdn.jsdelivr.net/npm/simple-icons@14/icons/python.svg",
  Rust:       "https://cdn.jsdelivr.net/npm/simple-icons@14/icons/rust.svg",
  Java:       "https://cdn.jsdelivr.net/npm/simple-icons@14/icons/openjdk.svg",
  "C#":       "https://cdn.jsdelivr.net/npm/simple-icons@14/icons/csharp.svg",
  "C++":      "https://cdn.jsdelivr.net/npm/simple-icons@14/icons/cplusplus.svg",
};

const COLORS: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python:     "#3776AB",
  Rust:       "#CE422B",
  Java:       "#FF7800",
  "C#":       "#239120",
  "C++":      "#00599C",
};

const skills = [
  { name: "JavaScript" },
  { name: "TypeScript", parent: "JavaScript" },
  { name: "Python" },
  { name: "Rust" },
  { name: "Java" },
  { name: "C#" },
  { name: "C++" },
];

function skillColor(name: string) { return COLORS[name] || "#06b6d4"; }
function skillIcon(name: string) { return LANGUAGE_ICONS[name] || LANGUAGE_ICONS.Python; }

export default function SkillsSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <section className="relative z-10 py-48 px-12">
        <h2 className="mb-24 text-center font-serif text-4xl font-bold text-neutral-100 animate-pulse">
          Fields I&apos;m professional at
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-neutral-800 animate-pulse" />
              <div className="h-4 w-24 rounded bg-neutral-800 animate-pulse" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 pt-24 pb-48 px-12">
      <h2 className="mb-24 text-center font-serif text-4xl font-bold text-neutral-100">
        Fields I&apos;m professional at
      </h2>
      <div className="flex justify-center">
        <svg viewBox="0 0 700 500" className="w-full max-w-2xl">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="350" cy="250" r="280" fill="url(#glow)" />

          <g transform="translate(350, 250)">
            <circle r="56" fill="#18181b" stroke="#06b6d4" strokeWidth="3" />
            <clipPath id="cc">
              <circle r="52" />
            </clipPath>
            <image href="/profile.png" x="-52" y="-52" width="104" height="104" clipPath="url(#cc)" preserveAspectRatio="xMidYMid slice" />
          </g>

          <g>
            {skills.filter(s => !s.parent).map((skill, i) => {
              const a = (i * 2 * Math.PI) / 6 - Math.PI / 2;
              const r = 180;
              const x = 350 + r * Math.cos(a);
              const y = 250 + r * Math.sin(a);
              return (
                <g key={skill.name}>
                  <line x1="350" y1="250" x2={x} y2={y} stroke="#52525b" strokeWidth="1.5" strokeDasharray="6 4" />
                  <g transform={`translate(${x-40},${y-40})`}>
                    <circle cx="40" cy="40" r="36" fill="#0a0a0a" stroke={skillColor(skill.name)} strokeWidth="2.5" />
                    <image href={skillIcon(skill.name)} x="20" y="20" width="40" height="40" />
                  </g>
                </g>
              );
            })}
            {/* TypeScript branch from JavaScript */}
            {skills.filter(s => s.parent === "JavaScript").map(child => {
              const pi = skills.findIndex(s => s.name === "JavaScript");
              const pa = (pi * 2 * Math.PI) / 6 - Math.PI / 2;
              const pr = 180;
              const px = 350 + pr * Math.cos(pa);
              const py = 250 + pr * Math.sin(pa);
              const ca = pa + 0.5;
              const cr = 100;
              const cx = 350 + cr * Math.cos(ca);
              const cy = 250 + cr * Math.sin(ca);
              return (
                <g key={child.name}>
                  <line x1={px} y1={py} x2={cx} y2={cy} stroke="#52525b" strokeWidth="1" strokeDasharray="3 3" />
                  <g transform={`translate(${cx-28},${cy-28})`}>
                    <circle cx="28" cy="28" r="24" fill="#0a0a0a" stroke={skillColor(child.name)} strokeWidth="2" />
                    <image href={skillIcon(child.name)} x="12" y="12" width="32" height="32" />
                  </g>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </section>
  );
}