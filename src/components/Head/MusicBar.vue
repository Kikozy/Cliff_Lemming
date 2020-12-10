<template>
  <div class="musicBar" @click="show =!show" @mouseleave="show=false">
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
      <audio id="audio"
             src="https://ws.stream.qqmusic.qq.com/C400002Qq3Fj2TRUxW.m4a?guid=8138497182&vkey=8B04D38AAC3377BACEFB991B1C7200CADB769895BC6970FA608E14CAEC264C73471AF3323E36806689BBD1D04B0876CDA7D5705B06A378B7&uin=0&fromtag=66"></audio>
      <div class="Mtime">
        <div class="Mbar"></div>
      </div>
    </div>
    <transition name="showList">
      <div class="Mlist" v-if="show">
        <ul class="Mul">
          <li class="Mli" v-for="(music,index) in music_data">
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
      show: false,
      music_data: []
    }
  },
  created() {
    request({
      url: '/muisic_info'
    }).then(res => {
      // console.log(res.data)
      this.music_data = res.data
    }).catch(err => {
      console.log('===music ERR===', err)
    })
  },
  methods: {
    play() {
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
      if (audio.ended) {
        //暂停音乐
        audio.pause();
        //暂停后隐藏暂停按钮
        $('.Mcontrol>p').toggleClass('Mhide')
        $('.Mpic').animate({
          top: '0px',
          //动画时间0.5s
        }, 500);
      }
    },
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
  background-color: rgba(97, 123, 136, .7);
  backdrop-filter: blur(10px);
  box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.1) inset, 1px 1px 5px rgba(0, 0, 0, .5);
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
  position: absolute;
  right: 50px;
}

.Mname {
  background-color: #2a4a34;
}

.Mcontrol {
  background-color: #cfcfcf;
}

.Mcontrol * {
  cursor: pointer;
}

.Mhide {
  display: none;
}

.Mtime {
  position: absolute;
  background-color: pink;
  width: 100px;
  height: 4px;
  bottom: 0px;
  right: 20px;
}

.Mlist {
  z-index: -1;
  margin-top: 38px;
  padding: .5rem;
  border-radius: 10px;
  width: 300px;
  height: 400px;
  background-color: rgba(97, 123, 136, .7);
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