'use client'; 

import { useState } from 'react';

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('Pickles & Preserves');
  const [shelfLife, setShelfLife] = useState('');

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300">
      <div>
        <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400 mb-2">Vendor Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Configure raw technical product parameters below.</p>
      </div>

      <div className="max-w-md bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Food Item Name</label>
          <input 
            type="text"
            placeholder="e.g., Himalayan Wild Apricot Jam" 
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category Classification</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option>Pickles & Preserves</option>
            <option>Juices & Beverages</option>
            <option>Infusions & Teas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Product Shelf Life</label>
          <input 
            type="text"
            placeholder="e.g., 12 Months" 
            value={shelfLife}
            onChange={(e) => setShelfLife(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-medium transition-colors"
        >
          Review Description Inputs
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-lg max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">
            <h3 className="text-lg font-semibold mb-3">Verify Form Matrix</h3>
            <div className="p-4 bg-slate-100 dark:bg-slate-950 rounded-lg space-y-1 font-mono text-xs mb-4 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
              <div>Name: {productName || "Untitled"}</div>
              <div>Category: {category}</div>
              <div>Shelf Life: {shelfLife || "Not Specified"}</div>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setIsModalOpen(false)} className="px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded text-sm hover:bg-slate-50 dark:hover:bg-slate-700">Cancel</button>
              <button onClick={() => { setIsModalOpen(false); alert('Data Locked!'); }} className="px-3 py-1.5 bg-emerald-600 text-white rounded text-sm hover:bg-emerald-700">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}