import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Menu, ArrowLeft, Edit, Trash2, Mail, Phone, Building, MapPin, Calendar } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';

const CustomerDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy customer data
  const customer = {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    phone: '+1 234 567 8901',
    company: 'TechCorp',
    address: '123 Innovation Drive, San Francisco, CA 94102',
    notes: 'Key decision maker. Prefers email communication. Interested in enterprise solutions.',
    status: 'Active',
    createdAt: '2024-01-15'
  };

  const handleEdit = () => {
    navigate(`/customers/${id}/edit`);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      console.log('Delete customer:', id);
      navigate('/customers');
    }
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
              <Link to="/customers" className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-2xl font-bold text-[#0F172A]">Customer Details</h1>
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
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <div className="card p-8 mb-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                  {customer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-[#0F172A]">{customer.name}</h2>
                  <p className="text-gray-600 mt-1">{customer.company}</p>
                  <div className="mt-3">
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${customer.status === 'Active' ? 'bg-green-100 text-green-700' : 
                        customer.status === 'Inactive' ? 'bg-gray-100 text-gray-700' : 
                        'bg-yellow-100 text-yellow-700'}
                    `}>
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

            {/* Details Grid */}
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
                      <p className="text-[#0F172A]">{customer.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Company</p>
                      <p className="text-[#0F172A]">{customer.company}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Address</p>
                      <p className="text-[#0F172A]">{customer.address}</p>
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
                      <p className="text-[#0F172A]">{customer.createdAt}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Notes</p>
                    <p className="text-[#0F172A] bg-gray-50 p-4 rounded-lg">
                      {customer.notes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
