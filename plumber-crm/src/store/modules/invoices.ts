import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Invoice } from '@/types/invoice';
import { fetchInvoices, createInvoice, updateInvoice, deleteInvoice } from '@/services/invoices.service';

export const useInvoiceStore = defineStore('invoice', () => {
  const invoices = ref<Invoice[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const loadInvoices = async () => {
    loading.value = true;
    error.value = null;
    try {
      invoices.value = await fetchInvoices();
    } catch (err) {
      error.value = 'Failed to load invoices';
    } finally {
      loading.value = false;
    }
  };

  const addInvoice = async (invoice: Invoice) => {
    loading.value = true;
    error.value = null;
    try {
      const newInvoice = await createInvoice(invoice);
      invoices.value.push(newInvoice);
    } catch (err) {
      error.value = 'Failed to add invoice';
    } finally {
      loading.value = false;
    }
  };

  const editInvoice = async (invoice: Invoice) => {
    loading.value = true;
    error.value = null;
    try {
      const updatedInvoice = await updateInvoice(invoice);
      const index = invoices.value.findIndex(i => i.id === updatedInvoice.id);
      if (index !== -1) {
        invoices.value[index] = updatedInvoice;
      }
    } catch (err) {
      error.value = 'Failed to update invoice';
    } finally {
      loading.value = false;
    }
  };

  const removeInvoice = async (id: number) => {
    loading.value = true;
    error.value = null;
    try {
      await deleteInvoice(id);
      invoices.value = invoices.value.filter(invoice => invoice.id !== id);
    } catch (err) {
      error.value = 'Failed to delete invoice';
    } finally {
      loading.value = false;
    }
  };

  return {
    invoices,
    loading,
    error,
    loadInvoices,
    addInvoice,
    editInvoice,
    removeInvoice,
  };
});