<template>
    <div class="menutree">
        <label :key="menu.index" v-for="menu in data">
            <el-sub-menu :index="String(menu.id)" :route="menu.url" v-if="menu.children">
                <template #title>
                     <el-icon><Grid /></el-icon>
                    <span>{{menu.name}}</span>
                </template>
                <label>
                    <menutree :data="menu.children"></menutree>
                </label>
            </el-sub-menu>
            <el-menu-item :index="String(menu.id)" :route="menu.url" v-else>
                <el-icon><MagicStick /></el-icon>
                <span slot="title" ref="ent">
                        {{menu.name}}
                    </span>
            </el-menu-item>
        </label>
    </div>
</template>

<script>
    import {defineComponent} from 'vue'
    // import menutree from './menutree.vue'
    export default defineComponent({
        name: "menutree",
        data(){
            return{

                first_data:[]
            }
        },
        components:{
        //   menutree
        },
        props:["data"],
    })
</script>

<style scoped>

</style>