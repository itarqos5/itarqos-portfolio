"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Work", "#projects"],
  ["Servers", "#servers"],
  ["Reviews", "#reviews"],
  ["Skills", "#skills"],
  ["Tech", "#technologies"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-16" aria-label="Main navigation">
        <a href="#hero" className="display-type text-xl">Literal</a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="micro-type text-neutral-400 transition-colors hover:text-white">
              {label}
            </a>
          ))}
          <a href="https://discord.com/users/1179751802393079838" target="_blank" rel="noreferrer" className="button-primary !min-h-9 !px-4 !py-2">
            Discord
          </a>
        </div>
        <button className="p-2 md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-nav" className="border-t border-white/15 bg-black px-5 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="micro-type border-b border-white/10 py-4 text-neutral-300">
                {label}
              </a>
            ))}
            <a href="https://discord.com/users/1179751802393079838" target="_blank" rel="noreferrer" className="button-primary mt-4">Contact on Discord</a>
          </div>
        </div>
      )}
    </header>
  );
}
