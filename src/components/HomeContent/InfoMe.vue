<template>
  <div class="infoMe">
    <img class="logo" src="../../assets/IMAGE/Home/HeadB.png"/>
  </div>
</template>

<script>
export default {
  name: "InfoMe"
}
</script>


<style scoped>
.infoMe {
  position: sticky;
  top: 10%;
  border-radius: 20px;
  float: right;
  width: 27%;
  height: 30rem;
background-image: linear-gradient(to bottom right, rgb(48, 67, 82), rgb(52, 49, 66)); /*对角渐变*/
  box-shadow: 1px 1px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
  /*box-shadow: 0px 5px 5px rgba(0, 0, 0, .4);*/
}

.logo {
  width: 30%;
  border-radius: 50%;
  margin-top: -30px;
  box-shadow: 0 0 30px rgba(50, 69, 85, 0.8);
}
</style>