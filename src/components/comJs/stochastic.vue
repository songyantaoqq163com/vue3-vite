<template>
  <p>随机生成(红-黄-绿)60中颜色</p>
  <span
    v-for="(item, index) in colorsData1"
    :key="index"
    class="block_center"
    style="border: 1px solid gray; width: 120px"
    :style="'background:' + item"
  >
    第{{ index + 1 }}个颜色
    <!-- <el-color-picker :model-value="item" show-alpha size="small" /> -->
  </span>
  <p>随机生成60个数字不重复<el-button @click="clickNum">刷新</el-button></p>
  <ol>
    <li v-for="item in colorNum1Data" :key="item.index">
      {{ item }}
    </li>
  </ol>
  <div
    v-for="(item, index) in colorNum1"
    :key="index"
    class="block_center"
    style="border: 1px solid gray; width: 120px"
    :style="'background:' + formatgenerate(item)"
  >
    随机数字{{ item }}
  </div>
</template>
  <script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import colorJson from "../Json/colorJson.json";
import { compare, generateUniqueNumbers, spArray } from "../../js/common1.js";
const colorsData1 = ref([]);
// const colorsData2 = ref(colorJson.colorData1);
const colorNum1 = ref([]);
const colorNum1Data = ref([]);

onMounted(() => {
  colorsData1.value = ColorData(60);

  colorNum1.value = generateUniqueNumbers();

  colorNum1Data.value = spArray(20, colorNum1.value);
});
//随机颜色
function ColorData(num) {
  let index = parseInt(num / 3);
  var lightColor1 = generateGreenShades(index, "#f80404").reverse();
  var lightColor2 = generateGreenShades(index, "#faf608");
  var lightColor3 = generateGreenShades(index, "#00FF00");
  var light = lightColor1.concat(lightColor2, lightColor3);
  return light;
}
function generateGreenShades(count, col) {
  const greenHex = col; // 基本绿色
  const step = 255 / (count - 1); // 每个深度级别的alpha值变化范围
  const greenShades = [];
  for (let i = 0; i < count; i++) {
    const alpha = step * (i + 9);
    const rgba = hexToRgba(greenHex, alpha);
    greenShades.push(rgba);
  }
  return greenShades;
}
function hexToRgba(hex, alpha = 255) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha / 255})`;
}
//刷新随机数字数组
function clickNum() {
  colorNum1.value = generateUniqueNumbers();

  colorNum1Data.value = spArray(20, colorNum1.value);
  console.log("随机数组-排序", colorNum1.value);
}

function formatgenerate(e) {
  let dataA = compare([...colorNum1.value]);
  let B = dataA.indexOf(e);
  if (B !== -1) {
    return colorsData1.value[B];
  }
}
</script>
