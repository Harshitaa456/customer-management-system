import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'font-medium px-6 py-2.5 rounded-lg transition-colors duration-200';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-primary-foreground',
    secondary: 'bg-accent hover:bg-accent/80 text-accent-foreground border border-border',
    danger: 'bg-destructive hover:bg-destructive text-destructive-foreground',
    ghost: 'bg-transparent hover:bg-muted text-foreground',
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
