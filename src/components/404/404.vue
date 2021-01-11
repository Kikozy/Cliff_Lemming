<template>
  <div class="notFound">
    <img src="../../assets/IMAGE/404/Lemming404-2.png" alt="">
    <div class="logoHead"></div>
    <div class="worryInfo">
      <p class="infoStyle">
        你是不是迷路了？🌲这里还没有布置哦~<br>
        Are you lost? It's not set up yet~
      </p>
    </div>
    <div class="notFoundBack" @click="goHome">GO HOME</div>
  </div>
</template>

<script>
export default {
  name: "404",
  methods: {
    goHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.notFound {
  width: 100%;
  height: 100vh;
  position: relative;
}

.notFound > img {
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.logoHead {
  background-image: url("../../assets/IMAGE/Home/HeadB.png");
  min-width: 6rem;
  min-height: 6rem;
  margin: 3rem;
  border-radius: 50%;
  background-size: cover;
  position: absolute;
  animation: ease-in-out run 3.5s infinite;
}

.logoHead:before {
  content: 'LemMing';
  color: #ffffff;
  font-size: 1.5em;
  font-weight: bold;
  font-family: "Microsoft JhengHei UI";
  position: absolute;
  bottom: 35%;
  left: 0;
  animation: ease-in-out run 4s infinite;
}

@keyframes run {
  0% {
    transform: rotateZ(-20deg);
  }
  50% {
    transform: rotateZ(20deg);
  }
  100% {
    transform: rotateZ(-20deg);
  }
}

.worryInfo {
  /*background-color: #0077aa;*/
  width: 100%;
  text-align: center;
  font-family: "Microsoft JhengHei UI";
  color: #102540;
  bottom: 25%;
  font-weight: bold;
  position: absolute;
}

.infoStyle{
  background-color: #cfcfcf;
  display: inline-block;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 10px 10px 10px rgba(0,0,0,.2);
}

.notFoundBack {
  position: absolute;
  width: 100%;
  /*background-color: #55a532;*/
  text-align: center;
  bottom: 20%;
  z-index: 1;
}

.notFoundBack:before {
  cursor: pointer;
  content: 'Home';
  color: white;
  font-family: "Microsoft JhengHei UI";
  font-weight: bold;
  padding: 1rem;
  border-radius: 10px;
  position: absolute;
  background-color: #017ca5;
  background-image: linear-gradient(to bottom right, #004e65, #017ca5);
  z-index: 3;
  box-shadow: 0 0 0 #0077aa;
  transition: ease box-shadow .3s;
}

.notFoundBack:hover:before {
  box-shadow: 0 0 20px #0077aa;
}
</style>