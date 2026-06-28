'use client'; 

import { useState } from 'react';

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('Pickles & Preserves');
  const [shelfLife, setShelfLife] = useState('');
  
  // New full-stack state variables for integration tracking
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Handler to sync input form matrix to our FastAPI backend endpoints
  const handleConfirmSubmit = async () => {
    setIsModalOpen(false);
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Formatting fields to align with the backend's Pydantic schema constraints
    const productPayload = {
      name: productName || "Untitled Himalayan Item",
      category: category,
      ingredients: "Sourced locally from regional farmers", // Placeholder until Week 5 form fields are added
      shelf_life: shelfLife || "Not Specified",
      packaging_size: "Standard" // Default fallback value matching schema schema
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productPayload),
      });

      if (response.status === 201) {
        const data = await response.json();
        setSubmitStatus({ 
          type: 'success', 
          message: `🎉 Success! Created "${data.name}" with ID: ${data.id} in the backend database.` 
        });
        // Clear input form fields upon successful completion loop
        setProductName('');
        setShelfLife('');
      } else {
        const errorData = await response.json();
        setSubmitStatus({ 
          type: 'error', 
          message: `Validation Error (${response.status}): ${errorData.detail || 'Failed to register product.'}` 
        });
      }
    } catch (error) {
      console.error("Connection failure:", error);
      setSubmitStatus({ 
        type: 'error', 
        message: '🚨 API Server Connection Refused. Ensure uvicorn is running on port 5000!' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 min-h-screen transition-colors duration-300">
      <div>
        <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400 mb-2">Vendor Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Configure raw technical product parameters below.</p>
      </div>

      {/* Live integration notification alert banner block */}
      {submitStatus.message && (
        <div className={`p-4 rounded-lg border text-sm transition-all ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-950/30 dark:border-green-900 dark:text-green-300' 
            : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-950/30 dark:border-red-900 dark:text-red-300'
        }`}>
          {submitStatus.message}
        </div>
      )}

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
            <option value="Pickle">Pickles & Preserves</option>
            <option value="Juice">Juices & Beverages</option>
            <option value="Herbal Tea">Infusions & Teas</option>
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
          disabled={isSubmitting}
          className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white rounded font-medium transition-colors"
        >
          {isSubmitting ? 'Communicating with API...' : 'Review Description Inputs'}
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
              <button onClick={handleConfirmSubmit} className="px-3 py-1.5 bg-emerald-600 text-white rounded text-sm hover:bg-emerald-700">Confirm and Send to Backend</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}