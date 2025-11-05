<template>
  <p>样式1</p>
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
<p>样式2</p>
  <div calss="vis2">
    <ul class="vis2_ul">
      <li>序号</li>
      <li>列名</li>
      <li>详情</li>
    </ul>
  </div>

  <p>样式3</p>
  <div class="vis3">
    <p>良率报表明细-HJT</p>
    <ul class="vis3_ul">
      <li>日期<br/>Date</li>
      <li class="vis3_ul_li_black">10月21日</li>
      <li>班别<br/>Class</li>
      <li class="vis3_ul_li_black">白班</li>
      <li>时间段<br/>Time period</li>
      <li class="vis3_ul_li_black">12:30-14:30</li>
      <li>厚度<br/>thickness</li>
      <li class="vis3_ul_li_black">120</li>
      <li>产品<br/>products</li>
      <li class="vis3_ul_li_black">182Pro</li>
      <li>片源<br/>Wafer Source information</li>
      <li class="vis3_ul_li_black">A级</li>
    </ul>
    <p></p>
    <ul class="vis3_ul">
      <li>良率目标<br/>Yield Target</li>
      <li class="vis3_ul_li_black">99.00%</li>
      <li>良率达成<br/>Yileid Actual</li>
      <li class="vis3_ul_li_black">99.06%</li>
      <li>碎片目标<br/>Wafer Breakge Target</li>
      <li class="vis3_ul_li_black">0.45%</li>
      <li>碎片实际<br/>Wafer Breakage Actual</li>
      <li class="vis3_ul_li_black">0.42%</li>
      <li>返工目标<br/>Rework Target</li>
      <li class="vis3_ul_li_black">2.00%</li>
      <li>返工实际<br/>Rework Actual</li>
      <li class="vis3_ul_li_black">2.45%</li>
    </ul>
  </div>
</template>
  <script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

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




.vis2_ul{
  display: flex;
   text-align: center;
   border: 2px solid #000000;
  /* justify-content: space-around; */
  list-style: none;
  margin:0;
  padding:0;
}
.vis2_ul li{
  text-align: center;
  width: 100%;
  border-left: 2px solid #000000;
}
.vis2_ul li:first-child {
  border-left: none;
}

.vis3{
  width: 100%;
  color: #fff;
  background-color: red;
}
.vis3 p{
  text-align: center;
  font-weight:bold;
  height: 40px;
  line-height: 40px;
  margin:0;
}
.vis3_ul{
  display: flex;
  text-align: center;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #fff;
    justify-content: space-around
}
.vis3_ul li{
  /* padding: 10px; */
  /* width: 100px; */
  width: 100%;
  border-left: 1px solid #fff;

    display: flex;
    align-items: center;
    justify-content: center
}
.vis3_ul li:first-child{
  border-left: none;
}
.vis3_ul_li_black{
  color: #000000;
  background: #fff2cc;
}
</style>
