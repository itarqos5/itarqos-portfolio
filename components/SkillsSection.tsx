"use client";

import { useEffect, useRef, useState } from "react";
import { FileCode, Braces, FileText, Cog, Hash, BookOpen } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: FileCode, color: "#F7DF1E" },
  { name: "TypeScript", icon: Braces, color: "#3178C6", parent: "JavaScript" },
  { name: "Python", icon: FileText, color: "#3776AB" },
  { name: "Rust", icon: Cog, color: "#CE422B" },
  { name: "Java", icon: BookOpen, color: "#007396" },
  { name: "C#", icon: Hash, color: "#239120" },
  { name: "C++", icon: FileCode, color: "#00599C" },
];

export default function SkillsSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!svgRef.current || !loaded) return;

    const svg = svgRef.current;
    const width = svg.clientWidth;
    const height = svg.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 200;

    svg.innerHTML = "";

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
    gradient.id = "nodeGlow";
    gradient.innerHTML = `
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    `;
    defs.appendChild(gradient);
    svg.appendChild(defs);

    const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    bgCircle.setAttribute("cx", String(centerX));
    bgCircle.setAttribute("cy", String(centerY));
    bgCircle.setAttribute("r", String(radius + 100));
    bgCircle.setAttribute("fill", "url(#nodeGlow)");
    svg.appendChild(bgCircle);

    skills.forEach((skill, index) => {
      if (skill.parent) return;

      const angle = (index * 2 * Math.PI) / 6 - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const pathD = generateWavyLine(centerX, centerY, x, y, 8);
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathD);
      path.setAttribute("stroke", "#52525b");
      path.setAttribute("stroke-width", "2");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-dasharray", "4 4");
      svg.appendChild(path);

      const childSkills = skills.filter((s) => s.parent === skill.name);
      childSkills.forEach((child) => {
        const childAngle = angle + 0.4;
        const childRadius = radius - 60;
        const childX = centerX + childRadius * Math.cos(childAngle);
        const childY = centerY + childRadius * Math.sin(childAngle);

        const childPathD = generateWavyLine(x, y, childX, childY, 5);
        const childPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        childPath.setAttribute("d", childPathD);
        childPath.setAttribute("stroke", "#52525b");
        childPath.setAttribute("stroke-width", "1");
        childPath.setAttribute("fill", "none");
        childPath.setAttribute("stroke-dasharray", "2 2");
        svg.appendChild(childPath);

        const childGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        childGroup.setAttribute("transform", `translate(${childX}, ${childY})`);

        const childCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        childCircle.setAttribute("r", "24");
        childCircle.setAttribute("fill", "#18181b");
        childCircle.setAttribute("stroke", child.color);
        childCircle.setAttribute("stroke-width", "2");
        childGroup.appendChild(childCircle);

        const IconComponent = child.icon;
        const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        iconSvg.setAttribute("x", "-10");
        iconSvg.setAttribute("y", "-10");
        iconSvg.setAttribute("width", "20");
        iconSvg.setAttribute("height", "20");
        iconSvg.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;color:${child.color}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${child.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${getIconPath(IconComponent.name)}"/></svg></div>`;
        childGroup.appendChild(iconSvg);
        svg.appendChild(childGroup);
      });

      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      group.setAttribute("transform", `translate(${x}, ${y})`);

      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("r", "32");
      circle.setAttribute("fill", "#18181b");
      circle.setAttribute("stroke", skill.color);
      circle.setAttribute("stroke-width", "3");
      group.appendChild(circle);

      const IconComponent = skill.icon;
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      icon.setAttribute("x", "-12");
      icon.setAttribute("y", "-12");
      icon.setAttribute("width", "24");
      icon.setAttribute("height", "24");
      icon.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;color:${skill.color}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${skill.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${getIconPath(IconComponent.name)}"/></svg></div>`;
      group.appendChild(icon);
      svg.appendChild(group);
    });

    const centerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    centerGroup.setAttribute("transform", `translate(${centerX}, ${centerY})`);

    const centerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    centerCircle.setAttribute("r", "48");
    centerCircle.setAttribute("fill", "#18181b");
    centerCircle.setAttribute("stroke", "#06b6d4");
    centerCircle.setAttribute("stroke-width", "4");
    centerGroup.appendChild(centerCircle);

    const clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    clipPath.id = "centerClip";
    const clipCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    clipCircle.setAttribute("r", "44");
    clipPath.appendChild(clipCircle);
    defs.appendChild(clipPath);

    const centerImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
    centerImage.setAttribute("href", "/profile.png");
    centerImage.setAttribute("x", "-44");
    centerImage.setAttribute("y", "-44");
    centerImage.setAttribute("width", "88");
    centerImage.setAttribute("height", "88");
    centerImage.setAttribute("clip-path", "url(#centerClip)");
    centerGroup.appendChild(centerImage);
    svg.appendChild(centerGroup);
  }, [loaded]);

  if (!loaded) {
    return (
      <section className="relative z-10 py-24 px-12">
        <h2 className="mb-12 text-center font-serif text-4xl font-bold text-neutral-100 animate-pulse">
          Fields I&apos;m professional at
        </h2>
        <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-800 bg-neutral-900/50 p-12">
          <div className="grid grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-neutral-800 animate-pulse" />
                <div className="h-4 w-20 rounded bg-neutral-800 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-24 px-12">
      <h2 className="mb-12 text-center font-serif text-4xl font-bold text-neutral-100">
        Fields I&apos;m professional at
      </h2>
      <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8">
        <svg ref={svgRef} className="w-full" style={{ height: "500px" }} />
      </div>
    </section>
  );
}

function generateWavyLine(x1: number, y1: number, x2: number, y2: number, amplitude: number): string {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const perpX = -Math.sin(angle) * amplitude;
  const perpY = Math.cos(angle) * amplitude;
  const cp1X = midX + perpX * 0.5;
  const cp1Y = midY + perpY * 0.5;
  const cp2X = midX - perpX * 0.5;
  const cp2Y = midY - perpY * 0.5;
  return `M ${x1} ${y1} Q ${cp1X} ${cp1Y} ${midX} ${midY} Q ${cp2X} ${cp2Y} ${x2} ${y2}`;
}

function getIconPath(iconName: string): string {
  const paths: Record<string, string> = {
    FileCode: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2zM14 2v6h6M10 12l-2 2 2 2M14 12l2 2-2 2",
    FileText: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2zM14 2v6h6M16 13H8M16 17H8M10 9H8",
    Braces: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
    Cog: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41",
    Hash: "M4 9h16M4 15h16M10 3v18M14 3v18",
    BookOpen: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
  };
  return paths[iconName] || "";
}