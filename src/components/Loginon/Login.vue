<template>
  <div class="LoginForm">
    <div class="loginInput">
      <!--  登录表单   -->
      <el-form class="Login-el">
<!--        <el-form-item id="username" label="账号" prop="name">-->
          <input class="username input" type="text" placeholder="用户名">
<!--        </el-form-item>-->
<!--        <el-form-item label="密码" prop="name">-->
          <input class="password input" type="password" placeholder="密码">
<!--        </el-form-item>-->
<!--        <el-form-item>-->
          <input class="loginBtn" type="submit" value="登录">
<!--        </el-form-item>-->
      </el-form>
    </div>
  </div>

</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
@import '../../assets/CSS/Loginon/login.css';
/*@import '../../assets/CSS/IconFont/iconfont.css';*/
</style>