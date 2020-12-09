<template>
  <div class="home">
    <div class="headTop">
      <Login/>
      <MusicBar/>
      <userMsgBar/>
      <itemHtml/>
    </div>
    <!--    子路由显示占位符    -->
    <router-view/>
  </div>
</template>

<script>
import MusicBar from "@/components/Head/MusicBar";
import Login from "@/components/Head/loginBar";
import userMsgBar from "@/components/Head/userMsgBar";
import itemHtml from "@/components/Head/itemHtml";

export default {
  components: {
    itemHtml,
    userMsgBar,
    Login,
    MusicBar
  },
  methods: {}
}
</script>
<style scoped>
/* scoped是局部使用 */
/*导入外部css*/
@import '../assets/CSS/CommonHead.css';


</style>
