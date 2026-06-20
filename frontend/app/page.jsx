'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext'; // Adjust path if context folder is at a different tier

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  
  // Local safety backup fallback to bypass initialization freeze
  const [localMounted, setLocalMounted] = useState(false);

  useEffect(() => {
    setLocalMounted(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] text-slate-800 dark:bg-[#0B0F19] dark:text-slate-200 transition-colors duration-500 ease-in-out overflow-x-hidden">
      
      {/* 🧭 Top Navigation Bar */}
      <div className="w-full border-b border-slate-200/60 dark:border-slate-800/50 bg-white/50 dark:bg-[#0B0F19]/50 backdrop-blur-md sticky top-0 z-40">
        <header className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo Frame */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-emerald-700 dark:bg-emerald-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
              ⛰️
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-slate-950 dark:text-white block">
                HimShakti
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold block -mt-0.5">
                Food Processing Unit
              </span>
            </div>
          </div>

          {/* Symmetrical Theme Toggle Switch Trigger */}
          <div>
            {localMounted ? (
              <button
                type="button"
                onClick={toggleTheme}
                className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all duration-200 active:scale-95"
              >
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            ) : (
              <div className="px-4 py-2 text-xs text-slate-400 animate-pulse">Initializing...</div>
            )}
          </div>

        </header>
      </div>

      {/* 🎯 Aligned Content Body Arena */}
      <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24 flex-grow flex flex-col justify-center">
        
        {/* Core Header Segment */}
        <div className="space-y-4 mb-16 text-left max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider text-emerald-800 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-950/40 rounded-full uppercase">
            Internal Administration Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-slate-950 dark:text-white leading-tight">
            AI-Powered Product <br />
            <span className="text-emerald-700 dark:text-emerald-400 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-300">Description Generator</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Optimize and streamline high-quality digital catalog transformations for premium regional crop and food inventory management.
          </p>
        </div>

        {/* 📋 Symmetrical Portal Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Card 1: Dashboard */}
          <Link href="/dashboard" className="group rounded-xl border border-slate-200 bg-white dark:bg-[#111827] dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg h-10 w-10 flex items-center justify-center text-lg mb-4 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/30 transition-colors">
                📊
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                Inventory Dashboard
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Review verified item profiles, ingredients, and configure active distribution batches.
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 pt-4 flex items-center gap-1">
              Open Workspace <span>→</span>
            </div>
          </Link>

          {/* Card 2: Login Access Portal */}
          <Link href="/login" className="group rounded-xl border border-slate-200 bg-white dark:bg-[#111827] dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg h-10 w-10 flex items-center justify-center text-lg mb-4 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/30 transition-colors">
                🔑
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                Vendor Access Gate
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Secure portal authentication checkpoint for localized crop processing managers.
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 pt-4 flex items-center gap-1">
              Authenticate Portal <span>→</span>
            </div>
          </Link>

          {/* Card 3: About Description */}
          <Link href="/about" className="group rounded-xl border border-slate-200 bg-white dark:bg-[#111827] dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[180px]">
            <div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg h-10 w-10 flex items-center justify-center text-lg mb-4 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/30 transition-colors">
                ⛰️
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                Our Mission Statement
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Explore our regional goals for upscaling value chains across organic Himalayan crops.
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 pt-4 flex items-center gap-1">
              Read Profile <span>→</span>
            </div>
          </Link>

        </div>
      </div>

      {/* 📝 Balanced Administrative Footer */}
      <div className="w-full border-t border-slate-200/60 dark:border-slate-800/50 bg-white/20 dark:bg-[#0B0F19]/20">
        <footer className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 tracking-wide gap-2">
          <p>© 2026 HimShakti Unit. Confidential internal vendor network terminal context.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors">Security Protocol</span>
            <span className="hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors">LMS Integration API</span>
          </div>
        </footer>
      </div>

    </main>
  );
}