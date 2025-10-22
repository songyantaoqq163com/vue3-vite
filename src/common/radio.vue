<template>
  <el-form-item :label="field.label">
    <el-radio-group v-model="val">
      <el-radio
        v-for="o in field.options"
        :key="o.value"
        :label="o.value"
      >{{ o.label }}</el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ field: Object, modelValue: [String, Number] })
const emit = defineEmits(['update:modelValue'])
const val = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v)
})
</script>