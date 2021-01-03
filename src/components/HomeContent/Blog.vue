<template>
  <div class="blogNews">
    <ul class="Blogs" v-for="(item,index) in data">
      <li class="Blog_li">
        <img class="Blog_img" src="http://img5.mtime.cn/pi/2020/08/26/110208.47581761_1000X1000.jpg" alt="">
        <div class="Blog_info">
            <h1>{{ item.title }}</h1>
            <p class="Blog_content" v-html="item.content.substr(0,300)+'...'"></p>
            <p class="Blog_pushDate">{{ item.pushDate }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "Blog",
  data() {
    return {
      data: []
    }
  },
  created() {
    request({
      // url:'http://127.0.0.1:5000/api/cliff/home'
      // url: '/home'
      url: '/article_show',
      params: {
        id: 'article069'
      }
    }).then(res => {
      console.log(res.data);
      this.data = res.data
    }).catch(err => {
      console.log('===jianshu ERR===', err)
    })
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

.Blog_img {
  float: left;
  width: 15vw;
  height: 40vh;
  border-radius: 20px;
  background-color: #cecece;
}

.Blog_info {
  height: 35vh;
  float: left;
  padding: 1rem;
  /*background-color: #0077aa;*/
}

.Blog_info > h1 {
  color: white;
  font-size: 2vw;
  font-family: "Microsoft JhengHei UI";
}

.Blog_content {
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  /*white-space: nowrap; !*强制不换行*!*/
  width: 30vw; /*不允许出现半汉字截断*/
  font-weight: lighter;
  line-height: 1.5vw;
  height: 10vw;
  margin-top: 1rem;
  color: #cfcfcf;
  font-family: "Microsoft JhengHei UI";
}

.Blog_pushDate {
  margin-top: 1rem;
  position: absolute;
  font-size: 1vw;
  color: #ffffff;
  background-image: linear-gradient(150deg,#20b7d9 -50%,#13202b 100%);
  border-radius: 10px;
  padding: .5rem;
  box-shadow:0 0 30px rgba(27, 123, 148,.35);
}
</style>