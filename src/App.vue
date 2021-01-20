<!-- 主界面 -->
<template>
  <div id="app">
    <div class="Music" v-if="ishidenMusic===false">
      <MusicBar/>
    </div>
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import MusicBar from "@/components/Head/MusicBar";
export default {
  components:{
    MusicBar
  },
  name: 'APP',
  provide() {//全局注册方法
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      ishidenMusic:false,
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
  },
  watch:{
    // 监听路径是否在某个地址里，如果是就不显示音乐播放器
    '$route.path':function (){
      if (this.$route.path.indexOf('admin') !== -1){
        this.ishidenMusic = true
      }else{
        this.ishidenMusic = false
      }
    }
  }
}
</script>

<style>
.Music{
  position: fixed;
  z-index: 999998;
  min-width: 12rem;
  animation: ease 1s toDown;
}
@keyframes toDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
