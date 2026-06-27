import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/50 rounded-full blur-3xl" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-700">
          <Image
            src="/profile.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-neutral-100 tracking-tight">
          COMING SOON
        </h1>
        <p className="font-sans text-lg text-neutral-500 tracking-widest uppercase">
          Something awesome is being built
        </p>
      </div>
    </div>
  );
}