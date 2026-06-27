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

      <div className="flex-1 hidden md:flex justify-center items-center">
        <svg width="200" height="100" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
          <path
            d="M 20 50 Q 40 20, 60 50 T 100 50 T 140 50 T 180 50"
            fill="none"
            stroke="#52525b"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="relative z-0 hidden md:block">
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-neutral-700 shadow-2xl shadow-cyan-400/20">
          <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}