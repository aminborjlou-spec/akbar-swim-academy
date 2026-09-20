'use client';

import { useEffect, useRef } from 'react';

export default function WaterBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    interface Particle {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(45, Math.floor(window.innerWidth / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1,
        speedY: Math.random() * -0.7 - 0.2,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.45 + 0.15,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 254, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00f2fe';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-full h-full">
      <canvas
        id="waterCanvas"
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
      />
      {/* Contained glow orbs */}
      <div className="glow-orb w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/20 top-[-60px] -right-16 sm:-right-24 animate-pulse-slow" />
      <div className="glow-orb w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] bg-blue-600/15 bottom-[20%] -left-16 sm:-left-24 animate-pulse-slow" />
      <div className="glow-orb w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] bg-teal-500/10 top-[40%] -right-16 sm:-right-20 animate-pulse-slow" />
    </div>
  );
}
