import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Plus, Filter, MoreVertical } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import CustomerTable from '../components/CustomerTable';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Button from '../components/Button';

const CustomersPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('all');

  // Dummy data
  const customers = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@techcorp.com', phone: '+1 234 567 8901', company: 'TechCorp', status: 'Active' },
    { id: 2, name: 'Michael Chen', email: 'michael@innovate.io', phone: '+1 234 567 8902', company: 'Innovate.io', status: 'Active' },
    { id: 3, name: 'Emily Davis', email: 'emily@startup.co', phone: '+1 234 567 8903', company: 'Startup Co', status: 'Pending' },
    { id: 4, name: 'James Wilson', email: 'james@enterprise.com', phone: '+1 234 567 8904', company: 'Enterprise', status: 'Inactive' },
    { id: 5, name: 'Lisa Anderson', email: 'lisa@agency.net', phone: '+1 234 567 8905', company: 'Agency Net', status: 'Active' },
    { id: 6, name: 'Robert Taylor', email: 'robert@global.com', phone: '+1 234 567 8906', company: 'Global Inc', status: 'Active' },
    { id: 7, name: 'Jennifer Martinez', email: 'jennifer@local.biz', phone: '+1 234 567 8907', company: 'Local Biz', status: 'Pending' },
    { id: 8, name: 'David Brown', email: 'david@startup.io', phone: '+1 234 567 8908', company: 'Startup.io', status: 'Inactive' },
    { id: 9, name: 'Amanda White', email: 'amanda@tech.co', phone: '+1 234 567 8909', company: 'Tech Co', status: 'Active' },
    { id: 10, name: 'Christopher Lee', email: 'chris@digital.com', phone: '+1 234 567 8910', company: 'Digital', status: 'Active' },
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          customer.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || customer.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredCustomers.length / 5);
  const displayedCustomers = filteredCustomers.slice((currentPage - 1) * 5, currentPage * 5);

  const handleEdit = (id) => {
    navigate(`/customers/${id}/edit`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      console.log('Delete customer:', id);
      // In real app, would delete from backend
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
              <h1 className="text-2xl font-bold text-[#0F172A]">Customers</h1>
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
          <div className="card p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <SearchBar
                  placeholder="Search customers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="sm:w-80"
                />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <Link to="/customers/new">
                <Button variant="primary">
                  <Plus className="inline mr-2 w-5 h-5" />
                  Add Customer
                </Button>
              </Link>
            </div>

            {/* Table */}
            <CustomerTable 
              customers={displayedCustomers}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />

            {/* Pagination */}
            <div className="mt-6 flex justify-end">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomersPage;
