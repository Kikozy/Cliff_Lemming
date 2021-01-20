<template>
  <div class="FOOTBANNER">
    <div class="FootBanner">
      <section>
        <img class="end0" src="../../assets/IMAGE/footerBanner/LemBack.png" alt="">
        <!--            <img src="../../assets/IMAGE/footerBanner/Lem0.png" alt="">-->
        <!--            <img src="../../assets/IMAGE/footerBanner/Lem1.png" alt="">-->
        <img class="end1" src="../../assets/IMAGE/footerBanner/Lem2.png" alt="">
        <img class="end2" src="../../assets/IMAGE/footerBanner/Lem3.png" alt="">
        <img class="end3" src="../../assets/IMAGE/footerBanner/Lem4.png" alt="">

        <img class="end4" src="../../assets/IMAGE/footerBanner/Lem5.png" alt="">
        <img class="end5" src="../../assets/IMAGE/footerBanner/Lem6.png" alt="">
      </section>

    </div>
<!--    <div class="CLOUD">-->
<!--      <div class="clouds">-->
<!--        <img src="../../assets/IMAGE/Home_clouds/cloud1.png" style="&#45;&#45;i:1;">-->
<!--        <img src="../../assets/IMAGE/Home_clouds/cloud2.png" style="&#45;&#45;i:2;">-->
<!--        <img src="../../assets/IMAGE/Home_clouds/cloud3.png" style="&#45;&#45;i:3;">-->
<!--        <img src="../../assets/IMAGE/Home_clouds/cloud4.png" style="&#45;&#45;i:4;">-->
<!--        <img src="../../assets/IMAGE/Home_clouds/cloud5.png" style="&#45;&#45;i:5;">-->
<!--      </div>-->
<!--    </div>-->
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
    // $(window).scroll(function () {
    //   // console.log($(".FOOTBANNER").offset().top)
    //   let bottom = $(document).scrollTop();
    //   if (bottom >= 1800 && bottom <= 3800) {
    //     // 速度  间距                 位置
    //     // 0.9*(125*(bottom/180-10)-1400)
    //     $('.end1').css('top', 0.9 * (125 * (bottom / 180 - 10) - 1400), 'px')
    //     $('.end2').css('top', 0.6 * (125 * (bottom / 180 - 10) - 1400), 'px')
    //     $('.end3').css('top', 0.3 * (115 * (bottom / 180 - 10) - 1400), 'px')
    //   } else {
    //     $('.end1').css('top', '0px')
    //     $('.end2').css('top', '0px')
    //     $('.end3').css('top', '0px')
    //   }
    // })
  }
}
</script>

<style scoped>
section {
  z-index: 2;
  position: relative;
  width: 100%;
  height: 120vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

section:before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 10000;
}

section:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: #0a2a43;*/
  z-index: 10000;
  mix-blend-mode: color;
}

section img {
  position: absolute;
  -moz-transform: rotate(18deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

/*.CLOUD {*/
/*  !*background-color: #9a6e3a;*!*/
/*  position: relative;*/
/*  width: 100%;*/
/*  height: 100vh;*/
/*  background-size: cover;*/
/*  background-position: bottom;*/
/*}*/

/*.CLOUD .clouds {*/
/*  position: absolute;*/
/*  !*background-color: red;*!*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  overflow: hidden;*/
/*}*/

/*.clouds>img{*/
/*  !* #云的移动速度# *!*/
/*  animation: animate 1s linear infinite;*/
/*  position: absolute;*/
/*  bottom: 2rem;*/
/*  max-width: 70%;*/
/*}*/

/*#云移动的开始到结尾位置*/

/*@keyframes animate {*/
/*  0% {*/
/*    transform: translateX(-130%);*/
/*  }*/
/*  100% {*/
/*    transform: translateX(130%);*/
/*  }*/
/*}*/

/*banner style end*/

</style>