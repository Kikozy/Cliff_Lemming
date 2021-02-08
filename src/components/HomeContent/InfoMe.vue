<template>
  <div class="infoMe">
    <div class="nav_info_me">
      <img class="logo" src="../../assets/IMAGE/Home/HeadB.png"/>
      <div class="nav_ul">
        <div class="iconfont icon-liuyan2" @click="num=1" :class="num===1?'active':''">
          留言
        </div>
        <div class="iconfont icon-youqinglianjie" @click="num=2" :class="num===2?'active':''">
          友链
        </div>
      </div>
    </div>
    <div class="INFO_CONTENT">
      <div v-if="num===1">
        <newmsgs/>
      </div>
      <div v-else-if="num===2">
        <friends_url/>
      </div>
    </div>
  </div>
</template>

<script>
import Newmsgs from "@/components/HomeContent/info_components/newmsgs";
import Friends_url from "@/components/HomeContent/info_components/friends_url";

export default {
  name: "InfoMe",
  components: {Friends_url, Newmsgs},
  data() {
    return {
      num: 1
    }
  },
}
</script>


<style scoped>
.infoMe {
  z-index: 999;
  border-radius: 20px;
  position: relative;
  width: 18vw;
  min-width: 10rem;
  height: 25rem;
  background-color: #171b21;
  box-shadow: 15px 15px 40px rgba(0, 0, 0, .3);
}

.logo {
  position: absolute;
  width: 5rem;
  border-radius: 50%;
  top: -2rem;
  transition: box-shadow ease .3s;
}

.logo:hover {
  box-shadow: 0 0 20px #00c0ff;
}

.nav_info_me {
  display: flex;
  border-radius: 10px;
}

.nav_ul {
  color: white;
  width: 100%;
  display: flex;
  padding: 1rem 1rem 1rem 5rem;
}

.nav_ul * {
  cursor: pointer;
  margin-left: 1rem;
  padding: .5rem;
  text-align: center;
  border-radius: 10px;
  width: 100%;
  transition: ease all .3s;
}

.nav_ul *:hover {
  box-shadow: 0 0 20px #017ca5;
  background-color: #017ca5;
}

.active {
  box-shadow: 0 0 20px #017ca5;
  background-color: #017ca5;
}

.INFO_CONTENT {
  width: 100%;
  height: 20rem;
  overflow: scroll;
}

</style>