<template>
  <div class="HomeBanner">
    <div class="backImg">
      <div id="isshowBack" class="BACKIMGS">
        <img class="imgback" src="../../assets/IMAGE/LemBack/LemBack.png" alt="">
        <img class="lem1" src="../../assets/IMAGE/LemBack/Lem1.png" alt="">
        <img class="lem2" src="../../assets/IMAGE/LemBack/Lem2.png" alt="">
        <img class="lem3" src="../../assets/IMAGE/LemBack/Lem3.png" alt="">
        <img class="lem4" src="../../assets/IMAGE/LemBack/Lem4.png" alt="">
        <div>
          <h6 class="backWord">Lemming</h6>
        </div>
        <img class="lem5" src="../../assets/IMAGE/LemBack/Lem5.png" alt="">
        <img class="lem6" src="../../assets/IMAGE/LemBack/Lem6.png" alt="">

      </div>

    </div>
    <div class="aboutBox">
      <a href="javascript:;">
        <img class="logo" src="../../assets/IMAGE/Home/HeadB.png"/>
        <h4 class="Name">Lemming</h4>
        <div class="bannerInfo">
          <ul>
            <li>
              <div>博客</div>
            </li>
            <li>
              <div>信息</div>
            </li>
            <li>
              <div>其他</div>
            </li>
          </ul>
        </div>
      </a>
    </div>
    <!--    <div class="clouds">-->
    <!--      <img src="../../assets/IMAGE/Home_clouds/cloud1.png" style="&#45;&#45;i: 1"/>-->
    <!--      <img src="../../assets/IMAGE/Home_clouds/cloud2.png" style="&#45;&#45;i: 2"/>-->
    <!--      <img src="../../assets/IMAGE/Home_clouds/cloud3.png" style="&#45;&#45;i: 3"/>-->
    <!--      <img src="../../assets/IMAGE/Home_clouds/cloud4.png" style="&#45;&#45;i: 4"/>-->
    <!--      <img src="../../assets/IMAGE/Home_clouds/cloud5.png" style="&#45;&#45;i: 5"/>-->
    <!--    </div>-->
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Banner",
  mounted() {
    // 监听滚动条
    $(window).scroll(function () {
      let top = $(document).scrollTop();
      if (top <= 800) {
        $('#isshowBack').addClass('BACKIMGS')
        $('.aboutBox').css('top', -top * 0.3 + 280, '%')
        $('.backWord').css('opacity', -top / 150 * 1 + 1, '%')
        $('.lem0').css('top', top * .8, 'px')
        $('.lem1').css('left', top * .3, 'px').css('top', top * .9, 'px')
        $('.lem2').css('top', top * .9, 'px')
        $('.lem3').css('top', top * .6, 'px')
        $('.lem4').css('top', top * .3, 'px')
        $('.lem5').css('bottom', top * .05, 'px')
        $('.lem6').css('bottom', top * .05, 'px')
      } else {
        $('#isshowBack').removeClass('.BACKIMGS')
      }
    })
  }
}
</script>

<style scoped>
/*banner style start*/
.HomeBanner {
  margin-bottom: 5rem;
}

.backImg {
  width: 100%;
  height: 80vh;
  /*background: url(../../assets/IMAGE/Home/BackC.png);*/
  background-size: cover;
  z-index: -1;
}

.BACKIMGS {
  top: 5rem;
}

.BACKIMGS > * {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  /*top: -5rem;*/
}


.backWord {
  opacity: 100%;
  display: block;
  position: fixed;
  left: 50%;
  margin-left: -30%;
  top: 50%;
  font-size: 12VW;
  font-weight: bold;
}

.aboutBox {
  position: absolute;
  z-index: 1;
  /*background-color: rgba(140, 158, 168, .4);*/
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  width: 30vw;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  line-height: 4vw;
  text-align: center;
  border-radius: 5%;
  backdrop-filter: blur(5px);
  box-shadow: .5px .5px 1px rgba(255, 255, 255, 0.2) inset, 1px 1px 5px rgba(0, 0, 0, .4);
  transition: background-color ease .5s, box-shadow ease .5s, width ease .5s, backdrop-filter ease .3s;
}

.aboutBox:hover {
  box-shadow: .5px .5px 1px rgba(255, 255, 255, 0.3) inset, 4px 4px 10px rgba(0, 0, 0, .2);
  /*background-color: rgba(71, 100, 122, 0.2);*/
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  backdrop-filter: blur(5px);
  width: 32vw;
}

.logo {
  width: 30%;
  border-radius: 50%;
  margin-top: -30px;
  box-shadow: 0 0 30px rgba(50, 69, 85, 0.8);
}

.Name {
  font-size: 2vw;
}

.bannerInfo {
  background-color: #00b1ff;
}

.bannerInfo > ul > li {
  margin-left: 2.5%;
  margin-top: 5%;
  margin-bottom: 2.5%;
  border-radius: 10px;
  float: left;
  /*background-image: linear-gradient(rgba(0, 0, 0, 0), #8c9ea8);*/
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  width: 30%;
  height: 7rem;
  box-shadow: 0 0px 0px #000000;
  transform: translateY(0px);
  transition: transform ease .3s, box-shadow ease .3s;
}

.bannerInfo > ul > li:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 5px rgba(0, 0, 0, .4);
}

.clouds img {
  position: absolute;
  bottom: 0;
  max-width: 70%;
  /* #云的移动速度# */
  animation: animation calc(8s * var(--i)) linear infinite;
}

/* #云移动的开始到结尾位置# */
@keyframes animation {
  0% {
    transform: translateX(-130%);
  }
  100% {
    transform: translateX(130%);
  }
}

/*banner style end*/
</style>