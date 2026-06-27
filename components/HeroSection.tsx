"use client";

export default function HeroSection() {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-between px-16">
      <div className="flex flex-col gap-6">
        <h1 className="font-serif text-8xl md:text-9xl font-bold text-neutral-100 tracking-tight">
          LITERAL
        </h1>
        <p className="font-sans text-xl text-neutral-400 max-w-md">
          Passionate developer &amp; software engineer, writing code line by line
        </p>
      </div>
      <div className="relative hidden md:flex items-center">
        <svg width="400" height="120" className="absolute right-full mr-8" style={{ transform: "scaleX(-1)" }}>
          <path
            d="M 0 60 Q 50 30, 100 60 T 200 60 T 300 60 T 400 60"
            fill="none"
            stroke="#52525b"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-neutral-700 shadow-2xl shadow-cyan-400/20">
          <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}