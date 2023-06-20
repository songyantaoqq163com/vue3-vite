<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div style="border:1px solid red">
    <el-button type="primary">el-main</el-button>
    <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </a>
  <a href="https://vuejs.org/" target="_blank">
    <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
  </a>
  </div>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
