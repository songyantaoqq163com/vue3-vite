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
        path:'/rests_tabs',
        name:'rests_tabs',
        component:()=>import('@/components/rests/rests_tabs.vue'),
        meta:{title:'rests_tabs'}
    },{
        path:'/rests_table',
        name:'rests_table',
        component:()=>import('@/components/rests/rests_table.vue'),
        meta:{title:'rests_table'}
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
    },{
        path:'/an/echarts',
        name:'echarts',
        component:()=>import('@/components/plugins/echarts.vue'),
        meta:{title:'echarts绘图'}
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router