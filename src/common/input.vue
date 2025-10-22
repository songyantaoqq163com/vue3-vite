<template>
  <el-form-item :label="field.label">
    <el-input
      v-model="val"
      :placeholder="field.placeholder"
      clearable
      style="width: 200px"
    />
  </el-form-item>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ field: Object, modelValue: String })
const emit = defineEmits(['update:modelValue'])
const val = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v)
})
</script>