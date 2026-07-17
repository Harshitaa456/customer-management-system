import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'font-medium px-6 py-2.5 rounded-lg transition-colors duration-200';
  
  const variants = {
    primary: 'bg-primary hover:bg-indigo-600 text-white',
    secondary: 'bg-white hover:bg-gray-50 text-[#0F172A] border border-gray-300',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    ghost: 'bg-transparent hover:bg-gray-100 text-[#0F172A]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
