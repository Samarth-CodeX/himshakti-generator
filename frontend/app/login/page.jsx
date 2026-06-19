'use client'; 

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 transition-colors duration-300">
      <div className="p-8 max-w-md w-full border rounded-xl shadow-md bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Vendor Access Portal</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">HimShakti Food Processing Workspace Terminal</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input 
            type="email"
            placeholder="vendor@himshakti.org"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Security Password</label>
          <input 
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button 
          onClick={() => alert(`Simulating access for: ${email}`)}
          className="w-full px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-medium transition-colors shadow-sm"
        >
          Authenticate Identity
        </button>
      </div>
    </div>
  );
}