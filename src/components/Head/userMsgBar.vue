<template>
  <div class="userMsgBar">
    <a class="msgIcon iconfont icon-liuyan1"></a>
  </div>
</template>

<script>
export default {
  name: "userMsgBar"
}
</script>

<style scoped>
/*用户留言开始*/
.userMsgBar {
  margin: .2%;
  height: 90%;
  width: 65px;
  border-radius: 10px;
  /*background-color: rgba(97, 123, 136, .7);*/
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  backdrop-filter: blur(10px);
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1) inset, 1px 1px 5px rgba(0, 0, 0, .5);
  transform: translateY(0px);
  transition: transform ease .3s;
}

.userMsgBar:hover {
  transform: translateY(-5px);
}

.msgIcon {
  color: #cfcfcf;
  margin: 1rem;
  font-size: 2rem;
}

/*用户留言结束*/
</style>