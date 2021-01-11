<template>
  <div class="infoMe">
    <img class="logo" src="../../assets/IMAGE/Home/HeadB.png"/>
    <div class="nav_info_me">
      <ul class="nav_ul">
        <li>友链</li>
        <li>其他</li>
        <li>其他</li>
        <li>其他</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoMe"
}
</script>


<style scoped>
.infoMe {
  z-index: 99;
  border-radius: 20px;
  width: 18vw;
  min-width: 10rem;
  height: 60vh;
  background-image: linear-gradient(to bottom right, #385c84 -80%, #0d1925 50%); /*对角渐变*/
  box-shadow: .3px .3px 1px inset rgba(226, 226, 226, .3), 15px 15px 40px rgba(0, 0, 0, .3);
}

.logo {
  width: 30%;
  border-radius: 50%;
  margin-top: -30px;
  box-shadow: 0 0 30px #017ca5;
  transition: box-shadow ease .3s;
}

.logo:hover {
  box-shadow: 0 0 50px #00c0ff;
}

.nav_ul > li {
  font-weight: bold;
  color: #ffffff;
  width: 13vw;
  min-width:9rem;
  height: 6vh;
  background-image: linear-gradient(to bottom right, #017ca5 -200%, #152033 100%); /*对角渐变*/
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .3);
  border-radius: 5px;
  margin: 2vw;
  text-align: center;
  line-height: 3vw;
}

.nav_ul > li:hover {

}
</style>