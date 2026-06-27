"use client";

import { useEffect, useRef } from "react";

const skills = [
  { name: "JavaScript", children: ["TypeScript"] },
  { name: "Python" },
  { name: "Rust" },
  { name: "Java" },
  { name: "C#" },
  { name: "C++" },
];

export default function Home() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerX = canvas.offsetWidth / 2;
    const centerY = 80;
    const radius = 280;

    const center = document.createElement("div");
    center.className = "absolute flex flex-col items-center";
    center.style.left = `${centerX}px`;
    center.style.top = `${centerY}px`;
    center.style.transform = "translate(-50%, -50%)";
    center.innerHTML = `
      <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/30">
        <img src="/profile.png" alt="Profile" class="w-full h-full object-cover" />
      </div>
      <span class="mt-3 font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">LITERAL</span>
    `;
    canvas.appendChild(center);

    const angleStep = (2 * Math.PI) / skills.length;
    const startAngle = -Math.PI / 2;

    skills.forEach((skill, index) => {
      const angle = startAngle + index * angleStep;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const line = document.createElement("div");
      line.className = "absolute bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700";
      line.style.height = "2px";
      line.style.left = `${centerX}px`;
      line.style.top = `${centerY}px`;
      line.style.width = `${radius - 40}px`;
      line.style.transformOrigin = "left center";
      line.style.transform = `rotate(${angle + Math.PI / 2}rad)`;
      canvas.appendChild(line);

      const node = document.createElement("div");
      node.className = "absolute flex flex-col items-center";
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.transform = "translate(-50%, -50%)";

      let nodeContent = `<span class="font-sans text-sm font-semibold text-neutral-200 bg-neutral-800/80 px-4 py-2 rounded-full border border-neutral-700">${skill.name}</span>`;

      if (skill.children) {
        skill.children.forEach((child) => {
          nodeContent += `<span class="mt-2 font-sans text-xs text-cyan-400 bg-neutral-900/80 px-3 py-1 rounded-full border border-cyan-400/30">${child}</span>`;
        });
      }

      node.innerHTML = nodeContent;
      canvas.appendChild(node);
    });
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/50 rounded-full blur-3xl" />
      <nav className="relative z-10 mx-auto mt-6 flex items-center gap-12 rounded-full border border-neutral-800/50 bg-neutral-950/80 py-4 px-8 backdrop-blur-sm">
        <span className="font-serif text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">LITERAL</span>
        <div className="flex gap-8">
          <span className="font-sans text-sm text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Skills</span>
          <span className="font-sans text-sm text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Projects</span>
          <span className="font-sans text-sm text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Reviews</span>
        </div>
      </nav>
      <div className="relative z-10 flex flex-1 flex-col items-center justify-start pt-8 px-12">
        <div className="relative w-full max-w-2xl" style={{ height: "500px" }}>
          <div ref={canvasRef} className="relative w-full h-full" />
        </div>
        <div className="mt-8 text-center">
          <h1 className="font-serif text-7xl md:text-8xl font-bold text-neutral-100 tracking-tight">
            LITERAL
          </h1>
          <p className="mt-4 font-sans text-lg text-neutral-400 max-w-md">
            Passionate developer &amp; software engineer, writing code line by line
          </p>
        </div>
      </div>
      <section className="relative z-10 py-24 px-12">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-neutral-100">
          Fields I&apos;m professional at
        </h2>
        <div className="relative w-full max-w-3xl mx-auto" style={{ height: "600px" }}>
          <div ref={(el) => {
            if (!el) return;
            el.innerHTML = "";
            const centerX = el.offsetWidth / 2;
            const centerY = 300;
            const radius = 220;

            const center = document.createElement("div");
            center.className = "absolute flex flex-col items-center";
            center.style.left = `${centerX}px`;
            center.style.top = `${centerY}px`;
            center.style.transform = "translate(-50%, -50%)";
            center.innerHTML = `
              <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/30">
                <img src="/profile.png" alt="Profile" class="w-full h-full object-cover" />
              </div>
              <span class="mt-3 font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">LITERAL</span>
            `;
            el.appendChild(center);

            const skillsData = [
              { name: "JavaScript", children: ["TypeScript"] },
              { name: "Python" },
              { name: "Rust" },
              { name: "Java" },
              { name: "C#" },
              { name: "C++" },
            ];

            const angleStep = (2 * Math.PI) / skillsData.length;
            const startAngle = -Math.PI / 2;

            skillsData.forEach((skill, index) => {
              const angle = startAngle + index * angleStep;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);

              const line = document.createElement("div");
              line.className = "absolute bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700 dotted-line";
              line.style.height = "2px";
              line.style.left = `${centerX}px`;
              line.style.top = `${centerY}px`;
              line.style.width = `${radius - 50}px`;
              line.style.transformOrigin = "left center";
              line.style.transform = `rotate(${angle + Math.PI / 2}rad)`;
              el.appendChild(line);

              const node = document.createElement("div");
              node.className = "absolute flex flex-col items-center";
              node.style.left = `${x}px`;
              node.style.top = `${y}px`;
              node.style.transform = "translate(-50%, -50%)";

              let nodeContent = `<span class="font-sans text-sm font-semibold text-neutral-200 bg-neutral-800/80 px-4 py-2 rounded-full border border-neutral-700 shadow-lg">${skill.name}</span>`;

              if (skill.children) {
                skill.children.forEach((child) => {
                  nodeContent += `<span class="mt-2 font-sans text-xs text-cyan-400 bg-neutral-900/80 px-3 py-1 rounded-full border border-cyan-400/30">${child}</span>`;
                });
              }

              node.innerHTML = nodeContent;
              el.appendChild(node);
            });
          }} className="relative w-full h-full" />
        </div>
      </section>
    </div>
  );
}