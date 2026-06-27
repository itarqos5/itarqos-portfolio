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
      <div className="relative hidden md:flex items-center">
        <svg width="300" height="100" className="absolute right-full mr-4">
          <path
            d="M 0 50 Q 37.5 20, 75 50 T 150 50 T 225 50 T 300 50"
            fill="none"
            stroke="#52525b"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
        <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-neutral-800 shadow-2xl shadow-cyan-400/10">
          <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="relative md:hidden w-48 h-48 rounded-full overflow-hidden border-4 border-neutral-800 shadow-2xl">
        <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}