<template>
  <div class="HOME">
    <Banner/>
    <div class="HomeContent">
      <div class="HContent w">
        <Blog/>
        <InfoMe/>
      </div>
    </div>
  </div>

</template>

<script>
//导入需要的包
import Banner from '@/components/HomeBanner/Banner'
import Blog from '@/components/HomeContent/Blog'
import InfoMe from "@/components/HomeContent/InfoMe";

export default {
  components: {
    Banner,
    Blog,
    InfoMe
  }
}
</script>

<style scoped>

.HomeContent {
  width: 100%;
  position: absolute;
  background-color: white;
  box-shadow: 0 -40px 30px white;

}

.HContent {
  width: 70%;
  height: 100rem;
}
</style>