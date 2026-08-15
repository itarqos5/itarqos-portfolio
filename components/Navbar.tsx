"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Servers", href: "#servers" },
  { name: "Reviews", href: "#reviews" },
  { name: "Skills", href: "#skills" },
  { name: "Technologies", href: "#technologies" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="relative w-full max-w-md md:w-auto flex items-center justify-between md:justify-start gap-4 md:gap-6 rounded-full border border-white/10 bg-neutral-900/80 py-2 px-5 md:px-6 backdrop-blur-md shadow-2xl shadow-black/80">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="font-serif text-xs md:text-sm font-bold text-neutral-200 hover:text-white transition-colors mr-1 md:mr-2"
        >
          Literal
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] md:text-[11px] text-neutral-400 hover:text-neutral-200 transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {/* Mobile Menu Dropdown Card */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 p-3 rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-2xl flex flex-col gap-1 md:hidden z-50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-xs text-neutral-300 hover:text-white hover:bg-white/10 py-2.5 px-4 rounded-xl transition-all tracking-widest uppercase font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}