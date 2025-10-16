<template>
  <div class="invoices">
    <h1 class="text-2xl font-bold mb-4">Invoices</h1>
    <DataTable :data="invoices" :columns="columns" />
    <Modal v-if="showModal" @close="showModal = false">
      <template #header>
        <h2 class="text-lg font-semibold">Invoice Details</h2>
      </template>
      <template #body>
        <div v-if="selectedInvoice">
          <p><strong>ID:</strong> {{ selectedInvoice.id }}</p>
          <p><strong>Customer:</strong> {{ selectedInvoice.customer }}</p>
          <p><strong>Amount:</strong> {{ selectedInvoice.amount }}</p>
          <p><strong>Status:</strong> {{ selectedInvoice.status }}</p>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import DataTable from '@/components/ui/DataTable.vue';
import { useApi } from '@/composables/useApi';

export default defineComponent({
  name: 'Invoices',
  components: {
    DataTable,
  },
  setup() {
    const invoices = ref([]);
    const showModal = ref(false);
    const selectedInvoice = ref(null);
    const { fetchInvoices } = useApi();

    const columns = [
      { title: 'ID', key: 'id' },
      { title: 'Customer', key: 'customer' },
      { title: 'Amount', key: 'amount' },
      { title: 'Status', key: 'status' },
      { title: 'Actions', key: 'actions', render: (invoice) => `<button @click="viewInvoice(${invoice.id})">View</button>` },
    ];

    const viewInvoice = (id: number) => {
      selectedInvoice.value = invoices.value.find(invoice => invoice.id === id);
      showModal.value = true;
    };

    onMounted(async () => {
      invoices.value = await fetchInvoices();
    });

    return {
      invoices,
      showModal,
      selectedInvoice,
      columns,
      viewInvoice,
    };
  },
});
</script>

<style scoped>
.invoices {
  padding: 20px;
}
</style>