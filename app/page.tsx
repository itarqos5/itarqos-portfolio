export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/50 rounded-full blur-3xl" />
      <nav className="relative z-10 flex items-center justify-center gap-12 py-6 px-8 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-sm">
        <span className="font-serif text-xl font-bold text-neutral-100 mr-16">LITERAL</span>
        <div className="flex gap-8">
          <span className="font-sans text-sm text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Skills</span>
          <span className="font-sans text-sm text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Projects</span>
          <span className="font-sans text-sm text-neutral-400 hover:text-neutral-100 cursor-pointer transition-colors">Reviews</span>
        </div>
      </nav>
      <div className="relative z-10 flex flex-1 items-center justify-between px-12">
        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-7xl md:text-8xl font-bold text-neutral-100 tracking-tight">
            LITERAL
          </h1>
          <p className="font-sans text-lg text-neutral-400 max-w-md">
            Passionate developer &amp; software engineer, writing code line by line
          </p>
        </div>
        <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-neutral-800 shadow-2xl">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}