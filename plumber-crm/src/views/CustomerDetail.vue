<template>
  <div class="customer-detail">
    <h1 class="text-2xl font-bold mb-4">Customer Detail</h1>
    <div v-if="customer">
      <h2 class="text-xl font-semibold">{{ customer.name }}</h2>
      <p>Email: {{ customer.email }}</p>
      <p>Phone: {{ customer.phone }}</p>
      <p>Address: {{ customer.address }}</p>
      <h3 class="mt-4">Jobs</h3>
      <ul>
        <li v-for="job in customer.jobs" :key="job.id">
          {{ job.title }} - {{ job.status }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading customer details...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchCustomerById } from '@/services/customers.service';

const route = useRoute();
const customer = ref(null);

const loadCustomer = async () => {
  const customerId = route.params.id;
  customer.value = await fetchCustomerById(customerId);
};

onMounted(loadCustomer);
</script>

<style scoped>
.customer-detail {
  padding: 20px;
}
</style>