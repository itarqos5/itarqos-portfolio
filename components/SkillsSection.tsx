"use client";

import { useEffect, useRef, useState } from "react";

const ICONS: Record<string, string> = {
  JavaScript: "M0 0h24v24H0V0zm22.034 18.276c-.175-.987-.698-1.63-2.346-2.383-.693-.336-1.262-.56-1.517-.953-.093-.204-.098-.363-.022-.551.148-.374.514-.538.996-.453.294.071.547.235.74.53.656-.416.656-.416 1.12-.703-.174-.26-.263-.364-.394-.476-.377-.44-1.088-.717-1.83-.663l-.573.062c-.5.102-.867.316-1.115.613-.427.486-.284 1.22.218 1.58.522.354 1.35.487 1.638.887.124.346.06.642-.104.83-.366.423-1.115.43-1.724.047-.295-.145-.571-.412-.823-.85l-1.17.675c.15.39.338.654.614.93 1.247 1.12 3.264 1.016 4.034-.31.01-.017.144-.4.038-.91zm-7.758-5.274h-1.69c0 1.11-.008 2.216-.008 3.326 0 .884.073 1.64-.065 1.933-.194.414-.69.357-.93.288-.236-.108-.368-.263-.52-.5-.048-.07-.084-.118-.098-.118l-1.142.713c.276.57.656 1.05 1.246 1.316.58.283 1.212.316 1.856.113.555-.16.923-.48 1.137-.92.22-.455.208-.98.206-1.616-.005-1.184 0-2.368 0-3.555v-.03z",
  TypeScript: "M3 3h18v18H3V3zm10.483 14.626v-1.74h1.74v-.906h-.906v3.803h.906V18h-2.25v.626h.51zm4.14 0v-1.74h1.74v-.906h-.906v3.803h.906V18h-2.25v.626h.51zm-8.98-.907v-1.74h1.74v-.907h-.905v1.74h-1.74v.907h.905zm0 1.74v-1.74h1.74v-.907h-.905v2.647h.905v-.907h1.74v.907h-2.68z",
  Python: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13v8.5l-.02.13-.04.26-.1.3-.16.33-.25.34-.34.34-.45.32-.59.3-.73.26-.9.2L12 14l-2.25-.18-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2v-8.5l.02-.13.04-.26.1-.3.16-.33.25-.34.34-.34.45-.32.59-.3.73-.26.9-.2L12 0l2.25.18zM7.5 7.5h9v3h-9v-3zM7.5 10.5h9v3h-9v-3zM16.5 13.5h-3V18h-3v-4.5h-3v-3h9v3z",
  Rust: "M11.91 1.039c-4.56 0-8.272 3.919-8.272 8.478 0 .463.06.987.18 1.451 1.68.576 3.36 1.15 5.04 1.728a4366 4366 0 0 1 2.912-1.013c-.72-.837-1.14-1.711-1.32-2.596-.48.12-1.02.36-1.38.66-.6.48-.66.84-.72 1.2-.06.36.06.72.3.96.18.18.42.3.72.36h.06l2.76 5.82h3.66c.36-.72.66-1.44.96-2.16l-1.2-.42c.18-.3.36-.6.48-.96.3-.72.42-1.5.24-2.28-.24-.9-.84-1.62-1.68-2.04-.84-.42-1.86-.42-2.76-.24-.36.06-.72.24-1.02.42l-1.02-2.1-1.74-3.06h2.04c.54.9 1.08 1.8 1.62 2.7l3.72-2.16c-.9-1.26-2.1-2.28-3.48-2.94-.72-.36-1.5-.54-2.28-.66-.36-.06-.72-.06-1.08-.06zM8.37 9.517c.24-.24.54-.42.9-.48.66-.12 1.32.12 1.62.72.3.6.18 1.32-.36 1.74-.54.42-1.32.48-1.92.12-.54-.36-.78-.96-.78-1.56.06-.3.24-.54.54-.54z",
  Java: "M6.241 1.039c-.78 0-1.44.3-1.98.9-.54.6-.78 1.38-.78 2.34v15.12c0 .96.24 1.74.72 2.34.48.6 1.14.9 1.98.9h11.52c.84 0 1.5-.3 1.98-.9.48-.6.72-1.38.72-2.34V4.28c0-.96-.24-1.74-.72-2.34-.48-.6-1.14-.9-1.98-.9H6.242zm0 1.62h11.52c.36 0 .66.12.9.36.24.24.36.54.36.9v15.12c0 .36-.12.66-.36.9-.24.24-.54.36-.9.36H6.242c-.36 0-.66-.12-.9-.36-.24-.24-.36-.54-.36-.9V4.28c0-.36.12-.66.36-.9.24-.24.54-.36.9-.36zm1.98 11.88c-.18.06-.36.12-.54.18-.18 0-.36.06-.54.06-.24 0-.48 0-.72-.06-.24-.06-.42-.18-.6-.36-.18-.18-.3-.42-.36-.66-.06-.24-.06-.48-.06-.78h1.62c0 .24.06.42.18.54.12.12.3.18.48.18.18 0 .36-.06.54-.12.18-.06.3-.18.42-.3.12-.12.18-.24.24-.42.06-.18.06-.36.06-.54 0-.48-.12-.84-.36-1.14-.24-.3-.6-.48-1.08-.6l-.72-.18c-.72-.18-1.26-.48-1.62-.96-.36-.48-.54-1.08-.54-1.68 0-.48.12-.96.36-1.38.24-.42.6-.72 1.02-.96.42-.24.96-.36 1.5-.36.54 0 1.02.12 1.5.36.48.24.84.6 1.08 1.02.24.42.36.9.36 1.44h-1.68c0-.24-.06-.48-.18-.66-.12-.18-.3-.3-.54-.36-.24-.06-.48-.06-.72 0-.24.06-.42.18-.54.36-.12.18-.18.36-.18.6s.06.42.18.6c.12.18.3.3.54.36l.72.18c.72.18 1.32.48 1.68.96.36.48.54 1.08.54 1.68 0 .48-.12.96-.36 1.38-.24.42-.6.72-1.02.96-.42.24-.9.36-1.38.36z",
  "C#": "M12 1.039A12 12 0 0 0 0 13.039a12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zM9.854 14.935h-2.18l.462-2.796h2.098l-.38 2.796zm2.68-2.796h1.818l.462-2.796h-1.698l-.58 2.796zm2.978 0h2.178l.462-2.796h-2.098l-.542 2.796zm-5.018-4.884h1.698l.46-2.796H10.35l-.856 2.796zm2.698-2.796l.54-3.316h2.058l-.38 2.316.462-2.316h1.758l-.462 2.796h1.818l.46-2.796h1.698l-.46 2.796h2.18l-.38 2.316h-2.098l-.542 3.316h2.178l-.38 2.316h-2.098l-.462 2.796h-1.698l.462-2.796h-1.818l-.462 2.796H12.27l.462-2.796H10.55zm-1.82 8.2h-1.698l-.462 2.796H7.114l.462-2.796H5.396l.38-2.316h2.098l.542-3.316H6.278l.38-2.316h2.098l.462-2.796h1.698l-.462 2.796h1.818l.462-2.796h1.698l-.462 2.796h2.178l-.38 2.316h-2.098l-.542 3.316h2.178l-.38 2.316h-2.098l-.462 2.796h-1.698l.462-2.796h-1.818l-.462 2.796h-1.698l.462-2.796H8.932z",
  "C++": "M22.393 6c-.167-.29-.398-.543-.652-.69L12.925.215c-.293-.17-.663-.147-.935.08L2.25 5.92c-.39.33-.475.89-.195 1.288l2.486 3.608L2.15 15.45c-.253.368-.167.855.207 1.14l8.96 6.8c.305.23.71.26 1.05.08l11.04-6.02c.374-.204.573-.66.454-1.087l-.873-4.85 2.405-3.403zM13.132 14.34l-3.637 1.98.76-4.408-4.204-6.116 4.695-.543 1.943-3.59 1.928 3.59 4.695.543-3.564 5.18c-.298.434-.224 1.06.183 1.38l3.13 2.475-3.804 2.078-3.125-2.567z",
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

const skills = [
  { name: "JavaScript" },
  { name: "TypeScript", parent: "JavaScript" },
  { name: "Python" },
  { name: "Rust" },
  { name: "Java" },
  { name: "C#" },
  { name: "C++" },
];

const CENTER_R = 56;
const NODE_R = 38;
const CHILD_NODE_R = 26;
const GRAPH_CX = 350;
const GRAPH_CY = 250;
const RADIUS = 180;

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

          <circle cx={GRAPH_CX} cy={GRAPH_CY} r="280" fill="url(#glow)" />

          <g>
            {skills.filter(s => !s.parent).map((skill, i) => {
              const a = (i * 2 * Math.PI) / 6 - Math.PI / 2;
              const nx = GRAPH_CX + RADIUS * Math.cos(a);
              const ny = GRAPH_CY + RADIUS * Math.sin(a);
              const dirX = Math.cos(a);
              const dirY = Math.sin(a);
              const sx = GRAPH_CX + (CENTER_R + 4) * dirX;
              const sy = GRAPH_CY + (CENTER_R + 4) * dirY;
              const ex = nx - (NODE_R + 4) * dirX;
              const ey = ny - (NODE_R + 4) * dirY;
              return (
                <g key={skill.name}>
                  <line x1={sx} y1={sy} x2={ex} y2={ey} stroke="#52525b" strokeWidth="1.5" strokeDasharray="6 4" />
                  <g transform={`translate(${nx-NODE_R},${ny-NODE_R})`}>
                    <circle cx={NODE_R} cy={NODE_R} r={NODE_R-1} fill="#0a0a0a" stroke={COLORS[skill.name]} strokeWidth="2.5" />
                    <svg x={NODE_R-16} y={NODE_R-16} width="32" height="32" viewBox="0 0 24 24" fill={COLORS[skill.name]}>
                      <path d={ICONS[skill.name]} />
                    </svg>
                  </g>
                </g>
              );
            })}
            {skills.filter(s => s.parent === "JavaScript").map(child => {
              const pi = skills.findIndex(s => s.name === "JavaScript");
              const pa = (pi * 2 * Math.PI) / 6 - Math.PI / 2;
              const px = GRAPH_CX + RADIUS * Math.cos(pa);
              const py = GRAPH_CY + RADIUS * Math.sin(pa);
              const ba = pa + 0.5;
              const BR = 105;
              const cx = GRAPH_CX + BR * Math.cos(ba);
              const cy = GRAPH_CY + BR * Math.sin(ba);
              const ndx = Math.cos(ba);
              const ndy = Math.sin(ba);
              const sx = px + (NODE_R + 2) * ndx;
              const sy = py + (NODE_R + 2) * ndy;
              const ex = cx - (CHILD_NODE_R + 2) * ndx;
              const ey = cy - (CHILD_NODE_R + 2) * ndy;
              return (
                <g key={child.name}>
                  <line x1={sx} y1={sy} x2={ex} y2={ey} stroke="#52525b" strokeWidth="1" strokeDasharray="3 3" />
                  <g transform={`translate(${cx-CHILD_NODE_R},${cy-CHILD_NODE_R})`}>
                    <circle cx={CHILD_NODE_R} cy={CHILD_NODE_R} r={CHILD_NODE_R-1} fill="#0a0a0a" stroke={COLORS[child.name]} strokeWidth="2" />
                    <svg x={CHILD_NODE_R-12} y={CHILD_NODE_R-12} width="24" height="24" viewBox="0 0 24 24" fill={COLORS[child.name]}>
                      <path d={ICONS[child.name]} />
                    </svg>
                  </g>
                </g>
              );
            })}
          </g>

          <g transform={`translate(${GRAPH_CX},${GRAPH_CY})`}>
            <circle r={CENTER_R} fill="#0a0a0a" stroke="#06b6d4" strokeWidth="3" />
            <clipPath id="cc">
              <circle r={CENTER_R - 4} />
            </clipPath>
            <image href="/profile.png" x={-(CENTER_R-4)} y={-(CENTER_R-4)} width={(CENTER_R-4)*2} height={(CENTER_R-4)*2} clipPath="url(#cc)" preserveAspectRatio="xMidYMid slice" />
          </g>
        </svg>
      </div>
    </section>
  );
}