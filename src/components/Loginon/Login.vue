<template>
  <div class="LoginForm">
    <img class="iconHead" :src="qq_icon" alt="">
    <div class="loginInput">
      <!--  登录表单   -->
      <!--      加了form点击登录会自动刷新-->
      <!--      <form class="Login" action="">-->
      <input class="mail input" v-model="login_form.mail" type="text" name="mail" placeholder="邮箱"
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
      qq_icon: '',
      login_form: {
        mail: '',
        password: ''
      }
    }
  },
  methods: {
    ismatch() {
      if (this.login_form.mail.indexOf('@') >= 0) {
        let qq = this.login_form.mail.split('@')[0]
        this.qq_icon = 'http://q1.qlogo.cn/g?b=qq&nk=' + qq + '&s=640'
      } else {
        this.qq_icon = ''
      }
      if (this.login_form.mail.length <= 30 && this.login_form.mail.indexOf('@') >= 0 && this.login_form.mail.indexOf('.') >= 0 && this.login_form.password.length >= 4) {
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
            message: '管理员登录成功！',
            type: 'success'
          });
          this.$router.push('/lemming_admin')
        } else if (res.data.code === 200) {
          this.$message({
            message: res.data.username + '登录成功！',
            type: 'success'
          });
          // 提交到vuex
          let login_infos = {username: res.data.username, qqHead: this.qq_icon, mail: this.login_form.mail}
          this.$store.commit('saveLogin', login_infos) //提交
          this.$router.push('/')
        } else if (res.data.code === 400) {
          this.$message.error({
            message: this.login_form.mail + res.data.msg,
          });
          this.$router.push('/logon')
        }
      }).catch(err => {
        this.$message.error({
          message: '网络出错，请稍后再试！',
        });
      })
    }
  },
}
</script>

<style scoped>
.iconHead {
  left: -3rem;
  z-index: -1;
  width: 40%;
  border-radius: 50%;
  position: absolute;
}

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