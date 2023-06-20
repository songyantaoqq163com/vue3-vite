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
                        <el-icon><ElementPlus /></el-icon>
                        <span>首页</span>
                    </el-menu-item>
                    <menutree :data="menu_data"></menutree>
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