<template>
  <div class="dashboard">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white shadow rounded p-4">
        <h2 class="font-semibold">Total Customers</h2>
        <p class="text-xl">{{ totalCustomers }}</p>
      </div>
      <div class="bg-white shadow rounded p-4">
        <h2 class="font-semibold">Total Jobs</h2>
        <p class="text-xl">{{ totalJobs }}</p>
      </div>
      <div class="bg-white shadow rounded p-4">
        <h2 class="font-semibold">Total Invoices</h2>
        <p class="text-xl">{{ totalInvoices }}</p>
      </div>
    </div>
    <div class="mt-6">
      <h2 class="text-xl font-semibold">Recent Jobs</h2>
      <DataTable :data="recentJobs" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import DataTable from '@/components/ui/DataTable.vue';
import { fetchDashboardData } from '@/services/api';

const totalCustomers = ref(0);
const totalJobs = ref(0);
const totalInvoices = ref(0);
const recentJobs = ref([]);

const loadDashboardData = async () => {
  const data = await fetchDashboardData();
  totalCustomers.value = data.totalCustomers;
  totalJobs.value = data.totalJobs;
  totalInvoices.value = data.totalInvoices;
  recentJobs.value = data.recentJobs;
};

onMounted(loadDashboardData);
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
</style>