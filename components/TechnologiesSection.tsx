const technologies = ["Next.js", "Express", "React", "Supabase", "Django", "FastAPI", "Flask", "Svelte"];

export default function TechnologiesSection() {
  const loop = [...technologies, ...technologies];
  return (
    <section id="technologies" className="border-y border-white/20 py-8 overflow-hidden" aria-label="Technologies">
      <div className="tech-marquee flex w-max items-center">
        {loop.map((tech, index) => (
          <span key={`${tech}-${index}`} className="flex items-center">
            <span className="display-type px-7 text-4xl text-neutral-200 md:px-12 md:text-6xl">{tech}</span>
            <i className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
