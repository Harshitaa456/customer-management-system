import React from 'react';
import { Users } from 'lucide-react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <div className="bg-primary p-2 rounded-lg shadow-button transition-all duration-200 ease-smooth group-hover:shadow-button-hover">
        <Users className="w-6 h-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold text-inherit">Aventra</span>
    </div>
  );
};

export default Logo;
