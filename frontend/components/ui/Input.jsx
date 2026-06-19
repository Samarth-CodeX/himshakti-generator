import React from 'react';

export const Input = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-10 px-3 rounded-md border bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
          ${error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300 dark:border-gray-700'
          }`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 font-medium mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};