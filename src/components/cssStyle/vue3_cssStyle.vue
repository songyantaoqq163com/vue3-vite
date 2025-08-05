<template>

  <div class="vis">
    <img src="../../assets/vue.svg" />
    <div class="div1">
      <ul class="div1_first_ul">
        <li class="div1_first_li">新增标准</li>
        <li class="div1_first_li2">
          <div class="first_li2_div1">NO:编号自动生成</div>
          <el-divider direction="vertical"></el-divider>
          <span
            ><el-button size="small" type="primary" plain>新增</el-button></span
          >
          <el-divider direction="vertical"></el-divider>
          <span>Modify:admin at 2023-01-22 10:10:08</span>
        </li>
      </ul>
    </div>
  </div>
</template>
  <script setup>
  import {ref, onMounted,onBeforeUnmount} from 'vue'

</script>
  <style scoped>
.vis {
  background: #fff;
  height: 100px;
  display: flex;
}
.vis img {
  width: 60px;
  margin: 0 25px;
}
.div1_first_ul {
  line-height: 35px;
  padding-left: 0px;
}
.div1_first_li {
  font-size: 20px;
  font-weight: bold;
}
.div1_first_li2 {
  color: gray;
}
.first_li2_div1 {
  width: 200px;
  display: inline-block;
}
</style>
