<script setup>
import Header from './components/Framework/Header.vue'
import Aside from "./components/Framework/Aside.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.el-header {
  border-bottom: 1px solid gray;
  background: #409eff;
  height: 40px!important;
  line-height: 40px;
  color: #fff;
}
.el-main {
  --el-main-padding: 10px!important;
  background: #dcdfe6;
}
</style>
