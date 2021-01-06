<template>
  <div class="blogNews">
    <ul class="Blogs" v-for="(item,index) in data">
      <li class="Blog_li">
        <img @click="showArticle(item.id,item.title,item.content,item.pushDate)" class="Blog_img"
             src="http://img5.mtime.cn/pi/2020/08/26/110208.47581761_1000X1000.jpg" alt="">
        <div class="Blog_info">
          <h1 class="Blog_title" @click="showArticle(item.id,item.title,item.content,item.pushDate)">{{
              item.title
            }}</h1>
          <p class="Blog_content" v-html="item.content.substr(0,300)+'...'"></p>
          <p class="Blog_pushDate">{{ item.pushDate }}</p>
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
      this.$router.push('/article')
    },
    post_page(page) {
      request({
        url: '/article_show',
        params: {
          id: 'article069',
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
    request({
      url: '/article_show',
      params: {
        id: 'article069',
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
  /*background-color: #cfcfcf;*/
  margin-bottom: 1.5rem;
  width: 100%;
  height: 40vh;
}

.Blog_li:hover .Blog_title {
  color: #017ca5;
}

.Blog_li:hover .Blog_img {
  transform: scale(1.05);
}

.Blog_img {
  cursor: pointer;
  float: left;
  width: 15vw;
  min-width: 10rem;
  height: 40vh;
  min-height: 10rem;
  border-radius: 20px;
  background-color: #cecece;
  transform: scale(1);
  transition: ease transform .3s;
}

.Blog_info {
  /*background-color: red;*/
  height: 35vh;
  min-width: 10rem;
  float: left;
  padding: 1rem;
  /*background-color: #0077aa;*/
}

.Blog_title {
  cursor: pointer;
  color: white;
  font-size: 2em;
  min-font-size: 5rem;
  width: 33vw;
  font-family: "Microsoft JhengHei UI";
  transition: ease color .3s;
}

.Blog_content {
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  /*white-space: nowrap; !*强制不换行*!*/
  width: 30vw; /*不允许出现半汉字截断*/
  font-weight: lighter;
  line-height: 1.5rem;
  height: 10vw;
  /*background-color: #55a532;*/
  min-height: 5rem;
  margin-top: 1rem;
  color: #cfcfcf;
  font-family: "Microsoft JhengHei UI";
}

.Blog_pushDate {
  /*margin-top: 1rem;*/
  position: absolute;
  font-size: 1vw;
  color: #ffffff;
  background-image: linear-gradient(150deg, #20b7d9 -50%, #13202b 100%);
  border-radius: 10px;
  padding: .5rem;
  box-shadow: 0 0 30px rgba(27, 123, 148, .35);
}

.pages {
  display: inline-block;
  /*background-color: red;*/
  text-align: center;
  width: 52vw;
  /*height: 2rem;*/
}

.Blog_page {
  /*background-color: red;*/
  width: 100%;
  min-width: 10rem;
  display: block;
  /*display: inline-block;*/
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