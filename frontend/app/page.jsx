'use client'; 

import { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import Card from "@/components/Card";

const CATALOG_ITEMS = [
  { id: 1, title: "Organic Apple Chutney", category: "Pickles & Preserves", shelfLife: "6 Months" },
  { id: 2, title: "Pure Rhododendron Juice", category: "Juices & Beverages", shelfLife: "4 Months" },
  { id: 3, title: "Himalayan Herbal Tea", category: "Infusions & Teas", shelfLife: "1 Year" },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  });

  // Sync theme with document element whenever the state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle manual theme switching
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const nextMode = !prevMode;
      localStorage.setItem('theme', nextMode ? 'dark' : 'light');
      return nextMode;
    });
  };

  const filteredItems = CATALOG_ITEMS.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-10 pb-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Self-contained Floating Dark Mode Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 px-3 py-1.5 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm rounded-full shadow-md font-medium transition-colors"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <Hero />
      
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Search Panel using direct Tailwind inputs */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-sm font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
            Vendor Search & Control Station
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Filter Inventory Catalog</label>
              <input 
                type="text"
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-medium transition-colors"
            >
              Launch Support Desk
            </button>
          </div>
        </div>

        {/* Catalog Grid */}
        <div>
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Featured Processing Unit Catalog</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <Card key={item.id} title={item.title} category={item.category} shelfLife={item.shelfLife} />
            ))}
          </div>
        </div>
      </div>

      {/* Pure HTML/CSS Modal Box */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-lg max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold mb-2">Operational Support Desk</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Your layout preview station is loading directly without component dependencies.</p>
            <div className="flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded text-sm hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}