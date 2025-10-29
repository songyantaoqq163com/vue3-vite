<template>
  <div>
    <div style="height: 300px; overflow: auto;">
      <p>
        <el-button type="primary" size="small" @click="addTable1(index++)">
          新增表格
        </el-button>
      </p>
       <!-- 报表 -->
      <div style="display:inline-block;border:1px solid gray; margin:0 10px"
     v-for="pane in tableData1"
      draggable="true"
       @dragstart="taskDragStart($event, pane)"
        :key="pane.id">
        <p>{{ pane.name }}</p>
          <el-table
            :data="pane.data"
            border
            size="small"
            style="width:260px; margin-bottom:12px">
            <el-table-column prop="id"   label="ID" width="60" />
            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="age"  label="年龄" width="80" />
          </el-table>
      </div>
    </div>


    <!-- 报表容器 -->
       <p>容器</p>
     <div style="width: 100%; min-height: 300px;" class="BorederRed"
     @dragover.prevent
      @drop="taskDrop($event, divData1)">
      <el-tabs v-model="activeName"
       editable
        @edit="handleTabsEdit">
        <el-tab-pane v-for="item in divData1"  :key="item.id"
         :label="item.name" :name="'tab'+item.id">
         <el-table
            :data="item.data"
            border
            size="small"
            style="width:260px; margin-bottom:12px">
            <el-table-column prop="id"   label="ID" width="60" />
            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="age"  label="年龄" width="80" />
          </el-table>
        </el-tab-pane>
      </el-tabs>

     </div>
  

  </div>
 
  


</template>

<script setup>
import { ref, reactive } from 'vue'
import { Close } from '@element-plus/icons-vue'

defineEmits(['close'])

/* -------- tabs 数据 -------- */
const activeName = ref('tab1')
const panes = reactive([
  { name: 'tab1', label: '表格页 1', tables: [] },
  { name: 'tab2', label: '表格页 2', tables: [] }
])
const tableData1=ref([])
let index=1
const divData1=ref([])

/* 随机数据工厂 */
const makeData = () =>
  Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    name: `用户${Math.floor(Math.random() * 1000)}`,
    age: 18 + Math.floor(Math.random() * 20)
  }))




function addTable1(i){
  tableData1.value.push({data:makeData(),label:i,name:'新增报表'+i,id:i})
}

let dragTask = null

function taskDragStart(e, task) {
  dragTask = task
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('text/plain', '') // Firefox 需要
}
function taskDrop(e, toArr) {
  console.log(81,e,toArr)
  e.preventDefault()
  if (!dragTask) return
  // 从原数组删除
  tableData1.value = tableData1.value.filter(t => t.id !== dragTask.id)
  // 添加到新数组
  toArr.push(dragTask)
  divData1.value=toArr
  dragTask = null
}


function handleTabsEdit(targetName){
  let Arr1=divData1.value.find(item=>{return ('tab'+item.id) === targetName})
    tableData1.value.push(Arr1)
   divData1.value = divData1.value.filter((tab) => 'tab'+tab.id !== targetName)
}
</script>

<style scoped>
.drag-wrap{
  position: fixed;
  width: 640px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  z-index: 999;
}
.drag-bar{
  height: 36px;
  background: #409eff;
  color: #fff;
  line-height: 36px;
  padding: 0 12px;
  cursor: move;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close{
  cursor: pointer;
}
.drag-tabs{
  padding: 12px;
}
.table-box{
  max-height: 360px;
  overflow-y: auto;
}
</style>