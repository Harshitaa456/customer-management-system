import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Plus, User, Bell, MoreVertical } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import CustomerTable from '../components/CustomerTable';
import Button from '../components/Button';
import { Users, UserCheck, UserPlus, Clock } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data
  const stats = [
    { title: 'Total Customers', value: '2,847', icon: Users, trend: '+12.5%', trendUp: true },
    { title: 'Active Customers', value: '1,923', icon: UserCheck, trend: '+8.2%', trendUp: true },
    { title: 'New Customers', value: '342', icon: UserPlus, trend: '+23.1%', trendUp: true },
    { title: 'Recent Activity', value: '89', icon: Clock, trend: '-2.4%', trendUp: false },
  ];

  const recentCustomers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@techcorp.com', phone: '+1 234 567 8901', company: 'TechCorp', status: 'Active' },
    { id: 2, name: 'Michael Chen', email: 'michael@innovate.io', phone: '+1 234 567 8902', company: 'Innovate.io', status: 'Active' },
    { id: 3, name: 'Emily Davis', email: 'emily@startup.co', phone: '+1 234 567 8903', company: 'Startup Co', status: 'Pending' },
    { id: 4, name: 'James Wilson', email: 'james@enterprise.com', phone: '+1 234 567 8904', company: 'Enterprise', status: 'Inactive' },
    { id: 5, name: 'Lisa Anderson', email: 'lisa@agency.net', phone: '+1 234 567 8905', company: 'Agency Net', status: 'Active' },
  ];

  const handleEdit = (id) => {
    navigate(`/customers/${id}/edit`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      console.log('Delete customer:', id);
    }
  };

  const handleView = (id) => {
    navigate(`/customers/${id}`);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div className="hidden sm:block">
                  <p className="font-medium text-[#0F172A]">John Doe</p>
                  <p className="text-sm text-gray-600">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#0F172A]">Dashboard</h1>
              <p className="text-gray-600">Welcome back, John! Here's what's happening.</p>
            </div>
            <Link to="/customers/new">
              <Button variant="primary">
                <Plus className="inline mr-2 w-5 h-5" />
                Add Customer
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <DashboardCard key={index} {...stat} />
            ))}
          </div>

          {/* Customer Health / Analytics */}
          <div className="card p-6 mb-8">
            <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Customer Health Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-700 font-medium">Healthy</p>
                <p className="text-3xl font-bold text-green-800 mt-2">1,923</p>
                <p className="text-sm text-green-600 mt-1">67.5% of customers</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-yellow-700 font-medium">At Risk</p>
                <p className="text-3xl font-bold text-yellow-800 mt-2">582</p>
                <p className="text-sm text-yellow-600 mt-1">20.4% of customers</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-red-700 font-medium">Churned</p>
                <p className="text-3xl font-bold text-red-800 mt-2">342</p>
                <p className="text-sm text-red-600 mt-1">12.1% of customers</p>
              </div>
            </div>
          </div>

          {/* Recent Customers Table */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#0F172A]">Recent Customers</h2>
              <Link to="/customers" className="text-primary hover:underline font-medium">
                View All
              </Link>
            </div>
            <CustomerTable 
              customers={recentCustomers}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
