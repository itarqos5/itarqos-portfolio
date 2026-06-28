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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#070708]/95 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        {/* Spinning Outer Ring */}
        <div className="w-24 h-24 rounded-full border-2 border-neutral-800 border-t-neutral-300 animate-spin" />

        {/* Stationary Profile Image inside */}
        <div className="absolute w-20 h-20 rounded-full overflow-hidden ring-1 ring-neutral-800/80">
          <img src="/profile.png" alt="Loading" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}