<template>
  <div class="LoginForm">
    <div class="loginInput">
      <!--  登录表单   -->
      <form class="Login" :action=login_url method="post">
<!--        <el-form-item id="username" label="账号" prop="name">-->
          <input class="username input" type="text" name="username" placeholder="用户名">
<!--        </el-form-item>-->
<!--        <el-form-item label="密码" prop="name">-->
          <input class="password input" type="password" name="password"  placeholder="密码">
<!--        </el-form-item>-->
<!--        <el-form-item>-->
          <input class="loginBtn" type="submit" value="登录" @click="get_post_login">
<!--        </el-form-item>-->
      </form>
    </div>
  </div>

</template>

<script>

import {request} from "@/network/requests";
import {post_url} from "@/network/post_base_url";

export default {
  name: "Login",
  data(){
    return{
      login_url:'哥不要乱搞啊'
    }
  },
  methods:{
    get_post_login(){
      this.login_url = post_url()+'/user_login'
    }
  }
}
</script>

<style scoped>
@import '../../assets/CSS/Loginon/login.css';

</style>