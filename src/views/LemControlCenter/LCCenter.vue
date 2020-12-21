<template>
  <div id="Lcenter">
    <div class="center_left_box  base_linear">
      <div id="admin_toback" @click="center_toback">
        <i class="el-icon-arrow-left">Home</i>
      </div>
      <h1 class="centerTitle"></h1>
      <div class="linkBox">
        <router-link to="/lemming_admin/data_info">
          <div class="compBtn"><i class="iconfont icon-shuju"></i>
            <h1> 数据信息</h1></div>
        </router-link>
        <router-link to="/lemming_admin/users_admin">
          <div class="compBtn"><i class="iconfont icon-yonghu"></i>
            <h1> 用户管理</h1></div>
        </router-link>
        <router-link to="/lemming_admin/article_admin">
          <div class="compBtn"><i class="iconfont icon-wenzhang"></i>
            <h1> 文章管理</h1></div>
        </router-link>
        <router-link to="/lemming_admin/userMsg_admin">
          <div class="compBtn"><i class="iconfont icon-liuyan1"></i>
            <h1> 留言管理</h1></div>
        </router-link>
        <router-link to="/lemming_admin/music_admin">
          <div class="compBtn"><i class="iconfont icon-yinle"></i>
            <h1> 音乐管理</h1></div>
        </router-link>
        <router-link  to='/lemming_admin/game_admin'>
          <div class="compBtn">
            <h1>娱乐管理</h1>
          </div>
        </router-link>
        <router-link to="/lemming_admin/movie_admin">
          <div class="compBtn">
            <h1>影视管理</h1>
          </div>
        </router-link>

        <div class="compBtn"><h1>-</h1></div>
        <div class="compBtn"><h1>-</h1></div>
        <div class="compBtn"><h1>-</h1></div>

      </div>
    </div>
    <div class="center_right_info base_linear">
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
/*导入外部css ICON*/
@import 'http://at.alicdn.com/t/font_2266444_6eftw463mcr.css';

#Lcenter {
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, rgba(48, 67, 82, 1), rgba(52, 49, 66, 1)); /*对角渐变*/
  width: 100%;
  height: 100%;
}

#admin_toback {
  cursor: pointer;
  position: fixed;
  z-index: 99999;
  left: 11.5rem;
  top: 2rem;
  width: 4.5rem;
  height: 1.8rem;
  border-radius: 10px;
  background-color: rgba(1, 124, 165, .1);
  backdrop-filter: blur(10px);
  transition: transform ease .6s, box-shadow ease .4s;
}

#admin_toback i {
  font-size: 1rem;
  font-weight: bold;
}

#admin_toback:hover {
  transform: translateX(-10px);
}


.centerTitle {
  position: fixed;
  background-image: url("../../assets/IMAGE/Lcenter/HeadLogo.png");
  background-size: 100%;
  width: 5rem;
  height: 5rem;
  margin-left: 4rem;
  border-radius: 50%;
  text-align: center;
  font-size: 3rem;
}

.center_left_box {
  z-index: 999;
  border-radius: 10px;
  position: fixed;
  overflow-y: scroll;
  /*float: left;*/
  box-shadow: 10px 5px 20px rgba(0, 0, 0, 0.5);
  margin: 1rem;
  width: 13rem;
  height: 45rem;
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

.linkBox {
  margin-top: 4rem;
}

.compBtn {
  cursor: pointer;
  padding: 1rem;
  border-radius: 10px;
  margin: 1.5rem;
  transform: translateY(0);
  background-color: #4a5063; /*不支持渐变默认的颜色*/
  background-image: linear-gradient(to bottom right, rgba(170, 170, 170, .5) -100%, rgba(48, 67, 82, .5) 100%); /*对角渐变*/
  box-shadow: 1px 1px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
  backdrop-filter: blur(10px);
  transition: transform ease .4s, box-shadow ease .4s;
}

.iconfont {
  position: absolute;
  padding: .5rem;
  background-color: rgba(1, 124, 165, .5);
  backdrop-filter: blur(10px);
  box-shadow: 1px 1px 1px inset rgba(226, 226, 226, .2);
  border-radius: 10px;
  left: -1rem;
  top: -1rem;
}

.compBtn > h1 {
  text-align: center;
  left: 0;
  font-size: 1.5rem;
  color: #ffffff;
}

.center_left_box .linkBox div:hover {
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 3px 3px 5px rgba(0, 0, 0, .7);
  transform: translateY(-4px);
}

.center_left_box > div > h1, .iconfont {
  color: #ffffff;
  font-size: 1.5rem;
}

.center_right_info {
  position: absolute;
  border-radius: 10px;
  right: 2%;
  width: 80%;
  margin: 2%;
}

.base_linear {
  border-radius: 20px;
  background-color: #4a5063; /*不支持渐变默认的颜色*/
  background-image: linear-gradient(to bottom right, rgba(48, 67, 82, .5), rgba(52, 49, 66, .5)); /*对角渐变*/
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 2px 2px 5px rgba(0, 0, 0, .5);
  /*backdrop-filter: blur(10px);*/
}

</style>