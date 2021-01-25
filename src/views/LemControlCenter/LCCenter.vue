<template>
  <div id="Lcenter">
    <input class="showLeft" type="checkbox">
    <span id="showLeft_icon" class="iconfont icon-all"></span>
    <div class="center_left_box">
      <div id="admin_toback" class="admin_toback" @click="center_toback">
        <span class="el-icon-arrow-left">Home</span>
      </div>
      <h2 class="centerTitle"></h2>
      <div class="routerBox">
        <router-link :class="{activeBtn:activeNum===0}" class="routerBtn Btn_hover" to="/lemming_admin/data_info">
          <div @click="isactive(0)" class="compBtn">
            <i class="iconfont icon-data"></i>
            <h2> 数据信息</h2>
          </div>
        </router-link>
        <span class="routerBtn">DATA</span>
        <router-link :class="{activeBtn:activeNum===1}" class="routerBtn Btn_hover" to="/lemming_admin/users_admin">
          <div @click="isactive(1)" class="compBtn"><i class="iconfont icon-users"></i>
            <h2> 用户管理</h2></div>
        </router-link>
        <router-link :class="{activeBtn:activeNum===2}" class="routerBtn Btn_hover" to="/lemming_admin/article_admin">
          <div @click="isactive(2)" class="compBtn"><i class="iconfont icon-article"></i>
            <h2> 文章管理</h2></div>
        </router-link>
        <router-link :class="{activeBtn:activeNum===3}" class="routerBtn Btn_hover" to="/lemming_admin/userMsg_admin">
          <div @click="isactive(3)" class="compBtn"><i class="iconfont icon-msgs"></i>
            <h2> 留言管理</h2></div>
        </router-link>
        <router-link :class="{activeBtn:activeNum===4}" class="routerBtn Btn_hover" to="/lemming_admin/music_admin">
          <div @click="isactive(4)" class="compBtn"><i class="iconfont icon-music"></i>
            <h2> 音乐管理</h2></div>
        </router-link>
        <router-link :class="{activeBtn:activeNum===5}" class="routerBtn Btn_hover" to="/lemming_admin/video_admin">
          <div @click="isactive(5)" class="compBtn"><i class="iconfont icon-video"></i>
            <h2> 视频管理</h2></div>
        </router-link>
        <span class="routerBtn">OTHERS</span>
        <router-link :class="{activeBtn:activeNum===6}" class="routerBtn Btn_hover" to="/lemming_admin/postInfo_admin">
          <div @click="isactive(6)" class="compBtn"><i class="iconfont icon-earth"></i>
            <h2>ip信息</h2>
          </div>
        </router-link>
      </div>
      <div class="water"></div>
    </div>
    <div class="center_right_info base_linear">
      <!--      // 局部刷新-->
      <router-view v-if="isRouteAlive"/>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

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
      activeNum: 0,
      isRouteAlive: true
    }
  },
  methods: {
    isactive(num) {
      $('.routerBtn').removeClass('active');
      this.activeNum = num
    },
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
@import 'http://at.alicdn.com/t/font_2290624_blu3wxu5l5p.css';
@import "baseTable.css";

#Lcenter {
  position: relative;
  background-color: #d8e2ff;
  /*background-image: linear-gradient(to bottom right, rgba(48, 67, 82, 1), rgba(52, 49, 66, 1)); !*对角渐变*!*/
  width: 100vw;
  height: 100vh;
}

.admin_toback {
  cursor: pointer;
  position: absolute;
  right: 4rem;
  z-index: 2;
}

.admin_toback span {
  padding: .3rem;
  border-radius: 10px;
  background-color: #50689a;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, .5);
}

.showLeft {
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
  position: absolute;
  display: none;
  z-index: 889;
  margin: .7rem;
}

#showLeft_icon {
  color: white;
  display: none;
  pointer-events: none;
  position: absolute;
  z-index: 890;
  margin: .8rem;
  width: 3rem;
  border-radius: 10px;
  font-size: 3em;
  background-color: #25427e;
}

.center_left_box {
  position: absolute;
  z-index: 888;
  background-image: linear-gradient(to bottom, #25427e, #39599a);
  width: 12rem;
  min-width: 12rem;
  border-radius: 10px;
  height: 98vh;
  margin: .5rem;
}

.centerTitle {
  color: white;
  text-align: center;
  margin: 1rem 1rem 0 2rem;
  position: relative;
  background-image: url("../../assets/IMAGE/Home/HeadB.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /*z-index: 1;*/
}

.centerTitle:after {
  content: 'Lemming';
  font-size: .8em;
  position: absolute;
  opacity: 50%;
  bottom: 25%;
  /*z-index: -1;*/
}

.routerBox {
  margin-top: 3rem;
}

.routerBox span {
  font-size: .8em;
}

.iconfont {
  font-size: 1.5em;
  width: 2.5rem;
}

.routerBtn {
  color: #95a4c5;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  transition: all .3s ease;
}

.Btn_hover:hover {
  background-color: #50689a;
  border-radius: 6px;
}

.compBtn {
  align-self: center;
  padding: .5rem 1rem .5rem 1rem;
  display: flex;
}

.compBtn h2 {
  font-size: 1em;
  line-height: 1.5rem;

}

.activeBtn {
  background-color: #50689a;
  color: #fff;
  border-radius: 6px;
}

/*================== water start ====================*/
@keyframes move1 {
  0% {
    left: 0%;
  }
  100% {
    left: -160%;
  }
}

@keyframes move2 {
  0% {
    left: -40%;
  }
  100% {
    left: -200%;
  }
}

.water {
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 20%;
  font-size: 12px;
  border-radius: 0 0 10px 10px;
  font-weight: bold;
  line-height: 24px;
  overflow: hidden;
  color: rgb(30, 29, 20);
  transform: translateZ(0);
}

.water::before,
.water::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 320%;
  height: 50%;
  clip-path: polygon(
      0% 20%,
      2% 18%,
      3% 16%,
      5% 14%,
      7% 13%,
      8% 11%,
      10% 10%,
      12% 10%,
      13% 10%,
      15% 10%,
      17% 11%,
      18% 13%,
      20% 14%,
      22% 16%,
      23% 18%,
      25% 20%,
      27% 22%,
      28% 24%,
      30% 26%,
      32% 27%,
      33% 29%,
      35% 30%,
      37% 30%,
      38% 30%,
      40% 30%,
      42% 29%,
      43% 27%,
      45% 26%,
      47% 24%,
      48% 22%,
      50% 20%,
      52% 18%,
      53% 16%,
      55% 14%,
      57% 13%,
      58% 11%,
      60% 10%,
      62% 10%,
      63% 10%,
      65% 10%,
      67% 11%,
      68% 13%,
      70% 14%,
      72% 16%,
      73% 18%,
      75% 20%,
      77% 22%,
      78% 24%,
      80% 26%,
      82% 27%,
      83% 29%,
      85% 30%,
      87% 30%,
      88% 30%,
      90% 30%,
      92% 29%,
      93% 27%,
      95% 26%,
      97% 24%,
      98% 22%,
      100% 20%,
      100% 100%,
      0% 100%
  );
}

.water::before {
  background-color: #2d4b88;
  animation: move1 infinite 4s linear;
}

.water::after {
  background-color: #25427e;
  animation: move2 infinite 8s linear;
}

/*================= water end=====================*/


.center_right_info {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  width: 84%;
}

@media screen and (max-width: 1200px) {
  #admin_toback {
    bottom: 3rem;
  }

  .center_right_info {
    width: 99%;
    padding: .2rem;
  }

  .showLeft {
    display: block;
  }

  #showLeft_icon {
    display: block;
    opacity: 50%;
  }

  .center_left_box {
    display: none;
    margin: .3rem;
    text-align: center;
    width: 4rem;
    min-width: 4rem;
  }

  .showLeft:checked ~ .center_left_box {
    display: block;
  }

  .routerBox {
    margin-top: 6rem;
  }

  .routerBox span {
    display: none;
  }

  .compBtn h2 {
    display: none;
  }

  .centerTitle {
    margin: 0.4rem 0.4rem 2rem .4rem;
    top: 4rem;
  }

  .centerTitle:after {
    display: none;
  }
}


</style>