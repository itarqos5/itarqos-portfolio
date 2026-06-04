import { useRef, useEffect } from 'react';
import './IntroAnimation.css';

const DURATION = 2000;
const PARTICLE_COUNT = 200;

export default function IntroAnimation({ onComplete }) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let startTime = null;
    let particles = [];
    let frameBlocks = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticle(cx, cy) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 350;
      return {
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: 0,
        vy: 0,
        size: 1 + Math.random() * 3,
        life: 0.3 + Math.random() * 0.7,
        hue: 260 + Math.random() * 30,
        sat: 60 + Math.random() * 40,
        light: 35 + Math.random() * 35,
      };
    }

    function createBlock(cx, cy, portalW, portalH) {
      const side = Math.floor(Math.random() * 4);
      const blockW = 16 + Math.random() * 12;
      const blockH = 14 + Math.random() * 10;
      let x, y;

      switch (side) {
        case 0:
          x = cx - portalW / 2 + Math.random() * portalW;
          y = cy - portalH / 2 - 8 + Math.random() * 6;
          break;
        case 1:
          x = cx - portalW / 2 - 8 + Math.random() * 6;
          y = cy - portalH / 2 + Math.random() * portalH;
          break;
        case 2:
          x = cx - portalW / 2 + Math.random() * portalW;
          y = cy + portalH / 2 - blockH + Math.random() * 6;
          break;
        default:
          x = cx + portalW / 2 - blockW + Math.random() * 6;
          y = cy - portalH / 2 + Math.random() * portalH;
          break;
      }

      return {
        x,
        y,
        w: blockW,
        h: blockH,
        delay: Math.random() * 0.6,
        alpha: 0,
      };
    }

    function drawBlock(ctx, block, portalProgress) {
      const appear = Math.max(0, Math.min(1, (portalProgress - block.delay) / 0.3));
      block.alpha = appear;
      if (appear <= 0) return;

      ctx.save();
      ctx.globalAlpha = appear * 0.95;

      const grad = ctx.createLinearGradient(block.x, block.y, block.x + block.w, block.y + block.h);
      grad.addColorStop(0, '#1e0a3c');
      grad.addColorStop(0.5, '#15062e');
      grad.addColorStop(1, '#0d0320');
      ctx.fillStyle = grad;
      ctx.fillRect(block.x, block.y, block.w, block.h);

      ctx.strokeStyle = 'rgba(124, 58, 237, 0.7)';
      ctx.lineWidth = 1;
      ctx.strokeRect(block.x + 1, block.y + 1, block.w - 2, block.h - 2);

      ctx.fillStyle = 'rgba(124, 58, 237, 0.06)';
      ctx.fillRect(block.x + 2, block.y + 2, block.w - 4, block.h - 4);

      ctx.restore();
    }

    function drawPortalCore(ctx, cx, cy, pw, ph, time, accel) {
      const scale = 1 + accel * 3;
      const hw = (pw / 2) * scale;
      const hh = (ph / 2) * scale;

      ctx.save();
      ctx.beginPath();
      ctx.rect(cx - hw, cy - hh, hw * 2, hh * 2);
      ctx.clip();

      const baseGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, hw * 1.2);
      baseGrad.addColorStop(0, '#3b0764');
      baseGrad.addColorStop(0.4, '#1e0533');
      baseGrad.addColorStop(1, '#000000');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(cx - hw, cy - hh, hw * 2, hh * 2);

      const t = time * 0.001;
      for (let i = 0; i < 6; i++) {
        const r = hw * (0.25 + 0.35 * (i / 5));
        ctx.save();
        ctx.globalAlpha = 0.18 + accel * 0.15;
        ctx.beginPath();
        for (let a = 0; a < Math.PI * 2; a += 0.05) {
          const wobble = r * (1 + 0.15 * Math.sin(a * 4 + t * (1.5 + i * 0.3)));
          const px = cx + Math.cos(a + t * 0.7) * wobble;
          const py = cy + Math.sin(a + t * 0.7) * wobble * 0.7;
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = i % 2 === 0 ? '#7e22ce' : '#4c1d95';
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
    }

    function drawBloom(ctx, cx, cy, accel) {
      if (accel <= 0.01) return;
      const bloom = ctx.createRadialGradient(cx, cy, 0, cx, cy, 400 + accel * 600);
      bloom.addColorStop(0, `rgba(255, 255, 255, ${accel * 0.7})`);
      bloom.addColorStop(0.3, `rgba(147, 51, 234, ${accel * 0.3})`);
      bloom.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function init() {
      resize();
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const pw = Math.min(520, canvas.width * 0.55);
      const ph = Math.min(360, canvas.height * 0.48);

      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(cx, cy));
      frameBlocks = Array.from({ length: 60 }, () => createBlock(cx, cy, pw, ph));
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / DURATION);
      const accel = Math.max(0, (progress - 0.65) / 0.35);
      const portalProgress = Math.min(1, progress * 1.25);

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const pw = Math.min(520, canvas.width * 0.55);
      const ph = Math.min(360, canvas.height * 0.48);

      for (const block of frameBlocks) {
        drawBlock(ctx, block, portalProgress);
      }

      drawPortalCore(ctx, cx, cy, pw - 14, ph - 14, elapsed, accel);

      const t = elapsed * 0.001;
      for (const p of particles) {
        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0.1) {
          const pull = 0.03 + accel * 0.25;
          p.vx += (dx / dist) * pull;
          p.vy += (dy / dist) * pull;
        }
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx * (1 + accel * 2);
        p.y += p.vy * (1 + accel * 2);
        p.life -= 0.0025 + accel * 0.004;

        if (p.life <= 0 || p.x < -50 || p.x > canvas.width + 50 || p.y < -50 || p.y > canvas.height + 50) {
          Object.assign(p, createParticle(cx, cy));
        }

        ctx.save();
        ctx.globalAlpha = Math.min(0.8, p.life * 1.5) * (0.5 + accel * 0.5);
        const size = p.size * (1 + accel * 2);
        ctx.fillStyle = `hsl(${p.hue}, ${p.sat}%, ${p.light + accel * 25}%)`;
        ctx.shadowColor = `hsl(${p.hue}, 80%, 50%)`;
        ctx.shadowBlur = 3 + accel * 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      drawBloom(ctx, cx, cy, accel);

      if (progress >= 1 && !completedRef.current) {
        completedRef.current = true;
        if (wrapperRef.current) {
          wrapperRef.current.classList.add('fade-out');
        }
        setTimeout(() => {
          onComplete();
        }, 600);
      }

      if (!completedRef.current) {
        animationId = requestAnimationFrame(animate);
      }
    }

    init();
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [onComplete]);

  return (
    <div ref={wrapperRef} className="intro-wrapper">
      <canvas ref={canvasRef} className="intro-canvas" />
    </div>
  );
}
