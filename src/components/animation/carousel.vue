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

      <carousel-3d :autoplay="false" :clickable="true" :controlsVisible="true"
       :autoplay-timeout="3000" :perspective="45" :space="400">
            <slide v-for="(item, i) in lists" :key="i" :index="i">
            <img :src="item" alt="slide" style="height: 100%;" />
            </slide>
        </carousel-3d>
  </div>
</template>
  <script setup>
   import { Carousel3d, Slide } from 'vue3-carousel-3d'
   import {ref} from 'vue'

   import img from '@/assets/cvd.png'
    import img1 from '@/assets/pvd.png'
    import img2 from '@/assets/print.png'
   let lists=[img,img1,img2]
  </script>
