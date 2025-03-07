import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  width = "fit-content",
  delay = 0,
  direction = "up",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Set initial animation values based on direction
  const getInitialY = () => {
    if (direction === "up") return 50;
    if (direction === "down") return -50;
    return 0;
  };

  const getInitialX = () => {
    if (direction === "left") return 50;
    if (direction === "right") return -50;
    return 0;
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.17, 0.55, 0.55, 1],
        },
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: getInitialY(), 
        x: getInitialX() 
      }}
      animate={controls}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;