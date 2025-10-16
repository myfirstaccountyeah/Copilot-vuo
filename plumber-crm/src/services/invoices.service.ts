import axios from 'axios';
import { ref } from 'vue';
import { Invoice } from '../types/invoice';

const API_URL = 'https://api.example.com/invoices'; // Placeholder API URL

export const useInvoicesService = () => {
    const invoices = ref<Invoice[]>([]);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const fetchInvoices = async () => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.get<Invoice[]>(API_URL);
            invoices.value = response.data;
        } catch (err) {
            error.value = 'Failed to fetch invoices';
        } finally {
            loading.value = false;
        }
    };

    const createInvoice = async (invoice: Invoice) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.post<Invoice>(API_URL, invoice);
            invoices.value.push(response.data);
        } catch (err) {
            error.value = 'Failed to create invoice';
        } finally {
            loading.value = false;
        }
    };

    const updateInvoice = async (invoice: Invoice) => {
        loading.value = true;
        error.value = null;

        try {
            await axios.put<Invoice>(`${API_URL}/${invoice.id}`, invoice);
            const index = invoices.value.findIndex(i => i.id === invoice.id);
            if (index !== -1) {
                invoices.value[index] = invoice;
            }
        } catch (err) {
            error.value = 'Failed to update invoice';
        } finally {
            loading.value = false;
        }
    };

    const deleteInvoice = async (id: number) => {
        loading.value = true;
        error.value = null;

        try {
            await axios.delete(`${API_URL}/${id}`);
            invoices.value = invoices.value.filter(i => i.id !== id);
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
        fetchInvoices,
        createInvoice,
        updateInvoice,
        deleteInvoice,
    };
};