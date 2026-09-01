import React from 'react';

const CustomerTable = ({ customers, onEdit, onDelete, onView }) => {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <table className="min-w-[700px] w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              Customer
            </th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              Email
            </th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              Phone
            </th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              Company
            </th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              Status
            </th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b border-border hover:bg-muted"
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                    {(customer.name || '?')
                      .split(' ')
                      .map((name) => name[0])
                      .join('')}
                  </div>

                  <span className="font-medium text-foreground">
                    {customer.name}
                  </span>
                </div>
              </td>

              <td className="px-4 py-3 text-muted-foreground">
                {customer.email}
              </td>

              <td className="px-4 py-3 text-muted-foreground">
                {customer.phone || '—'}
              </td>

              <td className="px-4 py-3 text-muted-foreground">
                {customer.company || '—'}
              </td>

              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    customer.status === 'Active'
                      ? 'bg-success/15 text-success'
                      : customer.status === 'Inactive'
                        ? 'bg-muted text-muted-foreground'
                        : 'bg-accent text-accent-foreground'
                  }`}
                >
                  {customer.status}
                </span>
              </td>

              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onView(customer.id)}
                    className="rounded-lg p-2 transition-colors hover:bg-muted"
                    title="View"
                    aria-label={`View ${customer.name}`}
                  >
                    👁
                  </button>

                  <button
                    onClick={() => onEdit(customer.id)}
                    className="rounded-lg p-2 transition-colors hover:bg-muted"
                    title="Edit"
                    aria-label={`Edit ${customer.name}`}
                  >
                    ✏
                  </button>

                  <button
                    onClick={() => onDelete(customer.id)}
                    className="rounded-lg p-2 text-destructive transition-colors hover:bg-destructive/10"
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
