<template>
  <div class="default-layout">
    <Header />
    <div class="flex">
      <Sidebar />
      <main class="flex-1 p-4">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/layout/Header.vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import Footer from '@/components/layout/Footer.vue';
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>