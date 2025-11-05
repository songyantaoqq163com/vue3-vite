<template>
  <div id="app">
    <el-form :inline="true">
      <el-form-item>
        <el-button @click="handleExport">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table ref="myTable" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="age" label="年龄" />
    </el-table>
  </div>
</template>
  <script setup>
import { ref } from "vue";
import { exportElTable } from "../../js/exportExcel.js";

const myTable = ref(null);

const tableData = ref([
  { name: "张三", age: 28 },
  { name: "李四", age: 32 },
]);
const columns=[
    {label:'姓名',prop:'name'},
    {label:'年龄',prop:'age'},
  ]

const handleExport = () => {
  exportElTable(tableData.value,columns, "用户列表.xlsx");
};
</script>
