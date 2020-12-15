<template>
  <div class="center">
    <div class="center_left_box">
      <div id="admin_toback" @click="center_toback">
        <i class="el-icon-arrow-left">Home</i>
      </div>
      <h1 class="centerTitle">控制中心</h1>
      <router-link to="/lemming_admin/data_info">
        <div class="compBtn"><h1>数据信息</h1></div>
      </router-link>
      <router-link to="/lemming_admin/users_admin">
        <div class="compBtn"><h1>用户管理</h1></div>
      </router-link>
      <router-link to="/lemming_admin/article_admin">
        <div class="compBtn"><h1>文章管理</h1></div>
      </router-link>
      <router-link to="/lemming_admin/userMsg_admin">
        <div class="compBtn"><h1>留言管理</h1></div>
      </router-link>
      <router-link to="/lemming_admin/music_admin">
        <div class="compBtn"><h1>音乐管理</h1></div>
      </router-link>
      <div class="compBtn"><h1>-</h1></div>
    </div>
    <div class="center_right_info">
      <!--      // 局部刷新-->
      <router-view v-if="isRouteAlive"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "LCCenter",
  provide() {
    return {
      // 局部刷新
      reload: this.reload
    }
  },
  data() {
    return {
      // 局部刷新
      isRouteAlive: true
    }
  },
  methods: {
    center_toback() {
      this.$router.push('/')
    },
    // 局部刷新
    reload() {
      this.isRouteAlive = false
      this.$nextTick(() => {
        this.isRouteAlive = true
      })
    }
  }
}
</script>

<style scoped>
#admin_toback {
  cursor: pointer;
  position: fixed;
  z-index: 1;
  left: 11.5rem;
  top: 2rem;
  width: 4.5rem;
  height: 2rem;
  border-radius: 10px;
  background-color: #4d626c;
  transition: transform ease .6s, box-shadow ease .4s;
}
#admin_toback i{
  font-size: 1rem;
  font-weight: bold;
}
#admin_toback:hover{
  transform: translateX(-10px);
}

.centerTitle {
  text-align: center;
  font-size: 2rem;
}

.center_left_box {
  z-index: 999;
  border-radius: 10px;
  position: fixed;
  overflow-y: scroll;
  float: left;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.5);
  margin: 1rem;
  width: 13rem;
  height: 45rem;
  background-color: #ffffff;
}

::-webkit-scrollbar {
  width: 3px;
  display: none;
  background-color: #617b88;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  display: none;
  background-color: #cfcfcf;
}


.center_left_box .compBtn {
  cursor: pointer;
  background-color: #959595;
  /*width: 10rem;*/
  /*height: 4rem;*/
  padding: 1rem;
  border-radius: 10px;
  margin: 1.5rem;
  transform: translateY(0);
  box-shadow: 0 0 0 #000000;
  transition: transform ease .4s, box-shadow ease .4s;
}

.center_left_box div:hover {
  box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
  transform: translateY(-4px);
}

.center_left_box div h1 {
  color: #000000;
  /*float: right;*/
  font-size: 1.5rem;
}

.center_right_info {
  position: absolute;
  right: 2rem;
  width: 80%;
  margin: 2rem;
  background-color: #0077aa;
}

</style>