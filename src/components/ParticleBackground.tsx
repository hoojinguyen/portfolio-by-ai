'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size with throttled resize
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      }, 200); // 200ms throttle
    };

    // Initialize particles
    const initParticles = () => {
      // Reduce particle count for better performance
      const particleCount = Math.min(Math.floor(window.innerWidth / 30), 60); // Reduced from 100
      particlesRef.current = [];

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 1; // Smaller particles
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * 0.3, // Reduced speed
          speedY: (Math.random() - 0.5) * 0.3, // Reduced speed
          color:
            theme === 'dark'
              ? `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
                  Math.random() * 100 + 155
                )}, ${Math.floor(Math.random() * 255)}, 0.7)`
              : `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
                  Math.random() * 100 + 100
                )}, ${Math.floor(Math.random() * 255)}, 0.5)`,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      // Connect particles with lines if they're close enough
      // Only connect particles that are within a reasonable distance to reduce calculations
      const maxDistance = 120; // Reduced from 150
      const particleCount = particlesRef.current.length;
      
      for (let i = 0; i < particleCount; i++) {
        // Only check a subset of particles to improve performance
        const checkLimit = Math.min(i + 10, particleCount);
        for (let j = i + 1; j < checkLimit; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Opacity based on distance
            const opacity = 1 - distance / maxDistance;

            ctx.beginPath();
            ctx.strokeStyle =
              theme === 'dark'
                ? `rgba(100, 100, 255, ${opacity * 0.12})` // Reduced opacity
                : `rgba(100, 100, 200, ${opacity * 0.08})` // Reduced opacity
            ctx.lineWidth = 0.5; // Thinner lines
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Set up canvas and start animation
    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-60 pointer-events-none"
    />
  );
};

export default ParticleBackground;
