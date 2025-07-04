<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.index">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
  <script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDataStore } from "../store/store";

const store = useDataStore();
const route = useRoute();
const router = useRouter();
const breadcrumbList = ref([]);

function Breadcrumb(data, name, list) {
  let result = null;
  for (let i = 0; i < data.length; i++) {
    if (data[i].url === name) {
      return list ? [...list, data[i]] : [data[i]];
    } else if (data[i].children && Array.isArray(data[i].children)) {
      result = Breadcrumb(
        data[i].children,
        name,
        list ? [...list, data[i]] : data[i]
      );
      if (result) return result;
    }
  }
  return result;
}

watch(route, (newRoute, oldRoute) => {
  console.log("面包屑1", newRoute, store.dataArray);
  let Data = Breadcrumb(store.dataArray, newRoute.path, []);
  breadcrumbList.value = Data;
});
watch(
  () => store.dataArray,
  (newValue, oldValue) => {
    console.log("面包屑2", newValue);
    let Data = Breadcrumb(newValue, route.path, []);
    breadcrumbList.value = Data;
  }
);
</script>
  <style>
.el-breadcrumb {
  height: 40px !important;
  line-height: 40px !important;
}
.el-breadcrumb .el-breadcrumb__inner {
  color: #fff !important;
}
.el-breadcrumb .el-breadcrumb__separator {
  color: #fff !important;
}
</style>
