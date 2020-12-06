<template>
  <div class="LoginForm">
    <div class="loginInput">
      <!--  登录表单   -->
      <form class="Login" action="">
<!--        <el-form-item id="username" label="账号" prop="name">-->
          <input class="username input" type="text" name="username" placeholder="用户名">
<!--        </el-form-item>-->
<!--        <el-form-item label="密码" prop="name">-->
          <input class="password input" type="password" name="password"  placeholder="密码">
<!--        </el-form-item>-->
<!--        <el-form-item>-->
          <input class="loginBtn" type="submit" value="登录">
<!--        </el-form-item>-->
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      login_url:''
    }
  },
  methods:{
    get_post_login(){
      this.login_url=''
    }
  }
}
</script>

<style scoped>
@import '../../assets/CSS/Loginon/login.css';
/*@import '../../assets/CSS/IconFont/iconfont.css';*/
</style>