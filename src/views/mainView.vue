<script setup lang="ts">
import "animate.css";
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";

import { useMainStore } from "@/store";

const mainStore = useMainStore();
type scrollPosition = {
  scrollTop: number;
  scrollLeft: number;
};
const scroll = (scroll: scrollPosition) => {
  mainStore.scrollY = scroll.scrollTop;
};
</script>

<template>
  <el-scrollbar
    @scroll="scroll"
    class="scrollBar"
    :noresize="true"
  >
    <div class="common-layout">
      <el-container>
        <el-header height="60px">
          <Header />
        </el-header>
       <el-container>
         <el-aside class="aside" width="auto">
           <Aside/>
         </el-aside>
         <el-container>
           <el-main class="main">
             <RouterView />
           </el-main>
         </el-container>
       </el-container>
        <el-backtop target=".scrollBar > div" :right="80" :bottom="100">
          <el-icon><i-ep-ArrowUpBold /></el-icon>
        </el-backtop>
      </el-container>
    </div>
  </el-scrollbar>
</template>

<style scoped lang="less">
header {
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 0;
  z-index: 999;
  // background: rgba(255, 255, 255, 0.95);
  // box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 40px -8px;
}
.aside{
  margin-top: 60px;
  border-right: solid 1px var(--el-menu-border-color);
}
.main {
  height: calc(100vh - 60px);
  width: 100%;
  margin-top: 60px;
  padding: 0;
  /* background: #1c0522; */
}
</style>
