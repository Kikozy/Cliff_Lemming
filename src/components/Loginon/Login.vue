<template>
  <div class="LoginForm">
    <div class="loginInput">
      <!--  登录表单   -->
      <!--      加了form点击登录会自动刷新-->
      <!--      <form class="Login" action="">-->
      <input class="username input" v-model="login_form.username" type="text" name="username" placeholder="用户名"
             @keyup="ismatch">
      <input class="password input" v-model="login_form.password" type="password" name="password" placeholder="密码"
             @keyup="ismatch">
      <input class="loginBtn" type="submit" value="登录" disabled="true" @click="post_login">
      <!--      </form>-->
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
      login_form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ismatch() {
      let username = $("input[name='username']").val()
      let password = $("input[name='password']").val()
      if (username.length >= 4 && password.length >= 4) {
        $(".loginBtn").attr("disabled", false)
      } else {
        $(".loginBtn").attr("disabled", true)
      }
    },
    post_login() {
      request({
        method: 'post',
        url: '/user_login',
        data: this.login_form
      }).then(res => {
        if (res.data.code === 609) {
          this.$message({
            message: this.login_form.username + '管理员登录成功！',
            type: 'success'
          });
          this.$router.push('/lemming_admin')
        } else if (res.data.code === 200) {
          this.$message({
            message: this.login_form.username + '登录成功！',
            type: 'success'
          });
          this.$router.push('/')
        } else if (res.data.code === 400) {
          this.$message.error({
            message: this.login_form.username + res.data.msg,
          });
          this.$router.push('/logon')
        }
      }).catch(err => {
        this.$message.error({
          message: this.login_form.username + '账号或者密码错误！',
        });
      })
    }
  },
}
</script>

<style scoped>
.loginInput {
  margin-left: 20%;
  margin-top: 40%;
}

input::-webkit-input-placeholder {
  color: #000000;
}

input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #000000;
}

input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: #000000;
}

input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #000000;
}

.input {
  box-shadow: 1px 1px 1px rgba(103, 130, 117, .5) inset, 2px 2px 5px rgba(0, 0, 0, .5);
  background-color: rgba(61, 61, 61, 0.8);
  background-image: linear-gradient(to right, rgba(42, 74, 52, .7), rgba(255, 255, 255, 0.2)); /*对角渐变*/
  backdrop-filter: blur(10px);
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