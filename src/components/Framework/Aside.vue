<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="menu_top">菜单目录</div>
        <el-menu
          default-active="0"
          class="menu_left"
          unique-opened=true
          router
          @open="handleOpen"
          @close="handleClose"
        >
          <menutree :data="menu_data"></menutree>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref ,onMounted} from "vue";
import menutree from "./menutree.vue";
import {useDataStore} from '../store/store'

const store=useDataStore()
const menu_data = ref([
  {
    id:'0',
    name:'首页',
    url:'/home'
  },
  {
    id: "1",
    name: "其他",
    children: [
      {
        id: "1-1",
        name: "知识点",
        url: "/vue3_tabs",
      },
    ],
  },
  {
    id: "2",
    name: "Css",
    children: [
      {
        id: "2-1",
        name: "样式布局1",
        url: "/vue3_cssStyle",
      },
    ],
  },
  {
    id:"3",
    name:"动画",
    children:[
      {
        id:"3-1",
        name:"轮播图",
        url:"/animation/carousel"
      }
    ]
  }
]);


const fetchData=async()=>{
   store.increment(menu_data.value);
}
onMounted(fetchData)

function handleOpen(row) {
  console.log(10,);
}
function handleClose(row) {
  console.log(11, row);
}
</script>

<style scoped>
.menu_top {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background:linear-gradient(to right, #080808 0%, #59a7f5 100%);
  color: #fff;
}
.menu_left {
  height: calc(100vh - 40px);
  /* background: #080808; */
}
.el-menu-item {
  height: 35px !important;
  line-height: 35px !important;
}
.el-sub-menu__title {
  height: 35px !important;
  line-height: 35px !important;
}
</style>