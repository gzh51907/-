<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 14:35:34
 * @LastEditTime: 2019-10-03 16:53:37
 * @LastEditors: Please set LastEditors
 -->
<template name="component-name">
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">标题</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">作者</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">点赞</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">评论</div>
      </el-col>
    </el-row>

    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{i}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    load() {
      if (this.count <= 50) {
        this.count += 2;
      }
    }
  }
  //   async created() {
  //     let data = await this.$axios.get("http://www.shwilling.com/portal/index", {
  //       params: {
  //         type_id: 11
  //       }
  //     });
  //     console.log(data);
  //   }
};
</script>
<style lang="scss">
ul,
li {
  list-style: none;
}
</style>