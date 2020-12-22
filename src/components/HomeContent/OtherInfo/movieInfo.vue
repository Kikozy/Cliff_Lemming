<template>
  <div class="MovieBar base_linear">
    <div class="movie_info_title base_linear">
      <h1>电影</h1>
      <p>博主分享</p>
    </div>
    <div class="movie_info">
      <ul class="movie_info_list" v-for="(info,index) in video_info">
        <li>
          <p id="info_name" class="base_linear">{{info.name}}</p>
          <img id="info_pic" :src="video_info[index].url">
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "movieInfo",
  data(){
    return{
      video_info:[]
    }
  },
  created() {
    request({
      url:'/video_show'
    }).then(res=>{
      // console.log(res)
      let new_info = res.data[0].slice(-2)
      for (let info of new_info){
        this.video_info.push(info)
      }
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
.MovieBar {
  padding: 1rem;
  background-color: #4a5063; /*不支持渐变默认的颜色*/
  width: 18vw;
  height: 21vh;
  border-radius: 20px;
}
.movie_info_title {
  color: #ffffff;
  position: absolute;
  top: -1.5rem;
  background-color: #4a5063;
  border-radius: 10px;
  padding: .5rem;
}
.base_linear {
  /*border-radius: 10px;*/
  /*background-color: #4a5063; !*不支持渐变默认的颜色*!*/
  background-image: linear-gradient(to bottom right, #385c84 -100%, #152033 100%); /*对角渐变*/
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .3), 2px 2px 5px rgba(0, 0, 0, .3);
  backdrop-filter: blur(10px);
}
.movie_info_list{
  margin-top: 2%;
  padding-left: 10%;
}
.movie_info_list>li{
  width: 8vw;
  height: 100%;
  float: left;
}
#info_name{
  margin-left: .4rem;
  border-radius: 5px;
  font-weight: bold;
  color: #ffffff;
  padding: .3rem;
  text-align: center;
  width: 5vw;
  position: absolute;
  bottom: 2vh;
}
#info_pic{
  border-radius: 10px;
  width: 80%;
  margin: 0;
  transition:margin ease .3s, width ease .3s;
}

#info_pic:hover{
  margin: -1rem;
  width: 100%;
}
</style>