import { ArrowUpRight } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";

const links = [
  { label: "GitHub", href: "https://github.com/itarqos5" },
  { label: "Discord", href: "https://discord.com/users/literal.uu" },
  { label: "Ko-fi", href: "https://ko-fi.com/itarqos5" },
];

export default function Footer() {
  return (
    <footer className="light-section relative z-10 bg-[#f5f5f2] text-black">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-16 md:py-28">
        <a href="https://discord.com/users/literal.uu" target="_blank" rel="noreferrer" className="group flex items-end justify-between gap-8 border-y border-black/25 py-8">
          <span className="display-type max-w-[11ch] text-[clamp(4.5rem,13vw,11rem)] leading-[0.76]">Contact on Discord</span>
          <span className="mb-2 grid h-16 w-16 shrink-0 place-items-center rounded-full border border-black transition-colors group-hover:bg-black group-hover:text-white md:h-24 md:w-24"><FaDiscord className="h-7 w-7 md:h-10 md:w-10" /></span>
        </a>
        <div className="mt-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="display-type text-2xl">Literal</p>
            <p className="mt-2 text-sm text-neutral-600">Full-stack developer &amp; systems architect</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="micro-type flex items-center gap-1.5 hover:underline">{link.label}<ArrowUpRight size={12} /></a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
