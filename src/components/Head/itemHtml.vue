<template>
  <div class="itemHtml">
    <ul class="htmlList" v-for="val in router">
      <li :class="{'active':active==key}" @click="isclick(key)" v-for="(value,key) in val">
        <router-link :to="value">{{ key }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "itemHtml",
  data() {
    return {
      active: 'Home',
      // 设置初始值为第一个按钮
      router: [{'Home': '/home'},
        {'About': '/about'},
        {'Timeline': '/timeline'},
        {'Lemming': '/lemming'},
        {'Test': '/test'},
        {'Center': '/lemming_admin'}]
    }
  },
  methods: {
    isclick(key) {
      // 点击后滚动到指定位置
      $('html,body').animate({scrollTop: $(".HomeContent").offset().top - 100}, 300)
      this.active = this.$route.name;
      // 被点击后将index传进来赋值为点击的第几个
      switch (key) {
        case 'Home':
          this.$router.push('/home')
          break
        case 'About':
          this.$router.push('/about')
          break
        case 'Timeline':
          this.$router.push('/timeline')
          break
        case 'Test':
          this.$router.push('/test')
          break
        case 'Lemming':
          this.$router.push('/lemming')
          break
        case 'Center':
          this.$router.push('/lemming_admin')
          break
      }
    }
  },
  mounted() {
    this.active = this.$route.name
  }
}
</script>

<style scoped>
.itemHtml {
  opacity: 100%;
  /*background-color: pink;*/
  float: right;
  margin: .2%;
  padding: 1rem;
  border-radius: 10px;
  /*background-color: rgba(97, 123, 136, .3);*/
  /*background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); !*对角渐变*!*/
  /*box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1) inset, 1px 1px 5px rgba(0, 0, 0, .5);*/
  /*backdrop-filter: blur(50px);*/
}

li {
  margin-left: 1rem;
  font-weight: bold;
  /*background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); !*对角渐变*!*/
  /*box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.05) inset, 0 0 0px #017ca5;*/
  border-radius: 10px;
  padding: 5px;
  transition:box-shadow ease 1s, background-color ease .5s;
}

li:hover {
  background-color: #017ca5;
  box-shadow: 0 0 20px #017ca5;
}

li > * {
  text-shadow: 1px 1px 1px rgba(0,0,0,.7);
  color: #cfcfcf;
}


/*.active {*/
/*  !*color: black;*!*/
/*  background-color: #305747;*/
/*}*/
</style>