import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { UserProfile } from '@clerk/clerk-react';
import Sidebar from '../components/Sidebar';

const SettingsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex min-w-0">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="bg-card border-b border-border sticky top-0 z-40">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 hover:bg-muted rounded-lg"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <h1 className="text-2xl font-bold text-foreground">
                Settings
              </h1>
            </div>
          </div>
        </header>

        <main className="flex-1 min-w-0 p-4 sm:p-6 overflow-x-auto">
          <div className="w-full max-w-5xl mx-auto min-w-0">
            <div className="w-full overflow-x-auto">
              <UserProfile
                routing="path"
                path="/settings"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;