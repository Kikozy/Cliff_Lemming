<template>
  <div>
    <div class="HEAD_HOME_INFO">
        <div><MusicInfo/></div>
        <div><GameInfo/></div>
        <div><MovieInfo/></div>
    </div>
    <div class="HOME_ARTICLE">
      <div><Blog/></div>
    </div>
  </div>

</template>

<script>
//导入需要的包
import Blog from '@/components/HomeContent/Blog';
import GameInfo from "@/components/HomeContent/OtherInfo/gameInfo";
import MusicInfo from "@/components/HomeContent/OtherInfo/musicInfo";
import MovieInfo from "@/components/HomeContent/OtherInfo/movieInfo";

export default {
  components: {
    MusicInfo,
    MovieInfo,
    GameInfo,
    Blog,
  }
}
</script>

<style scoped>
.HEAD_HOME_INFO{
  width: 50vw;
  height: 30vh;
  /*background-color: pink;*/
}
.HEAD_HOME_INFO>*{
  float: left;
  margin-bottom: 1rem;
  margin-right: 2vw;
}
.HEAD_HOME_INFO>*:last-child{
  margin-right: 0;
}
</style>