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
  left: 0;
  width: 30rem;
  height: 400px;
  position: absolute;
  top: 4rem;
  right: 12rem;
}

/*点击播放列表动画end*/
/*用户留言开始*/
.userMsgBar {
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  margin: .2rem;
  display: flex;
  text-shadow: 2px 2px 2px #000;
  border-radius: 10px;
}

.msgIcon {
  /*background-color: #0d1117;*/
  /*box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1) inset, 1px 1px 5px rgba(0, 0, 0, .5);*/
  position: relative;
  padding: .7rem;
  color: #cfcfcf;
  border-radius: 10px;
  align-self: center;
  transition: ease all .3s;
}
.msgIcon:after{
  padding-left: .2rem;
  content: 'Message';
}
.msgIcon:hover{
  background-color: #0d1117;
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1) inset, 1px 1px 5px rgba(0, 0, 0, .5);
}

/*用户留言结束*/
</style>