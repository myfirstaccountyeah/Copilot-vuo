<template>
  <div class="auth-layout">
    <header>
      <h1 class="text-center text-2xl font-bold">Plumber CRM</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer class="text-center mt-4">
      <p>&copy; 2023 Plumber CRM. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.auth-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>