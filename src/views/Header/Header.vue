<template>
  <div class="headers">
    <!--    <MusicBar/>-->
    <div class="isLogined">
      <div v-if="islogin===true">
        <transition name="showLogin">
          <logined/>
        </transition>
      </div>
      <div v-else>
        <transition name="showLogin">
          <Login/>
        </transition>
      </div>
    </div>
    <!-- <userMsgBar title="交流一下"/> -->
    <itemHtml/>
  </div>
</template>

<script>
// import userMsgBar from "@/components/Head/userMsgBar";
import itemHtml from "@/components/Head/itemHtml";
import logined from "@/components/Head/logined/logined";
import Login from "@/components/Head/loginBar";

export default {
  name: "Header",
  components: {
    // userMsgBar,
    itemHtml,
    logined,
    Login
  },
  data() {
    return {
      islogin: false
    }
  },
  created() {
    if (this.$store.state.username) {
      this.islogin = true;
    }
  },
  watch: {
    // 监听值的变化
    '$store.state.username': function () {
      this.islogin = !this.islogin
    }
  }
}
</script>

<style scoped>

.headers {
  z-index: 999997;
  width: 100%;
  position: fixed;
  /*background-color: red;*/
  display: flex;
  justify-content: space-between;
}

.isLogined {
  flex: .5;
  margin-left: 13rem;
}

.userMsgBar {
  flex: .5;
}

.itemHtml {
  flex: 12;
}

/* 登录后信息 */
.UserInfoBar {
  animation: ease 2s toDown;
}

.isLogined {
  animation: ease 1s toDown;
}

.userMsgBar {
  animation: ease 1.5s toDown;
}

@keyframes toDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

/*登录组件的动画*/
.showLogin-leave-to {
  transform: translateX(50px);
  opacity: 0;
  height: 0;
  position: absolute;
}

.showLogin-enter {
  transform: translateX(50px);
  opacity: 0;
  height: 0;
  position: absolute;
}

/*进入和离开执行的时间*/
.showLogin-enter-active, .showLogin-leave-active {
  transition: all ease 1s;
}
</style>