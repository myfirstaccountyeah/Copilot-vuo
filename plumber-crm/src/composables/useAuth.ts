import { ref } from 'vue';
import { useStore } from 'vuex';
import { login as loginService, logout as logoutService } from '../services/auth.service';

export function useAuth() {
  const store = useStore();
  const isAuthenticated = ref(false);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const login = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await loginService(email, password);
      store.commit('auth/setUser', response.data);
      isAuthenticated.value = true;
    } catch (err) {
      error.value = 'Login failed. Please check your credentials.';
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    loading.value = true;
    error.value = null;

    try {
      await logoutService();
      store.commit('auth/clearUser');
      isAuthenticated.value = false;
    } catch (err) {
      error.value = 'Logout failed. Please try again.';
    } finally {
      loading.value = false;
    }
  };

  return {
    isAuthenticated,
    loading,
    error,
    login,
    logout,
  };
}