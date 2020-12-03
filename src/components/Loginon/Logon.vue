<template>
<div class="LogonForm">
    <div class="logonInput">
      <!--  登录表单   -->
      <form  class="Logon-el" action="http://127.0.0.1:5000/api/cliff/login" method="post">
<!--        <el-form-item id="username" label="账号" prop="name">-->
          <input class="username input" type="text" name = 'username' placeholder="用户名">
<!--        </el-form-item>-->
<!--        <el-form-item label="密码" prop="name">-->
          <input class="password input" type="password" name = 'password' placeholder="密码">
<!--        </el-form-item>-->
<!--        <el-form-item label="确认密码" prop="name">-->
          <input class="repassword input" type="password" name = 'repassword' placeholder="确认密码">
<!--        </el-form-item>-->
<!--        <el-form-item label="邮箱" prop="name">-->
          <input class="email input" type="text" name = 'mail' placeholder="邮箱">
<!--        </el-form-item>-->
<!--        <el-form-item>-->
          <input class="logonBtn" type="submit" value="注册">
<!--        </el-form-item>-->
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import '../../assets/CSS/Loginon/logon.css';
  /*@import '../../assets/CSS/IconFont/iconfont.css';*/
</style>