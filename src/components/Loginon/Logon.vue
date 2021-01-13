<template>
  <div class="LogonForm">
    <img class="iconHead" :src="qq_icon" alt="">
    <div class="logonInput">
      <!-- 注册表单   -->
      <!--      <form class="Logon" :action=logon_url method="post">-->
      <div class="INPUT" style="--i:4;">
        <input class="username input" required v-model="logon_form.username" type="text" name='username'
               @keyup="matchUsername">
        <h3>用户名</h3>
        <span class="hidden movestyle" id="matchUsername">请输入用户名（4-15位）！💤</span>
      </div>

      <div class="INPUT" style="--i:5;">
        <input class="password input" required v-model="logon_form.password" type="password" name='password'
               @keyup="matchPassword">
        <h3>密码</h3>
        <span class="hidden movestyle" id="matchPassword">两次密码不一致（4-12位）！💤</span>
      </div>

      <div class="INPUT" style="--i:6;">
        <!--当输入完成后自动执行函数-->
        <input class="repassword input" required v-model="logon_form.repassword" type="password" name='repassword'
               @keyup="matchPassword">
        <h3>重复密码</h3>
      </div>

      <div class="INPUT" style="--i:7;">
        <input class="email input" type="text" required v-model="logon_form.mail" name='mail'
               @keyup="matchMail1">
        <h3>邮箱</h3>
        <span class="hidden movestyle" id="matchMail">请输入正确的邮箱格式！💤</span>
      </div>
      <div class="INPUT" style="--i:8;">
        <input class="logonBtn isErr" id="isErr" type="submit" value="注册" disabled="ture"
               @click="post_logon">
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import {request} from "@/network/requests";

export default {
  // 隐藏表单跳转链接
  data() {
    return {
      back: '',
      logon_url: '不要乱搞哥哥！',
      qq_icon: '',
      logon_form: {
        username: '',
        password: '',
        repassword: '',
        mail: ''
      }
    }
  },
  methods: {
    matchMail1() {
      if (this.logon_form.mail.indexOf('@') >= 0) {
        let qq = this.logon_form.mail.split('@')[0]
        this.qq_icon = 'http://q1.qlogo.cn/g?b=qq&nk=' + qq + '&s=640'
      } else {
        this.qq_icon = ''
      }
      if (this.logon_form.mail.indexOf('@') <= 0 && this.logon_form.mail.indexOf('.') <= 0) {
        $("#matchMail").removeClass('hidden');
        $("#isErr").attr("disabled", true);
      }
      if (this.logon_form.mail.indexOf('@') >= 0 && this.logon_form.mail.indexOf('.') >= 0) {
        $("#matchMail").addClass('hidden');
      }
      if (this.logon_form.username.length >= 4 && this.logon_form.username.length <= 15 &&
          this.logon_form.password === this.logon_form.repassword &&
          this.logon_form.mail.indexOf('@') >= 0 && this.logon_form.mail.indexOf('.') >= 0) {
        $("#isErr").attr("disabled", false);
      }
    },
    // 判断两次密码是否正确
    matchPassword() {
      if (this.logon_form.password !== this.logon_form.repassword) {
        $("#matchPassword").removeClass('hidden');
        $("#isErr").attr("disabled", true);
      }
      if (this.logon_form.password === this.logon_form.repassword) {
        $("#matchPassword").addClass('hidden');
      }
      if (this.logon_form.username.length >= 4 && this.logon_form.username.length <= 15 &&
          this.logon_form.password === this.logon_form.repassword &&
          this.logon_form.mail.indexOf('@') >= 0 && this.logon_form.mail.indexOf('.') >= 0) {
        $("#isErr").attr("disabled", false);
      }
    },
    matchUsername() {
      if (this.logon_form.username.length >= 4 && this.logon_form.username.length <= 15) {
        $("#matchUsername").addClass('hidden');
      }
      if (this.logon_form.username.length < 4 || this.logon_form.username.length > 15) {
        $("#matchUsername").removeClass('hidden');
        $("#isErr").attr("disabled", true);
      }
      if (this.logon_form.username.length >= 4 && this.logon_form.username.length <= 15 &&
          this.logon_form.password === this.logon_form.repassword &&
          this.logon_form.mail.indexOf('@') >= 0 && this.logon_form.mail.indexOf('.') >= 0) {
        $("#isErr").attr("disabled", false);
      }
    },
    post_logon() {
      request({
        method: 'post',
        url: '/user_register',
        data: this.logon_form
      }).then(res => {
        if (res.data.code === 201) {
          this.$message({
            message: this.logon_form.username + '注册成功！',
            type: 'success'
          });
          this.$router.push('/login')
        } else if (res.data.code === 400) {
          this.$message.error({
            message: this.logon_form.username + res.data.msg,
          });
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
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

.iconHead {
  z-index: -1;
  width: 40%;
  border-radius: 50%;
  position: absolute;
  left: -3rem;
}

.logonInput {
  margin-left: 20%;
  margin-top: 30%;
}


.logonBtn {
  font-weight: bold;
  font-size: 1rem;
  border-radius: 10px;
  width: 10vw;
  min-width: 5rem;
  height: 5vh;
  min-height: 2.5rem;
  background-color: #2a4a34;
  border: 0px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, .5);
  cursor: pointer;
}

.hidden {
  display: none;
}

#matchUsername {
  position: absolute;
  margin-top: 1.5%;
  left: -15rem;
  z-index: -1;
  font-weight: bold;
  color: #000000;
  background-color: rgba(255, 192, 203, .8);
  padding: 2%;
  border-radius: 10px;
  float: right;
}

#matchPassword {
  position: absolute;
  margin-top: 8%;
  z-index: -1;
  left: -16rem;
  font-weight: bold;
  color: #000000;
  background-color: rgba(255, 192, 203, .8);
  padding: 2%;
  border-radius: 10px;
  float: right;
}

#matchMail {
  position: absolute;
  z-index: -1;
  margin-top: 2%;
  left: -14rem;
  font-weight: bold;
  color: #000000;
  background-color: rgba(255, 192, 203, .8);
  padding: 2%;
  border-radius: 10px;
  float: right;
}

@media screen and (max-width: 600px){
  #matchMail{
    left: 8rem;
    right: -8rem;
    top: -2rem;
  }
  #matchPassword{
    left: 8rem;
    right: -8rem;
    top: 1rem;
  }
  #matchUsername{
    left: 8rem;
    right: -8rem;
    top: -1.5rem;
  }
}

.movestyle {
  box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
  animation: move .5s;
}

@keyframes move {

  0% {
    transform: translateX(0px);
    opacity: 0;
  }
  50% {
    transform: translateX(10px);
    opacity: 10;
  }
  100% {
    transform: translateX(0px);
    opacity: 30;
  }
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