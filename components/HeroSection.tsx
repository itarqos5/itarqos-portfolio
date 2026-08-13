"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Terminal, Code2, ShieldCheck } from "lucide-react";
import { FaGithub, FaDiscord } from "react-icons/fa6";

const techBadges = ["Java 21", "Netty 4", "TypeScript", "Next.js", "MySQL"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-[100dvh] flex items-center justify-center px-6 md:px-12 py-24 select-none"
    >
      <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Asymmetric Hero Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-6 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-medium tracking-wide text-emerald-400">
                Available for Custom Development
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-neutral-900/40 text-neutral-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              High-Performance Systems
            </div>
          </motion.div>

          {/* Main Title & Role */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <h1 className="font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-400">
              Literal
            </h1>
            <p className="font-mono text-sm sm:text-base text-purple-400/90 font-medium tracking-wide uppercase">
              Full-Stack Developer &amp; Systems Architect
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg text-neutral-400 max-w-[58ch] leading-relaxed"
          >
            Building high-performance async TCP forwarders, robust Minecraft plugins, and sleek web interfaces — engineered with precision and speed.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-neutral-950 font-sans text-sm font-semibold hover:bg-neutral-200 transition-all shadow-lg shadow-white/5 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/itarqos5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur-md text-neutral-200 font-sans text-sm font-medium hover:border-white/20 hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <FaGithub className="w-4 h-4 text-neutral-300" />
              GitHub
            </a>

            <a
              href="https://discord.com/users/literal.uu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur-md text-neutral-200 font-sans text-sm font-medium hover:border-purple-500/40 hover:bg-purple-950/20 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <FaDiscord className="w-4 h-4 text-purple-400" />
              Discord
            </a>
          </motion.div>

          {/* Tech Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
            <span className="font-mono text-xs text-neutral-500 mr-2">Core Tech:</span>
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono text-neutral-300 bg-neutral-900/80 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: High-Agency Refraction Card & Visual Stack */}
        <motion.div
          className="lg:col-span-5 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.25 }}
        >
          {/* Ambient Multi-Layer Aura */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600/20 via-cyan-500/10 to-indigo-600/20 blur-3xl opacity-75 pointer-events-none" />

          {/* Main Refraction Container */}
          <div className="relative group w-full max-w-[380px]">
            {/* Edge Refraction Frame */}
            <div className="relative rounded-3xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-xl shadow-2xl shadow-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-500 hover:border-purple-500/30">
              
              {/* Profile Image with Ring */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden ring-1 ring-white/10 group-hover:ring-purple-500/40 transition-all duration-500">
                <img
                  src="/profile.png"
                  alt="Literal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Name Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-sans text-base font-bold text-white tracking-wide">
                      Literal
                    </h3>
                    <p className="font-mono text-[11px] text-neutral-400">
                      @literal.uu
                    </p>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-950/80 border border-white/10 text-emerald-400 text-xs font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1 (Top-Left) */}
              <motion.div
                className="absolute -top-4 -left-4 px-4 py-2.5 rounded-2xl border border-white/10 bg-neutral-900/90 backdrop-blur-md shadow-xl flex items-center gap-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold text-neutral-100">5.0 / 5.0 Rating</span>
                  <span className="font-mono text-[10px] text-neutral-400">Client Feedback</span>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2 (Bottom-Right) */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl border border-white/10 bg-neutral-900/90 backdrop-blur-md shadow-xl flex items-center gap-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold text-neutral-100">Java &amp; Netty</span>
                  <span className="font-mono text-[10px] text-neutral-400">Core Expertise</span>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}