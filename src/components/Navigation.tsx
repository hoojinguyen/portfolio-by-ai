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
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-zinc-900 rounded-lg p-4 shadow-[0_24px_80px_hsla(0,0%,0%,0.25)] border border-[hsl(0,0%,22%)] mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text animate-gradient">
          {navItems.find(item => item.id === activeTab)?.name || 'About'}
        </h1>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={`relative py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === item.id
                    ? "text-white scale-110"
                    : "text-zinc-400 hover:text-white hover:scale-110"
                }`}
              >
                {item.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 to-pink-500 transform transition-transform duration-300 ease-in-out ${
                    activeTab === item.id ? "scale-x-100" : "scale-x-0"
                  }`} 
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
