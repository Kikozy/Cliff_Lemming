<template>
  <div class="MusicBar base_linear">
    <div class="music_info_title base_linear">
      <h1>音乐</h1>
      <p>博主分享</p>
    </div>
    <div class="music_info"></div>
  </div>
</template>

<script>
export default {
  name: "musicInfo"
}
</script>

<style scoped>
.MusicBar {
  padding: 1rem;
  background-color: #4a5063; /*不支持渐变默认的颜色*/
  width: 10rem;
  height: 10rem;
  border-radius: 20px;
  margin-bottom: 2rem;
}

.music_info_title {
  color: #ffffff;
  position: absolute;
  top: -1.5rem;
  background-color: #4a5063;
  border-radius: 10px;
  padding: .5rem;
}

.base_linear {
  /*border-radius: 10px;*/
  /*background-color: #4a5063; !*不支持渐变默认的颜色*!*/
  background-image: linear-gradient(to bottom right, rgba(48, 67, 82, .5), rgba(52, 49, 66, .5)); /*对角渐变*/
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 2px 2px 5px rgba(0, 0, 0, .5);
  backdrop-filter: blur(10px);
}
</style>