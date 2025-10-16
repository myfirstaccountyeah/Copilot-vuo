<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr class="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th v-for="header in headers" :key="header" class="py-3 px-6 text-left">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr v-for="(item, index) in items" :key="index" class="border-b border-gray-200 hover:bg-gray-100">
          <td v-for="header in headers" :key="header" class="py-3 px-6 text-left">
            {{ item[header] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'DataTable',
  props: {
    headers: {
      type: Array as PropType<string[]>,
      required: true,
    },
    items: {
      type: Array as PropType<Record<string, any>[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Add any specific styles for the DataTable component here */
</style>