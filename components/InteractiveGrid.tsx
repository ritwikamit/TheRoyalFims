'use client';

import React, { useRef, useEffect } from 'react';

interface InteractiveGridProps {
  className?: string;
  gridSize?: number; // Size of each square grid cell in pixels
}

export default function InteractiveGrid({
  className = '',
  gridSize = 64,
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mousePos.current.active = false;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.classList.contains('light');

      // Base colors for theme
      const baseLineColor = isLight ? 'rgba(160, 140, 115, 0.12)' : 'rgba(255, 255, 255, 0.05)';
      const activeLineGlow = isLight ? 'rgba(179, 136, 66, 0.35)' : 'rgba(232, 193, 122, 0.4)';
      const baseDotColor = isLight ? 'rgba(150, 125, 95, 0.28)' : 'rgba(232, 193, 122, 0.22)';
      const activeDotColor = isLight ? 'rgba(196, 30, 30, 0.9)' : 'rgba(255, 204, 0, 0.95)';

      const mx = mousePos.current.x;
      const my = mousePos.current.y;
      const hasMouse = mousePos.current.active;
      const influenceRadius = 160;

      // Draw vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);

        if (hasMouse && Math.abs(x - mx) < influenceRadius) {
          const dist = Math.abs(x - mx);
          const alpha = (1 - dist / influenceRadius) * 0.4;
          ctx.strokeStyle = activeLineGlow;
          ctx.lineWidth = 1 + alpha * 1.5;
        } else {
          ctx.strokeStyle = baseLineColor;
          ctx.lineWidth = 1;
        }
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);

        if (hasMouse && Math.abs(y - my) < influenceRadius) {
          const dist = Math.abs(y - my);
          const alpha = (1 - dist / influenceRadius) * 0.4;
          ctx.strokeStyle = activeLineGlow;
          ctx.lineWidth = 1 + alpha * 1.5;
        } else {
          ctx.strokeStyle = baseLineColor;
          ctx.lineWidth = 1;
        }
        ctx.stroke();
      }

      // Draw intersection dots where lines meet
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          ctx.beginPath();

          if (hasMouse && dist < influenceRadius) {
            const proximity = 1 - dist / influenceRadius; // 0 to 1
            const radius = 2.2 + proximity * 3.5;

            // Radiant glow circle
            const glowGrad = ctx.createRadialGradient(x, y, 0, x, y, radius * 3.5);
            glowGrad.addColorStop(0, activeDotColor);
            glowGrad.addColorStop(1, 'transparent');
            
            ctx.fillStyle = glowGrad;
            ctx.arc(x, y, radius * 3.5, 0, Math.PI * 2);
            ctx.fill();

            // Sharp core dot
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = activeDotColor;
            ctx.fill();
          } else {
            // Standard quiet intersection dot
            ctx.arc(x, y, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = baseDotColor;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [gridSize]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-95 transition-opacity duration-300"
      />
    </div>
  );
}
