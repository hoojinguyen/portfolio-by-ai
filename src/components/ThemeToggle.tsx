'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-blue-400"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-500 w-5 h-5" />
      ) : (
        <FaMoon className="text-violet-600 w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;