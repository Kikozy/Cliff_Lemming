<template>
  <div class="LoginForm">
    <div class="loginInput move">
      <img class="iconHead" :src="qq_icon">
      <div class="INPUT" style="--i:5">
        <input class="mail input" required v-model="login_form.mail" type="text" name="mail"
               @keyup="ismatch">
        <h3>🌲邮箱</h3>
      </div>

      <div class="INPUT" style="--i:6">
        <input class="password input" required v-model="login_form.password" type="password" name="password"
               @keyup="ismatch">
        <h3>🍃密码</h3>
      </div>

      <div class="INPUT" style="--i:7">
        <input class="loginBtn" type="submit" style="--i:7" value="登录" disabled="true" @click="post_login">
      </div>
    </div>
  </div>

</template>

<script>

import {request} from "@/network/requests";
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
            message: res.data.data.username + '登录成功！',
            type: 'success'
          });
          // 提交到vuex
          let login_infos = {
            username: res.data.data.username,
            uuid:res.data.data.token,
            qqHead:this.qq_icon,
            mail: this.login_form.mail}
          this.$store.commit('saveLogin', login_infos) //提交
          // this.$store.commit('saveLogin'方法名, login_infos参数)
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
.INPUT {
  position: relative;
}

input {
  background-color: transparent;
  margin-bottom: 2rem;
  width: 70%;
  height: 1.5rem;
  border: none;
  top: 0;
  border-bottom: 2px solid #857961;
  display: inline-block;
  position: relative;
  color: #cfcfcf;
  font-size: 1.2em;
  font-weight: bold;
}

h3 {
  top: 0;
  color: #cfcfcf;
  position: absolute;
  transition: all .3s;
  /*图像穿透*/
  pointer-events: none;
  -webkit-pointer-events: none;
  -moz-pointer-events: none;
  -ms-pointer-events: none;
  -o-pointer-events: none;
}

input:focus + h3,
input:valid + h3 {
  font-size: smaller;
  color: #737674;
  top: -1rem;
}
.LoginForm{
  position: relative;
}

.iconHead {
  width: 5rem;
  border-radius: 50%;
  position: absolute;
  left: -1rem;
}

.loginInput {
  margin-left: 20%;
  margin-top: 40%;
}


.loginBtn {
  font-weight: bold;
  font-size: 1rem;
  /*float: left;*/
  border-radius: 10pt;
  width: 10vw;
  min-width: 5rem;
  height: 5vh;
  min-height: 2.5rem;
  background-color: #2a4a34;
  border: 0px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, .5);
  cursor: pointer;
}

.INPUT {
  animation: ease showDown calc(.1s * var(--i));
}

@keyframes showDown {
  0% {
    transform: translateY(calc(-40px * var(--i)));
  }
  100% {
    transform: translateY(0px);
  }
}


</style>