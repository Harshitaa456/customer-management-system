import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  Menu, ArrowLeft, Edit, Trash2, Mail, Phone, Building, Calendar,
} from 'lucide-react';
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
        setCustomer(await getCustomer(id));
      } catch (err) {
        setError(err.message || 'Could not load customer');
      } finally {
        setLoading(false);
      }
    };

    loadCustomer();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this customer?')) return;

    try {
      await deleteCustomer(id);
      navigate('/customers');
    } catch (err) {
      alert(err.message || 'Could not delete customer');
    }
  };

  const initials = customer?.name
    ? customer.name.split(' ').map((name) => name[0]).join('')
    : '?';

  const createdDate = customer?.createdAt
    ? new Date(customer.createdAt).toLocaleDateString()
    : '—';

  return (
    <div className="min-h-screen bg-background flex min-w-0">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <Link to="/customers" className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-6 h-6" />
              </Link>

              <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                Customer Details
              </h1>
            </div>

            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                {user?.firstName?.charAt(0)?.toUpperCase() || 'U'}
              </div>

              <div className="hidden sm:block min-w-0">
                <p className="font-medium text-[#0F172A] truncate">
                  {user?.fullName || 'User'}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6">
          <div className="max-w-4xl mx-auto">
            {loading && (
              <p className="text-gray-600 text-center py-8">
                Loading customer...
              </p>
            )}

            {error && (
              <p className="text-red-600 text-center py-8">{error}</p>
            )}

            {!loading && !error && customer && (
              <>
                <div className="card p-4 sm:p-6 md:p-8 mb-6">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold flex-shrink-0">
                      {initials}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] break-words">
                        {customer.name}
                      </h2>
                      <p className="text-gray-600 mt-1 break-words">
                        {customer.company || '—'}
                      </p>

                      <div className="mt-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            customer.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : customer.status === 'Inactive'
                                ? 'bg-gray-100 text-gray-700'
                                : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {customer.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button
                        onClick={() => navigate(`/customers/${id}/edit`)}
                        variant="secondary"
                        className="w-full sm:w-auto"
                      >
                        <Edit className="inline mr-2 w-5 h-5" />
                        Edit
                      </Button>

                      <Button
                        onClick={handleDelete}
                        variant="danger"
                        className="w-full sm:w-auto"
                      >
                        <Trash2 className="inline mr-2 w-5 h-5" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                  <div className="card p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                      Contact Information
                    </h3>

                    <div className="space-y-4">
                      <InfoRow icon={Mail} label="Email" value={customer.email} />
                      <InfoRow icon={Phone} label="Phone" value={customer.phone || '—'} />
                      <InfoRow icon={Building} label="Company" value={customer.company || '—'} />
                    </div>
                  </div>

                  <div className="card p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                      Additional Information
                    </h3>

                    <InfoRow icon={Calendar} label="Created Date" value={createdDate} />
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

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3 min-w-0">
    <Icon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
    <div className="min-w-0">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-[#0F172A] break-words">{value}</p>
    </div>
  </div>
);

export default CustomerDetailsPage;