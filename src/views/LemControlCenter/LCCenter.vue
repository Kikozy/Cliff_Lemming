<template>
  <div class="center">
    <div class="center_left_box">
      <div id="admin_toback" @click="center_toback">
        <i class="el-icon-arrow-left">Home</i>
      </div>
      <h1 class="centerTitle">控制中心</h1>
      <router-link to="/lemming_admin/data_info">
        <div><h1>数据信息</h1></div>
      </router-link>
      <router-link to="/lemming_admin/users_admin">
        <div><h1>用户管理</h1></div>
      </router-link>
      <router-link to="/lemming_admin/article_admin">
        <div><h1>文章管理</h1></div>
      </router-link>
      <router-link to="/lemming_admin/userMsg_admin">
        <div><h1>留言管理</h1></div>
      </router-link>
      <router-link to="/lemming_admin/music_admin">
        <div><h1>音乐管理</h1></div>
      </router-link>
      <div><h1>-</h1></div>
      <div><h1>-</h1></div>
      <div><h1>-</h1></div>
      <div><h1>-</h1></div>
      <div><h1>-</h1></div>
      <div><h1>-</h1></div>
      <div><h1>-</h1></div>
      <div><h1>-</h1></div>
    </div>
    <div class="center_right_info">
      <router-view v-if="isRouteAlive"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "LCCenter",
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouteAlive: true
    }
  },
  methods: {
    center_toback() {
      this.$router.push('/')
    },
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
  position: fixed;
  z-index: 1;
  left: 11rem;
  top: -.5rem;
  width: 5rem;
  height: 2rem;
  background-color: #4d626c;
}

.centerTitle {
  text-align: center;
  font-size: 2rem;
}

.center {
  /*background-color: pink;*/
  /*width: 100%;*/
}

.center_left_box {
  z-index: 999;
  border-radius: 10px;
  position: fixed;
  overflow-y: scroll;
  float: left;
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.5);
  margin: 1rem;
  width: 15rem;
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


.center_left_box div {
  cursor: pointer;
  background-color: #959595;
  width: 10rem;
  height: 4rem;
  border-radius: 10px;
  margin: 2rem;
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
  padding: 1rem;
  float: right;
  font-size: 1.5rem;
  text-align: center;
}

.center_right_info {
  background-color: #0077aa;
  width: 100%;
  margin-left: 17rem;
}
</style>