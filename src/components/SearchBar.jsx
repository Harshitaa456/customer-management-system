import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({
  placeholder = 'Search...',
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2.5 border border-border bg-input rounded-lg shadow-soft focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent focus:shadow-card transition-all duration-200 ease-smooth"
      />
    </div>
  );
};

export default SearchBar;
