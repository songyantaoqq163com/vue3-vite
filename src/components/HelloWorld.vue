<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <el-button type="primary">欢迎来到vite的世界</el-button>
  </div>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
