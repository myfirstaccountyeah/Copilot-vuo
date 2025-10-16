import axios from 'axios';
import { ref } from 'vue';
import { Customer } from '../types/customer';

const API_URL = 'https://api.example.com/customers'; // Placeholder API URL

export const useCustomersService = () => {
    const customers = ref<Customer[]>([]);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const fetchCustomers = async () => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.get<Customer[]>(API_URL);
            customers.value = response.data;
        } catch (err) {
            error.value = 'Failed to fetch customers';
        } finally {
            loading.value = false;
        }
    };

    const addCustomer = async (customer: Customer) => {
        loading.value = true;
        error.value = null;

        try {
            await axios.post(API_URL, customer);
            await fetchCustomers(); // Refresh the customer list
        } catch (err) {
            error.value = 'Failed to add customer';
        } finally {
            loading.value = false;
        }
    };

    const updateCustomer = async (customer: Customer) => {
        loading.value = true;
        error.value = null;

        try {
            await axios.put(`${API_URL}/${customer.id}`, customer);
            await fetchCustomers(); // Refresh the customer list
        } catch (err) {
            error.value = 'Failed to update customer';
        } finally {
            loading.value = false;
        }
    };

    const deleteCustomer = async (customerId: number) => {
        loading.value = true;
        error.value = null;

        try {
            await axios.delete(`${API_URL}/${customerId}`);
            await fetchCustomers(); // Refresh the customer list
        } catch (err) {
            error.value = 'Failed to delete customer';
        } finally {
            loading.value = false;
        }
    };

    return {
        customers,
        loading,
        error,
        fetchCustomers,
        addCustomer,
        updateCustomer,
        deleteCustomer,
    };
};