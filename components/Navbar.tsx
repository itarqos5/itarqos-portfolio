"use client";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="inline-flex items-center gap-4 md:gap-6 rounded-full border border-white/5 bg-neutral-900/60 py-2 px-5 md:px-6 backdrop-blur-md shadow-2xl shadow-black/80">
        <a
          href="#hero"
          className="font-serif text-xs md:text-sm font-bold text-neutral-200 hover:text-white transition-colors mr-2"
        >
          Literal
        </a>
        <a
          href="#projects"
          className="font-sans text-[10px] md:text-[11px] text-neutral-400 hover:text-neutral-200 transition-colors tracking-widest uppercase"
        >
          Projects
        </a>
        <a
          href="#reviews"
          className="font-sans text-[10px] md:text-[11px] text-neutral-400 hover:text-neutral-200 transition-colors tracking-widest uppercase"
        >
          Reviews
        </a>
        <a
          href="#skills"
          className="font-sans text-[10px] md:text-[11px] text-neutral-400 hover:text-neutral-200 transition-colors tracking-widest uppercase"
        >
          Skills
        </a>
        <a
          href="#technologies"
          className="font-sans text-[10px] md:text-[11px] text-neutral-400 hover:text-neutral-200 transition-colors tracking-widest uppercase"
        >
          Technologies
        </a>
      </nav>
    </div>
  );
}