<template>
  <div class="GameBar base_linear">
    <div class="game_info_title base_linear">
      <h1>娱乐</h1>
      <p>博主分享</p>
    </div>
    <div class="game_info">
      <ul class="game_info_list" v-for="(info,index) in game_info">
        <li>
          <p id="info_name" class="base_linear">{{ info.name }}</p>
          <!--绑定列表里多个数据，加入index-->
          <img :src="game_info[index].pic">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "gameInfo",
  data() {
    return {
      game_info: [],
    }
  },
  created() {
    request({
      url: '/game_show'
    }).then(res => {
      let new_info = res.data.slice(-2)// 获取数组最后两个
      for (let info of new_info) {
        this.game_info.push(info)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.GameBar {
  padding: 1rem;
  background-color: #4a5063;
  width: 10rem;
  height: 10rem;
  border-radius: 20px;
  margin-bottom: 2rem;
}

.game_info_title {
  color: #ffffff;
  position: absolute;
  top: -1.5rem;
  background-color: #4a5063;
  border-radius: 10px;
  padding: .5rem;
}

.game_info_list {
  margin-top: .7rem;
}

.game_info_list > ul {
  width: 4rem;
  height: 2rem;
}

.game_info_list > li > img {
  width: 100%;
  height: 4rem;
  border-radius: 10px;
  margin: 0;
  transition: margin ease .3s, width ease .3s, height ease .3s;
}

.game_info_list > li > img:hover {
  margin: -2rem;
  width: 140%;
  height: 8rem;
}

#info_name{
  position: absolute;
  color: #ffffff;
  font-weight: bold;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 9em; /*不允许出现半汉字截断*/
  border-radius: 5px;
  padding: .2rem;
  margin-top: 3rem;
  margin-left: .3rem;
  backdrop-filter: blur(10px);
  transition: margin-left ease .3s, width ease .3s;
}

#info_name:hover{
  margin-left: -2rem;
  width: 14rem;
}

.base_linear {
  /*border-radius: 10px;*/
  /*background-color: #4a5063; !*不支持渐变默认的颜色*!*/
  background-image: linear-gradient(to bottom right, rgba(48, 67, 82, .5), rgba(52, 49, 66, .5)); /*对角渐变*/
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 2px 2px 5px rgba(0, 0, 0, .5);
  backdrop-filter: blur(10px);
}

</style>