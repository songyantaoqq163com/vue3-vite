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
        <li>vxe-table 是一个功能丰富的 Vue 表格组件</li>
      </ol>
    </el-tab-pane>
    <el-tab-pane label="vxe-table" name="second">
      <vxe-table border highlight-hover-row :data="tableData">
        <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
      </vxe-table>
    </el-tab-pane>
    <el-tab-pane label="跨域" name="third">
      <h3>什么事跨域?</h3>
      <ul>
        <li v-for="i in activeShtee.split('/')" :key="i.index">
          {{ i }}
        </li>
      </ul>
      <h3>为什么需要跨域？</h3>
      <ul>
        <li v-for="i in activeShree.split('/')" :key="i.index">
          {{ i }}
        </li>
      </ul>
      <h3>解决跨域的方法</h3>
      <ol>
        <li>服务器端设置CORS响应头</li>
        <li>JSONP.不受同源策略限制</li>
        <li>设置代理服务器</li>
        <li>浏览器插件-绕过同源策略</li>
      </ol>
    </el-tab-pane>
    <el-tab-pane label="DOM" name="fourth">
      <p>什么事虚拟dom</p>
      <h4>工作原理</h4>
      <h6>虚拟 DOM（Virtual DOM）是一种编程概念</h6>
      <h6>虚拟 DOM 使用 JavaScript 对象来描述 UI 组件的结构</h6>
      <h4>核心思想</h4>
      <h6>
        核心思想是通过一个轻量级的 JavaScript
        对象来描述用户界面，而不是直接操作实际的 DOM（文档对象模型）。
      </h6>
      <h4>虚拟dom的优势</h4>
      <ol>
        <li v-for="i in activeFont.split('/')" :key="i.index">{{ i }}</li>
      </ol>
      <h4>虚拟domm的实现</h4>
      <ul>
        <li>
          React：使用一个名为 React Element 的对象来表示虚拟 DOM，并通过
          React.createElement 创建
        </li>
        <li>Vue：使用基于对象的虚拟 DOM 实现，通过 render 函数生成。</li>
        <li>
          Svelte：在编译时将虚拟 DOM 转换为高效的 JavaScript
          代码，减少了运行时的计算量。
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="pinia" name="pinia">
      <h3>pinia 现代化状态管理</h3>
      <h4>npm install pinia/piniaPluginPersistedstate</h4>
      <div>
        <ol>
          <li>import {createPinia} from 'pinia'</li>
          <li>import piniaPluginPersistedstate from'pinia-plugin-persistedstate'</li>
          <li>const pinia=createPinia()pinia.use(piniaPluginPersistedstate) </li>
          <li>export default pinia</li>
        </ol>
      </div>
    </el-tab-pane>
    <el-tab-pane label="el-table" name="five">
      <el-table border :data="dataFiveTable">
          <el-table-column type="index" label="序号" width="55" />
          <el-table-column label="名称" prop="label" />
          <el-table-column label="详情" prop="value" show-overflow-tooltip> 
           <template #default="scope">{{ scope.row.value }}</template>
          </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template >

<script setup>
import { ref } from "vue";
const activeName = ref("first");
const tableData = Array.from({ length: 8 }, (v, k) => ({
  name: "sortable" + k,
  age: "排序" + k,
}));
const activeShtee = ref(
  "跨域：是指浏览器因同源策略的限制，不允许从一个域向另一个域发起的脚本请求/这是浏览器提供的意向安全功能，意在放置恶意网站读取另一个网站的数据。"
);
const activeShree = ref(
  " web应用中，经常需要从不同的域请求资源，例如/加载第三方API数据/使用CDN来加速1资源加载"
);
const activeFont = ref("性能优化/跨平台兼容性/简化状态管理/提高开发效率");
const dataFiveTable=ref([
{ label:'stripe ',value:'带斑马纹'},
{ label:'show-overflow-tooltip',value:'内容溢出(true/false)'}
])

function handleClick(event){
  console.log(116,event)
}

</script>
<style scoped>
.custom-list {
  list-style-type: square; /* 使用方形标记 */
}
</style>
