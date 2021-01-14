<template>
  <div class="home">
    <!--  加载动画  -->
    <LoadCloud/>
    <div class="headTop">
      <div v-if="islogin===true">
        <transition name="showLogin">
          <logined/>
        </transition>
      </div>
      <div v-else>
        <transition name="showLogin">
          <Login/>
        </transition>
      </div>
      <MusicBar/>
      <userMsgBar/>
      <itemHtml/>
    </div>
    <div class="HOME">
      <div class="Banner">
        <Banner/>
        <!--        <TEST/>-->
      </div>
      <div class="HomeContent">
        <div class="HContent">
          <div class="INFO_ME_BOX">
            <InfoMe/>
          </div>
          <div class="CONTENT">
            <transition name="showUp">
              <!--    子路由显示占位符    -->
              <router-view v-if="isRouteAlive"/>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="end">
      <end-banner/>
    </div>
    <div class="JUMPTOP">
      <div class="jump">
        <jumpTop/>
      </div>
    </div>
  </div>
</template>

<script>
import jumpTop from "@/components/jumpTop/jumpTop";
import endBanner from "@/components/EndFoot/endBanner";
import Banner from '@/components/HomeBanner/Banner';
import InfoMe from "@/components/HomeContent/InfoMe";
import LoadCloud from "@/components/Loading/LoadCloud";
import MusicBar from "@/components/Head/MusicBar";
import Login from "@/components/Head/loginBar";
import userMsgBar from "@/components/Head/userMsgBar";
import itemHtml from "@/components/Head/itemHtml";
import logined from "@/components/Head/logined/logined";
import $ from "jquery";
import {iprequests} from "@/network/iprequests";
import {request} from "@/network/requests";
import TEST from "@/components/TEST/TEST";

export default {
  provide() {
    return {
      // 局部刷新
      reload: this.reload
    }
  },
  data() {
    return {
      isRouteAlive: true,
      islogin: false
    }
  },

  components: {
    TEST,
    jumpTop,
    endBanner,
    logined,
    Banner,
    InfoMe,
    LoadCloud,
    itemHtml,
    userMsgBar,
    Login,
    MusicBar
  },
  methods: {
    // 局部刷新
    reload() {
      this.isRouteAlive = false
      this.$nextTick(() => {
        this.isRouteAlive = true
      })
    },
    getIp() {
      iprequests({
        url: '/cityjson'
      }).then(res => {
        let data = JSON.parse(res.data.slice(19, -1));
        // this.post_ip(data)
        let data_ip = {
          ip: data.cip,
          city: data.cname,
          cid: data.cid
        }
        localStorage.setItem('ipdata', JSON.stringify(data_ip))
      }).catch(err => {
        console.log(err)
      })
    },
    // post_ip(data){
    //   request({
    //     url:'/get_ip',
    //     method:'post',
    //     data:{
    //       id:'get_ip069',
    //       ipdata:data
    //     }
    //   }).then(res=>{
    //     // console.log(res)
    //   }).catch(err=>{
    //     console.log(err)
    //   })
    // }
  },
  created() {
    if (this.$store.state.username) {
      this.islogin = true;
    }
    this.getIp()
  },
  watch: {
    // 监听值的变化
    '$store.state.username': function () {
      this.islogin = !this.islogin
    }
  }
}
</script>
<style scoped>
/* scoped是局部使用 */
/*导入外部css*/
/*阿里巴巴图标*/
@import 'http://at.alicdn.com/t/font_2290624_fw50t7gl6x.css';
@import '../assets/CSS/CommonHead.css';


.Banner {
  /*position: relative;*/
  /*height: 120vh;*/
}

.HomeContent {
  padding-top: 3rem;
  width: 100%;
  background-image: linear-gradient(to bottom, #0d161e, #0d2b4d); /*对角渐变*/
  box-shadow: 0 -80px 30px #0d161e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.HContent {
  margin-left: 10vw;
  margin-right: 10vw;
  width: 1100px;
}


.CONTENT {
  width: 52vw;
}


.INFO_ME_BOX {
  float: right;
  position: sticky;
  top: 10%;
  z-index: 2;
}

.JUMPTOP {
  position: fixed;
  bottom: 10px;
}

/* 登录后信息 */
.UserInfoBar {
  animation: ease .5s toDown;
}

.loginBar {
  animation: ease .5s toDown;
}

.musicBar {
  animation: ease 1s toDown;
}

.userMsgBar {
  animation: ease 1.5s toDown;
}

@keyframes toDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
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

/*登录组件的动画*/
.showLogin-leave-to {
  transform: translateX(50px);
  opacity: 0;
  height: 0;
  position: absolute;
}

.showLogin-enter {
  transform: translateX(50px);
  opacity: 0;
  height: 0;
  position: absolute;
}

/*进入和离开执行的时间*/
.showLogin-enter-active, .showLogin-leave-active {
  transition: all ease 1s;
}

/*登录组件的动画end*/
/* 当屏幕宽度小于600px 的时候执行 */
@media screen and (max-width: 600px) {
  .INFO_ME_BOX {
    display: none;
  }

  .HContent {
    margin-left: 0vw;
    margin-right: 0vw;
    width: 100%;
  }

  .CONTENT {
    width: 100%;
  }
}

@media screen and (min-width: 1440px) {
  .HContent {
    width: 2880px;
  }
}
</style>
