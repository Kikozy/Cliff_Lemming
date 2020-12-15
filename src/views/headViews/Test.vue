<template>
  <div>
    <h1>测试</h1>
    <form class="addInfo" :action=add_music method="post">
      <div class="leftInput">
        <input class="id_input" type="text" name='id' placeholder="歌曲id">
        <input class="name_input" type="text" name='name' placeholder="歌曲名称">
        <input class="singer_input" type="text" name='singer' placeholder="歌手">
      </div>
      <div class="rightInput">
        <input class="url_input" type="text" name='url' placeholder="播放地址">
        <input class="pic_input" type="text" name='pic' placeholder="图片地址">
        <input class="date_input" type="text" name='date' placeholder="日期">
      </div>
      <input class="addInfoBtn" type="submit" value="添加" disabled="true">
    </form>
  </div>
</template>

<script>
export default {
  name: "Test"
}
</script>

<style scoped>
.addInfo {
  float: left;
  width: 35rem;
  background-color: rgba(111, 111, 111, .7);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  margin: 10rem;
  padding: 2rem;
}

input {
  box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
  padding-left: 1rem;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 3%;
  border: 0px;
  width: 15vw;
  height: 3vw;
  border-radius: 10pt;
}

.leftInput {
  width: 15rem;
  float: left;
}

.rightInput {
  width: 15rem;
  float: right;
}

.addInfoBtn {
  margin-left: 10rem;
  margin-bottom: 0;
}
</style>