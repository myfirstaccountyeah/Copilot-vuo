import { ref } from 'vue';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Placeholder API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function useApi() {
  const loading = ref(false);
  const error = ref(null);

  const get = async (url: string) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get(url);
      return response.data;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const post = async (url: string, data: any) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await apiClient.post(url, data);
      return response.data;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const put = async (url: string, data: any) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await apiClient.put(url, data);
      return response.data;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const del = async (url: string) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await apiClient.delete(url);
      return response.data;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    get,
    post,
    put,
    del,
  };
}