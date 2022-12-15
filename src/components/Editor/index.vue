<template>
  <div class="cover" theme="light">
    <md-editor v-model="mainStore.blogContent"/>
    <transition v-show="mainStore.blogFormShow" enter-active-class="animate__animated animate__slideInRight"
                leave-active-class="animate__animated animate__slideOutRight">
      <BlogInfo class="info"/>
    </transition>
    <div class="collapse">
      <el-icon v-show="mainStore.blogFormShow" @click="mainStore.blogFormShow=!mainStore.blogFormShow">
        <i-ep-ArrowRightBold/>
      </el-icon>
      <el-icon v-show="!mainStore.blogFormShow" @click="mainStore.blogFormShow=!mainStore.blogFormShow">
        <i-ep-ArrowLeftBold/>
      </el-icon>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import BlogInfo from '@/components/Editor/BlogInfo/index.vue'
import {useMainStore} from "@/store";
// import {RouterLink, RouterView} from "vue-router";

const mainStore = useMainStore();
// const text = ref('# Hello Editor');
let show = ref(true);
// const print = ()=>{
//   console.log(text.value)
// }
</script>

<style lang="less" scoped>
.cover {
  position: relative;
  height: calc(100vh - 60px);

  .md-editor {
    height: 100%;
    border: none;
  }

  .info {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 400px;
    margin-top: -200px;
    border: 1px solid var(--el-border-color);
    border-radius: 6px;
    right: 0;
    top: 50%;
    //transform: translateY(-50%);
  }

  .collapse {
    position: fixed;
    height: 40px;
    width: 16px;
    top: 50%;
    right: 0;
    border: 1px solid transparent;
    //transform: translate(0, -50%);
    margin-top: -20px;
    line-height: 40px;
    border-radius: 4px;
    z-index: 99;
    cursor: pointer;
    &:hover{
      border-left-color: 1px solid var(--el-border-color);
      border-bottom-color: 1px solid var(--el-border-color);
      border-top-color: 1px solid var(--el-border-color);
      background-color: var(--el-backtop-hover-bg-color);
      color: var(--el-menu-active-color);
    }
  }
}

</style>