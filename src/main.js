// @ts-nocheck
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import {createPinia} from 'pinia'
import { Carousel3d } from 'vue3-carousel-3d'
import "vue3-carousel-3d/dist/index.css"

const pinia=createPinia()
const app = createApp(App)
app.use(Carousel3d)
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus,{locale:zhCn})
app.use(router)
app.use(VXETable)
    .mount('#app')
