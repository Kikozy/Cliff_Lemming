<template>
  <div class="notFound">
    <img src="../../assets/IMAGE/404/Lemming404-2.png" alt="">
    <div class="logoHead"></div>
    <p class="worryInfo">你是不是迷路了？这里还没有布置哦~</p>
    <p class="enInfo worryInfo">Are you lost? It's not set up yet</p>
    <div class="notFoundBack" @click="goHome">GO HOME</div>
  </div>
</template>

<script>
export default {
  name: "404",
  methods:{
    goHome(){
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
  animation: ease-in-out run 4s infinite;
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
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(20deg);
  }
  100% {
    transform: rotateZ(-10deg);
  }
}

.worryInfo {
  width: 100%;
  text-align: center;
  font-family: "Microsoft JhengHei UI";
  color: #cfcfcf;
  bottom: 30%;
  position: absolute;
}

.enInfo {
  bottom: 27%;
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
  background-image: linear-gradient(to bottom right, #004e65,#017ca5);
  z-index: 3;
  box-shadow: 0 0 0 #0077aa;
  transition: ease box-shadow .3s;
}
.notFoundBack:hover:before{
  box-shadow: 0 0 20px #0077aa;
}
</style>