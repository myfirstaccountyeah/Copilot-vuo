import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.plumbercrm.com', // Placeholder API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API calls
export const getCustomers = async () => {
  const response = await apiClient.get('/customers');
  return response.data;
};

export const getCustomerById = async (id: string) => {
  const response = await apiClient.get(`/customers/${id}`);
  return response.data;
};

export const createCustomer = async (customerData: any) => {
  const response = await apiClient.post('/customers', customerData);
  return response.data;
};

export const updateCustomer = async (id: string, customerData: any) => {
  const response = await apiClient.put(`/customers/${id}`, customerData);
  return response.data;
};

export const deleteCustomer = async (id: string) => {
  const response = await apiClient.delete(`/customers/${id}`);
  return response.data;
};

// Add similar functions for jobs, invoices, and other resources as needed

export default {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};