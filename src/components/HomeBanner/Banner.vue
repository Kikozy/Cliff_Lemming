<template>
  <section>
    <img
        src="../../assets/IMAGE/LemBack/LemBack.png"
        id="bg"
    >
    <img
        src="../../assets/IMAGE/LemBack/Lem1.png"
        id="moon"
    >
    <img
        src="../../assets/IMAGE/LemBack/Lem2.png"
        id="cloud"
    >
    <img
        src="../../assets/IMAGE/LemBack/Lem3.png"
        id="mountain1"
    >
    <img
        src="../../assets/IMAGE/LemBack/Lem4.png"
        id="mountain2"
    >
    <h2 id="text">
      Lem Ming
    </h2>
    <div id="aboutBox">
      <AboutBox/>
    </div>
    <img
        src="../../assets/IMAGE/LemBack/Lem5.png"
        id="mountain3"
    >
    <img
        src="../../assets/IMAGE/LemBack/Lem6.png"
        id="mountain4"
    >

  </section>

</template>

<script>
import AboutBox from "@/components/HomeBanner/AboutBox";
export default {
  name: "Banner",
  components:{
    AboutBox
  },
  mounted() {
    let bg = document.querySelector('#bg')
    let moon = document.querySelector('#moon')
    let cloud = document.querySelector('#cloud')
    let text = document.querySelector('#text')
    let mountain1 = document.querySelector('#mountain1')
    let mountain2 = document.querySelector('#mountain2')
    // let aboutBox = document.querySelector('#aboutBox')
    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      bg.style.top = value * 0.5 + 'px';
      moon.style.left = value * 0.2 + 'px';
      moon.style.top = value * 0.2 + 'px';
      cloud.style.top = value * 0.5 + 'px';
      text.style.top = value * 1.2 + 'px';
      mountain1.style.top = value * 1 + 'px';
      mountain2.style.top = value * 0.4 + 'px';
      // aboutBox.style.top = -value * 0.3 + 'px';
    })
  }
}
</script>

<style scoped>
/*banner style start*/
section {
  position: relative;
  width: 100%;
  height: 120vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

#text {
  position: relative;
  text-shadow: 2px 2px 1px rgba(0,0,0,.7);
  color: #ffffff;
  font-size: 10em;
  z-index: 0;
}
#aboutBox{
  position: absolute;
}


/*.clouds img {*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  max-width: 70%;*/
/*  !* #云的移动速度# *!*/
/*  animation: animation calc(8s * var(--i)) linear infinite;*/
/*}*/

/* #云移动的开始到结尾位置# */
/*@keyframes animation {*/
/*  0% {*/
/*    transform: translateX(-130%);*/
/*  }*/
/*  100% {*/
/*    transform: translateX(130%);*/
/*  }*/
/*}*/

/*banner style end*/
</style>