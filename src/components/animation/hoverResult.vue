<template>
  <div id="app">
    <p>hover效果</p>
    <div class="redBorder divA">
      <div @mouseleave="onLeave">
        <transition name="slide">
          <div v-show="showDragTree" class="divA-content">
            图形配置文件内容 slide-enter-from, .slide-leave-to，
            .slide-enter-active, .slide-leave-active
          </div>
        </transition>
        <div class="divA_div" @mouseenter="onEnter">
          图<br />形<br />配<br />置
        </div>
      </div>
    </div>
  </div>
</template>
  <script setup>
import { ref } from "vue";

const showDragTree = ref(false);
let timer2 = null;

//移入
function onEnter(val) {
  clearTimeout(timer2);
  timer2 = setTimeout(() => {
    showDragTree.value = true;
  }, 50);
}
//移出
function onLeave(val) {
  clearTimeout(timer2);
  timer2 = setTimeout(() => {
    showDragTree.value = false;
  }, 100);
}
</script>
  <style scoped>
.divA {
  width: 200px;
  height: 250px;
  position: relative;
  overflow: hidden;
}
.divA-content {
  position: absolute;
  right: 0;
  background: gray;
  width: 150px;
  height: 100%;
}
.divA_div {
  background: gray;
  position: absolute;
  right: 0;
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: center;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(60%);
}
</style>
