const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}

export function getCustomers() {
  return request('/api/customers');
}

export function getCustomerStats() {
  return request('/api/customers/stats');
}

export function getCustomer(id) {
  return request(`/api/customers/${id}`);
}

export function createCustomer(customer) {
  return request('/api/customers', {
    method: 'POST',
    body: JSON.stringify(customer),
  });
}

export function updateCustomer(id, customer) {
  return request(`/api/customers/${id}`, {
    method: 'PUT',
    body: JSON.stringify(customer),
  });
}

export function deleteCustomer(id) {
  return request(`/api/customers/${id}`, {
    method: 'DELETE',
  });
}
