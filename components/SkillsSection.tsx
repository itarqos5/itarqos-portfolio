"use client";

import { useEffect, useState } from "react";

const ICONS: Record<string, string> = {
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
};

const COLORS: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3776AB",
  Rust: "#CE422B",
  Java: "#FF7800",
  "C#": "#239120",
  "C++": "#00599C",
};

function iconStyle(name: string): React.CSSProperties {
  if (name === "Rust") {
    return { filter: "invert(38%) sepia(52%) saturate(628%) hue-rotate(335deg) brightness(91%) contrast(93%)" };
  }
  return {};
}

const skills = [
  { name: "JavaScript" },
  { name: "TypeScript", parent: "JavaScript" },
  { name: "Python" },
  { name: "Rust" },
  { name: "Java" },
  { name: "C#" },
  { name: "C++" },
];

export default function SkillsSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
    <section className="relative z-10 pt-32 pb-48 px-8 md:px-12 snap-start">
        <h2 className="mb-4 text-center font-sans text-xs tracking-[0.3em] text-neutral-600 uppercase">
          What I work with
        </h2>
        <h2 className="mb-16 text-center font-serif text-3xl font-bold text-neutral-100 animate-pulse">
          Experience
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-neutral-800/50 animate-pulse" />
              <div className="h-3 w-20 rounded bg-neutral-800/50 animate-pulse" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
      <section className="relative z-10 pt-32 pb-48 px-8 md:px-12 snap-start">
      <h2 className="mb-4 text-center font-sans text-xs tracking-[0.3em] text-neutral-600 uppercase">
        What I work with
      </h2>
      <h2 className="mb-16 text-center font-serif text-3xl font-bold text-neutral-100">
        Experience
      </h2>

      <div className="relative mx-auto" style={{ width: "600px", height: "600px" }}>
        {/* Center profile */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden ring-2 ring-neutral-700 z-10">
          <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Main skills */}
        {skills.filter(s => !s.parent).map((skill, i) => {
          const angle = (i * 2 * Math.PI) / 6 - Math.PI / 2;
          const radius = 220;
          const x = 300 + radius * Math.cos(angle);
          const y = 300 + radius * Math.sin(angle);
          const color = COLORS[skill.name];
          const icon = ICONS[skill.name];

          return (
            <div key={skill.name}>
              {/* Connecting line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <line
                  x1="300"
                  y1="300"
                  x2={x}
                  y2={y}
                  stroke="#27272a"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
              </svg>

              {/* Skill node */}
              <div
                className="absolute flex flex-col items-center gap-2"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "#0a0a0a",
                    border: `2px solid ${color}`,
                  }}
                >
                  <img src={icon} alt={skill.name} className="w-8 h-8" style={iconStyle(skill.name)} />
                </div>
                <span className="text-xs text-neutral-400 font-sans">{skill.name}</span>
              </div>
            </div>
          );
        })}

        {/* TypeScript branch from JavaScript */}
        {skills.filter(s => s.parent === "JavaScript").map(child => {
          const pi = skills.findIndex(s => s.name === "JavaScript");
          const pa = (pi * 2 * Math.PI) / 6 - Math.PI / 2;
          const px = 300 + 220 * Math.cos(pa);
          const py = 300 + 220 * Math.sin(pa);
          const ba = pa + 0.6;
          const br = 130;
          const cx = 300 + br * Math.cos(ba);
          const cy = 300 + br * Math.sin(ba);
          const color = COLORS[child.name];
          const icon = ICONS[child.name];

          return (
            <div key={child.name}>
              {/* Connecting line from JavaScript */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <line
                  x1={px}
                  y1={py}
                  x2={cx}
                  y2={cy}
                  stroke="#27272a"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              </svg>

              {/* Child node */}
              <div
                className="absolute flex flex-col items-center gap-1"
                style={{
                  left: `${cx}px`,
                  top: `${cy}px`,
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "#0a0a0a",
                    border: `1.5px solid ${color}`,
                  }}
                >
                  <img src={icon} alt={child.name} className="w-6 h-6" style={iconStyle(child.name)} />
                </div>
                <span className="text-[10px] text-neutral-500 font-sans">{child.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}