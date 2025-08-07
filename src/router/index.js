// @ts-nocheck
import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {path: '/', redirect: '/home'},
    {
        path: '/home',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue'),
        meta: {title: '首页'}
    },{
        path:'/vue3_tabs',
        name:'vue3_tabs',
        component:()=>import('@/components/vue3/vue3_tabs.vue'),
        meta:{title:'vue3'}
    },{
        path:'/vue3_cssStyle',
        name:'vue3_cssStyle',
        component:()=>import('@/components/cssStyle/vue3_cssStyle.vue'),
        meta:{title:'vue3_css1'}
    },{
        path:'/animation/carousel',
        name:'carousel',
        component:()=>import('@/components/animation/carousel.vue'),
        meta:{title:'轮播图'}
    },{
         path:'/animation/vanta',
        name:'vanta',
        component:()=>import('@/components/animation/vanta.vue'),
        meta:{title:'vanta背景'}
    },{
        path:'/js/stochastic',
        name:'stochastic',
        component:()=>import('@/components/comJs/stochastic.vue'),
        meta:{title:'stochastic随机生成'}
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router