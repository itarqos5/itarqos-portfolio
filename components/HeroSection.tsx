"use client";

export default function HeroSection() {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-between px-20">
      <div className="flex flex-col gap-5">
        <p className="font-sans text-sm tracking-[0.3em] text-neutral-500 uppercase">
          Developer &amp; engineer
        </p>
        <h1 className="font-serif text-7xl md:text-8xl font-bold text-neutral-100 tracking-tight leading-none">
          Literal
        </h1>
        <p className="font-sans text-lg text-neutral-500 max-w-sm leading-relaxed">
          Building things that matter — one line at a time.
        </p>
      </div>

      <div className="flex-1 hidden md:flex justify-center items-center">
        <svg width="160" height="80" viewBox="0 0 160 80" preserveAspectRatio="xMidYMid meet">
          <path
            d="M 10 40 Q 30 15, 50 40 T 90 40 T 130 40 T 150 40"
            fill="none"
            stroke="#3f3f46"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="relative z-0 hidden md:block">
        <div className="relative w-72 h-72 rounded-full overflow-hidden ring-1 ring-neutral-800">
          <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}