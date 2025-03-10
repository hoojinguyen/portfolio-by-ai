'use client';

import React, { useState, useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltEffectProps {
  children: ReactNode;
  scale?: number;
  rotationIntensity?: number;
  borderRadius?: string;
  className?: string;
  glareOpacity?: number;
  glareColor?: string;
  perspective?: number;
  shadow?: boolean;
}

const TiltEffect: React.FC<TiltEffectProps> = ({
  children,
  scale = 1.05,
  rotationIntensity = 15,
  borderRadius = '1rem',
  className = '',
  glareOpacity = 0.2,
  glareColor = 'white',
  perspective = 800,
  shadow = true,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [rotationIntensity, -rotationIntensity]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-rotationIntensity, rotationIntensity]),
    springConfig
  );
  const glareX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), springConfig);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const x = offsetX / width;
    const y = offsetY / height;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
    >
      <motion.div
        style={{
          borderRadius,
          rotateX: isHovering ? rotateX : 0,
          rotateY: isHovering ? rotateY : 0,
          scale: isHovering ? scale : 1,
          boxShadow: shadow && isHovering ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none',
          transition: !isHovering ? 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : undefined,
        }}
        className="w-full max-h-fit"
      >
        {children}

        {/* Glare effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
            opacity: isHovering ? glareOpacity : 0,
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor}, transparent 70%)`,
            pointerEvents: 'none',
            transition: !isHovering ? 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : undefined,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default TiltEffect;
