'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SimpleLoaderProps {
  message?: string;
  dotCount?: number;
  dotSize?: number;
  circleSize?: number;
}

const SimpleLoader: React.FC<SimpleLoaderProps> = ({
  message = '',
  dotCount = 8,
  dotSize = 6,
  circleSize = 40,
}) => {
  // Generate dots positioned in a circle
  const dots = Array.from({ length: dotCount }, (_, i) => ({
    id: i,
    angle: (i * 360) / dotCount,
  }));

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      aria-label="Loading content"
      role="status"
    >
      {/* Circular loader */}
      <div className="relative" style={{ width: circleSize * 2, height: circleSize * 2 }}>
        {/* Rotating dots */}
        <motion.div
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {dots.map(dot => {
            const angle = (dot.angle * Math.PI) / 180;
            const x = Math.cos(angle) * circleSize;
            const y = Math.sin(angle) * circleSize;

            return (
              <motion.div
                key={dot.id}
                className="absolute rounded-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]"
                style={{
                  width: dotSize,
                  height: dotSize,
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot.id * 0.15,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
        </motion.div>

        {/* Center dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]"
          style={{
            width: dotSize * 1.5,
            height: dotSize * 1.5,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Loading message */}
      {message && (
        <motion.div
          className="mt-4 text-center text-sm font-medium text-[var(--color-text-primary)]"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {message}
        </motion.div>
      )}
    </div>
  );
};

export default SimpleLoader;
