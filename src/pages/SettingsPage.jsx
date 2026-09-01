import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { UserProfile } from '@clerk/clerk-react';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const SettingsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex min-w-0">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 min-w-0 flex flex-col md:ml-64">
        <AppHeader>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-hover transition-all duration-200 ease-smooth hover:shadow-soft"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <h1 className="text-2xl font-bold text-sidebar-foreground">
                Settings
              </h1>
            </div>
        </AppHeader>

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