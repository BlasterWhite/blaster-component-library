<template>
  <button class="my-button" @click="increment" :style="{background: config.primaryColor}">→ {{ count }} ←</button>
</template>

<script lang="ts" setup>
import { Config } from '../types.js'
import {inject, ref} from 'vue'

const count = ref(0);
const increment = () => {
  count.value++
}
const config: Config =  inject('config');
</script>

<style>
button.my-button {
  padding: 8px 16px;
  color: white;
  border-radius: 16px;
}
</style>
