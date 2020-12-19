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
import $ from 'jquery'

export default {
  components: {
    Musicinfo,
    MovieInfo,
    GameInfo,
    Banner,
    Blog,
    InfoMe,
  },
  mounted() {
    // 监听滚动条
    $(window).scroll(function () {
      let top = $(document).scrollTop();
      $('.HomeContent').css('background-image', 'linear-gradient(to bottom right, rgba(48, 67, 82,' + top / 200 * 0.3 + '), rgba(52, 49, 66,' + top / 100 * 0.3 + '))')
    })
  }
}
</script>

<style scoped>
.OtherInfo > * {
  margin-left: 4%;
  float: left;
}

.HomeContent {
  padding-top: 4rem;
  width: 100%;
  position: absolute;
  background-image: linear-gradient(to bottom right, rgba(48, 67, 82, 0), rgba(52, 49, 66, 0)); /*对角渐变*/
  box-shadow: 0 -40px 30px rgb(255, 252, 252);
}

.HContent {
  width: 70%;
  height: 100rem;
}
</style>