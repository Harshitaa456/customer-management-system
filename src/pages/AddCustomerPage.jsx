import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ArrowLeft } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';
import Button from '../components/Button';
import Input from '../components/Input';
import { createCustomer } from '../api/customers';

const AddCustomerPage = () => {
  const { user } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    status: 'Active',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (formData.phone && phoneDigits.length !== 10) {
      setError('Phone number must be exactly 10 digits');
      setSaving(false);
      return;
    }

    try {
      await createCustomer({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        status: formData.status,
      });
      navigate('/customers');
    } catch (err) {
      setError(err.message || 'Could not create customer');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

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

              <Link to="/customers" className="p-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-hover transition-all duration-200 ease-smooth hover:shadow-soft">
                <ArrowLeft className="w-6 h-6" />
              </Link>

              <h1 className="text-2xl font-bold text-sidebar-foreground">
                Add New Customer
              </h1>
            </div>

            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 bg-sidebar-active rounded-full flex items-center justify-center text-sidebar-foreground font-semibold">
                {user?.firstName?.charAt(0)?.toUpperCase() || 'U'}
              </div>

              <div className="hidden sm:block min-w-0">
                <p className="font-medium text-sidebar-foreground truncate">
                  {user?.fullName || 'User'}
                </p>
                <p className="text-sm text-sidebar-foreground/80 truncate">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>
        </AppHeader>

        <main className="flex-1 p-4 sm:p-6">
          <div className="max-w-2xl mx-auto">
            <div className="card p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <p className="text-destructive text-sm">{error}</p>}

                <Input
                  label="Full Name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  maxLength={10}
                />

                <Input
                  label="Company Name"
                  type="text"
                  placeholder="Acme Inc"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Customer Status
                  </label>

                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-border bg-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                  >
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={saving}
                    className="w-full sm:w-auto"
                  >
                    {saving ? 'Saving...' : 'Save Customer'}
                  </Button>

                  <Link to="/customers" className="w-full sm:w-auto">
                    <Button
                      type="button"
                      variant="secondary"
                      className="w-full sm:w-auto"
                    >
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddCustomerPage;