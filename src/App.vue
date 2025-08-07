<script setup>
import Header from './components/Framework/Header.vue'
import Aside from "./components/Framework/Aside.vue";
import {computed,watch} from 'vue'

import { useI18n } from 'vue-i18n'
import zhLocale from 'element-plus/es/locale/lang/zh-cn'
import enLocale from 'element-plus/es/locale/lang/en'

const { locale } = useI18n()

const elementLocale = computed(() =>
  locale.value === 'en-US' ? enLocale : zhLocale
)

</script>

<template>
  <div class="common-layout">
    <el-config-provider :locale="elementLocale">
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
            <!-- <el-config-provider :locale="elementLocale">
              <router-view />
            </el-config-provider> -->
        </el-main>
      </el-container>
    </el-container>
    </el-config-provider>
  </div>
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
    height: calc(100vh - 40px)!important;
  overflow: scroll;
}
</style>
