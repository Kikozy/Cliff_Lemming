<template>
  <div class="articleContent">
    <h1 id="goback" @click="goback">返回</h1>
    <h1 class="articleTitle">{{ this.title }}</h1>
    <p class="articlePushDate">{{ this.pushDate }}</p>
    <p class="article" v-html="this.content"></p>
  </div>
</template>

<script>
export default {
  name: "showArticle",
  data() {
    return {
      title: '',
      content: '',
      pushDate: ''
    }
  },
  methods: {
    goback() {
      this.$router.back(-1);
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
#goback {
  cursor: pointer;
  width: 2rem;
  height: 1rem;
  background-color: #0077aa;
  margin-bottom: 1rem;
}

.articleTitle {
  font-family: "Microsoft JhengHei UI";
  font-size: 4vw;
  color: white;
}

.articleContent {
  width: 52vw;
  /*position: absolute;*/
}

.articlePushDate {
  color: #cfcfcf;
}
</style>