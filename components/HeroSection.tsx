"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaDiscord, FaGithub } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden px-5 pb-10 pt-28 md:px-16 md:pt-36">
      <div className="mx-auto grid min-h-[calc(100svh-9rem)] max-w-[1440px] items-center gap-10 lg:grid-cols-[1.04fr_.96fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative z-10">
          <h1 className="display-type text-[clamp(5.5rem,15vw,13rem)] leading-[0.72]">Literal</h1>
          <p className="micro-type mt-7 text-neutral-300">Full-stack developer &amp; systems architect</p>
          <p className="mt-6 max-w-[56ch] text-base leading-7 text-neutral-300 md:text-lg">
            Building async TCP forwarders, Minecraft plugins, and web interfaces with Java, Rust, TypeScript, and MySQL.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="https://discord.com/users/1179751802393079838" target="_blank" rel="noreferrer" className="button-primary">
              <FaDiscord aria-hidden="true" /> Contact on Discord
            </a>
            <a href="https://github.com/itarqos5" target="_blank" rel="noreferrer" className="button-secondary">
              <FaGithub aria-hidden="true" /> View GitHub <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-2 border-y border-white/15 py-4 sm:grid-cols-4">
            {["Java 21", "Netty 4", "TypeScript", "MySQL"].map((item) => <span key={item} className="micro-type py-2 text-neutral-400">{item}</span>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto aspect-square w-[82vw] max-w-[680px] lg:w-full">
          <div className="absolute inset-[2%] overflow-hidden rounded-full">
            <Image src="/profile.png" alt="Literal" fill priority sizes="(max-width: 1024px) 82vw, 45vw" className="object-cover" />
          </div>
          <div className="orbit-line inset-[1%] -rotate-12" />
          <div className="orbit-line -inset-[8%] rotate-[32deg] opacity-45 [animation-duration:42s]" />
        </motion.div>
      </div>
      <a href="#projects" className="absolute bottom-6 left-5 flex items-center gap-3 micro-type text-neutral-400 md:left-16">
        Scroll <ArrowDown size={14} />
      </a>
    </section>
  );
}
