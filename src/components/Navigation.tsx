"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [, setPreviousTab] = useState<string>(activeTab);

  useEffect(() => {
    setPreviousTab(activeTab);
  }, [activeTab]);

  const navItems = [
    { title: "About Me", name: "About", id: "about", icon: "👨‍💻" },
    { title: "Resume", name: "Resume", id: "resume", icon: "📄" },
    { title: "Portfolio", name: "Portfolio", id: "portfolio", icon: "🎨" },
    { title: "Contact", name: "Contact", id: "contact", icon: "📱" },
  ];

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      onTabChange(tabId);
    }
  };

  return (
    <nav className="bg-zinc-900 backdrop-blur-md rounded-lg p-4 card-shadow shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] border border-[hsl(0,0%,22%)] mb-8 relative overflow-hidden group dark:bg-zinc-900/80 dark:border-zinc-800">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 dark:from-purple-500/5 dark:via-pink-500/5 dark:to-yellow-500/5"></div>

      {/* Active tab background glow - Mobile responsive version */}
      {activeTab && (
        <motion.div
          className="absolute h-full top-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-yellow-500/20 rounded-lg dark:from-purple-500/10 dark:via-pink-500/10 dark:to-yellow-500/10"
          layoutId="tabBackground"
          initial={false}
          // Use layout animations instead of fixed percentages for better mobile support
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 relative z-10">
        <motion.h1
          key={activeTab}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text animate-gradient"
        >
          {navItems.find((item) => item.id === activeTab)?.title || "About Me"}
        </motion.h1>

        <ul className="flex flex-wrap gap-3 md:gap-6 relative w-full md:w-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const isHovered = hoveredTab === item.id;

            return (
              <motion.li key={item.id} className="relative">
                <button
                  onClick={() => handleTabChange(item.id)}
                  onMouseEnter={() => setHoveredTab(item.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`relative py-2 px-2 md:px-3 text-xs md:text-sm font-medium transition-all duration-300 rounded-md flex items-center gap-1 md:gap-2 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {/* Icon with pop animation on hover */}
                  <motion.span
                    animate={{
                      scale: isHovered || isActive ? 1.2 : 1,
                      rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`transition-colors duration-300 ${
                      isActive ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {item.icon}
                  </motion.span>

                  {/* Tab name */}
                  <span>{item.name}</span>

                  {/* Underline effect */}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500"
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Hover glow effect */}
                  {isHovered && !isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-md bg-white/5 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layoutId="hoverGlow"
                    />
                  )}
                </button>

                {/* Active indicator dot */}
                {isActive && (
                  <motion.span
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-yellow-500 to-pink-500"
                    layoutId="activeDot"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
