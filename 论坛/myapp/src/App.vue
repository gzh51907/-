<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 13:45:22
 * @LastEditTime: 2019-10-04 12:32:08
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <el-container>
      <el-header style=" position: fixed;
  left: 0;
  top: 0;">Header</el-header>
      <el-main style="margin-bottom:80px">
        <router-view />
      </el-main>
      <el-footer
        style=" position: fixed;  bottom: 0; left: 0:right:0; margin: 0px;    width:100%;padding:0"
      >
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
          <el-menu-item index="/index" style="padding:0  30px;">贴吧</el-menu-item>
          <el-menu-item index="/used" style="padding:0  30px;">二手</el-menu-item>

          <el-menu-item index="/lost" style="padding:0  30px;">失物</el-menu-item>
          <el-menu-item index="/my" style="padding:0  30px;">我的</el-menu-item>
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
