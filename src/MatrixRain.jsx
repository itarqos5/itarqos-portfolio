import { useEffect, useRef, useState, useCallback } from 'react';

function MatrixRain() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  // Enhanced character set with more variety
  const chars = '01田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑';
  const colors = [
    '#10b981', // emerald
    '#3b82f6', // blue
    '#8b5cf6', // violet
    '#ec4899', // pink
    '#f59e0b', // amber
  ];

  const handleMouseMove = useCallback((e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let lastTime = 0;
    const fps = 60;
    const fpsInterval = 1000 / fps;
    let then = window.performance.now();
    
    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize particles
    const initParticles = () => {
      const particles = [];
      const particleCount = Math.floor(canvas.width / 20); // Adjust density
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 2 - canvas.height,
          speed: 2 + Math.random() * 3,
          size: 10 + Math.random() * 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.1 + Math.random() * 0.3,
          chars: Array(5).fill().map(() => chars[Math.floor(Math.random() * chars.length)]),
          charIndex: 0
        });
      }
      return particles;
    };
    
    particlesRef.current = initParticles();
    
    // Draw function with smooth animation
    const draw = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      // Clear canvas with slight fade effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Move particle down
        particle.y += particle.speed;
        
        // Reset to top if out of bounds
        if (particle.y > canvas.height + 100) {
          particle.y = -particle.size;
          particle.x = Math.random() * canvas.width;
        }
        
        // Draw particle trail
        const gradient = ctx.createLinearGradient(
          particle.x, particle.y - particle.size * 2,
          particle.x, particle.y + particle.size
        );
        gradient.addColorStop(0, `${particle.color}00`);
        gradient.addColorStop(0.3, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, particle.color);
        
        ctx.fillStyle = gradient;
        ctx.font = `${particle.size}px 'Courier New', monospace`;
        
        // Draw character with glow effect
        const char = particle.chars[Math.floor(particle.charIndex) % particle.chars.length];
        
        // Add glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.fillText(char, particle.x, particle.y);
        
        // Remove glow for next draw
        ctx.shadowBlur = 0;
        
        // Animate character change
        particle.charIndex += 0.1;
        
        // Interactive effect when mouse is near
        if (isHovered) {
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            const force = (1 - distance / 150) * 5;
            particle.x -= Math.cos(angle) * force;
            particle.y -= Math.sin(angle) * force;
          }
        }
      });
      
      // Continue animation loop
      animationId = requestAnimationFrame(draw);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(draw);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isHovered, mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default MatrixRain;
