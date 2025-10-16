<template>
  <div class="modal-overlay" v-if="isVisible" @click.self="closeModal">
    <div class="modal-content">
      <header class="modal-header">
        <h2>{{ title }}</h2>
        <button class="close-button" @click="closeModal">×</button>
      </header>
      <main class="modal-body">
        <slot></slot>
      </main>
      <footer class="modal-footer">
        <button class="btn btn-primary" @click="confirm">Confirm</button>
        <button class="btn btn-secondary" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    title: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue', 'confirm'],
  setup(props, { emit }) {
    const isVisible = ref(props.modelValue);

    const closeModal = () => {
      emit('update:modelValue', false);
    };

    const confirm = () => {
      emit('confirm');
      closeModal();
    };

    return {
      isVisible,
      closeModal,
      confirm,
    };
  },
  watch: {
    modelValue(newValue) {
      this.isVisible = newValue;
    },
  },
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  margin-left: 10px;
}
</style>