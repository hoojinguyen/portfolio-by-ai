'use client';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

export const AppleHelloVietnameseEffect = ({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) => {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn('h-20', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1009 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>xin chào</title>

      {/* x2 */}
      <motion.path
        d="M7.69214 116.575C9.67725 105.16 16.8733 95.7311 28.5358 95.7311C40.4465 95.7311 46.8981 105.408 53.3497 124.019C56.7409 133.283 60.1322 142.547 63.5234 151.81C73.689 179.58 81.1988 191.513 100.855 191.513C128.722 191.513 154.043 159.148 161.595 118.502C162.929 111.321 164.774 103.736 166.043 96.2273"
        initial={{
          strokeLinecap: 'inherit',
          pathLength: 0,
        }}
        animate={{
          strokeLinecap: 'round',
          pathLength: 1,
        }}
        transition={{
          duration: calc(0.7),
          ease: 'easeInOut',
          delay: calc(0.4),
        }}
      />

      {/* x1 */}
      <motion.path
        d="M102.233 96.2277C75.6823 127.245 45.1612 158.759 11.4143 190.521"
        initial={{
          strokeLinecap: 'inherit',
          pathLength: 0,
        }}
        animate={{
          strokeLinecap: 'round',
          pathLength: 1,
        }}
        transition={{
          duration: calc(0.3),
          ease: 'easeInOut',
        }}
      />

      {/* i */}
      <motion.path
        d="M166.043 96.2273C163.191 113.101 160.565 126.997 158.92 139.404C157.989 147.592 157.544 154.54 157.596 161.488C157.729 179.354 164.764 191.513 182.695 191.513C209.39 191.513 236.181 159.123 243.73 118.5C245.064 111.321 247.012 103.759 248.139 96.2273"
        initial={{
          strokeLinecap: 'inherit',
          pathLength: 0,
        }}
        animate={{
          strokeLinecap: 'round',
          pathLength: 1,
        }}
        transition={{
          duration: calc(0.5),
          ease: 'easeOut',
          delay: calc(1),
        }}
      />

      {/* n1 */}
      <motion.path
        d="M248.139 96.2278C243.424 127.741 239.454 158.759 234.491 190.272"
        initial={{
          strokeLinecap: 'inherit',
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          strokeLinecap: 'round',
          pathLength: 1,
          opacity: [1, 1, 1],
        }}
        transition={{
          duration: calc(0.3),
          ease: 'easeOut',
          delay: calc(1.5),
        }}
      />

      {/* n2 */}
      <motion.path
        d="M237.873 167.951C244.704 121.32 265.508 94.2422 290.322 94.2422C307.692 94.2422 316.625 106.153 315.136 123.026C313.896 135.681 309.677 150.322 308.685 162.729C307.444 179.85 316.499 191.513 330.769 191.513C348.722 191.513 359.309 179.314 364.143 165.965"
        initial={{
          strokeLinecap: 'inherit',
          pathLength: 0,
        }}
        animate={{
          strokeLinecap: 'round',
          pathLength: 1,
        }}
        transition={{
          duration: calc(0.9),
          ease: 'easeOut',
          delay: calc(1.8),
        }}
      />

      {/* c, h1 */}
      <motion.path
        d="M535.91 109.876C531.265 100.446 520.943 93.4984 505.459 93.4984C476.516 93.4984 462.044 117.816 462.044 143.374C462.044 171.503 482.265 192.506 511.307 192.506C559.762 192.506 592.902 136.708 621.581 97.8807C640.764 71.9101 649.874 49.2359 650.372 31.1674C650.62 17.7684 644.168 7.60362 632.01 7.60362C618.61 7.60362 610.173 17.7684 604.963 41.1011C599.255 66.7441 595.037 96.1684 584.367 190.521"
        initial={{
          strokeLinecap: 'inherit',
          pathLength: 0,
        }}
        animate={{
          strokeLinecap: 'round',
          pathLength: 1,
        }}
        transition={{
          duration: calc(1.1),
          ease: 'easeInOut',
          delay: calc(2.6),
        }}
      />

      {/* h2 */}
      <motion.path
        d="M585.413 181.299C590.677 135.025 611.663 98.2125 638.213 98.2125C654.094 98.2125 664.187 110.868 661.321 128.982C659.708 139.652 656.794 152.059 655.128 164.217C653.102 179.602 658.89 191.513 676.813 191.513C702.178 191.513 717.375 164.077 725.613 135.196"
        initial={{
          strokeLinecap: 'inherit',
          pathLength: 0,
        }}
        animate={{
          strokeLinecap: 'round',
          pathLength: 1,
        }}
        transition={{
          duration: calc(1),
          ease: 'easeInOut',
          delay: calc(3.6),
        }}
      />

      {/* a1 */}
      <motion.path
        d="M803.871 112.995C799.007 101.8 788.666 94.2423 772.207 94.2423C744.912 94.2423 724.398 121.538 723.052 150.818C721.878 177.617 734.244 192.681 751.857 192.505C776.858 192.255 795.234 167.699 803.437 115.742C804.449 109.332 805.498 102.638 806.51 96.2274"
        initial={{
          strokeLinecap: 'inherit',
          pathLength: 0,
        }}
        animate={{
          strokeLinecap: 'round',
          pathLength: 1,
        }}
        transition={{
          duration: calc(0.8),
          ease: 'easeOut',
          delay: calc(4.6),
        }}
      />

      {/* a2, o */}
      <motion.path
        d="M806.51 96.2274C805.486 102.73 804.461 109.232 803.436 115.735C798.955 144.175 796.887 155.395 797.109 162.729C797.628 179.85 803.785 191.513 820.064 191.513C842.563 191.513 860.966 164.721 870.266 138.289C879.653 111.612 891.315 94.9867 915.633 94.9867C935.732 94.9867 951.613 109.875 951.613 137.915C951.613 168.932 931.489 192.257 906.059 192.505C883.681 192.753 868.983 174.639 870.471 147.344C872.208 117.071 890.571 94.9867 914.64 94.9867C928.536 94.9867 940.207 101.164 949.38 107.89C974.247 126.031 993.407 114.82 1000.74 96.8832"
        initial={{
          strokeLinecap: 'inherit',
          pathLength: 0,
        }}
        animate={{
          strokeLinecap: 'round',
          pathLength: 1,
        }}
        transition={{
          duration: calc(1.5),
          ease: 'easeOut',
          delay: calc(5.4),
        }}
      />

      {/* sign */}
      <motion.path
        className="stroke-yellow-400"
        d="M763.027 19.3039C768.734 34.6886 780.397 48.3362 792.059 55.5322"
        initial={{
          strokeLinecap: 'inherit',
          pathLength: 0,
        }}
        animate={{
          strokeLinecap: 'round',
          pathLength: 1,
        }}
        transition={{
          duration: calc(0.8),
          ease: 'easeInOut',
          delay: calc(7),
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
};
