export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/50 rounded-full blur-3xl" />
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-between px-12">
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
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}