import React from 'react';

const CustomerTable = ({ customers, onEdit, onDelete, onView }) => {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <table className="min-w-[700px] w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 text-left font-semibold text-[#0F172A]">
              Customer
            </th>
            <th className="px-4 py-3 text-left font-semibold text-[#0F172A]">
              Email
            </th>
            <th className="px-4 py-3 text-left font-semibold text-[#0F172A]">
              Phone
            </th>
            <th className="px-4 py-3 text-left font-semibold text-[#0F172A]">
              Company
            </th>
            <th className="px-4 py-3 text-left font-semibold text-[#0F172A]">
              Status
            </th>
            <th className="px-4 py-3 text-left font-semibold text-[#0F172A]">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-white">
                    {(customer.name || '?')
                      .split(' ')
                      .map((name) => name[0])
                      .join('')}
                  </div>

                  <span className="font-medium text-[#0F172A]">
                    {customer.name}
                  </span>
                </div>
              </td>

              <td className="px-4 py-3 text-gray-600">
                {customer.email}
              </td>

              <td className="px-4 py-3 text-gray-600">
                {customer.phone || '—'}
              </td>

              <td className="px-4 py-3 text-gray-600">
                {customer.company || '—'}
              </td>

              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    customer.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : customer.status === 'Inactive'
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {customer.status}
                </span>
              </td>

              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onView(customer.id)}
                    className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                    title="View"
                    aria-label={`View ${customer.name}`}
                  >
                    👁
                  </button>

                  <button
                    onClick={() => onEdit(customer.id)}
                    className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                    title="Edit"
                    aria-label={`Edit ${customer.name}`}
                  >
                    ✏
                  </button>

                  <button
                    onClick={() => onDelete(customer.id)}
                    className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-100"
                    title="Delete"
                    aria-label={`Delete ${customer.name}`}
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