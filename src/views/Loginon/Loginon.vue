<template>
  <!-- 背景 -->
  <div class="loginIn move">
    <div class="loginB1">
      <p id="loginBG"></p>
    </div>
    <!--  登录盒子  -->
    <div class="loginInBox">
      <div class="goback" @click="goback">
        <i class="el-icon-arrow-left">Home</i>
      </div>
      <div class="Login_logon">
        <div class="logBar loginBar" @click="active(1)" :class="{active1:style===1}">
          <router-link id="loginbtn" to="/login">Sign In</router-link>
        </div>
        <div class="logBar logonBar" @click="active(2)" :class="{active1:style===2}">
          <router-link id="logonbtn" to="/logon">Sign On</router-link>
        </div>
      </div>
      <!--定义组件动画-->
      <div class="Log_Box">
        <transition name="showUp" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>


<script>
//导入外部JS
export default {
  data() {
    return {
      style: 1,
    }
  },
  methods: {
    active(index) {
      // $('.loginInBox').addClass('turn180')
      this.style = index;
    },
    goback() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@import "../../assets/CSS/Loginon/Loginon.css";

.move {
  animation: ease run .5s;
}

@keyframes run {
  0% {
    border-radius: 20rem;
    top: -40vh;
    left: -50%;
    transform: scale(.10);
  }

  100% {
    border-radius: 0;
    top: 0;
    left: 0;
    transform: scale(1);
  }
}

/*定义组件动画start*/

.showUp-leave {
  opacity: 0;
}

.showUp-enter {
  /*transform: translateX(100px);*/
  opacity: 0;
}

/*进入和离开执行的时间*/
.showUp-enter-active, .showUp-leave-active {
  transition: all .5s;
}

/*定义组件动画end*/

</style>