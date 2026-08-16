"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { name: "KrakenMC", description: "A multi-threaded Minecraft server and proxy built in Rust.", link: "https://github.com/itarqos5/KrakenMC", tags: ["Rust", "Minecraft", "Proxy", "Multi-threaded"] },
  { name: "Essentials-MySQL", description: "EssentialsX with support for MySQL.", link: "https://github.com/itarqos5/Essentials-MySQL", tags: ["Java", "MySQL", "Minecraft", "Plugin"] },
  { name: "Vector", description: "An asymmetric TCP forwarder built on Netty 4 NIO.", link: "https://github.com/itarqos5/Vector", tags: ["Java", "Netty 4 NIO", "Networking", "TCP"] },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell section-line">
      <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <h2 className="section-heading">Featured work</h2>
          <p className="mt-7 max-w-sm leading-7 text-neutral-400">Three public projects across game infrastructure, databases, and networking.</p>
        </div>
        <div className="border-t border-white/20">
          {projects.map((project, index) => (
            <motion.a key={project.name} href={project.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-15%" }} transition={{ duration: 0.55, delay: index * 0.08 }} className="group grid gap-5 border-b border-white/20 py-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="display-type text-4xl md:text-5xl">{project.name}</h3>
                <p className="mt-3 max-w-[60ch] text-sm leading-6 text-neutral-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">{project.tags.map((tag) => <span key={tag} className="micro-type text-neutral-500">{tag}</span>)}</div>
              </div>
              <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
