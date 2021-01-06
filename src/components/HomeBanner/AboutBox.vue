<template>
  <div class="aboutBox">
    <img class="logo" src="../../assets/IMAGE/Home/HeadB.png"/>
    <div class="bannerInfo">
      <h4 class="Name">
        Hi! 我是
        <span>Lem</span>
        <br>
        <p>一个努力学习成长热爱<span>前端</span>普通年轻人</p>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBox"
}
</script>

<style scoped>
.aboutBox {
  position: absolute;
  z-index: 1;
  /*background-color: rgba(140, 158, 168, .4);*/
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  width: 30vw;
  min-width: 20rem;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  text-align: center;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: .5px .5px 1px rgba(255, 255, 255, 0.2) inset, 1px 1px 5px rgba(0, 0, 0, .4);
  transition: background-color ease .5s, box-shadow ease .5s, width ease .5s, backdrop-filter ease .3s;
}

.aboutBox:hover {
  box-shadow: .5px .5px 1px rgba(255, 255, 255, 0.3) inset, 4px 4px 10px rgba(0, 0, 0, .2);
  /*background-color: rgba(71, 100, 122, 0.2);*/
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  backdrop-filter: blur(5px);
  width: 32vw;
}

.logo {
  width: 30%;
  border-radius: 50%;
  margin-top: -30px;
  box-shadow: 0 0 30px rgba(50, 69, 85, 0.8);
}

.bannerInfo {
  margin-top: 1rem;
  padding: .5rem;
  text-align: left;
  /*background-color: #55a532;*/
}

.Name {
  color: white;
  font-family: "Microsoft JhengHei UI";
  font-weight: bold;
  font-size: 3vw;
}

.Name span {
  font-weight: bold;
  color: #017ca5;
}

.Name > p {
  margin: 1vw;
  font-family: "Microsoft JhengHei UI";
  font-weight: normal;
  font-size: 1vw;
  color: #a5a5a5;
}
</style>