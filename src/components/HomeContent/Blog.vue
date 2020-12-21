<template>
  <div class="blogNews">
    <ul class="blogList">
      <transition-group name="showUp">
        <li v-for="(item,index) in data" v-bind:key="index">
          <div id="hole"></div>
          <div class="title"><h1>{{ item.title }}</h1></div>
          <div class="content"><p id="blogP">{{ item.content }}</p></div>
        </li>
      </transition-group>
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
      url: '/home'
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
/*vue动画*/
.showUp-enter {
  transform: translateY(1000px);
}


.blogNews {
  float: left;
  width: 70%;
  height: 100%;
  /*background-color: pink;*/
}

.blogList li {
  cursor: pointer;
  transform: translateY(0px);
  color: white;
  margin-bottom: 20px;
  background-color: #516574;
  background-image: linear-gradient(to bottom right, #385c84 -150%, #152033 100%); /*对角渐变*/
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .3), 2px 2px 5px rgba(0, 0, 0, .3);
  border-radius: 20px;
  width: 95%;
  height: 7vw;
  padding: 2.5% 2.5%;
  /*box-shadow: 0px 5px 5px #4c4c4c;*/
  transition: box-shadow ease .3s, transform ease .3s;
}

.blogList li:hover {
  transform: translateY(-10px);
  box-shadow: 1px 1px 1px inset rgba(226, 226, 226, .3), 0px 5px 15px rgba(0, 0, 0, .3);
}

.blogList li:hover #hole {
  width: 1.1rem;
  height: 1.1rem;
  box-shadow: 0px 4px 5px #0f1a21 inset;
}

#hole {
  position: relative;
  float: left;
  left: -1%;
  top: -1%;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #203947;
  box-shadow: 0px 2px 1px #0f1a21 inset;
  transition: box-shadow ease .3s, height ease .3s, width ease .3s;
}

.blogList .title {
  top: -.2rem;
  position: relative;
  font-size: 2vw;
  font-weight: bold;
}


#blogP {
  color: #b4b4b4;
  font-size: 1vw;
  padding-top: 1vw;
  line-height: 1.5vw;
  padding-left: 2vw;
  padding-right: 2vw;
}

</style>