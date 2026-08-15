"use client";

import { useState } from "react";
import { Menu, X, FolderGit2, Server, Star, Wrench, Cpu } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Servers", href: "#servers", icon: Server },
  { name: "Reviews", href: "#reviews", icon: Star },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Technologies", href: "#technologies", icon: Cpu },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Desktop Floating Pill Navbar */}
      <nav className="hidden md:inline-flex items-center gap-2 lg:gap-3 rounded-full border border-white/10 bg-neutral-950/80 py-2 px-6 backdrop-blur-xl shadow-2xl shadow-black/80 pointer-events-auto">
        <a
          href="#hero"
          className="group flex items-center gap-2 font-serif text-sm font-bold text-neutral-100 hover:text-white transition-colors py-1.5 px-3.5 rounded-full hover:bg-white/5 mr-2"
        >
          <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
          Literal
        </a>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-sans text-[11px] font-semibold tracking-widest text-neutral-400 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200 uppercase whitespace-nowrap"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Floating Bar */}
      <div className="relative w-full max-w-sm flex md:hidden items-center justify-between rounded-full border border-white/10 bg-neutral-950/80 py-2.5 px-5 backdrop-blur-xl shadow-2xl shadow-black/80 pointer-events-auto">
        <a
          href="#hero"
          className="flex items-center gap-2 font-serif text-sm font-bold text-neutral-100 hover:text-white transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
          Literal
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Dropdown Card */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 p-3 rounded-2xl border border-white/10 bg-neutral-950/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-1 z-50">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 font-sans text-xs text-neutral-300 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all tracking-wider uppercase font-medium"
                >
                  <IconComponent className="w-4 h-4 text-purple-400" />
                  {link.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}