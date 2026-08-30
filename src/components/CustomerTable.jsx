import React from 'react';

const CustomerTable = ({ customers, onEdit, onDelete, onView }) => {
  return (
<div className="overflow-x-auto -mx-4 sm:mx-0">
<table className="min-w-[700px] w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Customer</th>
            <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Email</th>
            <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Phone</th>
            <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Company</th>
            <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Status</th>
            <th className="text-left py-3 px-4 font-semibold text-[#0F172A]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {(customer.name || '?')
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <span className="font-medium text-[#0F172A]">{customer.name}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-gray-600">{customer.email}</td>
              <td className="py-3 px-4 text-gray-600">{customer.phone || '—'}</td>
              <td className="py-3 px-4 text-gray-600">{customer.company || '—'}</td>
              <td className="py-3 px-4">
                <span className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${customer.status === 'Active' ? 'bg-green-100 text-green-700' : 
                    customer.status === 'Inactive' ? 'bg-gray-100 text-gray-700' : 
                    'bg-yellow-100 text-yellow-700'}
                `}>
                  {customer.status}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onView(customer.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="View"
                  >
                    👁
                  </button>
                  <button
                    onClick={() => onEdit(customer.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Edit"
                  >
                    ✏
                  </button>
                  <button
                    onClick={() => onDelete(customer.id)}
                    className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                    title="Delete"
                  >
                    🗑
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
