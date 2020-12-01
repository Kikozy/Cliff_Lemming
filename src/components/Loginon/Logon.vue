<template>
<div class="LogonForm">
    <div class="logonInput">
      <!--  登录表单   -->
      <el-form  class="Logon-el">
<!--        <el-form-item id="username" label="账号" prop="name">-->
          <input class="username input" type="text" placeholder="用户名">
<!--        </el-form-item>-->
<!--        <el-form-item label="密码" prop="name">-->
          <input class="password input" type="password" placeholder="密码">
<!--        </el-form-item>-->
<!--        <el-form-item label="确认密码" prop="name">-->
          <input class="repassword input" type="password" placeholder="确认密码">
<!--        </el-form-item>-->
<!--        <el-form-item label="邮箱" prop="name">-->
          <input class="email input" type="text" placeholder="邮箱">
<!--        </el-form-item>-->
<!--        <el-form-item>-->
          <input class="logonBtn" type="submit" value="注册">
<!--        </el-form-item>-->
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logon"
}
</script>

<style scoped>
  @import '../../assets/CSS/Loginon/logon.css';
  /*@import '../../assets/CSS/IconFont/iconfont.css';*/
</style>