<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 14:35:34
 * @LastEditTime: 2019-10-07 17:37:51
 * @LastEditors: Please set LastEditors
 -->
<template name="component-name">
  <div>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="i in data" :key="i" class="infinite-list-item">
        <el-row style="width:100%">
          <el-col
            :span="8"
            v-for="(o, index) in 1"
            :key="o"
            :offset="index > 0 ? 2 : 0"
            style="width:100%"
          >
            <el-card :body-style="{ padding: '0px' }" style="width:100%">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
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
    let {
      data: { datas }
    } = await this.$axios.get("https://www.nanshig.com/mobile/index.php", {
      //   params: {
      //     type_id: 11
      //   }
    });
    this.data = datas;
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
</style>