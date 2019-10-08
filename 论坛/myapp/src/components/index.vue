<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 14:35:34
 * @LastEditTime: 2019-10-08 10:41:26
 * @LastEditors: Please set LastEditors
 -->
<template name="component-name">
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">标题</div>
      </el-col>
      <el-col :span="4">
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
      <li v-for="i in data" :key="i" class="infinite-list-item" style=" margin-bottom: 10px;">
        <el-row :gutter="20">
          <el-col :span="6" style=" padding: 0;background-color: #fff;">
            <div
              class="grid-content bg-purple"
              style=" padding: 0;background-color: #fff;line-height: 36px;"
            >标题:</div>
          </el-col>
          <el-col :span="14" style=" padding: 0;background-color: #fff;">
            <div
              class="grid-content bg-purple"
              style=" padding: 0;background-color: #fff;line-height: 36px;"
            ></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple" style=" background-color: #fff;">作者：</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple" style=" background-color: #fff;"></div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple" style=" background-color: #fff;"></div>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>
<script>
// const mysql = require("../db/mysql");
export default {
  data() {
    return {
      data: ""
    };
  },
  methods: {
    // load() {
    //   if (this.count <= 50) {
    //     this.count += 2;
    //   }
    // }
  },
  async created() {
    // let sql = `select * from post`;
    // let da = await mysql(sql);
    // console.log(da);
    let {
      data: { datas }
    } = await this.$axios.get("https://www.nanshig.com/mobile/index.php", {
      params: {
        act: "index"
      }
    });
    this.data = datas.slice(1);
    console.log(datas.slice(1));
  }
};
</script>
<style lang="scss">
ul,
li {
  list-style: none;

  margin: 0;
  padding: 0;
}
.sl {
  padding: 0;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  height: 200px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>