import React from 'react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'outline' | 'filled';
}

const Input: React.FC<InputProps> = ({ size = 'medium', variant = 'default', ...props }) => {
  // Base classes for the input
  const baseClasses = 'rounded-md focus:outline-none transition-all';

  // Variant classes
  const variantClasses = {
    default: 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:ring-gray-500',
    outline: 'bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:ring-gray-500',
    filled: 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:ring-gray-500',
  };

  // Size classes
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Combine classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} border rounded-md focus:ring-2`;

  return <input className={classes} {...props} />;
};

export default Input;
