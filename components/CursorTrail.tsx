import React, { useEffect, useRef } from 'react';

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, speed: 0 });
  const pointsRef = useRef<{ x: number, y: number, age: number, opacity: number }[]>([]);
  const particlesRef = useRef<{ x: number, y: number, vx: number, vy: number, size: number, life: number, color: string }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mouseRef.current.x;
      const dy = e.clientY - mouseRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      
      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.speed = speed;

      // Add trail points
      pointsRef.current.push({ 
        x: e.clientX, 
        y: e.clientY, 
        age: 0,
        opacity: 1.0 
      });

      // Spawn stardust particles based on speed
      const particleCount = Math.min(Math.floor(speed / 4), 5);
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * (speed * 0.1),
          vy: (Math.random() - 0.5) * (speed * 0.1),
          size: Math.random() * 2 + 0.5,
          life: 1.0,
          color: Math.random() > 0.5 ? '#b18d59' : '#ffffff'
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Update and Draw Trail (The Meteor Body)
      const points = pointsRef.current;
      for (let i = points.length - 1; i >= 0; i--) {
        points[i].age += 1;
        points[i].opacity -= 0.035; // How fast the trail fades

        if (points[i].opacity <= 0) {
          points.splice(i, 1);
        }
      }

      if (points.length > 1) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Outer glow path
        ctx.beginPath();
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          const thickness = (i / points.length) * 8;
          ctx.lineWidth = thickness;
          ctx.strokeStyle = `rgba(177, 141, 89, ${p.opacity * 0.2})`;
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();

        // Inner bright core path
        ctx.beginPath();
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          const thickness = (i / points.length) * 3;
          ctx.lineWidth = thickness;
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.5})`;
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // 2. Update and Draw Particles (The Stardust)
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98; // Air resistance
        p.vy *= 0.98;
        p.life -= 0.015;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        
        // Add subtle glow to gold particles
        if (p.color === '#b18d59') {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#b18d59';
        } else {
          ctx.shadowBlur = 0;
        }
      }
      
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;