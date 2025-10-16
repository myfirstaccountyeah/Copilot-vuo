<template>
  <div class="job-detail">
    <h1 class="text-2xl font-bold mb-4">Job Detail</h1>
    <div v-if="job">
      <h2 class="text-xl">Job ID: {{ job.id }}</h2>
      <p><strong>Customer:</strong> {{ job.customerName }}</p>
      <p><strong>Status:</strong> {{ job.status }}</p>
      <p><strong>Description:</strong> {{ job.description }}</p>
      <p><strong>Scheduled Date:</strong> {{ job.scheduledDate }}</p>
      <p><strong>Notes:</strong> {{ job.notes }}</p>
      <button @click="editJob" class="btn btn-primary">Edit Job</button>
      <button @click="deleteJob" class="btn btn-danger">Delete Job</button>
    </div>
    <div v-else>
      <p>Loading job details...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchJobById } from '@/services/jobs.service';
import { Job } from '@/types/job';

const route = useRoute();
const job = ref<Job | null>(null);

const loadJobDetails = async () => {
  const jobId = route.params.id as string;
  job.value = await fetchJobById(jobId);
};

const editJob = () => {
  // Logic to navigate to the edit job page
};

const deleteJob = async () => {
  // Logic to delete the job
};

onMounted(loadJobDetails);
</script>

<style scoped>
.job-detail {
  padding: 20px;
}
</style>