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
  display: flex;
  margin: 1rem .3rem .5rem .3rem;
}

.logIcon {
  background-color: rgba(48, 87, 71, .8);
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.05) inset, 1px 1px 5px rgba(0, 0, 0, .5);
  backdrop-filter: blur(10px);
  position: relative;
  align-self: center;
  padding: .6rem;
  color: #cfcfcf;
  font-size: 2rem;
}

</style>