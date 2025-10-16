import { defineStore } from 'pinia';
import { ref } from 'vue';
import { login as loginApi, logout as logoutApi } from '@/services/auth.service';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = ref(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await loginApi(email, password);
      user.value = response.data.user;
      isAuthenticated.value = true;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
      user.value = null;
      isAuthenticated.value = false;
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
});