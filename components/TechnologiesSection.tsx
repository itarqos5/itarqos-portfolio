const ICONS: Record<string, string> = {
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  Svelte: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
};

// Dark/black icons would be invisible on the dark background, so invert them to light.
const DARK_ICONS = new Set(["Next.js", "Express", "Django", "Flask"]);

function iconStyle(name: string): React.CSSProperties {
  if (DARK_ICONS.has(name)) {
    return { filter: "invert(1) brightness(0.85)" };
  }
  return {};
}

const technologies = [
  { name: "Next.js" },
  { name: "Express" },
  { name: "React" },
  { name: "Supabase" },
  { name: "Django" },
  { name: "FastAPI" },
  { name: "Flask" },
  { name: "Svelte" },
];

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="relative z-10 flex flex-col items-center px-4 md:px-12 pb-24 w-full"
    >
      <h2 className="mb-4 text-center font-sans text-xs tracking-[0.3em] text-neutral-600 uppercase">
        Tools &amp; frameworks
      </h2>
      <h2 className="mb-16 text-center font-serif text-3xl font-bold text-neutral-100">
        Technologies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full max-w-4xl">
        {technologies.map((tech) => {
          const icon = ICONS[tech.name];
          return (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center gap-3 border border-white/5 bg-neutral-900/20 p-8 hover:border-white/10 hover:bg-neutral-900/40 transition-colors duration-300"
            >
              <img
                src={icon}
                alt={tech.name}
                className="w-10 h-10"
                style={iconStyle(tech.name)}
              />
              <span className="text-sm text-neutral-300 font-sans">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
