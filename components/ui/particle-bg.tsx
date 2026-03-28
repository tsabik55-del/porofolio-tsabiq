"use client";
import React, { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(width: number, height: number, colors: string[]) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update(width: number, height: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width) this.x = 0;
    else if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    else if (this.y < 0) this.y = height;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    // Monochrome colors for aesthetic B&W look
    const colors = ["#000000", "#d1d5db", "#9ca3af", "#6b7280", "#e5e7eb"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles.length = 0;
      const count = Math.min(Math.floor(window.innerWidth / 15), 80);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height, colors));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            // Subtle gray connections for B&W theme
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", () => {
      resize();
      init();
    });

    resize();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" />;
}
