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
  font-weight: bold;
  text-align: center;
  margin: .5rem;
  border-radius: 10px;
  background-color: rgba(48, 87, 71, .8);
  backdrop-filter: blur(10px);
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.05) inset, 1px 1px 5px rgba(0, 0, 0, .5);
  transform: translateY(0px);
  transition: transform ease .3s;
}

.loginBar:hover {
  transform: translateY(-5px);
}

.logIcon {
  padding: .5rem;
  color: #cfcfcf;
  font-size: 2rem;
}
</style>