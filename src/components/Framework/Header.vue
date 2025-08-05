<template>
  <div class="flex_bet">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.index">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>

<div class="grid_align">
  
  <span> 
    <el-icon class="helpTips" style="color:red;"><BellFilled /></el-icon>
  </span>
  <span class="margin010">{{ $t('headers.user') }}</span>
 <el-select v-model="language" class="width100" @change="languageChange" >
    <el-option v-for='item in languageList' :key="item.index"
      :label="item.label" :value="item.value"></el-option>
  </el-select>
</div>
 
</div>
</template>
  <script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDataStore } from "../store/store";
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()


const store = useDataStore();
const route = useRoute();
const router = useRouter();
const breadcrumbList = ref([]);
const language=ref('zh-CN')
const languageList=ref([
  {label:'中文',value:'zh-CN'},
  {label:'English',value:'en-US'}
])

function Breadcrumb(data, name, list) {
  let result = null;
  for (let i = 0; i < data.length; i++) {
    if (data[i].url === name) {
      return list ? [...list, data[i]] : [data[i]];
    } else if (data[i].children && Array.isArray(data[i].children)) {
      result = Breadcrumb(
        data[i].children,
        name,
        list ? [...list, data[i]] : data[i]
      );
      if (result) return result;
    }
  }
  return result;
}

function languageChange(e){
  locale.value=e
  localStorage.setItem('lang',e)
}

watch(route, (newRoute, oldRoute) => {
  console.log("面包屑1", newRoute, store.dataArray);
  let Data = Breadcrumb(store.dataArray, newRoute.path, []);
  breadcrumbList.value = Data;
});
watch(
  () => store.dataArray,
  (newValue, oldValue) => {
    console.log("面包屑2", newValue);
    let Data = Breadcrumb(newValue, route.path, []);
    breadcrumbList.value = Data;
  }
);
</script>
  <style>
.el-breadcrumb {
  height: 40px !important;
  line-height: 40px !important;
}
.el-breadcrumb .el-breadcrumb__inner {
  color: #fff !important;
}
.el-breadcrumb .el-breadcrumb__separator {
  color: #fff !important;
}


.helpTips{
  animation-name: upAnimation;
    transform-origin: center top;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-delay: .5s;
}
@keyframes upAnimation
{
    0% {
        transform: rotate(0deg);
        transition-timing-function: cubic-bezier(0.215,.61,.355,1);
    }
    10% {
        transform: rotate(-12deg);
        transition-timing-function: cubic-bezier(0.215,.61,.355,1);
    }
    20% {
        transform: rotate(12deg);
        transition-timing-function: cubic-bezier(0.215,.61,.355,1);
    }
    28% {
        transform: rotate(-10deg);
        transition-timing-function: cubic-bezier(0.215,.61,.355,1);
    }
    36% {
        transform: rotate(10deg);
        transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
    }
    42% {
        transform: rotate(-8deg);
        transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
    }
    48% {
        transform: rotate(8deg);
        transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
    }
    52% {
        transform: rotate(-4deg);
        transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
    }
    56% {
        transform: rotate(4deg);
        transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
    }
    60% {
        transform: rotate(0deg);
        transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
    }
    100% {
        transform: rotate(0deg);
        transition-timing-function: cubic-bezier(0.215,.61,.355,1);
    }
}

</style>
