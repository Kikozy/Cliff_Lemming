<template>
  <div class="itemHtml">
    <ul class="htmlList">
      <li @click="isclick(index)" v-for="(key,value,index) in router" :class="{active:isactive === index}">
        <router-link :to=key>{{ value }}</router-link>
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
      isactive: null,
      // 设置初始值为第一个按钮
      router:
          {
            'Home': '/home',
            'About': '/about',
            'Timeline': '/timeline',
            'Lemming': '/lemming',
            'Test': '/test',
            'Center': '/lemming_admin'
          }
    }
  },
  methods: {
    isclick(index) {
      // 点击后滚动到指定位置
      $('html,body').animate({scrollTop: $(".HomeContent").offset().top - 100}, 300)
      this.isactive = index
    }
  },
  created() {

  }
}
</script>

<style scoped>
.itemHtml {
  opacity: 100%;
  float: right;
  margin: .2%;
  padding: 1rem;
  border-radius: 10px;
}

li {
  margin-left: 1rem;
  font-weight: bold;
  border-radius: 10px;
  transition: box-shadow ease 1s, background-color ease .5s;
}

li:hover {
  background-color: #017ca5;
  box-shadow: 0 0 20px #017ca5;
}

li > * {
  padding: 5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, .7);
  color: #cfcfcf;
}

li {
  animation: ease toDown 1.5s;
}

@keyframes toDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.active {
  background-color: #017ca5;
  box-shadow: 0 0 20px #017ca5;
}

</style>