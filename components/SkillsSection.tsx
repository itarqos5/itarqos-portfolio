"use client";

import { motion } from "framer-motion";

const skills = ["JavaScript", "TypeScript", "Python", "Rust", "Java", "C#", "C++"];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-line">
      <div className="grid items-center gap-16 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <h2 className="section-heading">Skills</h2>
          <p className="mt-7 max-w-sm leading-7 text-neutral-400">Languages used across backend, systems, plugins, and web work.</p>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[650px]">
          {[92, 68, 44].map((size) => <div key={size} className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" style={{ width: `${size}%` }} />)}
          <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-black display-type text-xl">Literal</div>
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2;
            const left = 50 + Math.cos(angle) * 42;
            const top = 50 + Math.sin(angle) * 42;
            return (
              <motion.div key={skill} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${left}%`, top: `${top}%` }} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
                <span className="block rounded-full border border-white/40 bg-black px-3 py-2 micro-type text-neutral-200">{skill}</span>
              </motion.div>
            );
          })}
          <div className="orbit-line inset-[8%] rotate-12 opacity-55" />
        </div>
      </div>
    </section>
  );
}
