<template>
  <div class="LogonForm">
    <div class="logonInput">
      <!-- 注册表单   -->
      <form class="Logon" :action=logon_url method="post">
        <input class="username input" type="text" name='username' placeholder="用户名" @keyup="matchUsername">
        <span class="hidden movestyle" id="matchUsername">请输入用户名（至少4位）！💤</span>
        <input class="password input" type="password" name='password' placeholder="密码" @keyup="matchPassword">
        <span class="hidden movestyle" id="matchPassword">两次密码不一致！💤</span>
        <!--当输入完成后自动执行函数-->
        <input class="repassword input" type="password" name='repassword' placeholder="确认密码" @keyup="matchPassword">
        <input class="email input" type="text" name='mail' placeholder="邮箱" @keyup="matchMail">
        <span class="hidden movestyle" id="matchMail">请输入正确的邮箱格式！💤</span>
        <input class="logonBtn isErr" id="isErr" type="submit" value="注册" disabled="ture" @click="get_post_logon">
      </form>
    </div>
  </div>
</template>

<script>
import {post_url} from "@/network/post_base_url";
import $ from "jquery";

export default {
  // 隐藏表单跳转链接
  data() {
    return {
      back: '',
      logon_url: '不要乱搞哥哥！'
    }
  },

  methods: {
    // 判断两次密码是否正确
    matchPassword() {
      var username = $("input[name='username']").val();
      var mail = $("input[name='mail']").val();
      var password = $("input[name='password']").val();
      var repassword = $("input[name='repassword']").val();
      if (password !== repassword) {
        $("#matchPassword").removeClass('hidden');
        $("#isErr").attr("disabled", true);
      }
      if (password === repassword) {
        $("#matchPassword").addClass('hidden');
      }
      if (username.length >= 0 && password === repassword && mail.indexOf('@') >= 0 && mail.indexOf('.') >= 0) {
        $("#isErr").attr("disabled", false);
      }
    },
    // 判断邮箱格式是否正确
    matchMail() {
      var username = $("input[name='username']").val();
      var password = $("input[name='password']").val();
      var repassword = $("input[name='repassword']").val();
      var mail = $("input[name='mail']").val();
      // 如果mail里面是没有@和.com这个字符将执行下面，（xxx >= 0则是判断里面有）
      if (mail.indexOf('@') <= 0 && mail.indexOf('.') <= 0) {
        $("#matchMail").removeClass('hidden');
        $("#isErr").attr("disabled", true);
      }
      if (mail.indexOf('@') >= 0 && mail.indexOf('.') >= 0) {
        $("#matchMail").addClass('hidden');
      }
      if (username.length >= 4 && password === repassword && mail.indexOf('@') >= 0 && mail.indexOf('.') >= 0) {
        $("#isErr").attr("disabled", false);
      }
    },
    matchUsername() {
      var username = $("input[name='username']").val();
      var password = $("input[name='password']").val();
      var repassword = $("input[name='repassword']").val();
      var mail = $("input[name='mail']").val();
      if (username.length >= 4) {
        $("#matchUsername").addClass('hidden');
      }
      if (username.length < 4) {
        $("#matchUsername").removeClass('hidden');
        $("#isErr").attr("disabled", true);
      }
      if (username.length >= 4 && password === repassword && mail.indexOf('@') >= 0 && mail.indexOf('.') >= 0) {
        $("#isErr").attr("disabled", false);
      }
    },

    get_post_logon() {
      this.logon_url = post_url() + '/user_register'
    }
  }
}
</script>

<style scoped>
/*@import '../../assets/CSS/Loginon/logon.css';*/
.logonInput {
    margin-left: 20%;
    margin-top: 30%;
}

.input{
    box-shadow: 0 5px 5px rgba(0,0,0,.5);
    padding-left: 1rem;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 3%;
    border: 0px;
    width: 15vw;
    height: 3vw;
    border-radius: 10pt;
}

.logonBtn {
    font-weight: bold;
    font-size: 1rem;
    border-radius: 10px;
    width: 10vw;
    height: 5vh;
    background-color: #2a4a34;
    border: 0px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, .5);
    cursor: pointer;
}

.hidden {
    display: none;
}

#matchUsername{
    position: absolute;
    margin-top: 1.5%;
    left: -9rem;
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
#matchMail{
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

.movestyle{
    box-shadow: 0 5px 5px rgba(0,0,0,.5);
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