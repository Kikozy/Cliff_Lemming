<template>
  <div class="userMsgBar">
    <div class="userMsgBox">留言</div>
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
    width: 70px;
    border-radius: 10px;
    background-color: #617B88;
    transform: translateY(0px);
    transition: transform ease .3s;
}

.userMsgBar:hover{
    transform: translateY(-5px);
}


.userMsgBox {
    margin: 10px 10px;
}
/*用户留言结束*/
</style>