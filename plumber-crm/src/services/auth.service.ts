import axios from 'axios';
import { ref } from 'vue';

const API_URL = 'https://api.example.com/auth'; // Placeholder API URL

export const useAuthService = () => {
  const user = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const login = async (email, password) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      user.value = response.data.user;
      localStorage.setItem('user', JSON.stringify(user.value));
    } catch (err) {
      error.value = err.response ? err.response.data.message : 'Login failed';
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    loading.value = true;
    error.value = null;

    try {
      await axios.post(`${API_URL}/logout`);
      user.value = null;
      localStorage.removeItem('user');
    } catch (err) {
      error.value = err.response ? err.response.data.message : 'Logout failed';
    } finally {
      loading.value = false;
    }
  };

  const getUser = () => {
    if (!user.value) {
      const storedUser = localStorage.getItem('user');
      user.value = storedUser ? JSON.parse(storedUser) : null;
    }
    return user.value;
  };

  return {
    user,
    error,
    loading,
    login,
    logout,
    getUser,
  };
};