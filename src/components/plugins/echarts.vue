<template>
  <p>消费总额:{{ total }}</p>
  <v-chart :option="option" style="height: 300px" :loading="loading"></v-chart>
</template>
  <script setup>
import { ref, onMounted } from "vue";

const arr = ref([1745, 87.8, 118.24, 3000, 1200]);
const loading = ref(false);
const option = ref({});
const total = ref("");

onMounted(() => {
  options();
});

function options() {
  loading.value = true;
  total.value = arr.value.reduce((a, b) => a + b, 0);

  option.value = {
    title: { text: "2025 8月消费额", left: "center" },
    tooltip: {},
    legend: { show: true, left: 10 },
    xAxis: {
      type: "category",
      data: ["花呗", "京东花呗", "美团", "微信", "拼多多"],
    },
    yAxis: { type: "value" },
    series: [
      {
        name: "消费",
        type: "line",
        show: true,
        label: {
          show: true,
          position: "top",
        },
        data: arr.value,
      },
    ],
    grid: {
      left: 50,
      right: 50,
    },
  };
  loading.value = false;
}
</script>
