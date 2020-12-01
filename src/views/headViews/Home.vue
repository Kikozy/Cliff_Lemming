<template>
  <div class="HOME">
    <div class="HomeBanner">
      <div class="backImg">
        <div>
          <h6 class="backWord">Lemming</h6>
        </div>
      </div>
      <div class="aboutBox">
        <a href="javascript:;">
          <img class="logo" src="../../assets/IMAGE/Home/HeadB.png"/>
          <h4 class="Name">Lemming</h4>
          <div class="Poem">
            <h6>念去去、千里烟波<br/>暮霭沉沉楚天阔</h6>
          </div>
        </a>
      </div>
      <div class="clouds">
        <img src="../../assets/IMAGE/Home_clouds/cloud1.png" style="--i: 1"/>
        <img src="../../assets/IMAGE/Home_clouds/cloud2.png" style="--i: 2"/>
        <img src="../../assets/IMAGE/Home_clouds/cloud3.png" style="--i: 3"/>
        <img src="../../assets/IMAGE/Home_clouds/cloud4.png" style="--i: 4"/>
        <img src="../../assets/IMAGE/Home_clouds/cloud5.png" style="--i: 5"/>
      </div>
    </div>
    <!-- banner end -->
    <div class="HomeContent">
      <div class="HContent w">
        <div class="blogNews">
          <ul class="blogList">
            <transition-group name="showUp">
              <li v-for="(item,index) in data" v-bind:key="index">
                <div id="hole"></div>
                <div class="title"><h1>{{ item.title }}</h1></div>
                <div class="content"><p id="blogP">{{ item.content }}</p></div>
              </li>
            </transition-group>
          </ul>
        </div>
        <div class="infoMe">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
//导入需要的包
import {request} from "@/network/requests";

export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    request({
      // url:'http://127.0.0.1:5000/api/cliff/home'
      url: '/home'
    }).then(res => {
      console.log(res.data);
      this.data = res.data
    }).catch(err => {
      console.log('===jianshu ERR===',err)
    })
  }
}
</script>

<style scoped>
@import "../../assets/CSS/HomeCss/Banner.css";
@import "../../assets/CSS/HomeCss/Blog.css";

/*vue动画*/
.showUp-enter{
  transform: translateY(100px);
}

</style>