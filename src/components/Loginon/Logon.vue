<template>
  <div class="LogonForm">
    <img class="iconHead" :src="qq_icon" alt="">
    <div class="logonInput">
      <!-- 注册表单   -->
      <!--      <form class="Logon" :action=logon_url method="post">-->
      <input class="username input" v-model="logon_form.username" type="text" name='username'
             placeholder="用户名"
             @keyup="matchUsername">
      <span class="hidden movestyle" id="matchUsername">请输入用户名（4-15位）！💤</span>
      <input class="password input" v-model="logon_form.password" type="password" name='password'
             placeholder="密码"
             @keyup="matchPassword">
      <span class="hidden movestyle" id="matchPassword">两次密码不一致（4-12位）！💤</span>
      <!--当输入完成后自动执行函数-->
      <input class="repassword input" v-model="logon_form.repassword" type="password" name='repassword'
             placeholder="确认密码"
             @keyup="matchPassword">
      <input class="email input" type="text" v-model="logon_form.mail" name='mail'
             placeholder="邮箱"
             @keyup="matchMail1">
      <span class="hidden movestyle" id="matchMail">请输入正确的邮箱格式！💤</span>
      <input class="logonBtn isErr" id="isErr" type="submit" value="注册" disabled="ture" @click="post_logon">
      <!--      </form>-->
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
      qq_icon:'',
      logon_form: {
        username: '',
        password: '',
        repassword: '',
        mail: ''
      }
    }
  },
  methods: {
    matchMail1(){
      if (this.logon_form.mail.indexOf('@') >= 0) {
        let qq = this.logon_form.mail.split('@')[0]
        this.qq_icon = 'http://q1.qlogo.cn/g?b=qq&nk=' + qq + '&s=640'
      }else {
        this.qq_icon = ''
      }
      if (this.logon_form.mail.indexOf('@') <= 0 && this.logon_form.mail.indexOf('.') <= 0) {
        $("#matchMail").removeClass('hidden');
        $("#isErr").attr("disabled", true);
      }
      if (this.logon_form.mail.indexOf('@') >= 0 && this.logon_form.mail.indexOf('.') >= 0) {
        $("#matchMail").addClass('hidden');
      }
      if (this.logon_form.username.length >= 4 &&this.logon_form.username.length <= 15 &&
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
      if (this.logon_form.username.length >= 4 &&this.logon_form.username.length <= 15 &&
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
      if (this.logon_form.username.length >= 4 &&this.logon_form.username.length <= 15 &&
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
.iconHead{
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
  left: -7rem;
  z-index: -1;
  font-weight: bold;
  color: #000000;
  background-color: rgba(255, 192, 203, .8);
  padding: 2%;
  border-radius: 10px;
  float: right;
}

#matchPassword {
  /*font-size: 1rem;*/
  position: absolute;
  margin-top: 8%;
  z-index: -1;
  left: -4rem;
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
  left: -7rem;
  font-weight: bold;
  color: #000000;
  background-color: rgba(255, 192, 203, .8);
  padding: 2%;
  border-radius: 10px;
  float: right;
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

</style>