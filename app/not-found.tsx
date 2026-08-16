import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black text-neutral-100 overflow-x-hidden antialiased flex flex-col">

      <main className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <p className="micro-type text-neutral-500 mb-6">
            Error 404
          </p>

          <h1 className="display-type text-7xl md:text-9xl leading-none text-white">
            404
          </h1>

          <h2 className="mt-6 display-type text-2xl md:text-3xl text-neutral-200">
            Page not found
          </h2>

          <p className="mt-4 font-sans text-sm md:text-base text-neutral-400 max-w-md mx-auto">
            The address does not match a page on this site.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="button-primary"
            >
              <span aria-hidden="true">&larr;</span>
              Back home
            </Link>

            <a
              href="https://discord.com/users/literal.uu"
              className="button-secondary"
            >
              Discord
            </a>
          </div>

          <div className="mt-16 mx-auto h-px w-32 bg-neutral-700" />

          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-neutral-600">
            Page not found
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
