<template>
  <div class="FOOTBANNER">
    <div class="FootBanner">
      <img class="end0" src="../../assets/IMAGE/footerBanner/LemBack.png" alt="">
      <!--            <img src="../../assets/IMAGE/footerBanner/Lem0.png" alt="">-->
      <!--            <img src="../../assets/IMAGE/footerBanner/Lem1.png" alt="">-->
      <img class="end1" src="../../assets/IMAGE/footerBanner/Lem2.png" alt="">
      <img class="end2" src="../../assets/IMAGE/footerBanner/Lem3.png" alt="">
      <img class="end3" src="../../assets/IMAGE/footerBanner/Lem4.png" alt="">
      <img class="end4" src="../../assets/IMAGE/footerBanner/Lem5.png" alt="">
      <img class="end5" src="../../assets/IMAGE/footerBanner/Lem6.png" alt="">
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      imgNum: 0
    }
  },
  name: "end",
  mounted() {
    // 监听滚动条
    $(window).scroll(function () {
      // console.log($(".FOOTBANNER").offset().top)
      let bottom = $(document).scrollTop();
      if (bottom >= 1800 && bottom <= 3800) {
        // 速度  间距                 位置
        // 0.9*(125*(bottom/180-10)-1400)
        $('.end1').css('top', 0.9 * (125 * (bottom / 180 - 10) - 1400), 'px')
        $('.end2').css('top', 0.6 * (125 * (bottom / 180 - 10) - 1400), 'px')
        $('.end3').css('top', 0.3 * (115 * (bottom / 180 - 10) - 1400), 'px')
      } else{
        $('.end1').css('top', '0px')
        $('.end2').css('top', '0px')
        $('.end3').css('top', '0px')
      }
    })
  }
}
</script>

<style scoped>
.FOOTBANNER {
  width: 100%;
  height: 100vh;
  position: relative;
}

.FootBanner > * {
  width: 100%;
  height: 100%;
  -moz-transform: rotate(18deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  position: absolute;
  background-size: cover;
}

/*选择第二个和第四个*/
.FootBanner > *:nth-child(-n+4):nth-child(n+2) {
  /*bottom: 0px;*/
  z-index: -1;
}

.end0 {
  z-index: -1;
}

</style>