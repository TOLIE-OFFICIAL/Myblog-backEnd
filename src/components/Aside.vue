<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      style="position: relative"
  >
    <div class="collapse">
      <el-icon v-show="isCollapse" @click="isCollapse=!isCollapse"><i-ep-ArrowRightBold /></el-icon>
      <el-icon v-show="!isCollapse" @click="isCollapse=!isCollapse"><i-ep-ArrowLeftBold /></el-icon>
    </div>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
// let show = ref(true);
</script>

<style lang="less" scoped>
.el-menu-vertical-demo{
  height: calc(100vh - 60px);
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /*width: 200px;*/
  min-height: 400px;
}
.collapse{
  position: absolute;
  //width: 0;
  //height: 0;
  //border: 6px;
  top: 50%;
  right: 0;
  transform: translate(0,-50%);
  z-index: 99;
  cursor: pointer;
}
</style>
