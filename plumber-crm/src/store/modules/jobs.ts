import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Job } from '@/types/job';
import { fetchJobs, createJob, updateJob, deleteJob } from '@/services/jobs.service';

export const useJobsStore = defineStore('jobs', () => {
  const jobs = ref<Job[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const loadJobs = async () => {
    loading.value = true;
    error.value = null;
    try {
      jobs.value = await fetchJobs();
    } catch (err) {
      error.value = 'Failed to load jobs';
    } finally {
      loading.value = false;
    }
  };

  const addJob = async (job: Job) => {
    loading.value = true;
    error.value = null;
    try {
      const newJob = await createJob(job);
      jobs.value.push(newJob);
    } catch (err) {
      error.value = 'Failed to add job';
    } finally {
      loading.value = false;
    }
  };

  const editJob = async (job: Job) => {
    loading.value = true;
    error.value = null;
    try {
      const updatedJob = await updateJob(job);
      const index = jobs.value.findIndex(j => j.id === updatedJob.id);
      if (index !== -1) {
        jobs.value[index] = updatedJob;
      }
    } catch (err) {
      error.value = 'Failed to update job';
    } finally {
      loading.value = false;
    }
  };

  const removeJob = async (jobId: number) => {
    loading.value = true;
    error.value = null;
    try {
      await deleteJob(jobId);
      jobs.value = jobs.value.filter(job => job.id !== jobId);
    } catch (err) {
      error.value = 'Failed to delete job';
    } finally {
      loading.value = false;
    }
  };

  return {
    jobs,
    loading,
    error,
    loadJobs,
    addJob,
    editJob,
    removeJob,
  };
});