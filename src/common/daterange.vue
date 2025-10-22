<template>
  <el-form-item :label="field.label">
    <el-date-picker
      v-model="val"
      type="daterange"
      range-separator="至"
      start-placeholder="开始"
      end-placeholder="结束"
      value-format="YYYY-MM-DD"
      style="width: 240px"
    />
  </el-form-item>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ field: Object, modelValue: Array })
const emit = defineEmits(['update:modelValue'])
const val = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v)
})
</script>