<template>
  <div class="blogNews">
    <ul class="Blogs" v-for="(item,index) in data">
      <li class="Blog_li">
        <h1 class="Blog_title dog" @click="showArticle(item.id,item.title,item.content,item.pushDate,item.click)">
          <img id="dog" :src="require('../../assets/ICON/dogs/'+index+'.png')" alt="">
          {{item.title }}
        </h1>
        <div class="Blog_info">
          <div class="Blog_img" @click="showArticle(item.id,item.title,item.content,item.pushDate,item.click)">
            <img src="https://p.pstatp.com/origin/137560001eb95836ce26a.jpg">
          </div>
          <div class="BlogContent">
            <p class="Blog_content" v-html="item.content.substr(0,300)+'...'"></p>
            <div class="blogOther">
              <p class="Blog_pushDate blogOtherStyle">{{ item.pushDate }}</p>
              <p class="blogOtherStyle iconfont icon-liulan" title="点击量"> {{ item.click }}</p>
              <p class="blogOtherStyle iconfont icon-zuozhe"> Lemming</p>
            </div>
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
  computed:{
    dogUrl(index){
      console.log(index)
    }
  },
  methods: {
    showArticle(id, title, content, pushDate, clickNum) {
      $('html,body').animate({scrollTop: $(".HomeContent").offset().top - 100}, 500)
      let localStrange_article = {
        'id': id,
        'title': title,
        'content': content,
        'pushDate': pushDate,
        'clickNum': clickNum
      }
      // 存进本地
      localStorage.removeItem('article')
      localStorage.setItem('article', JSON.stringify(localStrange_article));
      this.$router.push({
        path: '/article',
        // 传id过去
        query: {
          id: id,
          title: title
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
  margin-bottom: 1.5rem;
  width: 55vw;
  min-width: 20rem;
  max-width: 55rem;
  max-height: 30rem;
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
  /*width: 55vw;*/
  font-family: "Microsoft JhengHei UI";
  transition: ease color .3s;
}

#dog {
  position: relative;
  top: 1.5rem;
  width: 80px;
}

.Blog_info {
  height: 26vh;
  width: 55vw;
  display: inline-block;
}

.Blog_img {
  float: left;
  border-radius: 10px;
  transition: ease transform .3s;
}

.Blog_img > img {
  cursor: pointer;
  width: 20vw;
  max-width: 20rem;
  height: 13vw;
  max-height: 13rem;
  border-radius: 10px;
}

.BlogContent {
  position: relative;
  color: #cfcfcf;
  float: left;
  width: 35vw;
  height: 26vh;
  /*min-height: 15rem;*/
}

.BlogContent > * {
  margin: .5rem;
}

.Blog_content {
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  /*white-space: nowrap; !*强制不换行*!*/
  width: 35vw; /*不允许出现半汉字截断*/
  height: 20vh;
  font-weight: lighter;
  line-height: 1.5rem;
  font-family: "Microsoft JhengHei UI";
}

.blogOther {
  position: absolute;
  min-width: 12rem;
  /*background-color: red;*/
  bottom: -.5rem;
}

.blogOtherStyle {
  float: left;
  margin: .2rem;
  padding: .5rem;
  font-size: 1rem;
  color: #ffffff;
  border-radius: 10px;
}

.Blog_pushDate {
  background-image: linear-gradient(150deg, #017ca5 -50%, #13202b 100%);
  box-shadow: 0 0 30px rgba(27, 123, 148, .35);
}

.blogOtherStyle.iconfont {
  background-image: linear-gradient(150deg, #112937 -50%, #13202b 100%);
  box-shadow: 0 0 30px rgba(27, 123, 148, .35);
  font-weight: bold;
  font-size: 1rem;
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
  margin: .5rem;
  padding: .6rem;
  transition: transform ease .3s, box-shadow ease 1s, background-color ease .5s;
}

.Blog_page > li:hover {
  background-color: #017ca5;
  box-shadow: 0 0 20px #017ca5;
}

@media screen and (max-width: 1200px) {
  .Blog_li {
    width: 100%;
    height: 33rem;
    margin-bottom: 5rem;
  }

  .Blog_img > img {
    min-width: 52vw;
    min-height: 40vh;
  }

  .BlogContent {
    min-width: 52vw;
    min-height: 13rem;
  }

  .Blog_content {
    min-width: 50vw;
    min-height: 13rem;
  }
}

@media screen and (max-width: 600px) {
  .Blog_li {
    /*margin-left: 1rem;*/
    /*margin-right: 1rem;*/
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    height: 30rem;
    margin-bottom: 5rem;
  }

  .Blog_img > img {
    min-width: 94vw;
    min-height: 15rem;
  }

  .BlogContent {
    min-width: 100vw;
    min-height: 12rem;
  }

  .Blog_content {
    min-width: 100vw;
    min-height: 10rem;
  }

  .BlogContent > * {
    margin: 0;
  }
}

</style>