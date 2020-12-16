<template>
  <div class="HOME">
    <Banner/>
    <div class="HomeContent">
      <div class="HContent w">
        <InfoMe/>
        <div class="OtherInfo">
          <GameInfo/>
          <Musicinfo/>
          <MovieInfo/>
        </div>
        <Blog/>

      </div>
    </div>
  </div>

</template>

<script>
//导入需要的包
import Banner from '@/components/HomeBanner/Banner';
import Blog from '@/components/HomeContent/Blog';
import InfoMe from "@/components/HomeContent/InfoMe";
import GameInfo from "@/components/HomeContent/OtherInfo/gameInfo";
import Musicinfo from "@/components/HomeContent/OtherInfo/musicInfo";
import MovieInfo from "@/components/HomeContent/OtherInfo/movieInfo";

export default {
  components: {
    Musicinfo,
    MovieInfo,
    GameInfo,
    Banner,
    Blog,
    InfoMe,
  }
}
</script>

<style scoped>
.OtherInfo>*{
  margin-left: 3rem;
  float: left;
}
.HomeContent {
  width: 100%;
  position: absolute;
  background-color: white;
  box-shadow: 0 -40px 30px white;
}

.HContent {
  width: 70%;
  height: 100rem;
}
</style>