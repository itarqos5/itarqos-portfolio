"use client";

import { useState, useEffect } from "react";

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 backdrop-blur-md">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400 animate-spin-slow shadow-lg shadow-cyan-400/30">
          <img src="/profile.png" alt="Loading" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}