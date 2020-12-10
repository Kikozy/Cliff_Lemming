<template>
  <div class="loginBar" @click="goLoginon">
    <a>登录</a>
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
  padding: 1rem;
  /*position: relative;*/
  /*width: 70px;*/
  border-radius: 10px;
  background-color: rgba(48,87,71,.8);
  backdrop-filter: blur(10px);
  box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.05) inset, 1px 1px 5px rgba(0, 0, 0, .5);
  transform: translateY(0px);
  transition: transform ease .3s;
}

.loginBar:hover {
  transform: translateY(-5px);
}

.loginBar a {
  color: #ffffff;
  width: 100%;
  height: 100%;
}
</style>