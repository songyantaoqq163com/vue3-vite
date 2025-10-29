<template>
  <div id="app">
     <el-descriptions title="vue3-carousel-3d">
        <el-descriptions-item label="安装" :span="3">npm install vue3-carousel-3d</el-descriptions-item>
        <el-descriptions-item label="事件1">@before-slide-change/切换前触发，返回 /(oldIndex, newIndex)</el-descriptions-item>
        <el-descriptions-item label="事件2">@after-slide-change/切换后触发，返回 /(newIndex)</el-descriptions-item>
        <el-descriptions-item label="事件3">@last-slide/到达最后一张时触发</el-descriptions-item>
        <el-descriptions-item label="属性1">autoplay-timeout/	Number	3000	/自动播放间隔时间（毫秒)</el-descriptions-item>
        <el-descriptions-item label="属性2">autoplay	/Boolean	false	/是否自动播放</el-descriptions-item>
        <el-descriptions-item label="属性3">perspective	Number	/35	/3D 视角角度</el-descriptions-item>
        <el-descriptions-item label="属性4">clickable/	Boolean	true	/是否可点击 slide 切换</el-descriptions-item>
        <el-descriptions-item label="属性5">display	/Number	5	/同时显示的 slide 数量</el-descriptions-item>
        <el-descriptions-item label="属性5">controlsVisible/	Boolean	false	/是否显示左右箭头</el-descriptions-item>
     </el-descriptions>

      <carousel-3d  :autoplay="false" :clickable="true" :controlsVisible="true"
       :autoplay-timeout="3000" :perspective="45" :space="400">
            <slide v-for="(item, i) in lists" :key="i" :index="i">
            <img :src="item" alt="slide" style="height: 100%;" />
            </slide>
        </carousel-3d>


  <!-- 轮播1 -->
   <div class="carousel-3d-three">
    <button class="nav left" @click="rotateLeft">&lt;</button>
    <!-- 舞台：永远只包含 3 张图 -->
    <div class="stage" :style="{ transform: `rotateY(${rotateY}deg)` }">
      <figure
        v-for="(img, i) in imgs"
        :key="i"
        class="slide"
        :style="slideStyle(i)"
      >
        <img :src="img" />
      </figure>
    </div>

    <button class="nav right" @click="rotateRight">&gt;</button>
  </div>
  </div>
</template>
  <script setup>
   import { Carousel3d, Slide } from 'vue3-carousel-3d'
   import {ref} from 'vue'

   import img from '@/assets/cvd.png'
   import img1 from '@/assets/pvd.png'
  import img2 from '@/assets/print.png'
   let lists=[img,img1,img2]

// 轮播1
   const imgs = ref([img, img1, img2]);
/* 2. 舞台当前旋转角度（初始 0°） */
const rotateY = ref(0);
const step = 120; // 360 / 3 = 120°

/* 3. 计算单张卡片位置（固定，不随索引变） */
const slideStyle = (i) => ({
  transform: `rotateY(${i * step}deg) translateZ(260px)`,
});

/* 4. 左右旋转舞台（带动 3 张图一起动） */
const rotateLeft = () => (rotateY.value -= step);
const rotateRight = () => (rotateY.value += step);
  </script>
<style scoped>
.carousel-3d-three {
  margin-top: 80px;
  position: relative;
  width: 100%;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

.stage {
  position: relative;
  width: 600px;
  height: 360px;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
}
.nav.left {
  left: 20px;
}
.nav.right {
  right: 20px;
}
.nav:hover {
  background: rgba(0, 0, 0, 0.7);
}
</style>