<template>
  <div>
    <div class="HOME_ARTICLE">
        <div>
<!--          <keep-alive>-->
            <Blog/>
<!--          </keep-alive>-->

        </div>
    </div>
  </div>

</template>

<script>
//导入需要的包
import Blog from '@/components/HomeContent/Blog';

export default {
  components: {
    Blog,
  }
}
</script>

<style scoped>
.HEAD_HOME_INFO {
  width: 50vw;
  height: 30vh;
  /*background-color: pink;*/
}

.HEAD_HOME_INFO > * {
  float: left;
  margin-bottom: 1rem;
  margin-right: 2vw;
}

.HEAD_HOME_INFO > *:last-child {
  margin-right: 0;
}
</style>