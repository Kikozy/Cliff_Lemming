<template>
  <div class="articleContent">
    <h1 class="goBack" id="goback" @click="goback">返回</h1>
    <h1 class="articleTitle">{{ this.title }}</h1>
    <p class="articlePushDate">{{ this.pushDate }}</p>
    <p class="article" v-html="this.content"></p>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "showArticle",
  props: {
    value: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      title: '',
      content: this.value,
      pushDate: ''
    }
  },
  methods: {
    goback() {
      history.back()
      $('html,body').animate({scrollTop: $(".HomeContent").offset().top - 100}, 500)
    }
  },
  created() {
    let local_article = JSON.parse(localStorage.getItem('article'))
    this.title = local_article.title
    this.content = local_article.content
    this.pushDate = local_article.pushDate
  }
}
</script>

<style scoped>

.goBack {
  color: #cfcfcf;
  cursor: pointer;
  position: relative;
  width: 2rem;
  height: 1rem;
  background-color: #017ca5;
  padding: 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  border-radius: 10px 0px 10px 10px;
  z-index: 1;
  right: 2rem;
  box-shadow: 0 0 0px #55a532;
  transition: ease box-shadow .4s;
}

.goBack:after {
  content: '';
  position: absolute;
  backdrop-filter: blur(10px);
  top: 1.5rem;
  background-color: rgba(45, 81, 73, .3);
  border-radius: 0px 0px 0px 10px;
  width: 5rem;
  height: 2rem;
  /*left: .5rem;*/
  right: 1rem;
  z-index: -1;
  transition: ease right .3s;
}

.goBack:hover {
  box-shadow: 0 0 20px #017ca5;
}

.goBack:hover:after {
  right: 2rem;
}


.articleTitle {
  position: relative;
  font-family: "Microsoft JhengHei UI";
  float: right;
  font-size: 3vw;
  width: 45vw;
  color: white;
  display: inline-block;
  /*background-color: #55a532;*/
  z-index: 1;
}

.articlePushDate {
  /*background-color: #55a532;*/
  /*background-color: red;*/
  padding: .5rem;
  display: inline-block;
  width: 100%;
  color: #cfcfcf;
}

.articleContent {
  width: 52vw;
  /*position: absolute;*/
}

.article {
  /*background-color: #55a532;*/
  width: 52vw;
  display: inline-block;
  /*margin-top: 2rem;*/
  color: white;
}

</style>