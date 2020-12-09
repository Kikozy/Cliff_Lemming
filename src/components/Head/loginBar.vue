<template>
  <div class="loginBar">
    <a @click="goLoginon">登录</a>
  </div>
</template>

<script>
export default {
  methods: {
    //跳转到登录界面
    goLoginon() {
      this.$router.push('/loginon')
    }
  }
}
</script>

<style scoped>
.loginBar {
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  margin: .5rem;
  /*height: 60%;*/
  padding:1rem;
  /*position: relative;*/
  /*width: 70px;*/
  border-radius: 10px;
  background-color: #305747;
  transform: translateY(0px);
  transition: transform ease .3s;
}

.loginBar:hover {
  transform: translateY(-5px);
}

.loginBar a {
  color: #cfcfcf;
  width: 100%;
  height: 100%;
}
</style>