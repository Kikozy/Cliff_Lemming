<template>
  <div class="Loadclouds">
    <img class="Loadcloud1" src="../../assets/IMAGE/Loading/cloud1.png" alt="">
    <img class="Loadcloud2" src="../../assets/IMAGE/Loading/cloud2.png" alt="">
    <img class="Loadcloud3" src="../../assets/IMAGE/Loading/cloud1.png" alt="">
    <img class="Loadcloud4" src="../../assets/IMAGE/Loading/cloud2.png" alt="">
    <img class="Loadcloud5" src="../../assets/IMAGE/Loading/cloud1.png" alt="">
    <img class="Loadcloud6" src="../../assets/IMAGE/Loading/cloud2.png" alt="">
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "LoadCloud",
  mounted() {
    $(window).ready(function () {
      $('.Loadcloud1').animate({
        'top': '-100%'
      }, 2000);
      $('.Loadcloud2').animate({
        'top': '-100%',
        'left': '-100%'
      }, 2000);
      $('.Loadcloud3').animate({
        'right': '-100%'
      }, 2000);
      $('.Loadcloud4').animate({
        'right': '-100%',
        'bottom': '-100%'
      }, 2000);
      $('.Loadcloud5').animate({
        'top': '-100%',
        'right': '-100%'
      }, 2000);
      $('.Loadcloud6').animate({
        'bottom': '-100%',
        'left': '-100%'
      }, 2000);
      $('.Loadclouds').animate({
        'opacity': '0'
      }, 2000)
      setTimeout(function () {
        $('.Loadclouds').remove();
      }, 2000);
    });
  },
}
</script>

<style scoped>

.Loadclouds {
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 9999999;
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: linear-gradient(to bottom, #09203f, #537895);
  opacity: 100%;
}

.Loadclouds > * {
  width: 80rem;
  position: absolute;
}

.Loadcloud1 {
  top: -10rem;
}

.Loadcloud2 {
  left: -10rem;
  top: 10rem;
}

.Loadcloud3 {
  right: -20rem;
}


.Loadcloud4 {
  right: -20rem;
  bottom: -10rem;
}

.Loadcloud5 {
  top: -10rem;
  right: -5rem;
}

.Loadcloud6 {
  left: -20rem;
  bottom: -10rem;
}
</style>