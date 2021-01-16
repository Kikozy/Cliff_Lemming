<!-- 主界面 -->
<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>

export default {
  name: 'APP',
  provide() {//全局注册方法
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true,//显示状态
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      })
    },

  }
}
</script>

<style>
/*@import "assets/CSS/scrollbar.css";*/
</style>
