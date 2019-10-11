<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 14:35:34
 * @LastEditTime: 2019-10-11 14:22:07
 * @LastEditors: Please set LastEditors
 -->
<template name="component-name">
  <div>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="i in data" :key="i" class="infinite-list-item" style=" margin-bottom: 10px;">
        <el-row :gutter="10" style="margin-bottom: 6px;">
          <el-col :xs="4" :sm="4" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple" style>标题:</div>
          </el-col>
          <el-col :xs="8" :sm="10" :md="15" :lg="20" :xl="100">
            <div class="grid-content bg-purple-light" style="width:100%"></div>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple" style=" background-color: #fff;">作者：</div>
          </el-col>
          <el-col :span="7" style=" float: right;">
            <div class="grid-content bg-purple" style=" background-color: #fff;">
              <el-badge :value="200" :max="99" class="item">
                <el-button size="small" style="padding: 7px 6px;">评论</el-button>
              </el-badge>
            </div>
          </el-col>
          <el-col :span="7" style=" float: right;">
            <div class="grid-content bg-purple" style=" background-color: #fff;">
              <el-badge :value="200" :max="99" class="item">
                <el-button size="small" style="padding: 7px 6px;">评论</el-button>
              </el-badge>
            </div>
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
    } = await this.$axios.get(" https://s.bdyoo.com/mobile/index.php", {
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
* {
  font-size: 13px;
  padding: 0;
  margin: 0;
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
.item {
  margin-top: 10px;
  margin-right: 15px;
  font-size: 16px;
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
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  min-height: 16px;
  sup {
    font-size: 12px;
    height: 12px;
    line-height: 12px;
  }
}
</style>