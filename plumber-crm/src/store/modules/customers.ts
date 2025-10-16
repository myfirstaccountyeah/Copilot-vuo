import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Customer } from '@/types/customer';
import { fetchCustomers, fetchCustomerById, createCustomer, updateCustomer, deleteCustomer } from '@/services/customers.service';

export const useCustomersStore = defineStore('customers', () => {
  const customers = ref<Customer[]>([]);
  const customer = ref<Customer | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const loadCustomers = async () => {
    loading.value = true;
    error.value = null;
    try {
      customers.value = await fetchCustomers();
    } catch (err) {
      error.value = 'Failed to load customers';
    } finally {
      loading.value = false;
    }
  };

  const loadCustomer = async (id: string) => {
    loading.value = true;
    error.value = null;
    try {
      customer.value = await fetchCustomerById(id);
    } catch (err) {
      error.value = 'Failed to load customer';
    } finally {
      loading.value = false;
    }
  };

  const addCustomer = async (newCustomer: Customer) => {
    loading.value = true;
    error.value = null;
    try {
      const createdCustomer = await createCustomer(newCustomer);
      customers.value.push(createdCustomer);
    } catch (err) {
      error.value = 'Failed to add customer';
    } finally {
      loading.value = false;
    }
  };

  const editCustomer = async (updatedCustomer: Customer) => {
    loading.value = true;
    error.value = null;
    try {
      const index = customers.value.findIndex(c => c.id === updatedCustomer.id);
      if (index !== -1) {
        customers.value[index] = await updateCustomer(updatedCustomer);
      }
    } catch (err) {
      error.value = 'Failed to update customer';
    } finally {
      loading.value = false;
    }
  };

  const removeCustomer = async (id: string) => {
    loading.value = true;
    error.value = null;
    try {
      await deleteCustomer(id);
      customers.value = customers.value.filter(c => c.id !== id);
    } catch (err) {
      error.value = 'Failed to delete customer';
    } finally {
      loading.value = false;
    }
  };

  return {
    customers,
    customer,
    loading,
    error,
    loadCustomers,
    loadCustomer,
    addCustomer,
    editCustomer,
    removeCustomer,
  };
});