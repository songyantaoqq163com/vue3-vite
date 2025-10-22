<template>
  <el-form-item :label="field.label">
    <el-select v-model="val" style="width:100px">
        <el-option   v-for="o in field.options"
        :key="o.index"
        :label="o.label"
        :value="o.value">

        </el-option>
    </el-select>
  </el-form-item>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({ field: Object, modelValue: Array })

const emit = defineEmits(['update:modelValue'])
const val = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v || [])
})

</script>
