<template>
  <div class="HOME">
    <!--    <Banner/>-->
    <div class="HomeContent">
      <div class="HContent w">
        <!--        <InfoMe/>-->
        <div class="OtherInfo">
          <div class="GameInfo">
            <GameInfo/>
          </div>
          <div class="MusicInfo">
            <MusicInfo/>
          </div>
          <div class="MovieInfo">
            <MovieInfo/>
          </div>
        </div>
        <Blog/>
      </div>
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
  },
  mounted() {
  }
}
</script>

<style scoped>
.OtherInfo {
  width: 100%;
}

.OtherInfo > * {
  float: left;
  margin-left: 2%;
}

</style>