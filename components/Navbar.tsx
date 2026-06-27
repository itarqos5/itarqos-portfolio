"use client";

import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <nav className="relative z-10 mx-auto mt-6 flex items-center gap-12 rounded-full border border-neutral-800/50 bg-neutral-950/80 py-4 px-8 backdrop-blur-sm">
      <span className="font-serif text-xl font-bold text-neutral-100">LITERAL</span>
      <div className="flex gap-8">
        <span
          onClick={() => setActiveTab("skills")}
          className={`font-sans text-sm cursor-pointer transition-colors ${
            activeTab === "skills" ? "text-cyan-400" : "text-neutral-400 hover:text-neutral-100"
          }`}
        >
          Skills
        </span>
        <span
          onClick={() => setActiveTab("projects")}
          className={`font-sans text-sm cursor-pointer transition-colors ${
            activeTab === "projects" ? "text-cyan-400" : "text-neutral-400 hover:text-neutral-100"
          }`}
        >
          Projects
        </span>
        <span
          onClick={() => setActiveTab("reviews")}
          className={`font-sans text-sm cursor-pointer transition-colors ${
            activeTab === "reviews" ? "text-cyan-400" : "text-neutral-400 hover:text-neutral-100"
          }`}
        >
          Reviews
        </span>
      </div>
    </nav>
  );
}