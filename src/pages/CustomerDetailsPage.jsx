import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Menu, ArrowLeft, Edit, Trash2, Mail, Phone, Building, Calendar } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';
import { getCustomer, deleteCustomer } from '../api/customers';

const CustomerDetailsPage = () => {
  const { user } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCustomer = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getCustomer(id);
        setCustomer(data);
      } catch (err) {
        setError(err.message || 'Could not load customer');
      } finally {
        setLoading(false);
      }
    };

    loadCustomer();
  }, [id]);

  const handleEdit = () => {
    navigate(`/customers/${id}/edit`);
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this customer?')) {
      return;
    }

    try {
      await deleteCustomer(id);
      navigate('/customers');
    } catch (err) {
      alert(err.message || 'Could not delete customer');
    }
  };

  const initials = customer?.name
    ? customer.name
        .split(' ')
        .map((n) => n[0])
        .join('')
    : '?';

  const createdDate = customer?.createdAt
    ? new Date(customer.createdAt).toLocaleDateString()
    : '—';

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
              <Link to="/customers" className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-2xl font-bold text-[#0F172A]">Customer Details</h1>
            </div>

            <div className="flex items-center gap-3">
  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
    {user?.firstName?.charAt(0)?.toUpperCase() || 'U'}
  </div>

  <div className="hidden sm:block">
    <p className="font-medium text-[#0F172A]">
      {user?.fullName || 'User'}
    </p>
    <p className="text-sm text-gray-600">
      {user?.primaryEmailAddress?.emailAddress}
    </p>
  </div>
</div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {loading && <p className="text-gray-600 text-center py-8">Loading customer...</p>}
            {error && <p className="text-red-600 text-center py-8">{error}</p>}

            {!loading && !error && customer && (
              <>
                <div className="card p-8 mb-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                      {initials}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-[#0F172A]">{customer.name}</h2>
                      <p className="text-gray-600 mt-1">{customer.company || '—'}</p>
                      <div className="mt-3">
                        <span
                          className={`
                          px-3 py-1 rounded-full text-sm font-medium
                          ${
                            customer.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : customer.status === 'Inactive'
                                ? 'bg-gray-100 text-gray-700'
                                : 'bg-yellow-100 text-yellow-700'
                          }
                        `}
                        >
                          {customer.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button onClick={handleEdit} variant="secondary">
                        <Edit className="inline mr-2 w-5 h-5" />
                        Edit
                      </Button>
                      <Button onClick={handleDelete} variant="danger">
                        <Trash2 className="inline mr-2 w-5 h-5" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="text-[#0F172A]">{customer.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="text-[#0F172A]">{customer.phone || '—'}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Company</p>
                          <p className="text-[#0F172A]">{customer.company || '—'}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Additional Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Created Date</p>
                          <p className="text-[#0F172A]">{createdDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
