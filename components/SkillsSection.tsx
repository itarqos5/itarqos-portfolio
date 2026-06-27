"use client";

import { useEffect, useRef, useState } from "react";
import { SiJavascript, SiTypescript, SiPython, SiRust, SiJava, SiCplusplus, SiCsharp } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", parent: "JavaScript" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Rust", icon: SiRust, color: "#000000" },
  { name: "Java", icon: SiJava, color: "#007396" },
  { name: "C#", icon: SiCsharp, color: "#239120" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
];

export default function SkillsSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
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

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", String(centerX));
      line.setAttribute("y1", String(centerY));
      line.setAttribute("x2", String(x));
      line.setAttribute("y2", String(y));
      line.setAttribute("stroke", "#52525b");
      line.setAttribute("stroke-width", "2");
      line.setAttribute("stroke-dasharray", "4 4");
      svg.appendChild(line);

      const childSkills = skills.filter((s) => s.parent === skill.name);
      childSkills.forEach((child) => {
        const childAngle = angle + 0.4;
        const childRadius = radius - 60;
        const childX = centerX + childRadius * Math.cos(childAngle);
        const childY = centerY + childRadius * Math.sin(childAngle);

        const childLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        childLine.setAttribute("x1", String(x));
        childLine.setAttribute("y1", String(y));
        childLine.setAttribute("x2", String(childX));
        childLine.setAttribute("y2", String(childY));
        childLine.setAttribute("stroke", "#52525b");
        childLine.setAttribute("stroke-width", "1");
        childLine.setAttribute("stroke-dasharray", "2 2");
        svg.appendChild(childLine);

        const childGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        childGroup.setAttribute("transform", `translate(${childX}, ${childY})`);

        const childCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        childCircle.setAttribute("r", "24");
        childCircle.setAttribute("fill", "#18181b");
        childCircle.setAttribute("stroke", child.color);
        childCircle.setAttribute("stroke-width", "2");
        svg.appendChild(childGroup);

        const childIcon = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        childIcon.setAttribute("x", "-12");
        childIcon.setAttribute("y", "-12");
        childIcon.setAttribute("width", "24");
        childIcon.setAttribute("height", "24");
        childIcon.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;color:${child.color}"><svg viewBox="0 0 24 24" width="20" height="20"><path fill="${child.color}" d="${getIconPath(child.icon.name)}"/></svg></div>`;
        childGroup.appendChild(childIcon);
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

      const icon = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      icon.setAttribute("x", "-14");
      icon.setAttribute("y", "-14");
      icon.setAttribute("width", "28");
      icon.setAttribute("height", "28");
      icon.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;color:${skill.color}"><svg viewBox="0 0 24 24" width="24" height="24"><path fill="${skill.color}" d="${getIconPath(skill.icon.name)}"/></svg></div>`;
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

function getIconPath(iconName: string): string {
  const paths: Record<string, string> = {
    sijavascript: "M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.202-.314-.311-.449-.439-.549-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.073-.607-.18-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.001.001zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z",
    sitypescript: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM9.217 18.023h-.855l-.82 2.115H5.854l3.938-9.156h.854l3.937 9.156h-1.703l-.82-2.115zm-.422-3.6l-1.076-2.786-.538-1.395h-.043l-1.073 2.786-.538 1.395h1.702l.538-1.395.537-1.395h.043l.537 1.395 1.076 2.786h-1.701l.537-1.391zm8.455 2.64c0 .81-.434 1.177-1.165 1.177-.701 0-1.126-.384-1.126-1.176V14.88h-.82v3.218c0 1.211.684 1.823 1.946 1.823.984 0 1.625-.438 1.625-1.372v-.547h-.82v.547c0 .517-.28.784-.805.784-.508 0-.806-.266-.806-.784v-3.19h.82v3.172h.151v-.017zm3.938.96h.855v-3.92h.82v3.92h.855v.96h-2.53v-.96z",
    sipython: "M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13v8.78l-.02.13-.04.26-.1.3-.16.33-.25.34-.34.34-.45.32-.59.3-.73.26-.9.2L12 14l-2.31-.18-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2v-8.78l.02-.13.04-.26.1-.3.16-.33.25-.34.34-.34.45-.32.59-.3.73-.26.9-.2L12 0l2.31.18M22 12l-2.64 2.64.52 2.28-2.76.75-1.3 2.24-2.6-.7v-1.4l1.9-.52.7-.7-1.22-2.64 2.76-.75.52 2.28L22 12v-.01zm-8.36.3l-1.3.36-1.22 2.64.7.7-1.9.52v1.4l2.6.7 1.3-2.24 2.76-.75-.52-2.28L12 11.69l.64.64v-.02z",
    sirust: "M23.996 12.566A23.74 23.74 0 0 1 12 23.744 23.74 23.74 0 0 1 .004 12.566C-.26 6.41 4.78 1.224 12 0c7.22 1.224 12.26 6.41 11.996 12.566zm-11.996-1.31L6.28 7.44l.63-2.85L11 1.02l1.56 3.58 1.6-2.72L17.74 4l.63 2.85-5.72 3.73-.63 2.85-1.56-3.73-1.6 2.72-3.58-2.27z",
    sjava: "M13.21 20.94c2.02.08 2.79-.22 3.7-1.37.74-.93 1.27-2.16 1.38-3.47-1.21-.73-2.51-1.2-3.78-1.39-.17 1.01-.43 2.04-.92 3.03-.22.47-.56.95-.38 1.2zm-.56-5.62c-.25-1.34.19-2.94 1.19-3.78.44-.37 1.13-.66 1.65-.46.49.19.72.78.71 1.29 0 .42-.15.83-.32 1.21-.28.64-.65 1.22-.99 1.84-.07.14-.17.27-.22.42-.22.68.21 1.23.88 1.26.6.02 1.13-.4 1.22-1 .09-.63-.06-1.25-.24-1.85-.04-.12-.12-.26-.19-.39.46.17.91.37 1.33.61.52.29.79.85.63 1.42-.13.47-.57.81-1.05.97-.54.18-1.12.16-1.68.12-.62-.04-1.23-.15-1.82-.29-.09-.02-.2-.04-.29-.07-.08.53-.1 1.07-.06 1.61.05.62.31 1.23.82 1.55.45.28 1.04.26 1.47.03.52-.27.76-.87.75-1.43 0-.44-.18-.87-.4-1.24-.37-.64-.81-1.23-1.14-1.9-.05-.1-.13-.23-.15-.34.45.16.89.35 1.31.57.43.22.82.55 1.04.99.19.39.2.85.06 1.25-.17.48-.62.83-1.12.95-.55.13-1.12.06-1.66-.06-.6-.13-1.18-.35-1.74-.58-.1-.04-.22-.09-.34-.13.04.61.16 1.22.36 1.81.21.64.68 1.24 1.35 1.4.59.14 1.24-.02 1.66-.49.36-.41.45-1 .39-1.54-.1-.85-.47-1.65-.81-2.43-.07-.15-.18-.33-.23-.49zM8.56 21.02c-1.02-.08-2.17-.41-2.99-1.26-.66-.68-1.02-1.58-1.11-2.51-.07-.8.11-1.6.46-2.33.27-.57.66-1.08 1.09-1.55.32-.35.69-.65 1.05-.96-.43-.07-.88-.1-1.34-.08-.7.04-1.4.27-1.98.68-.7.49-1.21 1.25-1.47 2.07-.29.93-.24 1.9.15 2.8.37.86 1.05 1.59 1.92 1.97 1.03.45 2.28.41 3.29-.04.12-.06.25-.12.36-.2.13-.09.27-.17.38-.28.21-.19.35-.44.43-.71.11-.36.09-.73.02-1.09-.06-.28-.18-.54-.31-.79-.22-.44-.5-.85-.72-1.29-.07-.14-.17-.31-.2-.47-.15-.75.32-1.47 1.01-1.74.61-.23 1.31-.06 1.76.44.19.21.32.47.37.74.03.17.01.34-.02.51-.04.23-.12.46-.21.68-.14.38-.33.75-.47 1.13-.05.15-.13.33-.13.49-.01.65.63 1.15 1.28 1.05.6-.09 1.04-.62 1.03-1.22 0-.47-.22-.92-.5-1.29-.48-.64-1.09-1.18-1.62-1.79-.09-.11-.2-.23-.26-.36-.07.58-.09 1.16-.07 1.74.03.71.22 1.43.75 1.95.47.46 1.17.67 1.84.58.59-.08 1.11-.44 1.39-.97.26-.51.24-1.12.06-1.66-.28-.85-.78-1.6-1.31-2.32-.09-.12-.2-.26-.34-.37.5.1 1 .27 1.47.5.47.23.89.58 1.12 1.06.21.43.22.94.1 1.39-.14.53-.57.96-1.08 1.17-.56.23-1.21.18-1.78.06-.63-.14-1.24-.36-1.82-.62-.11-.05-.24-.11-.36-.16.06.59.04 1.19-.06 1.78-.11.68-.46 1.34-1.05 1.72-.52.33-1.21.36-1.77.15-.5-.19-.86-.63-1.03-1.13-.21-.62-.11-1.29.1-1.9.35-1.02.87-1.96 1.37-2.9.08-.15.2-.33.24-.49z",
    sicplusplus: "M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.19c-.293-.17-.663-.147-.935.08L2.25 5.882c-.39.33-.475.89-.195 1.288l2.486 3.608L2.15 15.41c-.253.368-.167.855.207 1.14l8.96 6.801c.305.23.71.26 1.05.08l11.04-6.02c.374-.204.573-.66.454-1.087l-.873-4.85 2.405-3.403zM13.132 14.296l-3.637 1.98.76-4.408-4.204-6.116 4.695-.543 1.943-3.59 1.928 3.59 4.695.543-3.564 5.18c-.298.434-.224 1.06.183 1.38l3.13 2.475-3.804 2.078-3.125-2.567z",
    sicsharp: "M10.283 1.4c-.47-.28-1.11-.28-1.58 0L5.12 3.93l2.59 1.52-2.33 4.07-4.24-2.5-.07-.04v5.03l4.31 2.54.07.04 2.69-4.7 2.59 1.52-.71 2.53c-.12.42.04.87.4 1.1l3.94 2.33c.46.27 1.08.27 1.54 0l10.14-5.88c.46-.27.74-.79.65-1.32l-.9-5.07c-.09-.53-.54-.93-1.08-.93h-5.62c-.54 0-.99.4-1.08.93l-.37 2.09-2.62-1.55.37-2.07c.09-.53-.19-1.05-.65-1.32L10.283 1.4z",
  };
  return paths[iconName] || "";
}