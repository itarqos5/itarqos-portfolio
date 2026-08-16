"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; radius: number; alpha: number; depth: number };

export default function SpaceField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let pointerX = 0;
    let pointerY = 0;
    let stars: Star[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(180, Math.round((width * height) / 8500));
      stars = Array.from({ length: count }, (_, index) => ({
        x: ((index * 47.17) % 100) / 100,
        y: ((index * 83.31) % 100) / 100,
        radius: index % 17 === 0 ? 1.15 : index % 5 === 0 ? 0.75 : 0.45,
        alpha: 0.2 + ((index * 13) % 65) / 100,
        depth: 0.25 + (index % 9) / 12,
      }));
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        const drift = reducedMotion ? 0 : Math.sin(time * 0.00008 + star.x * 8) * 4;
        const x = star.x * width + pointerX * star.depth * 9;
        const y = star.y * height + pointerY * star.depth * 7 + drift;
        context.beginPath();
        context.fillStyle = `rgba(255,255,255,${star.alpha})`;
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fill();
      });
      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const handlePointer = (event: PointerEvent) => {
      pointerX = event.clientX / Math.max(width, 1) - 0.5;
      pointerY = event.clientY / Math.max(height, 1) - 0.5;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="space-field" aria-hidden="true" />;
}
