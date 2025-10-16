<template>
  <div class="customers-view">
    <h1 class="text-2xl font-bold mb-4">Customers</h1>
    <div class="search-bar mb-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search customers..."
        class="border rounded p-2 w-full"
      />
    </div>
    <DataTable :data="filteredCustomers" :columns="columns" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import DataTable from '@/components/ui/DataTable.vue';
import { useApi } from '@/composables/useApi';
import { Customer } from '@/types/customer';

const searchQuery = ref('');
const customers = ref<Customer[]>([]);

const { fetchCustomers } = useApi();

const fetchData = async () => {
  customers.value = await fetchCustomers();
};

fetchData();

const filteredCustomers = computed(() => {
  return customers.value.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const columns = [
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Phone', key: 'phone' },
];
</script>

<style scoped>
.customers-view {
  padding: 20px;
}
</style>