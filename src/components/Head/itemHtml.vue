<template>
  <div class="itemHtml">
    <ul class="htmlList" v-for="(val,index) in router">
      <li :class="active==index?'active':''"  @click="isclick(index)"  v-for="(value,key) in val">
        <router-link :to="value">{{ key }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "itemHtml",
  data() {
    return {
      active:'0', // 设置初始值为第一个按钮
      router: [{'Home': '/home'},
        {'About': '/about'},
        {'TimeLine': '/timeLine'},
        {'Lemming': '/lemming'},
        {'Test': '/test'},
        {'Center': '/lemming_admin/lccenter'}]
    }
  },
  methods:{
    isclick(index){
      // 被点击后将index传进来赋值为点击的第几个
      this.active = index;
    }
  }
}
</script>

<style scoped>
.itemHtml {
  background-color: pink;
  float: right;
  margin: .2%;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(97, 123, 136, .3);
  box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.1) inset, 1px 1px 5px rgba(0, 0, 0, .5);
  backdrop-filter: blur(50px);
}

li {
  margin-left: .5rem;
  background-color: #617B88;
  border-radius: 10px;
  padding: 5px;
  transform: translateY(0);
  transition: transform ease .3s;
}

li > * {
  color: #cfcfcf;
}

.itemHtml > ul > li:hover {
  transform: translateY(5px);
}

.active {
  /*color: black;*/
  background-color: #305747;
}
</style>