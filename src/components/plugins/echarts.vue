<template>
  <el-row :gutter="20">
    <el-col :span="12"><div class="grid-content ep-bg-purple" />
      <p>消费总额:{{ total }}</p>
      <v-chart :option="option" style="height: 300px" :loading="loading"></v-chart>
    </el-col>
    <el-col :span="12"><div class="grid-content ep-bg-purple" />
      <p>混合图</p>
      <v-chart :option="option1" style="height: 300px" :loading="loading"></v-chart>
    </el-col>

    <el-col :span="12"><div class="grid-content ep-bg-purple" />
      <p>堆叠折线图</p>
      <v-chart :option="option2" style="height: 300px" :loading="loading"></v-chart>
    </el-col>
  </el-row>
</template>
<script setup>
import { color } from "echarts";
import { ref, onMounted } from "vue";

const arr = ref([1765.45, 87.8, 173.11, 1281.58, 421.56]);
const datalist1=ref( [
    { label: 'w27', value: 1.92, type: 'bar' },
    { label: 'w28', value: 1.56, type: 'bar' },
    { label: 'w29', value: 0.61, type: 'bar' },
    { label: 'w30', value: 0.43, type: 'bar' },
    { label: '7.27', value: 0.40, type: 'line' },
    { label: '7.28', value: 0.54, type: 'line' },
    { label: '7.29', value: 0.39, type: 'line' },
    { label: '7.30', value: 0.36, type: 'line' }
  ])
const datalist2=ref([
  {label:'花呗',v1:'100',v2:'300'},
  {label:'京东花呗',v1:'120',v2:'230'},
  {label:'美团',v1:'110',v2:'220'},
  {label:'微信',v1:'90',v2:'300'},
  {label:'拼多多',v1:'130',v2:'250'},
])
const loading = ref(false);
const option = ref({});
const option1 = ref({})
const option2 = ref({})
const total = ref("");

onMounted(() => {
  options();
  options1();
  optionV2()
});

function options() {
  loading.value = true;
  // @ts-ignore
  total.value = arr.value.reduce((a, b) => a + b, 0);

  option.value = {
    title: { text: "2025 8月消费额", left: "center" },
    tooltip: {},
    legend: { show: true, left: 10 },
    xAxis: {
      type: "category",
      data: datalist2.value.map(item=>item.label),
    },
    yAxis: { type: "value" },
    series: [
      {
        name: "消费",
        type: "line",
        show: true,
        label: {
          show: true,
          position: "top",
        },
        data: arr.value,
      },
    ],
    grid: {
      left: 50,
      right: 50,
    },
  };
  loading.value = false;
}

function options1() {
  const DataList =datalist1.value
  let A = DataList.map(item => { return item.type === 'bar' ? item.value : null })
  let B = DataList.map(item => { return item.type === 'line' ? item.value : null })

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {},
    grid: { left: 60, right: 40, bottom: 60 },
    xAxis:{
        type: 'category',
        data: DataList.map(d =>{return d.label}),
        axisLine: { onZero: false },
        axisLabel:{show:true,rotate:45},
        axisTick: { alignWithLabel: true }
      },
    yAxis: { type: 'value' },
    series: [
      {
        name:'温度',
        type: 'bar',
        data: A,
        itemStyle: { color: '#5470c6' }
      },
      {
        name:'湿度',
        type: 'line',
        data: B,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: { color: '#ee6666', width: 3 },
        itemStyle: { color: '#ee6666' }
      }]
  };
  option1.value=option
}

function optionV2(){
    const list2=datalist2.value
    const option={
      xAxis:{
        type:'category',
        data:list2.map(item=>item.label)
      },
      yAxis:{
        type:'value',
        axisLine: {show: true}
      },
      series:[
        {
          name:'8月',
          type:'line',
          data:list2.map(item=>item.v1),
          itemStyle:{color:'#557000'}
        },{
          name:'9月',
          type:'line',
          data:list2.map(item=>item.v2),
        }
      ]
    }
    console.log(147,option)
    option2.value=option
}

</script>
