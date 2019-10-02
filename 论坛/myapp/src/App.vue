<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 13:45:22
 * @LastEditTime: 2019-10-02 14:54:36
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/index">贴吧</el-menu-item>
          <el-menu-item index="1">二手</el-menu-item>
          <el-menu-item index="1">失物</el-menu-item>
          <!-- <el-menu-item index="1"></el-menu-item> -->
        </el-menu>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "/index"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    }
  },

  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
