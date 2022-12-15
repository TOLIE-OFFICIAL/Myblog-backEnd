<template>
  <el-menu
      class="el-menu-demo"
      :default-active="activePage"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      :router="true"
      :unique-opened="true"
      style="height: 100%"
  >
    <li class="logo"  style="padding:0 20px">
      <img
          v-once
          class="logo-image"
          src="https://s2.loli.net/2022/10/19/f5vjiHKwVDTpX7U.png"
          alt="Logo"
          style="height: 46px"
      />
    </li>

    <li class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: './page-header.html' }">
          homepage
        </el-breadcrumb-item>
        <el-breadcrumb-item
        ><a href="./page-header.html">route 1</a></el-breadcrumb-item
        >
        <el-breadcrumb-item>route 2</el-breadcrumb-item>
      </el-breadcrumb>
    </li>
    <div class="flex-grow"/>
    <li class="username" style="padding-right: 20px">
      tolie-official
    </li>
    <li class="avatar" style="height: auto;padding-right: 20px">
      <el-avatar :size="38" src="https://empty" @error="errorHandler">
        <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
    </li>
  </el-menu>
</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import {useMainStore} from "@/store";

const mainStore = useMainStore();
const activePage = ref("/");
const errorHandler = () => true
// computed(()=>{

// })

onBeforeMount(() => {
  // 新页面载入调用onBeforeMount，从localtion获取default-active
  // const hrefArr = location.href.split("/");
  // activePage.value =
  //   sessionStorage.getItem("activePage") || hrefArr[hrefArr.length - 1] || "/";
});

const handleSelect = (key: string, keyPath: string[]) => {
  // 点击菜单tab 获取default-active
  // sessionStorage.setItem("activePage", key);
  activePage.value = key;
  // console.log(activePage);
};
</script>

<style scoped lang="less">
.breadcrumb, .username, .avatar, .logo {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  color: var(--el-menu-text-color);
}

.flex-grow {
  flex-grow: 1;
}

//:deep(.el-menu--horizontal>.el-menu-item ) {
//     height: auto;
// }
</style>
