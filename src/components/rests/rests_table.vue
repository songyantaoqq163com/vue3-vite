<template>
  <div id="app">
    <p>//动态渲染条件</p>

    <el-form ref="form" :model="payload" size="small" inline>
      <!-- @submit.native.prevent="handleQuery" -->
      <!-- 动态渲染每个条件 -->
      <component
        v-for="f in fields"
        :key="f.key"
        :is="map[f.type]"
        :field="f"
        v-model="payload[f.key]"
      />
    </el-form>
  </div>
</template>
  <script setup>
//   rests_table
import {
  ref,
  onMounted,
  getCurrentInstance,
  defineAsyncComponent,
  reactive,
} from "vue";
import { table_restsData } from "../Json/tableJson.json";
// import { daterange, radio, checkbox, input } from '../../common'
import daterange from "../../common/daterange.vue";
import radio from "../../common/radio.vue";
import checkbox from "../../common/checkbox.vue";
import input from "../../common/input.vue";
import select from "../../common/select.vue";

const map = {
  input: input,
  radio: radio,
  checkbox: checkbox,
  daterange: daterange,
  select: select,
};
const fields = table_restsData;

const payload = reactive(
  fields.reduce((acc, f) => {
    acc[f.key] = f.default ?? null; // 用配置里的默认值
    return acc;
  }, {})
);
console.log(12, fields, payload, map);


function handleQuery() {
  // 把 payload 发给父组件或直接调接口
  console.log(35);
}
</script>
