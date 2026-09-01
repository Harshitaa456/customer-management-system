import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Plus } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import CustomerTable from '../components/CustomerTable';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Button from '../components/Button';
import { getCustomers, deleteCustomer } from '../api/customers';

const CustomersPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('all');
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadCustomers = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getCustomers();
      setCustomers(data);
    } catch (err) {
      setError(err.message || 'Could not load customers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const filteredCustomers = customers.filter((customer) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      customer.name?.toLowerCase().includes(query) ||
      customer.email?.toLowerCase().includes(query) ||
      customer.company?.toLowerCase().includes(query);
    const matchesFilter =
      filterStatus === 'all' || customer.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.max(1, Math.ceil(filteredCustomers.length / 5));
  const displayedCustomers = filteredCustomers.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  const handleEdit = (id) => {
    navigate(`/customers/${id}/edit`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this customer?')) {
      return;
    }

    try {
      await deleteCustomer(id);
      await loadCustomers();
    } catch (err) {
      alert(err.message || 'Could not delete customer');
    }
  };

  const handleView = (id) => {
    navigate(`/customers/${id}`);
  };

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
                className="lg:hidden p-2 hover:bg-muted rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>

              <h1 className="text-2xl font-bold text-foreground">
                Customers
              </h1>
            </div>

            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                {user?.firstName?.charAt(0)?.toUpperCase() || 'U'}
              </div>

              <div className="hidden sm:block min-w-0">
                <p className="font-medium text-foreground truncate">
                  {user?.fullName || 'User'}
                </p>

                <p className="text-sm text-muted-foreground truncate">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6">
          <div className="card p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 flex-1 min-w-0">
                <div className="w-full sm:w-80 lg:w-72 xl:w-80">
                  <SearchBar
                    placeholder="Search customers..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>

                <select
                  value={filterStatus}
                  onChange={(e) => {
                    setFilterStatus(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 border border-border bg-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <Link
                to="/customers/new"
                className="w-full lg:w-auto"
              >
                <Button
                  variant="primary"
                  className="w-full lg:w-auto"
                >
                  <Plus className="inline mr-2 w-5 h-5" />
                  Add Customer
                </Button>
              </Link>
            </div>

            {loading && (
              <p className="text-muted-foreground py-8 text-center">
                Loading customers...
              </p>
            )}

            {error && (
              <p className="text-destructive py-8 text-center">
                {error}
              </p>
            )}

            {!loading &&
              !error &&
              displayedCustomers.length === 0 && (
                <p className="text-muted-foreground py-8 text-center">
                  No customers found.
                </p>
              )}

            {!loading &&
              !error &&
              displayedCustomers.length > 0 && (
                <>
                  <div className="w-full overflow-x-auto">
                    <CustomerTable
                      customers={displayedCustomers}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      onView={handleView}
                    />
                  </div>

                  <div className="mt-6 flex justify-center sm:justify-end">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </>
              )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomersPage;