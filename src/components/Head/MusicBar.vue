<template>
  <div class="musicBar" @click="show =!show" @mouseleave="show=false">
    <div class="musicBox">
      <div class="Mpic"><img
          src="">
      </div>
      <div class="MusicControl">
        <div class="Mname">{{ music_url['name'] }}-{{ music_url['singer'] }}</div>
        <!--        <br>-->
        <div class="Mcontrol">
          <div @click="Mlast">
            <p class="Mlast iconfont icon-xiayishou"></p>
          </div>
          <div @click="Mplay">
            <p class="Mpause Mhide iconfont icon-zantingtingzhi"></p>
            <p class="Mplay iconfont icon-bofang"></p>
          </div>
          <div @click="Mnext">
            <p class="Mnext iconfont icon-Nextsong"></p>
          </div>
        </div>
      </div>
      <audio ref="audio" id="audio"
             :src="music_url['url']"></audio>
      <div class="Mtime">
        <div class="Mbar"></div>
      </div>
    </div>
    <transition name="showList">
      <div class="Mlist" v-if="show">
        <ul class="Mul">
          <li class="Mli" v-for="(music,index) in music_data" @click="Mlistplay(index)">
            <span class="songNum">{{ index + 1 }}</span>
            <span class="songName">{{ music.name }}</span>
            <span class="singer">{{ music.singer }}</span>
          </li>
        </ul>
      </div>
    </transition>

  </div>
</template>

<script>
import $ from "jquery";
import {request} from "@/network/requests";

export default {
  data() {
    return {
      num: 1,
      music_url: [],
      show: false,
      music_data: [],
    }
  },
  destroyed() {
    // 离开页面销毁的时候刷新一下
    location.reload();
  },
  // 如果js需要调vue的方法
  mounted() {
    window.Mnext = this.Mnext; // 将vue方法赋值给window，js直接调方法
  },
  created() {
    request({
      url: '/muisic_info'
    }).then(res => {
      // 设置音乐的初始值
      this.music_url = ({
        name: res.data[0][0]['name'],
        singer: res.data[0][0]['singer'],
        url: res.data[0][0]['play_url']
      })
      this.music_data = res.data[0]
    }).catch(err => {
      console.log('===music ERR===', err)
    })
  },
  methods: {
    Mlistplay(index) {
      let timer;
      this.num = index;
      let audio = this.$refs.audio;
      this.music_url = ({
        name: this.music_data[index]['name'],
        singer: this.music_data[index]['singer'],
        url: this.music_data[index]['play_url']
      })
      if (audio.paused) {
        audio.play();
        $('.Mplay').addClass('Mhide');
        $('.Mpause').removeClass('Mhide');
        $('#audio').attr('autoplay', 'autoplay');
        $('.Mpic').animate({
          top: '10px',
        }, 500);
        timer = setInterval(function () {
          if (audio.ended) {
            console.log('ended!!')
            clearInterval(timer)
          } else {
            let ratio = audio.currentTime / audio.duration;
            $('.Mbar').css('width', ratio * 100, '%')
          }
        }, 100)
      }
      // 监听是否播放完毕！！
      let audioEnded = document.getElementById("audio");
      audioEnded.onended = function () {
        Mnext()
      };
    },
    Mplay() {
      let timer;
      let audio = this.$refs.audio;
      if (audio.paused) {
        audio.play();
        $('.Mplay').addClass('Mhide');
        $('.Mpause').removeClass('Mhide');
        //滑出图片
        $('.Mpic').animate({
          top: '10px',
          //动画时间0.5s
        }, 500);
        timer = setInterval(function () {
          //currentTime返回播放的当前位置（以秒计）
          //duration获取总时长（秒）
          let ratio = audio.currentTime / audio.duration;
          $('.Mbar').css('width', ratio * 100, '%')
        }, 100)
      } else {
        audio.pause();
        $('.Mpause').addClass('Mhide');
        $('.Mplay').removeClass('Mhide');
        //滑出图片
        $('.Mpic').animate({
          top: '0px',
          //动画时间0.5s
        }, 500);
      }
      // 监听是否播放完毕！！
      let audioEnded = document.getElementById("audio");
      audioEnded.onended = function () {
        Mnext()
      };
    },
    Mnext() {
      let num = this.num++;
      let audio = this.$refs.audio;
      let timer;
      if (num > this.music_data.length - 2) {
        this.num = 0;
      }
      this.music_url = ({
        name: this.music_data[num]['name'],
        singer: this.music_data[num]['singer'],
        url: this.music_data[num]['play_url']
      })
      if (audio.paused) {
        audio.play();
        $('.Mplay').addClass('Mhide');
        $('.Mpause').removeClass('Mhide');
        $('#audio').attr('autoplay', 'autoplay');
        $('.Mpic').animate({
          top: '10px',
        }, 500);
        timer = setInterval(function () {
          if (audio.ended) {
            console.log('ended!!')
            clearInterval(timer)
          } else {
            let ratio = audio.currentTime / audio.duration;
            $('.Mbar').css('width', ratio * 100, '%')
          }
        }, 100)
      }
      // 监听是否播放完毕！！
      let audioEnded = document.getElementById("audio");
      audioEnded.onended = function () {
        Mnext()
      };
    },
    Mlast() {
      let num = this.num--;
      let audio = this.$refs.audio;
      let timer;
      if (num <= 0) {
        // 如果上一首音乐小于等于0的话，num跳转到歌曲最后一首
        this.num = this.music_data.length - 1;
      }
      this.music_url = ({
        name: this.music_data[num]['name'],
        singer: this.music_data[num]['singer'],
        url: this.music_data[num]['play_url'],
      });
      if (audio.paused) {
        audio.play();
        $('.Mplay').addClass('Mhide');
        $('.Mpause').removeClass('Mhide');
        $('#audio').attr('autoplay', 'autoplay');
        $('.Mpic').animate({
          top: '10px',
        }, 500);
        timer = setInterval(function () {
          if (audio.ended) {
            console.log('ended!!')
            clearInterval(timer)
          } else {
            let ratio = audio.currentTime / audio.duration;
            $('.Mbar').css('width', ratio * 100, '%');
          }
        }, 100)
      }
      // 监听是否播放完毕！！
      let audioEnded = document.getElementById("audio");
      audioEnded.onended = function () {
        Mnext()
      };
    }
  }
}
</script>

<style scoped>
/*点击播放列表动画*/
.showList-enter-active {
  animation: showList-in .3s;
}

.showList-leave-active {
  animation: showList-in .3s reverse;
}

@keyframes showList-in {
  0% {
    transform: translateY(0px);
    opacity: 0;
  }
  50% {
    transform: translateY(10px);
    opacity: 10;
  }
  100% {
    transform: translateY(0px);
    opacity: 30;
  }
}

/*点击播放列表动画end*/


/*musicStart*/
.musicBar {
  cursor: pointer;
  margin: .2%;
  height: 90%;
  width: 200px;
  border-radius: 10px;
  /*background-color: rgba(97, 123, 136, .7);*/
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  backdrop-filter: blur(10px);
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1) inset, 1px 1px 5px rgba(0, 0, 0, .5);
  transform: translateY(0px);
  transition: transform ease .3s;
}

.musicBar:hover {
  transform: translateY(5px);
}

.musicBox {
  margin: 10px 10px;
}

.Mpic {
  background-size: 100%;
  background-image: url("http://p2.music.126.net/YWeuBX08R4Lq8hLdpJGtmA==/109951164957278318.jpg?param=130y130");
  top: 0px;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  height: 100%;
  width: 30%;
  float: left;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, .5);
}


.MusicControl {
  width: 10rem;
  z-index: -1;
  right: 0;
  position: absolute;
}


.Mname {
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 9em; /*不允许出现半汉字截断*/
  font-size: .8em;
  height: 1rem;
  color: #cfcfcf;
  font-weight: bold;
  float: right;
  margin-left: 4vw;
  animation: move ease .5;
}


.Mcontrol {
  float: right;
  margin-top: .5rem;
}

.Mcontrol * {
  cursor: pointer;
  margin-right: .7rem;
  color: #cfcfcf;
  transition: ease color .3s;
}

.Mcontrol *:hover {
  color: #666666;
}


.Mhide {
  display: none;
}

.Mtime {
  position: absolute;
  background-color: #cfcfcf;
  width: 100px;
  height: 2px;
  bottom: 0;
  right: 20px;
}

.Mbar {
  width: 0;
  height: 100%;
  background-color: #666666;
}

.Mlist {
  z-index: -1;
  margin-top: 38px;
  padding: .5rem;
  border-radius: 10px;
  width: 300px;
  height: 400px;
  /*background-color: rgba(97, 123, 136, .7);*/
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.05) inset, 1px 1px 5px rgba(0, 0, 0, .5);
}

.Mul {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  /*滑动*/
  overflow-y: scroll;
  opacity: 10;
}

.Mli {
  color: #cfcfcf;
  width: 100%;
  height: 2rem;

}

.songNum {
  padding: 5px;
  text-align: center;
  width: 1em;
  background-color: #617b88;
  border-radius: 10px;
  /*position: absolute;*/
  margin-right: 5px;
}

.songName {
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 10em; /*不允许出现半汉字截断*/
  background-color: #183743;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 0 #000000;
  transform: translateY(0px);
  transition: background-color ease .3s, transform ease .3s, box-shadow ease .3s;
}

.songName:hover {
  background-color: #1e4655;
  transform: translateY(-2px);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
}

.singer {
  margin-right: 2px;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 5em; /*不允许出现半汉字截断*/
  background-color: #183743;
  border-radius: 10px;
  float: right;
  padding: 5px;
}

::-webkit-scrollbar {
  width: 2px;
  background-color: #395163;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  background-color: #cfcfcf;
}


/*musicEnd*/
</style>