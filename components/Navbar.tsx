"use client";

export default function Navbar() {
  return (
    <div className="relative z-10 flex justify-center py-4 md:py-6 px-4">
      <nav className="inline-flex items-center gap-3 md:gap-5 rounded-full border border-neutral-800/40 bg-neutral-950/80 py-1.5 px-3 md:px-4 backdrop-blur-md">
        <span className="font-serif text-xs md:text-sm font-bold text-neutral-300 mr-1 md:mr-2">Literal</span>
        <span className="font-sans text-[10px] md:text-[11px] text-neutral-500 hover:text-neutral-200 cursor-pointer transition-colors tracking-wide">Skills</span>
        <span className="font-sans text-[10px] md:text-[11px] text-neutral-500 hover:text-neutral-200 cursor-pointer transition-colors tracking-wide">Projects</span>
        <span className="font-sans text-[10px] md:text-[11px] text-neutral-500 hover:text-neutral-200 cursor-pointer transition-colors tracking-wide">Reviews</span>
      </nav>
    </div>
  );
}