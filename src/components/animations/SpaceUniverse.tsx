'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface SpaceElement {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  type: 'star' | 'planet' | 'galaxy' | 'comet' | 'asteroid';
  delay: number;
  duration: number;
  opacity: number;
  scale: number;
  orbitRadius?: number;
  orbitSpeed?: number;
  hasRings?: boolean;
  ringColor?: string;
  glowColor?: string;
  glowIntensity?: number;
  trailLength?: number;
}

interface SpaceUniverseProps {
  starCount?: number;
  planetCount?: number;
  galaxyCount?: number;
  cometCount?: number;
  minStarSize?: number;
  maxStarSize?: number;
  minPlanetSize?: number;
  maxPlanetSize?: number;
  minGalaxySize?: number;
  maxGalaxySize?: number;
  minDuration?: number;
  maxDuration?: number;
  minDelay?: number;
  maxDelay?: number;
  minOpacity?: number;
  maxOpacity?: number;
  areaSelector?: string;
  depth?: boolean;
}

const SpaceUniverse: React.FC<SpaceUniverseProps> = ({
  starCount = 100,
  planetCount = 5,
  galaxyCount = 3,
  cometCount = 2,
  minStarSize = 1,
  maxStarSize = 3,
  minPlanetSize = 15,
  maxPlanetSize = 40,
  minGalaxySize = 80,
  maxGalaxySize = 150,
  minDuration = 60,
  maxDuration = 180,
  minDelay = 0,
  maxDelay = 10,
  minOpacity = 0.3,
  maxOpacity = 0.8,
  areaSelector = '.min-h-screen',
  depth = true,
}) => {
  const [elements, setElements] = useState<SpaceElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Generate SVG for different space elements
  const getSpaceElementSVG = (element: SpaceElement) => {
    const size = element.size;
    const halfSize = size / 2;

    switch (element.type) {
      case 'star':
        // Simple star with glow effect
        return (
          <>
            {/* Glow effect */}
            {element.glowIntensity && element.glowIntensity > 0 && (
              <circle
                cx={halfSize}
                cy={halfSize}
                r={halfSize * 1.5}
                fill={`url(#starGlow-${element.id})`}
                opacity={0.6}
              />
            )}
            {/* Star core */}
            <circle cx={halfSize} cy={halfSize} r={halfSize} fill="currentColor" />
            {/* Gradient definition for glow */}
            <defs>
              <radialGradient id={`starGlow-${element.id}`} cx="50%" cy="50%" r="50%">
                <stop
                  offset="0%"
                  stopColor={element.glowColor || element.color}
                  stopOpacity="0.8"
                />
                <stop
                  offset="100%"
                  stopColor={element.glowColor || element.color}
                  stopOpacity="0"
                />
              </radialGradient>
            </defs>
          </>
        );

      case 'planet':
        // Planet with optional rings
        return (
          <>
            {/* Planet body */}
            <circle cx={halfSize} cy={halfSize} r={halfSize * 0.8} fill="currentColor" />

            {/* Planet rings if applicable */}
            {element.hasRings && (
              <ellipse
                cx={halfSize}
                cy={halfSize}
                rx={halfSize * 1.2}
                ry={halfSize * 0.3}
                fill="none"
                stroke={element.ringColor || 'rgba(255, 255, 255, 0.5)'}
                strokeWidth={halfSize * 0.1}
                transform={`rotate(${Math.random() * 180} ${halfSize} ${halfSize})`}
              />
            )}

            {/* Surface details - simple craters or patterns */}
            <circle
              cx={halfSize * 0.7}
              cy={halfSize * 0.7}
              r={halfSize * 0.15}
              fill="rgba(255, 255, 255, 0.1)"
            />
            <circle
              cx={halfSize * 1.3}
              cy={halfSize * 1.2}
              r={halfSize * 0.1}
              fill="rgba(255, 255, 255, 0.1)"
            />
          </>
        );

      case 'galaxy':
        // Spiral galaxy with gradient
        return (
          <>
            <ellipse
              cx={halfSize}
              cy={halfSize}
              rx={halfSize}
              ry={halfSize * 0.4}
              fill={`url(#galaxyGradient-${element.id})`}
              transform={`rotate(${Math.random() * 360} ${halfSize} ${halfSize})`}
            />
            <defs>
              <radialGradient id={`galaxyGradient-${element.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                <stop offset="40%" stopColor={element.color} stopOpacity="0.6" />
                <stop offset="70%" stopColor={element.color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={element.color} stopOpacity="0" />
              </radialGradient>
            </defs>
          </>
        );

      case 'comet':
        // Comet with trail
        return (
          <>
            {/* Comet trail */}
            <path
              d={`M ${halfSize} ${halfSize} L ${halfSize - element.trailLength! * 2} ${halfSize}`}
              stroke={`url(#cometTrail-${element.id})`}
              strokeWidth={halfSize * 0.8}
              strokeLinecap="round"
            />
            {/* Comet head */}
            <circle cx={halfSize} cy={halfSize} r={halfSize * 0.5} fill="white" />
            <defs>
              <linearGradient id={`cometTrail-${element.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="80%" stopColor={element.color} stopOpacity="0.5" />
                <stop offset="100%" stopColor="white" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </>
        );

      case 'asteroid':
        // Irregular asteroid shape
        const points = [];
        const numPoints = 8;
        for (let i = 0; i < numPoints; i++) {
          const angle = (Math.PI * 2 * i) / numPoints;
          const radius = halfSize * (0.7 + Math.random() * 0.3);
          const x = halfSize + radius * Math.cos(angle);
          const y = halfSize + radius * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        return <polygon points={points.join(' ')} fill="currentColor" />;

      default:
        return <circle cx={halfSize} cy={halfSize} r={halfSize} fill="currentColor" />;
    }
  };

  useEffect(() => {
    // Move generateSpaceElements inside useEffect to avoid dependency issues
    const generateSpaceElements = (containerWidth: number, containerHeight: number) => {
      const newElements: SpaceElement[] = [];

      // Define color palettes based on theme
      const darkThemeColors = [
        '#4f46e5', // indigo-600
        '#8b5cf6', // violet-500
        '#a855f7', // purple-500
        '#ec4899', // pink-500
        '#0ea5e9', // sky-500
      ];

      const lightThemeColors = [
        '#6366f1', // indigo-500
        '#a855f7', // purple-500
        '#ec4899', // pink-500
        '#0ea5e9', // sky-500
        '#14b8a6', // teal-500
      ];

      const colors = theme === 'dark' ? darkThemeColors : lightThemeColors;

      // Generate stars (small size, high count)
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * (maxStarSize - minStarSize) + minStarSize;
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        const glowIntensity = Math.random() * 0.8;
        const glowColor = colors[Math.floor(Math.random() * colors.length)];

        newElements.push({
          id: i,
          x,
          y,
          size,
          rotation: 0,
          color: '#ffffff',
          type: 'star',
          delay: Math.random() * (maxDelay - minDelay) + minDelay,
          duration: Math.random() * (maxDuration - minDuration) + minDuration,
          opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
          scale: Math.random() * 0.5 + 0.5,
          glowColor,
          glowIntensity,
        });
      }

      // Generate planets (medium size, slow movement)
      for (let i = 0; i < planetCount; i++) {
        const size = Math.random() * (maxPlanetSize - minPlanetSize) + minPlanetSize;
        // Position planets more evenly throughout the space
        const sectionWidth = containerWidth / (planetCount + 1);
        const y =
          (containerHeight / (planetCount + 1)) * (i + 1) +
          (Math.random() * containerHeight * 0.2 - containerHeight * 0.1);
        const x =
          sectionWidth * (i + 1) + (Math.random() * sectionWidth * 0.6 - sectionWidth * 0.3);
        const hasRings = Math.random() > 0.6; // 40% chance of having rings

        newElements.push({
          id: starCount + i,
          x,
          y,
          size,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: 'planet',
          delay: Math.random() * (maxDelay - minDelay) + minDelay,
          duration: Math.random() * (maxDuration - minDuration) + minDuration + 20, // Planets move slower
          opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity + 0.2, // Planets are more visible
          scale: Math.random() * 0.3 + 0.7,
          hasRings,
          ringColor: hasRings ? colors[Math.floor(Math.random() * colors.length)] : undefined,
        });
      }

      // Generate galaxies (large size, very slow movement)
      for (let i = 0; i < galaxyCount; i++) {
        const size = Math.random() * (maxGalaxySize - minGalaxySize) + minGalaxySize;

        // Create a bias towards the corners
        const cornerBias = 0.7; // Higher value = more towards corners
        const horizontalBias = Math.random() > 0.5 ? cornerBias : -cornerBias;
        const verticalBias = Math.random() > 0.5 ? cornerBias : -cornerBias;

        // Position galaxies in corners and edges
        const x =
          containerWidth / 2 + (containerWidth / 2) * horizontalBias * (0.7 + Math.random() * 0.3);
        const y =
          containerHeight / 2 + (containerHeight / 2) * verticalBias * (0.7 + Math.random() * 0.3);

        newElements.push({
          id: starCount + planetCount + i,
          x,
          y,
          size,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: 'galaxy',
          delay: Math.random() * (maxDelay - minDelay) + minDelay,
          duration: Math.random() * (maxDuration - minDuration) + minDuration + 40, // Galaxies move very slowly
          opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
          scale: Math.random() * 0.3 + 0.7,
        });
      }

      // Generate comets (small size, fast directional movement)
      for (let i = 0; i < cometCount; i++) {
        const size = Math.random() * 20 + 10; // Comet size
        // Position comets at edges
        let x: number;
        let y: number;

        // Randomly choose which edge to start from
        const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left

        switch (edge) {
          case 0: // top
            x = Math.random() * containerWidth;
            y = -size;
            break;
          case 1: // right
            x = containerWidth + size;
            y = Math.random() * containerHeight;
            break;
          case 2: // bottom
            x = Math.random() * containerWidth;
            y = containerHeight + size;
            break;
          case 3: // left
            x = -size;
            y = Math.random() * containerHeight;
            break;
          default:
            x = -size;
            y = Math.random() * containerHeight;
        }

        newElements.push({
          id: starCount + planetCount + galaxyCount + i,
          x,
          y,
          size,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: 'comet',
          delay: Math.random() * (maxDelay - minDelay) + minDelay,
          duration: Math.random() * 5 + 3, // Comets move quickly
          opacity: 0.8, // Comets are very visible
          scale: 1,
          trailLength: Math.random() * 30 + 20, // Length of comet trail
        });
      }

      return newElements;
    };

    const updateDimensions = () => {
      if (!containerRef.current) return;

      const container = document.querySelector(areaSelector) as HTMLElement;
      if (!container) return;

      const { width, height } = container.getBoundingClientRect();
      setElements(generateSpaceElements(width, height));
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [
    starCount,
    planetCount,
    galaxyCount,
    cometCount,
    minStarSize,
    maxStarSize,
    minPlanetSize,
    maxPlanetSize,
    minGalaxySize,
    maxGalaxySize,
    minDuration,
    maxDuration,
    minDelay,
    maxDelay,
    minOpacity,
    maxOpacity,
    areaSelector,
    theme,
  ]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {elements.map(element => {
        // Apply depth effect if enabled
        const depthScale = depth
          ? 0.7 +
            (element.size /
              (element.type === 'galaxy'
                ? maxGalaxySize
                : element.type === 'planet'
                  ? maxPlanetSize
                  : maxStarSize)) *
              0.3
          : 1;
        const depthOpacity = depth
          ? 0.5 +
            (element.size /
              (element.type === 'galaxy'
                ? maxGalaxySize
                : element.type === 'planet'
                  ? maxPlanetSize
                  : maxStarSize)) *
              0.5
          : element.opacity;

        return (
          <motion.div
            key={element.id}
            className="absolute"
            initial={{
              x: element.x,
              y: element.y,
              rotate: element.rotation,
              opacity: 0,
              scale: element.scale,
            }}
            animate={{
              x:
                element.type === 'comet'
                  ? [
                      element.x,
                      element.x > (containerRef.current?.clientWidth ?? 0) / 2
                        ? -100
                        : (containerRef.current?.clientWidth ?? 0) + 100,
                    ]
                  : [element.x, element.x + (Math.random() * 50 - 25)],
              y:
                element.type === 'comet'
                  ? [
                      element.y,
                      element.y > (containerRef.current?.clientHeight ?? 0) / 2
                        ? -100
                        : (containerRef.current?.clientHeight ?? 0) + 100,
                    ]
                  : [element.y, element.y + (Math.random() * 50 - 25)],
              rotate:
                element.type === 'star'
                  ? 0
                  : [element.rotation, element.rotation + (Math.random() > 0.5 ? 360 : -360)],
              opacity:
                element.type === 'star'
                  ? [depthOpacity, 0, depthOpacity] // Stars twinkle
                  : [0, depthOpacity, 0],
              scale:
                element.type === 'star'
                  ? [depthScale, depthScale * 1.2, depthScale] // Stars pulse slightly
                  : depthScale,
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              repeatType: element.type === 'comet' ? 'loop' : 'reverse',
              ease: element.type === 'comet' ? 'linear' : 'easeInOut',
            }}
            style={{
              color: element.color,
              width: element.size,
              height: element.size,
              zIndex:
                element.type === 'star'
                  ? 1
                  : element.type === 'planet'
                    ? 2
                    : element.type === 'galaxy'
                      ? 0
                      : 3,
            }}
          >
            <svg
              width={element.size}
              height={element.size}
              viewBox={`0 0 ${element.size} ${element.size}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              {getSpaceElementSVG(element)}
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SpaceUniverse;
