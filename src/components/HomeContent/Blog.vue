<template>
  <div class="blogNews">
    <ul class="Blogs" v-for="(item,index) in data">
      <li class="Blog_li">
        <h1 class="Blog_title" @click="showArticle(item.id,item.title,item.content,item.pushDate)">{{
            item.title
          }}</h1>
        <div class="Blog_info">
          <div class="Blog_img" @click="showArticle(item.id,item.title,item.content,item.pushDate)">
            <img src="https://p.pstatp.com/origin/137560001eb95836ce26a.jpg">
          </div>
          <div class="BlogContent">
            <p class="Blog_content" v-html="item.content.substr(0,300)+'...'"></p>
            <p class="Blog_pushDate">{{ item.pushDate }}</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="pages">
      <ul class="Blog_page" v-for="item in this.page">
        <li @click="post_page(item)">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";
import $ from "jquery";

export default {
  name: "Blog",
  data() {
    return {
      isshow: true,
      page: '',
      data: []
    }
  },
  methods: {
    showArticle(id, title, content, pushDate) {
      $('html,body').animate({scrollTop: $(".HomeContent").offset().top - 100}, 500)
      let localStrange_article = {
        'id': id,
        'title': title,
        'content': content,
        'pushDate': pushDate
      }
      // 存进本地
      localStorage.removeItem('article')
      localStorage.setItem('article', JSON.stringify(localStrange_article));
      this.$router.push({
        path:'/article',
        // 传id过去
        query: {
          id:id,
          title:title
        }
      })
    },
    post_page(page) {
      request({
        url: '/article_show',
        params: {
          code: 'article069',
          page: page - 1
        }
      }).then(res => {
        console.log(res.data[0])
        this.data = res.data[0] //数据
        $('html,body').animate({scrollTop: $(".HomeContent").offset().top - 100}, 500)
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    // 获取一页博客
    request({
      url: '/article_show',
      params: {
        code: 'article069',
        page: 0
      }
    }).then(res => {
      // console.log(res.data[0]);
      this.data = res.data[0] //数据
      let page = res.data[1].length //传来的数据数量
      // parseInt取整型不要余数
      // 取页码：如果数据除余数不等于0，那么就除10加1；如果等于0，那么就除10不加1
      this.page = page % 10 !== 0 ? parseInt(page / 10) + 1 : parseInt(page / 10) + 1
    }).catch(err => {
      console.log('===jianshu ERR===', err)
    });
  }
}
</script>


<style scoped>
.Blog_li {
  /*border-radius: 5px;*/
  /*box-shadow: 2px 2px 4px #000000;*/
  margin-bottom: 1.5rem;
  width: 52vw;
  min-width: 20rem;
}

.Blog_li:hover .Blog_title {
  color: #017ca5;
  text-shadow: 0 0 10px #005474;
}

.Blog_title {
  cursor: pointer;
  color: white;
  font-size: 2em;
  padding: 1rem;
  min-font-size: 5rem;
  width: 52vw;
  font-family: "Microsoft JhengHei UI";
  transition: ease color .3s;
}

.Blog_info {
  height: 26vh;
  width: 52vw;
  display: inline-block;

}

.Blog_img {
  float: left;
  /*width: 20vw;*/
  /*height: 13vw;*/
  min-height: 10rem;
  border-radius: 10px;
  transition: ease transform .3s;
}

.Blog_img > img {
  cursor: pointer;
  width: 20vw;
  height: 13vw;
  min-height: 10rem;
  border-radius: 10px;
}

.BlogContent {
  position: relative;
  color: #cfcfcf;
  float: left;
  width: 32vw;
  height: 26vh;
}

.BlogContent > * {
  margin: .5rem;
}

.Blog_content {
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  /*white-space: nowrap; !*强制不换行*!*/
  width: 30vw; /*不允许出现半汉字截断*/
  height: 20vh;
  font-weight: lighter;
  line-height: 1.5rem;
  font-family: "Microsoft JhengHei UI";
}

.Blog_pushDate {
  position: absolute;
  bottom: 0;
  font-size: 1vw;
  color: #ffffff;
  background-image: linear-gradient(150deg, #017ca5 -50%, #13202b 100%);
  border-radius: 10px;
  padding: .5rem;
  box-shadow: 0 0 30px rgba(27, 123, 148, .35);
}

.Blog_li:hover .Blog_img {
  transform: scale(1.05);
}

.pages {
  display: inline-block;
  text-align: center;
  width: 52vw;
}

.Blog_page {
  width: 100%;
  min-width: 10rem;
  display: block;
}


.Blog_page > li {
  color: white;
  cursor: pointer;
  background-image: linear-gradient(to bottom right, rgba(58, 95, 137, .5) -100%, rgba(20, 31, 49, .5) 100%); /*对角渐变*/
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.05) inset, 0 0 0px #017ca5;
  border-radius: 10px;
  float: left;
  margin: .5vw;
  padding: .8vw;
  transition: transform ease .3s, box-shadow ease 1s, background-color ease .5s;
}

.Blog_page > li:hover {
  background-color: #017ca5;
  box-shadow: 0 0 20px #017ca5;
}

</style>