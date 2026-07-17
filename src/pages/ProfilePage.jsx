import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, LogOut, Edit, User, Mail, Briefcase } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';

const ProfilePage = () => {
  const navigate = useNavigate();

  // Dummy user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@aventra.com',
    role: 'Admin',
    avatar: 'JD'
  };

  const handleLogout = () => {
    // UI only - no real logout
    navigate('/login');
  };

  const handleEditProfile = () => {
    // UI only - will navigate to edit profile page when implemented
    alert('Edit Profile functionality will be implemented when backend is connected.');
  };

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
              <h1 className="text-2xl font-bold text-[#0F172A]">Profile</h1>
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
              {/* Profile Header */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                  {user.avatar}
                </div>
                <h2 className="text-3xl font-bold text-[#0F172A]">{user.name}</h2>
                <p className="text-gray-600 mt-1">{user.email}</p>
                <span className="mt-3 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {user.role}
                </span>
              </div>

              {/* Profile Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <User className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Full Name</p>
                    <p className="text-lg font-medium text-[#0F172A]">{user.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Email Address</p>
                    <p className="text-lg font-medium text-[#0F172A]">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Briefcase className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Role</p>
                    <p className="text-lg font-medium text-[#0F172A]">{user.role}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleEditProfile}
                  variant="primary" 
                  className="flex-1"
                >
                  <Edit className="inline mr-2 w-5 h-5" />
                  Edit Profile
                </Button>
                <Button 
                  onClick={handleLogout} 
                  variant="danger" 
                  className="flex-1"
                >
                  <LogOut className="inline mr-2 w-5 h-5" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
