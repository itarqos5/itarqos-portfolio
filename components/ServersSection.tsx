"use client";

import { Server } from "lucide-react";
import Image from "next/image";

const servers = [
  { name: "Striker's Dev Team", icon: "https://cdn.discordapp.com/icons/1529321742059700414/62390cb287a2f6ebb0b4df2ed453e3fd.webp?size=1024", status: "Working", role: "—" },
  { name: "MonkeySMP", icon: "https://cdn.discordapp.com/icons/1471589904612851843/7c7b409c66149a2fe8e4db1da206fcae.webp?size=1024", status: "Working", role: "—" },
  { name: "OceaniaMC", icon: "https://cdn.discordapp.com/icons/1493868758429733004/e5631e0f2ef2c34b6bbf5e3218825436.webp?size=1024", status: "Working", role: "—" },
  { name: "Purpify Host", icon: "https://cdn.discordapp.com/icons/1368671101579690018/6a8334d3df5e9e176371e153ec9d7a12.webp?size=1024", status: "Resigned", role: "Co-Founder" },
  { name: "MythMC", icon: "https://cdn.discordapp.com/icons/1299444406843215933/a5a447b547722208af9065b5fb159f29.webp?size=1024", status: "Resigned", role: "—" },
  { name: "RyzenMC", icon: "https://cdn.discordapp.com/icons/1348351504071004250/76aea4d46989aa26eaa0778e1e7d5a3e.webp?size=100", status: "Resigned", role: "—" },
];

export default function ServersSection() {
  return (
    <section id="servers" className="light-section relative border-y border-black bg-[#f5f5f2] text-black">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="section-heading">Servers &amp; organizations</h2>
            <p className="mt-7 max-w-sm leading-7 text-neutral-600">Current and previous Minecraft server work.</p>
          </div>
          <div className="border-t border-black/30">
            <div className="hidden grid-cols-[1fr_140px_120px] border-b border-black/30 py-3 micro-type text-neutral-500 sm:grid"><span>Name</span><span>Status</span><span>Role</span></div>
            {servers.map((server) => (
              <div key={server.name} className="grid gap-3 border-b border-black/25 py-5 sm:grid-cols-[1fr_140px_120px] sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-black/20 bg-black">
                    <Server size={18} className="text-white" />
                    <Image src={server.icon} alt="" fill unoptimized sizes="44px" className="object-cover" />
                  </div>
                  <span className="font-medium">{server.name}</span>
                </div>
                <span className="micro-type flex items-center gap-2"><i className={`h-2 w-2 rounded-full ${server.status === "Working" ? "bg-black" : "border border-black"}`} />{server.status}</span>
                <span className="micro-type text-neutral-600">{server.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
