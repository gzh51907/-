<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 13:45:22
 * @LastEditTime: 2019-10-10 16:56:10
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <el-container>
      <el-header
        style=" position: fixed;
  left: 0;
  top: 0;right:0; z-index:100;line-height: 40px;height:40px"
        v-if="activeIndex!='/my'"
      >
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          style="  line-height: 40px;height:40px:width:100%"
        >
          <el-menu-item index="1" style="float: left;">left</el-menu-item>
          <el-menu-item index="1" style="float: right;">right</el-menu-item>
        </el-menu>
      </el-header>

      <el-main style="margin-bottom:80px">
        <router-view />
      </el-main>
      <el-footer
        style=" position: fixed;  bottom: 0; left: 0:right:0; margin: 0px;    width:100%;padding:0;height:40px"
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
          <el-menu-item index="/index" style="padding:0  30px; height:40px;line-height: 40px">贴吧</el-menu-item>
          <el-menu-item index="/used" style="padding:0  30px; height:40px;line-height: 40px">二手</el-menu-item>

          <el-menu-item index="/lost" style="padding:0  30px; height:40px;line-height: 40px">失物</el-menu-item>
          <el-menu-item index="/my" style="padding:0  30px; height:40px;    line-height: 40px;">我的</el-menu-item>
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
