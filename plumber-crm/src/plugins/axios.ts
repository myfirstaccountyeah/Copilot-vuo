import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.plumbercrm.com', // Placeholder API URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add any custom logic before sending the request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Handle response data
    return response.data;
  },
  (error) => {
    // Handle error response
    return Promise.reject(error);
  }
);

export default apiClient;