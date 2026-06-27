"use client";

import { useState, useEffect } from "react";

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/90 backdrop-blur-md">
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-1 ring-neutral-700 animate-spin-slow">
          <img src="/profile.png" alt="Loading" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}