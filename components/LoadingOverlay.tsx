"use client";

import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black" aria-hidden="true">
      <div className="relative h-28 w-28 rounded-full border border-white/30">
        <div className="orbit-line -inset-3" />
        <div className="absolute inset-0 grid place-items-center display-type text-lg">Literal</div>
      </div>
    </div>
  );
}
