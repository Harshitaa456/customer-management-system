import React from 'react';
import { Menu } from 'lucide-react';
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
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-[#0F172A]">Settings</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-[#0F172A] mb-6">Account Settings</h2>
              <p className="text-gray-600">
                Settings page will be implemented when backend is connected.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
