<template>
  <div>
    <div class="jumpTop" @click="jump">
      <img src="../../assets/IMAGE/LemBack/Moon.png" alt="">
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
    jump() {
      $('html,body').animate({scrollTop: $(".HomeContent").offset().top - 100}, 300)
    },
  }
}
</script>

<style scoped>

img {
  cursor: pointer;
  animation: ease-in-out jump-in 5s infinite;
}


/*点击播放列表动画*/

@keyframes jump-in {
  0% {
    transform: rotateZ(-30deg);
  }
  50% {
    transform: rotateZ(50deg);
  }
  100% {
    transform: rotateZ(-30deg);
  }
}

/*点击播放列表动画end*/
</style>