<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="插件" name="first">
      <p>国际化相关插件</p>
      <ol>
        <li>
          parse5： 描述：一个快速的 HTML 解析器，用于解析 HTML 文档。 npm
          install parse5
        </li>
        <li>
          fast-glob： 描述：一个快速的 glob
          模式匹配库，用于查找匹配特定模式的文件路径。 npm install fast-glob
        </li>
        <li>i18n： npm install i18n</li>
        <li>
            vxe-table 是一个功能丰富的 Vue 表格组件
        </li>
      </ol>
    </el-tab-pane>
    <el-tab-pane label="vxe-table" name="second">
       <vxe-table border highlight-hover-row :data="tableData">
            <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
            <vxe-table-column field="age" title="Age"></vxe-table-column>
        </vxe-table>
    </el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template >

<script setup>
import { ref } from "vue";
const activeName = ref("first");
const tableData=Array.from({length:8},(v,k)=>({name:'sortable'+k,age:"排序"+k}))
</script>
<style scoped>
.custom-list {
    list-style-type: square; /* 使用方形标记 */
  }
</style>
