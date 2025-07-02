<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="menu_top">菜单目录</div>
        <el-menu
          default-active="1-1"
          class="menu_left"
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
import { defineComponent } from "vue";
import menutree from "./menutree.vue";

export default defineComponent({
  name: "Aside",
  components: {
    menutree,
  },
  data() {
    return {
      menu_data: [
        {
          id: "1",
          name: "VUE3",
          children: [
            {
              id: "1-1",
              name: "记忆1",
              url: "/vue3_tabs",
            },
            {
              id: "1-2",
              name: "导出",
              url: "/home?1-2",
            },
          ],
        },
        {
          id: "2",
          name: "表头",
          url: "/home?2",
        },
      ],
    };
  },
  methods: {
    handleOpen(row) {
      console.log(10, row);
    },
    handleClose(row) {
      console.log(11, row);
    },
  },
});
</script>

<style scoped>
.menu_top {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #409eff;
  color: #fff;
}
.menu_left {
  height: calc(100vh - 40px);
}
.el-menu-item {
  height: 35px !important;
  line-height: 35px !important;
}
.el-sub-menu__title {
  height: 35px !important;
  line-height: 35px !important;
}
</style>