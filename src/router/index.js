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
        component:()=>import('@/components/vue3/vue3_cssStyle.vue'),
        meta:{title:'vue3_css1'}
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router