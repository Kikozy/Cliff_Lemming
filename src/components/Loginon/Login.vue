<template>
  <div class="LoginForm">
    <div class="loginInput">
      <!--  登录表单   -->
      <form class="Login" :action=login_url method="POST">
        <input class="username input" type="text" name="username" placeholder="用户名" @keyup="ismatch">
        <input class="password input" type="password" name="password" placeholder="密码" @keyup="ismatch">
        <input class="loginBtn" type="submit" value="登录" disabled="true" @click="get_post_login">
      </form>
    </div>
  </div>

</template>

<script>

import {request} from "@/network/requests";
import {post_url} from "@/network/post_base_url";
import $ from "jquery";


export default {
  name: "Login",
  data() {
    return {
      login_url: '哥不要乱搞啊'
    }
  },
  methods: {
    ismatch() {
      var username = $("input[name='username']").val()
      var password = $("input[name='password']").val()
      if (username.length >= 4 && password.length >= 4) {
        $(".loginBtn").attr("disabled", false)
      } else {
        $(".loginBtn").attr("disabled", true)
      }
    },
    get_post_login() {
      this.login_url = post_url() + '/user_login'
    }
  }
}
</script>

<style scoped>
/*@import '../../assets/CSS/Loginon/login.css';*/
.loginInput {
  margin-left: 20%;
  margin-top: 40%;
}


.input {
  box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
  padding-left: 1rem;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 3%;
  border: 0px;
  width: 15vw;
  height: 3vw;
  border-radius: 10pt;
}

.loginBtn {
  font-weight: bold;
  font-size: 1rem;
  /*float: left;*/
  border-radius: 10pt;
  width: 10vw;
  height: 5vh;
  background-color: #2a4a34;
  border: 0px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, .5);
  cursor: pointer;
}


</style>