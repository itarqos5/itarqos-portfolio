"use client";

import { Server, ShieldCheck } from "lucide-react";

interface ServerItem {
  name: string;
  icon: string;
  status: "Working" | "Resigned";
  role?: string;
}

const servers: ServerItem[] = [
  {
    name: "Striker's Dev Team",
    icon: "https://cdn.discordapp.com/icons/1529321742059700414/62390cb287a2f6ebb0b4df2ed453e3fd.webp?size=1024",
    status: "Working",
  },
  {
    name: "MonkeySMP",
    icon: "https://cdn.discordapp.com/icons/1471589904612851843/7c7b409c66149a2fe8e4db1da206fcae.webp?size=1024",
    status: "Working",
  },
  {
    name: "OceaniaMC",
    icon: "https://cdn.discordapp.com/icons/1493868758429733004/e5631e0f2ef2c34b6bbf5e3218825436.webp?size=1024",
    status: "Working",
  },
  {
    name: "Purpify Host",
    icon: "https://cdn.discordapp.com/icons/1368671101579690018/6a8334d3df5e9e176371e153ec9d7a12.webp?size=1024",
    status: "Resigned",
    role: "Co-Founder",
  },
  {
    name: "MythMC",
    icon: "https://cdn.discordapp.com/icons/1299444406843215933/a5a447b547722208af9065b5fb159f29.webp?size=1024",
    status: "Resigned",
  },
  {
    name: "RyzenMC",
    icon: "https://cdn.discordapp.com/icons/1348351504071004250/76aea4d46989aa26eaa0778e1e7d5a3e.webp?size=100",
    status: "Resigned",
  },
];

export default function ServersSection() {
  return (
    <section
      id="servers"
      className="relative z-10 py-24 px-4 md:px-12 max-w-7xl mx-auto w-full select-none"
    >
      <h2 className="mb-4 text-center font-sans text-xs tracking-[0.3em] text-neutral-600 uppercase">
        Experience & Teams
      </h2>
      <h2 className="mb-16 text-center font-serif text-3xl font-bold text-neutral-100">
        Servers & Organizations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servers.map((server) => {
          const isWorking = server.status === "Working";
          return (
            <div
              key={server.name}
              className="group relative rounded-2xl border border-white/5 bg-neutral-900/30 p-6 flex items-center gap-5 hover:border-purple-500/30 hover:bg-neutral-900/60 shadow-xl shadow-black/40 hover:shadow-purple-950/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Server Icon Container */}
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-1 ring-white/10 shrink-0 bg-neutral-950 group-hover:ring-purple-500/40 transition-all duration-300">
                <img
                  src={server.icon}
                  alt={server.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to server icon placeholder if image fails to load
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 -z-10">
                  <Server className="w-7 h-7 text-neutral-600" />
                </div>
              </div>

              {/* Server Details */}
              <div className="flex flex-col gap-2 min-w-0 flex-1">
                <h3 className="font-serif text-lg font-bold text-neutral-100 group-hover:text-white transition-colors truncate">
                  {server.name}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${
                      isWorking
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-neutral-800/80 text-neutral-400 border-neutral-700/50"
                    }`}
                  >
                    {isWorking ? (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-500"></span>
                    )}
                    {server.status}
                  </span>

                  {/* Role Badge (if available) */}
                  {server.role && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      <ShieldCheck className="w-3 h-3 text-purple-400" />
                      {server.role}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
