<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>Plumber CRM</h2>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/customers">Customers</router-link>
        </li>
        <li>
          <router-link to="/jobs">Jobs</router-link>
        </li>
        <li>
          <router-link to="/invoices">Invoices</router-link>
        </li>
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({});
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  margin-bottom: 20px;
}

.sidebar-nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar-nav li {
  margin: 10px 0;
}

.sidebar-nav a {
  text-decoration: none;
  color: #007bff;
}

.sidebar-nav a:hover {
  text-decoration: underline;
}
</style>