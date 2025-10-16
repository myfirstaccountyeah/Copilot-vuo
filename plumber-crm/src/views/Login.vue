<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <form @submit.prevent="handleLogin" class="bg-white p-6 rounded shadow-md w-80">
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
      <FormField
        v-model="email"
        type="email"
        placeholder="Email"
        required
      />
      <FormField
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <Button type="submit" class="w-full mt-4">Login</Button>
      <p v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';
import FormField from '@/components/ui/FormField.vue';
import Button from '@/components/ui/Button.vue';

export default {
  components: {
    FormField,
    Button,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const { login } = useAuth();

    const handleLogin = async () => {
      try {
        await login(email.value, password.value);
      } catch (error) {
        errorMessage.value = 'Invalid email or password';
      }
    };

    return {
      email,
      password,
      errorMessage,
      handleLogin,
    };
  },
};
</script>

<style scoped>
/* Add any specific styles for the Login view here */
</style>