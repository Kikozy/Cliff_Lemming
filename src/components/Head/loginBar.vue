<template>
  <div class="loginBar" @click="goLoginon">
    <a class="logIcon iconfont icon-denglu1"></a>
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
  padding: .5rem;
  /*position: relative;*/
  /*width: 70px;*/
  border-radius: 10px;
  background-color: rgba(48,87,71,.8);
  backdrop-filter: blur(10px);
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.05) inset, 1px 1px 5px rgba(0, 0, 0, .5);
  transform: translateY(0px);
  transition: transform ease .3s;
}

.loginBar:hover {
  transform: translateY(-5px);
}
.logIcon{
  color: #cfcfcf;
  font-size: 2rem;
}
</style>