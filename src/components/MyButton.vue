<template>
  <button @click="increment">{{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
</script>

<style scoped>
button {
  padding: 8px 16px;
  background-color: #3490dc;
  color: white;
  border-radius: 4px;
}
</style>
