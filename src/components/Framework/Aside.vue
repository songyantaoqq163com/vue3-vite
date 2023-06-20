<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-menu style="height: 100vh;overflow-y: auto"
                        default-active="1-1"
                        class="el-menu-vertical-demo"
                        router
                        @open="handleOpen"
                        @close="handleClose"
                >
                    <el-menu-item index="0" :route="'/home'">
                        <el-icon><location /></el-icon>
                        <span>首页</span>
                    </el-menu-item>
                    <menutree :data="menu_data"></menutree>
<!--                    <el-sub-menu index="1">-->
<!--                        <template #title>-->
<!--                            <el-icon><location /></el-icon>-->
<!--                            <span>Navigator One</span>-->
<!--                        </template>-->
<!--                        <el-menu-item-group title="Group One">-->
<!--                            <el-menu-item index="1-1">item one</el-menu-item>-->
<!--                            <el-menu-item index="1-2">item two</el-menu-item>-->
<!--                        </el-menu-item-group>-->
<!--                        <el-menu-item-group title="Group Two">-->
<!--                            <el-menu-item index="1-3">item three</el-menu-item>-->
<!--                        </el-menu-item-group>-->
<!--                        <el-sub-menu index="1-4">-->
<!--                            <template #title>item four</template>-->
<!--                            <el-menu-item index="1-4-1">item one</el-menu-item>-->
<!--                        </el-sub-menu>-->
<!--                    </el-sub-menu>-->
<!--                    <el-menu-item index="2">-->
<!--                        <el-icon><icon-menu /></el-icon>-->
<!--                        <span>Navigator Two</span>-->
<!--                    </el-menu-item>-->
<!--                    <el-menu-item index="3" disabled>-->
<!--                        <el-icon><document /></el-icon>-->
<!--                        <span>Navigator Three</span>-->
<!--                    </el-menu-item>-->
<!--                    <el-menu-item index="4">-->
<!--                        <el-icon><setting /></el-icon>-->
<!--                        <span>Navigator Four</span>-->
<!--                    </el-menu-item>-->
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {defineComponent} from 'vue'
    import menutree from "./menutree.vue";

    export default defineComponent({
        name: "Aside",
        components:{
            menutree
        },
        data(){
          return{
              menu_data:[{
                  id:'1',
                  name:'导入/导出',
                  url:'/home?01',
                  children:[{
                      id:'1-1',
                      name:'导入',
                      url:'/home?1'
                  },{
                      id:'1-2',
                      name:'导出',
                      url:'/home?1-2'
                  }]
              },{
                  id:'2',
                  name:'表头',
                  url:'/home?2'
              }]
          }
        },
        methods:{
            handleOpen(row){
                console.log(10,row)
            },
            handleClose(row){
                console.log(11,row)
            }
        }
    })
</script>

<style scoped>

</style>