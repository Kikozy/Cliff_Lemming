<template>
  <div class="articleContent">
    <div class="articleHead">
      <h1 class="goBack" id="goback" @click="goback">返回</h1>
      <h1 class="articleTitle">{{ this.title }}</h1>
    </div>
    <div class="articleInfo">
      <p class="articlePushDate">{{ this.pushDate }}</p>
      <p class="clickNum  iconfont icon-liulan1">{{ this.clickNum }}</p>
      <p class="author iconfont icon-zuozhe1">Lemming</p>
    </div>
    <p class="article" v-html="this.content"></p>
    <div>
      <comment/>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import {request} from "@/network/requests";
import Comment from "@/components/Article/artilce_message/comment";


export default {
  name: "showArticle",
  components: {Comment},
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
      pushDate: '',
      clickNum: '',
      changeDate: '',
    }
  },

  methods: {
    goback() {
      this.$router.push('/home')
      // $('html,body').animate({scrollTop: $(".HomeContent").offset().top - 100}, 500)
    },
    // 本地没有就存
    matchTime(id) {
      let oldDate = this.changeDate;
      request({
        url: '/get_newTime',
        method: 'POST',
        data: {
          id: id
        }
      }).then(res => {
        // 判断旧时间和新时间，来获取最新文章文章
        if (res.data.date !== oldDate) {
          this.getArticle(id)
        }
      }).catch(err => {
        console.log(err)
      })

    },
    getArticle(id) {
      request({
        url: '/article_show',
        params: {
          id: id,
          code: 'getArticle'
        }
      }).then(res => {
        this.title = res.data[0].title
        this.content = res.data[0].content
        this.clickNum = res.data[0].click
        this.pushDate = res.data[0].pushDate
        this.changeDate = res.data[0].changeDate
        // 存进本地
        let localStrange_article = {
          'id': id,
          'title': this.title,
          'content': this.content,
          'pushDate': this.pushDate,
          'clickNum': this.clickNum,
          'changeDate': this.changeDate,
        }
        localStorage.setItem(res.data[0].id, JSON.stringify(localStrange_article));
        // 其他地方跳转过来的，动态增加title
        this.$router.push({query: {...this.$route.query, title: res.data[0].title, clickNum: res.data[0].click}})
        $('html,body').animate({scrollTop: $(".HomeContent").offset().top - 100}, 500)
      }).catch(err => {
        this.$router.push('/404')
      })
    },
    hasArticle() {
      // 接收blog传来query.id
      // 判断本地是否有，有的话就取本地的内容，减少重复请求
      let clickNum = this.$route.query.clickNum;
      let id = parseInt(this.$route.query.id);
      if (JSON.parse(localStorage.getItem(id)) === null) {
        this.getArticle(id)
      } else {
        let local_article = JSON.parse(localStorage.getItem(id))
        this.title = local_article.title
        this.content = local_article.content
        this.pushDate = local_article.pushDate
        this.changeDate = local_article.changeDate
        this.clickNum = clickNum
        // 把路径也存最新的点击量
        this.$router.push({query: {...this.$route.query, title: this.title, clickNum: clickNum}})
        // 对比时间
        this.matchTime(id)
      }
    },
    readNum() {
      let id = parseInt(this.$route.query.id);
      request({
        url: '/readNum',
        method: 'post',
        data: {
          code: 'addRead1',
          id: id
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.hasArticle()
    this.readNum()
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

.articleHead {
  display: flex;
}

.articleTitle {
  position: relative;
  font-family: "Microsoft JhengHei UI";
  width: 45vw;
  padding: .5em;
  font-size: 3vw;
  color: white;
  display: inline-block;
  /*background-color: #55a532;*/
  text-shadow: 2px 2px 3px #000;
  z-index: 1;
}

.articleInfo {
  width: 100%;
  display: flex;
  margin: 2rem;
  color: #999;
}

.articleInfo > * {
  background-color: #262b34;
  border-radius: 10px;
  margin: .2rem;
  padding: .5rem;
  box-shadow: 3px 3px 5px rgba(13, 17, 23, .5);
}

.articleContent {
  width: 52vw;
}

.article {
  line-height: 1.5rem;
  width: 52vw;
  display: inline-block;
  color: white;
}

::v-deep pre {
  border-radius: 10px;
  background-color: #0c121a;
  text-shadow: 1px 1px 1px #000;
  box-shadow: 2px 2px 2px #000;
  color: #cfcfcf;
}

::v-deep pre .operator {
  background: transparent;
}


@media screen and (max-width: 600px) {
  .articleContent {
    width: 100vw;
  }

  .article {
    width: 100vw;
  }
}

</style>