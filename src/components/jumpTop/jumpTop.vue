<template>
  <div>
    <div class="jumpTop" @click="jump">
      <img src="../../assets/IMAGE/LemBack/Lem1.png" alt="">
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "jumpTop",
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('scroll', this.windowScroll)
  },
  methods: {
    windowScroll() {
      // 监听页面滚动位置
      let scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop)
      if (scrollTop >= 1200) {
        $('.JUMPTOP').animate({
          top:'10vh'
        })
      }else{
        $('.JUMPTOP').animate({
          top:'0vh'
        })
      }
    },
    jump() {
      // console.log(this.show)
      $('html,body').animate({scrollTop: $(".HomeContent").offset().top - 100}, 300)
    },
  }
}
</script>

<style scoped>
img {
  cursor: pointer;
  width: 8vw;
}

/*img:hover{*/
/*  animation: ease-in-out jump-in .5s;*/
/*}*/

/*点击播放列表动画*/

@keyframes jump-in {
  0% {
    transform: translateY(0px);
    /*opacity: 0;*/
  }
  50% {
    transform: translateY(100px);
    /*opacity: 10;*/
  }
  100% {
    transform: translateY(0px);
    /*opacity: 30;*/
  }
}

/*点击播放列表动画end*/
</style>