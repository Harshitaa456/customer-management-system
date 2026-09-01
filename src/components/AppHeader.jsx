import React from 'react';

const AppHeader = ({ children }) => {
  return (
    <header className="bg-sidebar border-b border-border sticky top-0 z-40 shadow-header">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        {children}
      </div>
    </header>
  );
};

export default AppHeader;
