import React from 'react';

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) => {
  // Base configuration classes for structural uniformity
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md disabled:pointer-events-none disabled:opacity-50';

  // Specific visual variants reflecting HimShakti's natural regional theme
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800',
    secondary: 'bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800',
    outline: 'border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50 active:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800'
  };

  // Viewport size scaling matrices
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg'
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};