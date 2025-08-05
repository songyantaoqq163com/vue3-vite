<template>
  <ol>
    <li>npm i three # WebGL 渲染库</li>
    <li>npm i vanta # Vanta.js 核心</li>
  </ol>

  <div ref="vantaRef" class="vanta-bg"></div>
  <div ref="vantaRef1" class="vanta-bg"></div>
  <div ref="vantaRef2" class="vanta-bg"></div>
  <div ref="vantaRef3" class="vanta-bg"></div>
  <div ref="vantaRef4" class="vanta-bg"></div>
</template>
  <script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
// import WAVES from 'vanta/src/vanta.waves'
// import fog from "vanta/src/vanta.fog";
import ripple from "vanta/src/vanta.ripple";
import globe from "vanta/src/vanta.globe";
import clouds from "vanta/src/vanta.clouds";
import halo from "vanta/src/vanta.halo";
import net from "vanta/src/vanta.net";

const vantaRef = ref(null);
const vantaRef1 = ref(null);
const vantaRef2 = ref(null);
const vantaRef3=ref(null);
const vantaRef4=ref(null);
let vantaEffect = null;
let vantaEffect1 = null;
let vantaEffect2 = null;
let vantaEffect3 =null;
let vantaEffect4 =null;

onMounted(() => {
  vantaEffect = globe(RefFunction(vantaRef.value));
  vantaEffect1 = ripple(RefFunction(vantaRef1.value));
  vantaEffect2 = clouds(RefFunction(vantaRef2.value));
   vantaEffect3= halo(RefFunction(vantaRef3.value));
   vantaEffect4= net(RefFunction(vantaRef4.value));
});
function RefFunction(key) {
  return {
    el: key ? key : vantaRef.value, // 容器元素
    THREE: THREE,
    // 以下为可选参数，可在 https://vantajs.com 实时调试
    color: 0x3a7bd5,
    waveHeight: 15,
    shininess: 30,
    waveSpeed: 0.75,
    zoom: 0.75,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
  };
}

onBeforeUnmount(() => {
  // 释放资源，防止内存泄漏
   if (vantaEffect) vantaEffect.destroy();
  if (vantaEffect1) vantaEffect1.destroy();
   if (vantaEffect2) vantaEffect2.destroy();
     if (vantaEffect3) vantaEffect3.destroy();
      if (vantaEffect4) vantaEffect4.destroy();
});
</script>
  <style scoped>
.vanta-bg {
  height: 300px;
}
</style>
