<template>
  <div class="home">
    <!--  加载动画  -->
    <LoadCloud/>
    <div class="headTop">
      <Login/>
      <MusicBar/>
      <userMsgBar/>
      <itemHtml/>
    </div>
    <div class="HOME">
      <Banner/>
      <div class="HomeContent">
        <div class="HContent w">
          <div class="INFO_ME_BOX"><InfoMe/></div>
          <div class="CONTENT">
            <transition name="showUp">
              <!--     keep-alive 保持状态（避免重复渲染）-->
              <keep-alive>
                <!--    子路由显示占位符    -->
                <router-view/>
              </keep-alive>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/HomeBanner/Banner';
import InfoMe from "@/components/HomeContent/InfoMe";
import LoadCloud from "@/components/Loading/LoadCloud";
import MusicBar from "@/components/Head/MusicBar";
import Login from "@/components/Head/loginBar";
import userMsgBar from "@/components/Head/userMsgBar";
import itemHtml from "@/components/Head/itemHtml";

export default {
  components: {
    Banner,
    InfoMe,
    LoadCloud,
    itemHtml,
    userMsgBar,
    Login,
    MusicBar
  },
}
</script>
<style scoped>
/* scoped是局部使用 */
/*导入外部css*/
@import 'http://at.alicdn.com/t/font_2266444_6eftw463mcr.css';
@import '../assets/CSS/CommonHead.css';
.HomeContent {
  padding-top: 3rem;
  width: 100%;
  position: absolute;
  background-image: linear-gradient(to bottom, #101a24, #2c5364); /*对角渐变*/
  box-shadow: 0 -20px 30px #101a24;
}

.HContent {
  width: 70rem;
  height: 100rem;
}

.CONTENT{
  /*padding-left: 2rem;*/
  width: 52vw;
}
.INFO_ME_BOX{
  float: right;
  position: sticky;
  right: 15vw;
  top: 10%;
}
/*定义组件动画start*/

.showUp-leave-to {
  transform: translateY(1000px);
  opacity: 0;
  height: 0;
  position: absolute;
}

.showUp-enter {
  transform: translateY(1000px);
  opacity: 0;
  height: 0;
  position: absolute;
}

/*进入和离开执行的时间*/
.showUp-enter-active, .showUp-leave-active {
  transition: all ease 1s;
}

/*定义组件动画end*/
</style>
