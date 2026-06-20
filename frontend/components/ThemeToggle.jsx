'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui'; // Adjust path based on your folder structure

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // ONLY hide the button text while mounting, letting the rest of the page load instantly!
  if (!mounted) {
    return (
      <Button variant="outline" className="fixed top-4 right-4 z-50 opacity-50" disabled>
        ⚙️ Initializing...
      </Button>
    );
  }

  return (
    <Button 
      variant="outline" 
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 shadow-md border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </Button>
  );
}