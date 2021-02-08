<template>
  <div class="home">
    <!--  加载动画  -->
    <LoadCloud/>
    <div class="headTop">
      <Header/>
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
    <div class="JUMPTOP">
      <div class="jump">
        <jumpTop/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/views/Header/Header";
import jumpTop from "@/components/jumpTop/jumpTop";
import Banner from '@/components/HomeBanner/Banner';
import InfoMe from "@/components/HomeContent/InfoMe";
import LoadCloud from "@/components/Loading/LoadCloud";
import {iprequests} from "@/network/iprequests";
import TEST from "@/components/TEST/TEST";
import cookie from 'cookie_js'

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

    Banner,
    InfoMe,
    LoadCloud,
    Header
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
        let data_info = JSON.parse(res.data.slice(19, -1));
        localStorage.setItem('piatad',escape(JSON.stringify(data_info)))
        cookie.set('ip',data_info.cip,'path','/')
        cookie.set('cname',data_info.cname)
      }).catch(err => {
        console.log(err)
      })
    },
  },
  created() {
    this.getIp()
  }
}
</script>
<style scoped>
/* scoped是局部使用 */
/*导入外部css*/
/*阿里巴巴图标*/
@import 'http://at.alicdn.com/t/font_2290624_rx9fwk3ah3.css';

.HomeContent {
  padding-top: 3rem;
  border-radius: 20px 20p6x 0 0;
  width: 100%;
  background-color: #101217; /*对角渐变*/
  box-shadow: -20px -20px 60px #000;
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
  z-index: 99999;
  bottom: 0;
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
