<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="menu_top">{{$t('asides.asideName')}}</div>
        <el-menu
          :default-active=defaultValue
          class="menu_left"
          unique-opened=true
          router
          @select="handleSelect"
        >
          <menutree :data="menu_data"></menutree>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref ,onMounted,getCurrentInstance} from "vue";
import menutree from "./menutree.vue";
import {useDataStore} from '../store/store'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const {Proxy}=getCurrentInstance()
const store=useDataStore()
const { t } = useI18n()
const menu_data =  computed(()=>[
  {
    id:'0',
    name:t('asides.asideIndex'),
    url:'/home'
  },
  {
    id: "1",
    name: t('asides.asideElse'),
    children: [
      {
        id: "1-1",
        name: "知识点",
        url: "/rests_tabs",
      },
      {
        id:'1-2',
        name:'el-table',
        url:'/rests_table'
      }
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
    name: t('asides.asideCartoon'),
    children:[
      {
        id:"3-1",
        name:"轮播图",
        url:"/animation/carousel"
      },{
        id:"3-2",
        name:'Vanta.js',
        url:"/animation/vanta"
      }
    ]
  },{
    id:'4',
    name:'Js',
    children:[
      {
        id:'4-1',
        name:'随机生成',
        url:'/js/stochastic'
      }
    ]
  },{
    id:'5',
    name:t('asides.asideEcharts'),
    children:[
      {
        id:'5-1',
        name:'echarts',
        url:'/an/echarts'
      }
    ]
  }
]);
const defaultValue=ref('0')

const fetchData=async()=>{
   store.increment(menu_data.value);
}
onMounted(fetchData)

const fullValue=computed(()=>{return sessionStorage.getItem('menu_index')})
defaultValue.value=fullValue.value

function handleSelect(row){
  sessionStorage.setItem('menu_index',row)
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