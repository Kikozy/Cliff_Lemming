<template>
  <div class="center">
    <div class="center_left_box">
      <h1>控制中心</h1>
      <div><h1>用户管理</h1></div>
      <div><h1>文章管理</h1></div>
      <div><h1>音乐管理</h1></div>
      <div><h1>其他</h1></div>
      <div><h1>其他</h1></div>
      <div><h1>其他</h1></div>
      <div><h1>其他</h1></div>
      <div><h1>其他</h1></div>
      <div><h1>其他</h1></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "LCCenter"
}
</script>

<style scoped>
.center {
  background-color: pink;
  width: 100%;
  height: 100%;
}

.center_left_box{
  border-radius: 10px;
  box-shadow: 10px 5px 20px rgba(0,0,0,0.5);
  width: 15rem;
  height: 100%;
  background-color: #617b88;
}


.center_left_box div {
  cursor: pointer;
  background-color: #1e4655;
  width: 10rem;
  height: 4rem;
  border-radius: 10px;
  margin: 2rem;
  transform: translateY(0);
  box-shadow: 0 0 0 #000000;
  transition: transform ease .4s, box-shadow ease .4s;
}

.center_left_box div:hover {
  box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
  transform: translateY(-4px);
}

.center_left_box div h1 {
  color: #cfcfcf;
  padding: 1rem;
  float: right;
  font-size: 1.5rem;
  text-align: center;
}
</style>