"use client";

import { ExternalLink, Server } from "lucide-react";
import Image from "next/image";

const servers = [
  { name: "Unstable Network", icon: "/unstable-network.png", status: "Working", role: "Developer" },
  { name: "Niche Tiers", icon: "/niche-tiers.png", status: "Working", role: "Developer", website: "https://tiers.literaluu.xyz" },
  { name: "Striker's Dev Team", icon: "https://cdn.discordapp.com/icons/1529321742059700414/62390cb287a2f6ebb0b4df2ed453e3fd.webp?size=1024", status: "Working", role: "—" },
  { name: "wSmoothie's Blender", icon: "https://cdn.discordapp.com/icons/1373123900354854932/4c6f3e65abba17d9d806b8f068703986.webp?size=1024", status: "Working", role: "Developer", description: "A mod development studio." },
  { name: "Minecraft Design Hub", icon: "https://cdn.discordapp.com/icons/972091816004444170/f4457c7980f91b0bbbc2ecb7af0f0ecf.webp?size=1024", status: "Working", role: "Developer" },
  { name: "MonkeySMP", icon: "https://cdn.discordapp.com/icons/1471589904612851843/7c7b409c66149a2fe8e4db1da206fcae.webp?size=1024", status: "Resigned", role: "—" },
  { name: "OceaniaMC", icon: "https://cdn.discordapp.com/icons/1493868758429733004/e5631e0f2ef2c34b6bbf5e3218825436.webp?size=1024", status: "Resigned", role: "—" },
  { name: "Purpify Host", icon: "https://cdn.discordapp.com/icons/1368671101579690018/6a8334d3df5e9e176371e153ec9d7a12.webp?size=1024", status: "Resigned", role: "Co-Founder" },
  { name: "MythMC", icon: "https://cdn.discordapp.com/icons/1299444406843215933/a5a447b547722208af9065b5fb159f29.webp?size=1024", status: "Resigned", role: "—" },
  { name: "RyzenMC", icon: "https://cdn.discordapp.com/icons/1348351504071004250/76aea4d46989aa26eaa0778e1e7d5a3e.webp?size=100", status: "Resigned", role: "—" },
];

export default function ServersSection() {
  return (
    <section id="servers" className="light-section relative border-y border-black bg-[#f5f5f2] text-black">
      <div className="section-shell">
        <div className="grid gap-16 xl:grid-cols-[minmax(22rem,0.75fr)_minmax(0,1.25fr)] xl:gap-24">
          <div>
            <h2 className="section-heading max-w-none text-[clamp(3.25rem,6vw,4.5rem)]">Servers &amp; organizations</h2>
            <p className="mt-7 max-w-sm leading-7 text-neutral-600">Current and previous Minecraft server work.</p>
          </div>
          <div className="min-w-0 border-t border-black/30">
            <div className="micro-type hidden grid-cols-[minmax(0,1fr)_128px_112px] gap-x-8 border-b border-black/30 py-3 text-neutral-500 md:grid"><span>Name</span><span>Status</span><span>Role</span></div>
            {servers.map((server) => (
              <div key={server.name} className="grid gap-y-5 border-b border-black/25 py-6 md:grid-cols-[minmax(0,1fr)_128px_112px] md:items-center md:gap-x-8">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-black/20 bg-black">
                    <Server size={18} className="text-white" />
                    <Image src={server.icon} alt={`${server.name} logo`} fill unoptimized sizes="48px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-medium leading-snug">{server.name}</span>
                    {server.description && <p className="mt-1 max-w-[42ch] text-sm leading-5 text-neutral-500">{server.description}</p>}
                    {server.website && (
                      <a
                        href={server.website}
                        target="_blank"
                        rel="noreferrer"
                        className="micro-type mt-0.5 inline-flex min-h-10 items-center gap-1.5 text-neutral-500 underline decoration-black/30 underline-offset-4 transition-colors hover:text-black"
                        aria-label={`Visit the ${server.name} website`}
                      >
                        Website <ExternalLink aria-hidden="true" size={12} strokeWidth={1.75} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 md:contents">
                  <span className="micro-type flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="w-full text-neutral-400 md:hidden">Status</span>
                    <i aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${server.status === "Working" ? "bg-black" : "border border-black"}`} />
                    {server.status}
                  </span>
                  <span className="micro-type text-neutral-600">
                    <span className="mb-1 block text-neutral-400 md:hidden">Role</span>
                    {server.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
