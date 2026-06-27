"use client";

export default function Navbar() {
  return (
    <div className="relative z-10 flex justify-center py-6">
      <nav className="inline-flex items-center gap-4 rounded-full border border-neutral-800/60 bg-neutral-950/90 py-2 px-5 backdrop-blur-md">
        <span className="font-serif text-sm font-bold text-neutral-100">LITERAL</span>
        <span className="font-sans text-xs text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Skills</span>
        <span className="font-sans text-xs text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Projects</span>
        <span className="font-sans text-xs text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Reviews</span>
      </nav>
    </div>
  );
}