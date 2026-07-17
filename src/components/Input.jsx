import React from 'react';

const Input = ({ label, type = 'text', className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-[#0F172A]">{label}</label>
      )}
      <input
        type={type}
        className={`input-field ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
