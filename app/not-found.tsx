import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-neutral-100 overflow-x-hidden antialiased flex flex-col">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <main className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Error 404
          </p>

          <h1 className="font-serif text-7xl md:text-9xl font-bold leading-none tracking-tight text-white">
            404
          </h1>

          <h2 className="mt-6 font-serif text-2xl md:text-3xl text-neutral-200">
            Lost in the void.
          </h2>

          <p className="mt-4 font-sans text-sm md:text-base text-neutral-400 max-w-md mx-auto">
            The page you&apos;re looking for has drifted off the grid. Let&apos;s
            get you back to something real.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-neutral-200 backdrop-blur-md transition-all hover:bg-neutral-800/80 hover:text-white hover:border-white/20"
            >
              <span aria-hidden="true">&larr;</span>
              Back home
            </Link>

            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-transparent px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-neutral-200"
            >
              Report this
            </a>
          </div>

          <div className="mt-16 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-neutral-600">
            Page not found
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
