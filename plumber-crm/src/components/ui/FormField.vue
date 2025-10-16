<template>
  <div class="form-field">
    <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      :id="id"
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
      @input="$emit('update:modelValue', modelValue)"
    />
    <span v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'FormField',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<'text' | 'email' | 'password'>,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.form-field {
  margin-bottom: 1rem;
}
</style>