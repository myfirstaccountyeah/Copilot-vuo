<template>
  <div class="jobs-view">
    <h1 class="text-2xl font-bold mb-4">Jobs</h1>
    <div class="filters mb-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search jobs..."
        class="border p-2 rounded"
      />
      <button @click="fetchJobs" class="ml-2 bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </div>
    <DataTable :data="jobs" :columns="columns" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import DataTable from '@/components/ui/DataTable.vue';
import { fetchJobs } from '@/services/jobs.service';

const searchQuery = ref('');
const jobs = ref([]);
const columns = ref([
  { title: 'Job ID', key: 'id' },
  { title: 'Customer', key: 'customer' },
  { title: 'Status', key: 'status' },
  { title: 'Date', key: 'date' },
]);

const loadJobs = async () => {
  try {
    const response = await fetchJobs();
    jobs.value = response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
};

onMounted(() => {
  loadJobs();
});
</script>

<style scoped>
.jobs-view {
  padding: 20px;
}
</style>