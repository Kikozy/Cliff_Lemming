<template>
  <div class="musicBar" @mouseleave="show=false">
    <div class="musicBox">
      <div class="Mpic" @click="show =!show">
        <img :src='music_url.pic'>
      </div>
      <div class="MusicControl">
        <div class="Mname" :title="music_url['singer']">
          {{ music_url['name'] }}-{{ music_url['singer'] }}
        </div>
        <!--        <br>-->
        <div class="Mcontrol">
          <div @click="Mlast">
            <p class="Mlast iconfont icon-shangyishou"></p>
          </div>
          <div @click="Mplay">
            <p class="Mpause Mhide iconfont icon-ai07"></p>
            <p class="Mplay iconfont icon-icon_play"></p>
          </div>
          <div @click="Mnext">
            <p class="Mnext iconfont icon-shangyishou"></p>
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
            <p class="songNum">{{ index + 1 }}</p>
            <p class="songName" :title="music.name">{{ music.name }}</p>
            <p class="singer">{{ music.singer }}</p>
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
  name: 'musicBar',
  inject: ['reload'],// 组件刷新调用
  data() {
    return {
      timer: null, // 计时器
      num: 1,
      music_url: [],
      show: false,
      music_data: [],
    }
  },
  destroyed() {
    // 销毁时
    if (this.timer) { //如果定时器还在运行 或者直接关闭，不用判断
      clearInterval(this.timer); // 清空计时器
    }
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
        name: res.data[0]['name'],
        singer: res.data[0]['singer'],
        url: res.data[0]['play_url'],
        pic:res.data[0]['pic_url']
      })
      this.music_data = res.data
    }).catch(err => {
      console.log('===music ERR===', err)
    })
  },
  methods: {
    Mlistplay(index) {
      this.num = index;
      let audio = this.$refs.audio;
      this.music_url = ({
        name: this.music_data[index]['name'],
        singer: this.music_data[index]['singer'],
        url: this.music_data[index]['play_url'],
        pic: this.music_data[index]['pic_url']
      })
      if (audio.paused || audio.play) {
        audio.play();
        $('.Mplay').addClass('Mhide');
        $('.Mpause').removeClass('Mhide');
        $('#audio').attr('autoplay', 'autoplay');
        $('.Mpic').animate({
          top: '10px',
        }, 500);
        this.get_time()
      }
      // 监听是否播放完毕！！
      let audioEnded = document.getElementById("audio");
      audioEnded.onended = function () {
        Mnext()
      };
    },
    Mplay() {
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
        this.get_time()
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
      if (num > this.music_data.length - 2) {
        this.num = 0;
      }
      this.music_url = ({
        name: this.music_data[num]['name'],
        singer: this.music_data[num]['singer'],
        url: this.music_data[num]['play_url'],
        pic: this.music_data[num]['pic_url']
      })
      if (audio.paused || audio.play) {
        audio.play();
        $('.Mplay').addClass('Mhide');
        $('.Mpause').removeClass('Mhide');
        $('#audio').attr('autoplay', 'autoplay');
        $('.Mpic').animate({
          top: '10px',
        }, 500);
        this.get_time()
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
        pic: this.music_data[num]['pic_url']
      });
      if (audio.paused || audio.play) {
        audio.play();
        $('.Mplay').addClass('Mhide');
        $('.Mpause').removeClass('Mhide');
        $('#audio').attr('autoplay', 'autoplay');
        $('.Mpic').animate({
          top: '10px',
        }, 500);
        this.get_time()
      }
      // 监听是否播放完毕！！
      let audioEnded = document.getElementById("audio");
      audioEnded.onended = function () {
        Mnext()
      };
    },
    // 获取进度条时间
    get_time() {
      let audio = this.$refs.audio;
      this.timer = setInterval(function () {
        if (audio.ended) {
          clearInterval(this.timer) // 清空计时器
        } else {
          let ratio = audio.currentTime / audio.duration;
          $('.Mbar').css('width', ratio * 100, '%');
        }
      }, 100)
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
  animation: showList-in .5s reverse;
}

@keyframes showList-in {
  0% {
    transform: translateY(-50px);
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
  /*cursor: pointer;*/
  margin: .2rem;
  width: 12rem;
  height: 3.5rem;
  border-radius: 10px;
  /*background-color: rgba(97, 123, 136, .7);*/
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  backdrop-filter: blur(10px);
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1) inset, 1px 1px 5px rgba(0, 0, 0, .5);
}

.MusicControl {
  width: 10rem;
  z-index: -1;
  right: 0;
  position: absolute;
}

.Mpic {
  cursor: pointer;
  margin-left: 10px;
  background-size: 100%;
  /*默认图*/
  background-image: url("http://d.musicapp.migu.cn/prod/file-service/file-down/b1899d500dda5db2da11df3efc89cba6/5513f311e612912ed77276103466308a/5e12f79f22e5e7b3f65abddebd9842e8");
  top: 0px;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  height: 100%;
  width: 30%;
  float: left;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, .5);
}

.Mpic img{
  position: absolute;
  width: 100%;
  border-radius: 50%;
}

.Mpic:after {
  content: '》';
  position: absolute;
  z-index: 99;
  bottom: 0;
  width: 100%;
  font-size: 2em;
  text-align: center;
  color: #0d161e;
  animation: ease-in-out toDown 6s infinite;
}

@keyframes toDown {
  /* 这样会有延迟效果 */
  0% {
    transform: rotateZ(90deg) translateX(15px);
  }
  /* 这样会有延迟效果 */
  50%, 100% {
    transform: rotateZ(90deg) translateX(15px);
  }
  75% {
    color: white;
    text-shadow: 8px 0 4px #000;
    transform: rotateZ(90deg) translateX(25px);
  }
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
  padding-top: .5em;
  float: right;
  margin-left: 4vw;
  animation: move ease .5;
}


.Mcontrol {
  display: flex;
  float: right;
  margin-top: .5rem;
}

.Mcontrol * {
  cursor: pointer;
  margin-right: .7rem;
  color: #cfcfcf;
  transition: ease color .3s;
}

.Mnext {
  transform: rotateZ(180deg);
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
  background-color: #017ca5;
  box-shadow: 0 0 15px 4px #017ca5;
}

.Mlist {
  cursor: pointer;
  overflow-y: scroll;
  position: relative;
  z-index: -1;
  top:60px;
  border-radius: 10px;
  width: 300px;
  height: 400px;
  background-color: #0d1117;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
}

.Mli {
  color: white;
  display: flex;
  /*background-color: #0077aa;*/
  padding-top: .5rem;
  justify-content: space-between;
}

.songNum {
  background-color: #0077aa;
  margin-left: .3rem;
  padding: .3rem;
  border-radius: 10px 4px 4px 10px;
}

.songName {
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 10em; /*不允许出现半汉字截断*/
  flex: 2;
  margin: 0 10px 0 10px;
  padding: .3rem;
  border-radius: 4px;
}

.singer {
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 5em; /*不允许出现半汉字截断*/
  margin-right: .3rem;
  padding: .3rem;
  border-radius: 4px 10px 10px 4px;
}

.songName, .singer {
  box-shadow: 0 0 0 #0077aa;
  transition: ease background-color .3s, ease box-shadow .3s;
}

.songName:hover, .songName:hover ~ .singer {
  background-color: #0077aa;
  box-shadow: 0 0 10px #0077aa;
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