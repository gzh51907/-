<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-04 13:41:03
 * @LastEditTime: 2019-10-08 15:00:15
 * @LastEditors: Please set LastEditors
 -->
<template >
  <div>
    <el-row>
      <el-button type="primary" @click="goto('/login')">登陆</el-button>
      <el-button type="success" @click="goto('/reg')">注册</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>