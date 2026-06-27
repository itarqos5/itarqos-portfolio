"use client";

import { useEffect, useRef, useState } from "react";
import { FileCode, Braces, FileText, Cog, Hash, BookOpen, Binary } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: FileCode, color: "#F7DF1E" },
  { name: "TypeScript", icon: Braces, color: "#3178C6", parent: "JavaScript" },
  { name: "Python", icon: FileText, color: "#3776AB" },
  { name: "Rust", icon: Cog, color: "#CE422B" },
  { name: "Java", icon: BookOpen, color: "#007396" },
  { name: "C#", icon: Hash, color: "#239120" },
  { name: "C++", icon: Binary, color: "#00599C" },
];

function LucideIcon({ icon: Icon, color, size = 20 }: { icon: React.ElementType; color: string; size?: number }) {
  return (
    <div style={{ color }}>
      <Icon size={size} />
    </div>
  );
}

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
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
    <section className="relative z-10 py-48 px-12" ref={containerRef}>
      <h2 className="mb-24 text-center font-serif text-4xl font-bold text-neutral-100">
        Fields I&apos;m professional at
      </h2>
      <div className="flex justify-center">
        <svg width="700" height="500" className="max-w-full">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="350" cy="250" r="280" fill="url(#glow)" />

          {skills.map((skill, index) => {
            if (skill.parent) return null;
            const angle = (index * 2 * Math.PI) / 6 - Math.PI / 2;
            const radius = 180;
            const x = 350 + radius * Math.cos(angle);
            const y = 250 + radius * Math.sin(angle);

            return (
              <g key={skill.name}>
                <line
                  x1="350"
                  y1="250"
                  x2={x}
                  y2={y}
                  stroke="#52525b"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                <g transform={`translate(${x - 40}, ${y - 50})`}>
                  <circle cx="40" cy="40" r="36" fill="#18181b" stroke={skill.color} strokeWidth="3" />
                  <foreignObject x="20" y="20" width="40" height="40">
                    <div className="flex items-center justify-center w-full h-full">
                      <LucideIcon icon={skill.icon} color={skill.color} size={24} />
                    </div>
                  </foreignObject>
                </g>
              </g>
            );
          })}

          {skills
            .filter((s) => s.parent === "JavaScript")
            .map((child) => {
              const parentIndex = skills.findIndex((s) => s.name === "JavaScript");
              const parentAngle = (parentIndex * 2 * Math.PI) / 6 - Math.PI / 2;
              const parentRadius = 180;
              const parentX = 350 + parentRadius * Math.cos(parentAngle);
              const parentY = 250 + parentRadius * Math.sin(parentAngle);
              const childRadius = 100;
              const childAngle = parentAngle + 0.5;
              const x = 350 + childRadius * Math.cos(childAngle);
              const y = 250 + childRadius * Math.sin(childAngle);

              return (
                <g key={child.name}>
                  <line
                    x1={parentX}
                    y1={parentY}
                    x2={x}
                    y2={y}
                    stroke="#52525b"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <g transform={`translate(${x - 28}, ${y - 38})`}>
                    <circle cx="28" cy="28" r="24" fill="#18181b" stroke={child.color} strokeWidth="2" />
                    <foreignObject x="14" y="14" width="28" height="28">
                      <div className="flex items-center justify-center w-full h-full">
                        <LucideIcon icon={child.icon} color={child.color} size={18} />
                      </div>
                    </foreignObject>
                  </g>
                </g>
              );
            })}

          <g transform="translate(350, 250)">
            <circle r="56" fill="#18181b" stroke="#06b6d4" strokeWidth="4" />
            <clipPath id="centerClip">
              <circle r="52" />
            </clipPath>
            <image
              href="/profile.png"
              x="-52"
              y="-52"
              width="104"
              height="104"
              clipPath="url(#centerClip)"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}