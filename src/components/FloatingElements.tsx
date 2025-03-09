'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle' | 'hexagon' | 'star';
  delay: number;
  duration: number;
  opacity: number;
}

interface FloatingElementsProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  minDelay?: number;
  maxDelay?: number;
  minOpacity?: number;
  maxOpacity?: number;
  areaSelector?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
  count = 15, // Reduced from original count
  minSize = 10,
  maxSize = 50,
  minDuration = 15,
  maxDuration = 40,
  minDelay = 0,
  maxDelay = 5,
  minOpacity = 0.1,
  maxOpacity = 0.3,
  areaSelector = '.min-h-screen',
}) => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInitialRender = useRef(true);

  // Generate a random shape SVG path - memoized to prevent unnecessary recalculations
  const getShapePath = useMemo(
    () => (shape: FloatingElement['shape'], size: number) => {
      const halfSize = size / 2;

      switch (shape) {
        case 'circle':
          return <circle cx={halfSize} cy={halfSize} r={halfSize} fill="currentColor" />;
        case 'square':
          return <rect x="0" y="0" width={size} height={size} fill="currentColor" />;
        case 'triangle':
          return <polygon points={`${halfSize},0 ${size},${size} 0,${size}`} fill="currentColor" />;
        case 'hexagon':
          const hexPoints = [];
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = halfSize + halfSize * Math.cos(angle);
            const y = halfSize + halfSize * Math.sin(angle);
            hexPoints.push(`${x},${y}`);
          }
          return <polygon points={hexPoints.join(' ')} fill="currentColor" />;
        case 'star':
          const starPoints = [];
          for (let i = 0; i < 10; i++) {
            const angle = (Math.PI / 5) * i - Math.PI / 2;
            const radius = i % 2 === 0 ? halfSize : halfSize * 0.4;
            const x = halfSize + radius * Math.cos(angle);
            const y = halfSize + radius * Math.sin(angle);
            starPoints.push(`${x},${y}`);
          }
          return <polygon points={starPoints.join(' ')} fill="currentColor" />;
        default:
          return <circle cx={halfSize} cy={halfSize} r={halfSize} fill="currentColor" />;
      }
    },
    []
  );

  // Generate random elements - memoized based on dimensions and theme
  const generateElements = useMemo(() => {
    return (containerWidth: number, containerHeight: number) => {
      if (containerWidth === 0 || containerHeight === 0) return [];

      const shapes: FloatingElement['shape'][] = [
        'circle',
        'square',
        'triangle',
        'hexagon',
        'star',
      ];
      const newElements: FloatingElement[] = [];

      // Define color palettes based on theme
      const darkThemeColors = [
        'var(--color-accent-primary)',
        'var(--color-accent-secondary)',
        'var(--color-accent-tertiary)',
        '#4f46e5', // indigo-600
        '#0ea5e9', // sky-500
        '#10b981', // emerald-500
      ];

      const lightThemeColors = [
        'var(--color-accent-primary)',
        'var(--color-accent-secondary)',
        'var(--color-accent-tertiary)',
        '#6366f1', // indigo-500
        '#0ea5e9', // sky-500
        '#10b981', // emerald-500
      ];

      const colors = theme === 'dark' ? darkThemeColors : lightThemeColors;

      for (let i = 0; i < count; i++) {
        const size = Math.random() * (maxSize - minSize) + minSize;
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        // Ensure elements are positioned in the empty spaces (avoid center area)
        let x: number;
        let y: number;

        // Create a bias towards the edges
        const edgeBias = 0.7; // Higher value = more elements at edges

        if (Math.random() > 0.5) {
          // Position horizontally with bias
          const horizontalBias = Math.random() > 0.5 ? edgeBias : -edgeBias;
          x =
            containerWidth / 2 +
            (containerWidth / 2) * horizontalBias * (0.5 + Math.random() * 0.5);
          y = Math.random() * containerHeight;
        } else {
          // Position vertically with bias
          const verticalBias = Math.random() > 0.5 ? edgeBias : -edgeBias;
          x = Math.random() * containerWidth;
          y =
            containerHeight / 2 +
            (containerHeight / 2) * verticalBias * (0.5 + Math.random() * 0.5);
        }

        newElements.push({
          id: i,
          x,
          y,
          size,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape,
          delay: Math.random() * (maxDelay - minDelay) + minDelay,
          duration: Math.random() * (maxDuration - minDuration) + minDuration,
          opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
        });
      }

      return newElements;
    };
  }, [
    count,
    minSize,
    maxSize,
    minDuration,
    maxDuration,
    minDelay,
    maxDelay,
    minOpacity,
    maxOpacity,
    theme,
  ]);

  useEffect(() => {
    // Throttled resize handler to prevent excessive re-renders
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        const container = document.querySelector(areaSelector) as HTMLElement;
        if (!container) return;

        const { width, height } = container.getBoundingClientRect();
        setElements(generateElements(width, height));
      }, 200); // 200ms throttle
    };

    // Initial setup
    const container = document.querySelector(areaSelector) as HTMLElement;
    if (container) {
      const { width, height } = container.getBoundingClientRect();
      setElements(generateElements(width, height));
    }

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [areaSelector, generateElements]);

  // Skip initial animation if it's the first render
  useEffect(() => {
    isInitialRender.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {elements.map(element => (
        <motion.div
          key={element.id}
          className="absolute will-change-transform"
          initial={{
            x: element.x,
            y: element.y,
            rotate: element.rotation,
            opacity: 0,
          }}
          animate={{
            x: [element.x, element.x + (Math.random() * 50 - 25)],
            y: [element.y, element.y + (Math.random() * 50 - 25)],
            rotate: [element.rotation, element.rotation + (Math.random() > 0.5 ? 180 : -180)],
            opacity: [0, element.opacity, 0],
          }}
          transition={{
            duration: element.duration,
            delay: isInitialRender.current ? 0 : element.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            color: element.color,
            width: element.size,
            height: element.size,
          }}
        >
          <svg
            width={element.size}
            height={element.size}
            viewBox={`0 0 ${element.size} ${element.size}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            {getShapePath(element.shape, element.size)}
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

FloatingElements.displayName = 'FloatingElements';

export default FloatingElements;
