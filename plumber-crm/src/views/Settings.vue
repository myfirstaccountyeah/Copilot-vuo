<template>
  <div class="settings">
    <h1 class="text-2xl font-bold mb-4">Settings</h1>
    <form @submit.prevent="updateSettings">
      <div class="mb-4">
        <label for="companyName" class="block text-sm font-medium text-gray-700">Company Name</label>
        <input
          type="text"
          id="companyName"
          v-model="settings.companyName"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter your company name"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="settings.email"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter your email"
        />
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          id="phone"
          v-model="settings.phone"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Enter your phone number"
        />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Save Settings</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useApi } from '@/composables/useApi';

export default defineComponent({
  name: 'Settings',
  setup() {
    const api = useApi();
    const settings = ref({
      companyName: '',
      email: '',
      phone: ''
    });

    const updateSettings = async () => {
      try {
        await api.post('/settings', settings.value);
        alert('Settings updated successfully!');
      } catch (error) {
        console.error('Error updating settings:', error);
        alert('Failed to update settings.');
      }
    };

    return {
      settings,
      updateSettings
    };
  }
});
</script>

<style scoped>
.settings {
  max-width: 600px;
  margin: auto;
}
</style>