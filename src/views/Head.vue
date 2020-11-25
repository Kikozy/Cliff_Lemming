<template>
  <div class="home">
    <div class="headTop">
      <div class="loginBar">
        <a @click="goLoginon">登录</a>
      </div>
      <!--天气模块
      <div class="weatherBar">
          <div class="weatherBox">
              <div class="city"><p>{{ weather[2] }}</p></div>
              <div class="weaInfo">
                  <div class="wea"><h1>{{ weather[3] }}</h1></div>
                  {#            <div class="date"><p>{{ weather[0] }}</p></div>#}
                  <div class="week"><p>{{ weather[1] }}</p></div>
                  <br>
                  <div class="tem"><p>{{ weather[4] }}°</p></div>
                  <div class="tem12"><p>{{ weather[6] }}°~{{ weather[5] }}°</p></div>
              </div>

          </div>
      </div>
      -->
      <div class="musicBar">
        <div class="musicBox">
          <div class="Mpic">图片</div>
          <div class="MusicControl">
            <div class="Mname">音乐名称</div>
            <br>
            <div class="Mcontrol" @click="play">
              <p class="Mpause Mhide">暂停</p>
              <p class="Mplay">播放</p>
            </div>
          </div>
          <audio id="audio" src="http://music.163.com/song/media/outer/url?id=1441939268.mp3"></audio>
          <div class="Mtime">
            <div class="Mbar"></div>
          </div>
        </div>
      </div>
      <div class="userMsgBar">
        <div class="userMsgBox">留言</div>
      </div>
      <div class="itemHtml">
        <ul class="htmlList">
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/timeline">TimeLine</router-link>
          </li>
          <li>
            <router-link to="/lemming">Lemming</router-link>
          </li>
          <li>
            <router-link to="/test">Test</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!--    子路由显示占位符    -->
    <router-view/>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  methods: {
    play(){
      //如果音乐暂停
        if (audio.paused) {
            //播放音乐
            audio.play();
            //播放后隐藏播放按钮
            $('.Mcontrol>p').toggleClass('Mhide');
            //滑出图片
            $('.Mpic').animate({
                top: '10px',
                //动画时间0.5s
            }, 500);
        } else {
            //暂停音乐
            audio.pause();
            //暂停后隐藏暂停按钮
            $('.Mcontrol>p').toggleClass('Mhide')
            //滑入图片
            $('.Mpic').animate({
                top: '0px',
            }, 500)
        }
        if (audio.ended){
            $('.Mcontrol>p').toggleClass('Mhide')
            $('.Mpic').animate({
                top: '0px',
                //动画时间0.5s
            }, 500);
        }
    },
    //跳转到登录界面
    goLoginon() {
      this.$router.push('/loginon')
    }
  }
}
</script>
<style scoped>
/* scoped是局部使用 */
/*导入外部css*/
@import '../assets/CSS/CommonHead.css';
</style>
