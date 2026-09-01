import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'font-medium px-6 py-2.5 rounded-lg transition-all duration-200 ease-smooth';

  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-button hover:shadow-button-hover hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-accent hover:bg-accent/80 text-accent-foreground border border-border shadow-soft hover:shadow-card hover:-translate-y-0.5 active:translate-y-0',
    danger: 'bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-button hover:shadow-button-hover hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'bg-transparent hover:bg-muted text-foreground hover:shadow-soft',
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
