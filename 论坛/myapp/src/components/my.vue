<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-04 13:41:03
 * @LastEditTime: 2019-10-11 10:49:01
 * @LastEditors: Please set LastEditors
 -->
<template >
  <div>
    <div v-if="mydata.Authorization ">
      {{ mydata.username}}
      <div>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
      </div>
    </div>
    <el-row v-else>
      <el-button type="primary" @click="goto('/login')">登陆</el-button>
      <el-button type="success" @click="goto('/reg')">注册</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mydata: { username: "", Authorization: "" }
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  },
  created() {
    // this.mydata.username = this.$router.query.username;
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    this.mydata.username = user.username;
    this.mydata.Authorization = user.Authorization;
  }
};
</script>