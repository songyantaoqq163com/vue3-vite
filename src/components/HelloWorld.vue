<template>
  <!-- <el-calendar v-model="Calendar" /> -->
  <span>
    项目搭建 npm create vite@latest
  </span>
  <el-divider content-position="left" style="border-top: 1px red solid">
    二十四节气插件、npm install lunar-typescript
  </el-divider>
  <el-calendar v-model="Calendar">
    <template #date-cell="{ data }">
      <div class="date-cell">
        <div class="solar">{{ data.day.split("-")[2] }}</div>
        <div class="lunar">{{ getSolarTerm(data.day) }}</div>
      </div>
    </template>
  </el-calendar>
</template>

<script setup>
import { ref } from "vue";
// import img from "@/assets/cvd.png";
// import img1 from "@/assets/pvd.png";
// import img2 from "@/assets/print.png";
import { Solar ,Lunar, HolidayUtil} from "lunar-typescript";

const Calendar = ref(new Date());
const currentDate = ref(new Date());

const getSolarTerm = (dateStr) => {
  const date = new Date(dateStr);
  const solar = Solar.fromDate(date);
  const lunar = solar.getLunar();
  const jieqi = lunar.getCurrentJieQi();
  return jieqi ? jieqi.getName() : "";
};


</script>

<style scoped>
.carousel-3d-three {
  margin-top: 80px;
  position: relative;
  width: 100%;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

.stage {
  position: relative;
  width: 600px;
  height: 360px;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
}
.nav.left {
  left: 20px;
}
.nav.right {
  right: 20px;
}
.nav:hover {
  background: rgba(0, 0, 0, 0.7);
}
</style>