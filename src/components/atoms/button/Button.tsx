import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'ghost' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', size = 'medium', onClick, children }) => {
  const baseClasses = 'rounded-md focus:outline-none transition-colors';

  // Clases para las variantes del botón
  const variantClasses = {
    default: 'bg-gray-800 text-white hover:bg-gray-700',
    ghost: 'bg-transparent text-gray-800 hover:bg-gray-200',
    primary: 'bg-blue-600 text-white hover:bg-blue-500',
    secondary: 'bg-green-600 text-white hover:bg-green-500',
  };

  // Clases para los tamaños del botón
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Combina las clases de base con las clases de variante y tamaño
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
