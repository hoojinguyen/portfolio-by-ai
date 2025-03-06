"use client";

import React from "react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { name: "About", id: "about" },
    { name: "Resume", id: "resume" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-zinc-900 rounded-lg p-4 shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] border border-[hsl(0,0%,22%)] mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          {navItems.find(item => item.id === activeTab)?.name || 'About'}
        </h1>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
