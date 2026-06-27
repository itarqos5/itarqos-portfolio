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

      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none mx-16 hidden md:block" style={{ zIndex: 1 }}>
        <svg width="100%" height="120" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M 0 60 Q 75 10, 150 60 T 300 60 T 450 60 T 600 60 T 750 60 T 900 60 T 1050 60 T 1200 60"
            fill="none"
            stroke="#52525b"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      <div className="relative z-0 hidden md:flex items-center ml-auto">
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-neutral-700 shadow-2xl shadow-cyan-400/20">
          <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}