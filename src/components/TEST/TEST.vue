<template>
  <div class="TEST">
    <section>
      <img
          src="../../assets/IMAGE/TEST/bg.jpg"
          id="bg"
      >
      <img
          src="../../assets/IMAGE/TEST/moon.png"
          id="moon"
      >
      <img
          src="../../assets/IMAGE/TEST/mountain.png"
          id="mountain"
      >
      <img
          src="../../assets/IMAGE/TEST/road.png"
          id="road"
      >
      <h2 id="text">
        Moon Light
      </h2>
    </section>
  </div>

</template>

<script>
export default {
  name: "TEST",
  mounted() {
    let bg = document.querySelector('#bg')
    let moon = document.querySelector('#moon')
    let mountain = document.querySelector('#mountain')
    let road = document.querySelector('#road')
    let text = document.querySelector('#text')
    window.addEventListener('scroll', () => {
      var value = window.scrollY;

      bg.style.top = value * 0.5 + 'px';
      moon.style.left = -value * 0.5 + 'px';
      mountain.style.top = -value * 0.15 + 'px';
      road.style.top = value * 0.15 + 'px';
      text.style.top = value * 1 + 'px';

    })
  }
}
</script>

<style scoped>
.TEST{
  /*height: 1800px;*/
}
section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*section:before {*/
/*  content: '';*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  width: 100%;*/
/*  height: 100px;*/
/*  background: linear-gradient(to top #ff0000 transparent);*/
/*  z-index: 10000;*/
/*}*/

/*section:after {*/
/*  content: '';*/
/*  position: absolute;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  background: #008eff;*/
/*  z-index: 10000;*/
/*  mix-blend-mode: color;*/
/*}*/

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
  color: #ffffff;
  font-size: 10em;
  z-index: 1;
}

#road {
  z-index: 2;
}

</style>