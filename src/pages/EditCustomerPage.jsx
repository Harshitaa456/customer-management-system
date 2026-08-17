import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Menu, ArrowLeft } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';
import Input from '../components/Input';
import { getCustomer, updateCustomer } from '../api/customers';

const EditCustomerPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    status: 'Active',
  });

  useEffect(() => {
    const loadCustomer = async () => {
      try {
        setLoading(true);
        setError('');
        const customer = await getCustomer(id);
        setFormData({
          fullName: customer.name || '',
          email: customer.email || '',
          phone: customer.phone || '',
          company: customer.company || '',
          status: customer.status || 'Active',
        });
      } catch (err) {
        setError(err.message || 'Could not load customer');
      } finally {
        setLoading(false);
      }
    };

    loadCustomer();
  }, [id]);

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
      await updateCustomer(id, {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        status: formData.status,
      });
      navigate(`/customers/${id}`);
    } catch (err) {
      setError(err.message || 'Could not update customer');
    } finally {
      setSaving(false);
    }
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
              <Link to="/customers" className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-2xl font-bold text-[#0F172A]">Edit Customer</h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <div className="max-w-2xl mx-auto">
            <div className="card p-8">
              {loading && <p className="text-gray-600 text-center py-8">Loading customer...</p>}
              {!loading && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <p className="text-red-600 text-sm">{error}</p>}

                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />

                  <Input
                    label="Email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    maxLength={10}
                  />

                  <Input
                    label="Company Name"
                    type="text"
                    placeholder="Acme Inc"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#0F172A]">Customer Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <Button type="submit" variant="primary" disabled={saving}>
                      {saving ? 'Updating...' : 'Update Customer'}
                    </Button>
                    <Link to={`/customers/${id}`}>
                      <Button type="button" variant="secondary">
                        Cancel
                      </Button>
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditCustomerPage;
