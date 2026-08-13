"use client";

import { ExternalLink, Database, Cpu, Server } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    name: "KrakenMC",
    description: "A blazingly fast, multi-threaded Minecraft server & proxy built in Rust.",
    link: "https://github.com/itarqos5/KrakenMC",
    icon: Server,
    tags: ["Rust", "Minecraft", "Proxy", "Multi-Threaded"],
    badgeColor: "border-rose-500/30 text-rose-300 bg-rose-500/10",
  },
  {
    name: "Essentials-MySQL",
    description: "The popular & famous EssentialsX plugin, now with support for MySQL!",
    link: "https://github.com/itarqos5/Essentials-MySQL",
    icon: Database,
    tags: ["Java", "MySQL", "Minecraft", "Plugin"],
    badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10",
  },
  {
    name: "Vector",
    description: "High-performance asymmetric TCP forwarder built on Netty 4 NIO.",
    link: "https://github.com/itarqos5/Vector",
    icon: Cpu,
    tags: ["Java", "Netty 4 NIO", "Networking", "TCP"],
    badgeColor: "border-cyan-500/30 text-cyan-300 bg-cyan-500/10",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 py-24 px-4 md:px-12 max-w-7xl mx-auto w-full select-none"
    >
      <h2 className="mb-4 text-center font-sans text-xs tracking-[0.3em] text-neutral-600 uppercase">
        Featured Work
      </h2>
      <h2 className="mb-16 text-center font-serif text-3xl font-bold text-neutral-100">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const IconComponent = project.icon;
          return (
            <div
              key={project.name}
              className="relative group rounded-2xl border border-white/5 bg-neutral-900/30 p-8 flex flex-col justify-between gap-6 hover:border-white/15 hover:bg-neutral-900/60 shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl border ${project.badgeColor}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-neutral-100 group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-white/5 bg-neutral-800/40 text-neutral-400 hover:text-white hover:border-white/20 hover:bg-neutral-800 transition-all shrink-0 ml-2"
                    title="View on GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>

                <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-400 bg-neutral-950/60 border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-xs text-neutral-300 hover:text-white transition-colors font-medium ml-auto"
                >
                  Repository
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
