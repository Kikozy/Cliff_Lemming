<template>
  <div class="blogNews">
    <ul class="blogList">
      <transition-group name="showUp">
        <li class="BlogLi" v-for="(item,index) in data" v-bind:key="index">
          <div class="articelImg">
            <div class="articelContent">
              <div class="title"><h1>{{ item.title }}</h1></div>
              <div class="content"><p id="blogP">{{ item.content }}</p></div>
              <div class="datetime"><p>2020-12-14</p></div>
              <div class=""></div>
            </div>
          </div>
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
.BlogLi {
  margin-bottom: 1rem;
  border-radius: 10px;
  width: 45rem;
  height: 20vh;
  background-image: linear-gradient(to bottom right, #385c84 -100%, #152033 100%); /*对角渐变*/
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .3), 2px 2px 5px rgba(0, 0, 0, .3);
  padding: 1rem;
}

.articelImg {
  width: 30%;
  height: 100%;
  background-color: white;
  float: left;
  border-radius: 10px;
}

.articelContent {
  position: relative;
  top: -.5rem;
  margin-left: 12vw;
  width: 33rem;
  height: 20vh;
  background-image: linear-gradient(to bottom right, rgba(56, 92, 132,.8) -100%, rgba(21, 32, 51,1) 100%); /*对角渐变*/
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .3), 2px 2px 5px rgba(0, 0, 0, .3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 1vh;
}

.articelContent > .title {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
}

.articelContent > .content {
  margin: .5rem;
  color: #979797;
}

</style>