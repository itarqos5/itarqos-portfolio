"use client";

export default function HeroSection() {
  return (
    <div className="relative z-10 flex flex-1 items-center justify-between px-12 py-16">
      <div className="flex flex-col gap-6">
        <h1 className="font-serif text-7xl md:text-8xl font-bold text-neutral-100 tracking-tight">
          LITERAL
        </h1>
        <p className="font-sans text-lg text-neutral-400 max-w-md">
          Passionate developer &amp; software engineer, writing code line by line
        </p>
      </div>
      <div className="relative hidden md:block w-72 h-72 rounded-full overflow-hidden border-4 border-neutral-800 shadow-2xl shadow-cyan-400/10">
        <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}