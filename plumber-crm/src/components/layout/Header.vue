<template>
  <header class="bg-blue-600 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">Plumber CRM</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/">Dashboard</router-link></li>
          <li><router-link to="/customers">Customers</router-link></li>
          <li><router-link to="/jobs">Jobs</router-link></li>
          <li><router-link to="/invoices">Invoices</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isLoggedIn = ref(false); // Placeholder for authentication state
</script>

<style scoped>
/* Add any specific styles for the header here */
</style>