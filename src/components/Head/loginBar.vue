<template>
  <div class="loginBar">
    <router-link to="/login">
      <a class="logIcon iconfont icon-user"></a>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.loginBar {
  cursor: pointer;
  display: flex;
  margin: 1.5rem .3rem .5rem .3rem;
  text-shadow: 2px 2px 2px #000;
}

.logIcon {
  border-radius: 10px;
  position: relative;
  align-self: center;
  padding: .6rem;
  color: #cfcfcf;
  transition: ease all .3s;
}
.logIcon:after{
  content: 'SignIn';
  padding-left: .2rem;
}
.logIcon:hover{
  text-shadow: none;
  background-color: #305044;
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1) inset, 1px 1px 5px rgba(0, 0, 0, .5);
}

</style>