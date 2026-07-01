"use client";

import { GiSquidHead } from "react-icons/gi";
import { Cat, Moon } from "lucide-react";

const projects = [
  {
    name: "KrakenMC",
    icon: GiSquidHead,
    description:
      "KrakenMC is a high-performance Rust-based Minecraft server engine designed for low latency and high throughput. It features an ultra-fast asynchronous boot pipeline (starting in ~10ms), a protocol-aware proxy bridge (via the ViaKraken plugin), and a modular Bevy ECS backend utilizing Pumpkin Protocol primitives.",
    link: "https://github.com/itarqos5/KrakenMC",
  },
  {
    name: "CalaDNS",
    icon: Cat,
    description:
      "CalaDNS is a lightweight, open-source extension for the Calagopus game server management panel that gives players the power to create custom subdomains for their game servers instantly, entirely dropping the need for confusing numerical IP addresses.",
    link: "Unavailable yet",
  },
  {
    name: "Dormant Servers",
    icon: Moon,
    description:
      "Dormant Servers is an open-source, high-performance extension for Calagopus that eliminates a massive problem for game hosts: empty servers wasting valuable CPU and RAM.",
    link: "Unavailable yet",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 flex flex-col items-center px-4 md:px-12 pb-24 w-full"
    >
      <h2 className="mb-4 text-center font-sans text-xs tracking-[0.3em] text-neutral-600 uppercase">
        My Work
      </h2>
      <h2 className="mb-16 text-center font-serif text-3xl font-bold text-neutral-100">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {projects.map((project) => (
          <div
            key={project.name}
            className="relative rounded-2xl border border-white/5 bg-neutral-900/20 p-6 flex flex-col gap-4 hover:border-white/10 hover:bg-neutral-900/30 hover:-translate-y-1 shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-800/50 text-neutral-300 shrink-0">
                <project.icon className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-semibold text-neutral-100">
                {project.name}
              </h3>
            </div>
            <p className="font-sans text-sm text-neutral-300 leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="mt-4">
              {project.link === "Unavailable yet" ? (
                <span className="inline-flex items-center text-xs font-medium text-neutral-500 bg-neutral-800/30 px-4 py-2 rounded-full">
                  Unavailable yet
                </span>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-medium text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 rounded-full transition-colors"
                >
                  View Project &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
