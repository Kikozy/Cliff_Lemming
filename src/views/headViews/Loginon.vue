<template>
  <!-- 背景 -->
  <div class="loginIn">
    <div class="loginB1">
      <p id="loginBG"></p>
    </div>
    <!--  登录盒子  -->
    <div class="loginInBox">
      <div class="goback" @click="goback">
        <i class="el-icon-arrow-left">Home</i>
      </div>
      <div class="Login_logon">
        <router-link :class="{active}" @click="active =! active" id="loginbtn" to="/login">Login</router-link>
        <span style="color: #cfcfcf">/</span>
        <router-link id="logonbtn" to="/logon">Logon</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>


<script>
//导入外部JS
// import '../../assets/JS/Loginon/Loginon.js'

export default {
  data() {
    return {
      active: false
    }
  },
  methods: {
    goback() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@import "../../assets/CSS/Loginon/Loginon.css";
</style>