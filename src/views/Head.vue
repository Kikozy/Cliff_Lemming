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
    <!--    子路由显示占位符    -->
    <!--     keep-alive 保持状态（避免重复渲染）-->
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
import LoadCloud from "@/components/Loading/LoadCloud";
import MusicBar from "@/components/Head/MusicBar";
import Login from "@/components/Head/loginBar";
import userMsgBar from "@/components/Head/userMsgBar";
import itemHtml from "@/components/Head/itemHtml";

export default {
  components: {
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

</style>
