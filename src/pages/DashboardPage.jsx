import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Plus } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';
import CustomerTable from '../components/CustomerTable';
import Button from '../components/Button';
import { Users, UserCheck, Clock, UserX } from 'lucide-react';
import { getCustomerStats, deleteCustomer } from '../api/customers';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    pending: 0,
    inactive: 0,
    recent: [],
  });

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getCustomerStats();
      setStats(data);
    } catch (err) {
      setError(err.message || 'Could not load dashboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const statCards = [
    { title: 'Total Customers', value: stats.total, icon: Users },
    { title: 'Active Customers', value: stats.active, icon: UserCheck },
    { title: 'Pending Customers', value: stats.pending, icon: Clock },
    { title: 'Inactive Customers', value: stats.inactive, icon: UserX },
  ];

  const filteredCustomers = stats.recent.filter((customer) => {
    const query = searchQuery.toLowerCase();
    return (
      customer.name?.toLowerCase().includes(query) ||
      customer.email?.toLowerCase().includes(query) ||
      customer.company?.toLowerCase().includes(query)
    );
  });

  const handleEdit = (id) => {
    navigate(`/customers/${id}/edit`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this customer?')) {
      return;
    }

    try {
      await deleteCustomer(id);
      await loadDashboard();
    } catch (err) {
      alert(err.message || 'Could not delete customer');
    }
  };

  const handleView = (id) => {
    navigate(`/customers/${id}`);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col">
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
                  placeholder="Search recent customers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
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

        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#0F172A]">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your customers.</p>
            </div>
            <Link to="/customers/new">
              <Button variant="primary">
                <Plus className="inline mr-2 w-5 h-5" />
                Add Customer
              </Button>
            </Link>
          </div>

          {loading && <p className="text-gray-600 mb-6">Loading dashboard...</p>}
          {error && <p className="text-red-600 mb-6">{error}</p>}

          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((stat) => (
                  <DashboardCard key={stat.title} {...stat} />
                ))}
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-[#0F172A]">Recent Customers</h2>
                  <Link to="/customers" className="text-primary hover:underline font-medium">
                    View All
                  </Link>
                </div>

                {filteredCustomers.length === 0 ? (
                  <p className="text-gray-600 py-8 text-center">No customers found.</p>
                ) : (
                  <CustomerTable
                    customers={filteredCustomers}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onView={handleView}
                  />
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
