import React from 'react';
import { Menu } from 'lucide-react';
import { UserProfile } from '@clerk/clerk-react';
import Sidebar from '../components/Sidebar';

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={false} onClose={() => {}} />

      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>

              <h1 className="text-2xl font-bold text-[#0F172A]">
                Settings
              </h1>
            </div>
          </div>
        </header>

        {/* Clerk Account Settings */}
        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            <UserProfile
              routing="path"
              path="/settings"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;