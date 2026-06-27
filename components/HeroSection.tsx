"use client";

export default function HeroSection() {
  return (
    <div className="relative z-10 flex min-h-screen items-center px-20">
      <div className="flex flex-col gap-5 shrink-0">
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

      <div className="flex-1 hidden md:block mx-8">
        <svg width="100%" height="60" className="overflow-visible">
          <line
            x1="0"
            y1="30"
            x2="100%"
            y2="30"
            stroke="#3f3f46"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-0 hidden md:block shrink-0">
        <div className="relative w-72 h-72 rounded-full overflow-hidden ring-1 ring-neutral-800">
          <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}