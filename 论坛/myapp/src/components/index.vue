<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 14:35:34
 * @LastEditTime: 2019-10-02 14:51:13
 * @LastEditors: Please set LastEditors
 -->
<template name="component-name">
  <div>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
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
};
</script>