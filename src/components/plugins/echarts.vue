<template>
  <v-chart :option="option" style="height: 300px"></v-chart>
</template>
  <script setup>
import { ref } from "vue";

const option = ref({
  title: { text: "2025 8月消费额", left: "center" },
  tooltip: {},
  legend:{show:true,left:10},
  xAxis: { type: "category", data: ["花呗", "京东花呗", "美团", "微信"] },
  yAxis: { type: "value" },
  series: [
    {
      name:'消费',
      type: "line",
      show:true,
      label:{
        show:true,
        position:'top'
      },
      data: [1745, 87.8, 118.24, 3500],
    },
  ],
  grid:{
    left:50,
    right:50
  }
});
</script>
