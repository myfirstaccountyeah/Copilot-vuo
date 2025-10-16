import axios from 'axios';
import { ref } from 'vue';
import { Job } from '../types/job';

const API_URL = 'https://api.example.com/jobs'; // Placeholder API URL

export const useJobsService = () => {
    const jobs = ref<Job[]>([]);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const fetchJobs = async () => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.get<Job[]>(API_URL);
            jobs.value = response.data;
        } catch (err) {
            error.value = 'Failed to fetch jobs';
        } finally {
            loading.value = false;
        }
    };

    const createJob = async (job: Job) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.post<Job>(API_URL, job);
            jobs.value.push(response.data);
        } catch (err) {
            error.value = 'Failed to create job';
        } finally {
            loading.value = false;
        }
    };

    const updateJob = async (jobId: string, job: Job) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.put<Job>(`${API_URL}/${jobId}`, job);
            const index = jobs.value.findIndex(j => j.id === jobId);
            if (index !== -1) {
                jobs.value[index] = response.data;
            }
        } catch (err) {
            error.value = 'Failed to update job';
        } finally {
            loading.value = false;
        }
    };

    const deleteJob = async (jobId: string) => {
        loading.value = true;
        error.value = null;

        try {
            await axios.delete(`${API_URL}/${jobId}`);
            jobs.value = jobs.value.filter(j => j.id !== jobId);
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
        fetchJobs,
        createJob,
        updateJob,
        deleteJob,
    };
};