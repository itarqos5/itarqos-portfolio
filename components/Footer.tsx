const links = [
  { label: "GitHub", href: "https://github.com/itarqos5" },
  { label: "Discord", href: "https://discord.com/users/literal.uu" },
  { label: "Ko-fi", href: "https://ko-fi.com/itarqos5" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-800/40 py-10 px-8">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-neutral-500 hover:text-neutral-200 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-sans text-xs text-neutral-600">
          built with love &lt;3
        </p>
      </div>
    </footer>
  );
}