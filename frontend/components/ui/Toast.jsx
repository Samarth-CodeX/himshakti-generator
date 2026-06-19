import React, { useEffect } from 'react';

export const Toast = ({
  message,
  type = 'success', // 'success' | 'error' | 'info'
  duration = 3000,
  onClose,
  isOpen
}) => {
  // Set up auto-dismiss side effect
  useEffect(() => {
    if (isOpen && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  // Type appearance maps
  const typeStyles = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-200',
    error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-950 dark:border-red-800 dark:text-red-200',
    info: 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200'
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-fade-in-up">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg max-w-sm transition-all ${typeStyles[type]}`}>
        {/* Simple Dynamic Status Dot Indicator */}
        <span className={`h-2 w-2 rounded-full shrink-0 ${
          type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-red-500' : 'bg-amber-500'
        }`} />
        
        <p className="text-sm font-medium">{message}</p>
        
        {/* Close Button Trigger */}
        <button
          type="button"
          onClick={onClose}
          className="ml-auto p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};