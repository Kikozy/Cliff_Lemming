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
@import '../../assets/CSS/Loginon/logon.css';
</style>