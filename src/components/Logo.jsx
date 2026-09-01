import React from 'react';
import { Users } from 'lucide-react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-primary p-2 rounded-lg">
        <Users className="w-6 h-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold text-inherit">Aventra</span>
    </div>
  );
};

export default Logo;
