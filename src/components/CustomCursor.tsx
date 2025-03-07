"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cursor after a short delay to prevent initial animation from showing
    const timer = setTimeout(() => setIsVisible(true), 500);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y);
      if (!target) return;

      // Check if the element or its parent has cursor:pointer
      const hasPointerCursor =
        window.getComputedStyle(target).cursor === "pointer" ||
        (target.parentElement &&
          window.getComputedStyle(target.parentElement).cursor === "pointer");

      setIsPointer(hasPointerCursor ?? false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousemove", updateCursorType);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousemove", updateCursorType);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border-2 border-[var(--color-accent-tertiary)] z-[9998] pointer-events-none ${
          isPointer ? "opacity-80" : "opacity-40"
        }`}
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          width: isPointer ? 64 : 48,
          height: isPointer ? 64 : 48,
          borderColor: isPointer
            ? "var(--color-accent-primary)"
            : "var(--color-accent-tertiary)",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          mass: 0.8,
        }}
      />
    </>
  );
};

export default CustomCursor;
