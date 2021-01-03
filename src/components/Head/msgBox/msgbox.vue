<template>
  <div class="MSGBOX">
    <div class="msgInfo">
      <img class="userLogo" src="" alt="">
    </div>
    <div class="msgContent">内容</div>

  </div>
</template>

<script>
export default {
  name: "msgbox"
}
</script>

<style scoped>
.MSGBOX {
  width: 30vw;
  height: 20vh;
  background-color: #55a532;
  border-radius: 10px;
  padding: 1%;
}

.msgInfo {
  float: left;
  width: 10%;
  height: 95%;
  background-color: #1e4655;
  padding: 1%;
}

.userLogo {
  width: 5vw;
  height: 5vw;
  background-color: red;
  border-radius: 50%;
}

.msgContent {
  width: 98%;
  height: 95%;
  background-color: #cfcfcf;
  padding: 1%;
}
</style>