"use client";

export default function Navbar() {
  return (
    <nav className="relative z-10 mx-auto mt-6 flex items-center gap-6 rounded-full border border-neutral-800/60 bg-neutral-950/90 py-2.5 px-6 backdrop-blur-md">
      <span className="font-serif text-lg font-bold text-neutral-100">LITERAL</span>
      <div className="flex gap-6">
        <span className="font-sans text-xs text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Skills</span>
        <span className="font-sans text-xs text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Projects</span>
        <span className="font-sans text-xs text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Reviews</span>
      </div>
    </nav>
  );
}