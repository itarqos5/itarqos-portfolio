"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const contributions = [
  {
    name: "wWaypoints",
    description: "The best waypoints mod.",
    icon: "https://cdn.modrinth.com/data/eQke7g17/0149d0407795910e4eca30826078173d56fa2242.png",
    link: "https://modrinth.com/mod/wwaypoints",
  },
  {
    name: "NPC Studio",
    description: "Be the director of your best thumbnail yet.",
    icon: "https://cdn.modrinth.com/data/DYtNBtIy/0b759a803c347d1d59022c78deea800e33be7462_96.webp",
    link: "https://modrinth.com/mod/npc-studio",
  },
];

export default function ModContributionsSection() {
  return (
    <section className="section-shell section-line" aria-labelledby="mod-contributions-heading">
      <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <h2 id="mod-contributions-heading" className="section-heading">Mod contributions</h2>
          <p className="mt-7 max-w-sm leading-7 text-neutral-400">Minecraft mods I helped develop.</p>
        </div>
        <div className="border-t border-white/20">
          {contributions.map((mod, index) => (
            <motion.a
              key={mod.name}
              href={mod.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group grid gap-6 border-b border-white/20 py-8 sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-center"
            >
              <Image
                src={mod.icon}
                alt={`${mod.name} icon`}
                width={64}
                height={64}
                unoptimized
                className="h-16 w-16 rounded-[14px] object-cover"
              />
              <div className="min-w-0">
                <h3 className="display-type text-4xl md:text-5xl">{mod.name}</h3>
                <p className="mt-3 max-w-[60ch] text-sm leading-6 text-neutral-400">{mod.description}</p>
                <span className="micro-type mt-4 block text-neutral-500">Modrinth</span>
              </div>
              <ArrowUpRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
