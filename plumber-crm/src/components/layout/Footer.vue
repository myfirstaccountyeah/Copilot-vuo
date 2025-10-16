<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto text-center">
      <p>&copy; {{ currentYear }} Plumber CRM. All rights reserved.</p>
      <p>
        <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a> |
        <a href="#" class="text-gray-400 hover:text-white">Terms of Service</a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>