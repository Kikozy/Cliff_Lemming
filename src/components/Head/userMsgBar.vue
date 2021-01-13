<template>
  <div class="userMsgBar">
    <a @click="isshow" class="msgIcon iconfont icon-liuyan1"></a>
    <transition name="showMsg">
      <div class="WriteMsg" v-if="show">
        <WriteMsg v-if="isRouteAlive"/>
      </div>
    </transition>

  </div>
</template>

<script>
import WriteMsg from '../../components/Head/msgBox/msgbox'

export default {
  name: "userMsgBar",
  provide() {
    return {
      // 局部刷新
      reload: this.reload
    }
  },
  components: {
    WriteMsg
  },

  data() {
    return {
      isRouteAlive: true,
      show: false,
    }
  },
  methods: {
    reload() {
      this.isRouteAlive = false
      this.$nextTick(() => {
        this.isRouteAlive = true
      })
    },
    isshow() {
      this.show = !this.show;
    }
  }
}
</script>

<style scoped>
/*点击播放列表动画*/
.showMsg-enter-active {
  animation: showMsg-in .3s;
}

.showMsg-leave-active {
  animation: showMsg-in .5s reverse;
}

@keyframes showMsg-in {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  50% {
    transform: translateY(10px);
    opacity: 10;
  }
  100% {
    transform: translateY(0px);
    opacity: 30;
  }
}

.WriteMsg {
  position: relative;
  right: 12rem;
}

/*点击播放列表动画end*/
/*用户留言开始*/
.userMsgBar {
  cursor: pointer;
  margin: .2%;
  height: 90%;
  width: 65px;
  border-radius: 10px;
  /*background-color: rgba(97, 123, 136, .7);*/
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  backdrop-filter: blur(10px);
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1) inset, 1px 1px 5px rgba(0, 0, 0, .5);
}

.msgIcon {
  /*background-color: red;*/
  color: #cfcfcf;
  padding: 1rem;
  border-radius: 10px;
  font-size: 2rem;
}

/*用户留言结束*/
</style>