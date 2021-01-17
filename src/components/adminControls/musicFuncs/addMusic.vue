<template>
  <div class="addInfo add_base_color">
    <div class="leftInput">
      <input class="id_input" v-model="addmusicInfo.id" type="text" name='id' placeholder="歌曲id">
      <input class="name_input" v-model="addmusicInfo.name" type="text" name='name' placeholder="歌曲名称">
      <input class="singer_input" v-model="addmusicInfo.singer" type="text" name='singer' placeholder="歌手">
    </div>
    <div class="rightInput">
      <input class="url_input" v-model="addmusicInfo.play_url" type="text" name='url' placeholder="播放地址">
      <input class="pic_input" v-model="addmusicInfo.pic" type="text" name='pic' placeholder="图片地址">
      <input class="date_input" v-model="addmusicInfo.date" type="text" name='date' placeholder="日期">
    </div>
    <input class="addInfoBtn" type="submit" value="添加" @click="post_addmusic">
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "addMusic",
  inject: ['reload'],// 组件刷新调用
  data() {
    return {
      addmusicInfo: {
        id: '',
        name: '',
        singer: '',
        play_url: '',
        pic: '',
        date: ''
      }
    }
  },
  created() {
    // 日期默认值
    let date = new Date();
    let year = date.getFullYear(); // 获取年份
    let month = date.getMonth() + 1; // 获取月份
    let day = date.getDate(); //获取日
    let fullDate = year + '-' + month + '-' + day;
    this.addmusicInfo.date = fullDate // 日期默认值
  },
  methods: {
    post_addmusic() {
      request({
        method: 'post',
        url: '/add_music',
        data: this.addmusicInfo
      }).then(res => {
        console.log(res.data)
        if (res.data.code === 201) {
          this.reload()
          this.$message({
            message: this.addmusicInfo.name + '  添加成功!',
            type: 'success'
          });
        } else if (res.data.code === 400) {
          this.$message.error({
            message: this.addmusicInfo.name + '  添加失败!',
          });
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.add_base_color {
  background-image: linear-gradient(to right, #25427e, #39599a);
  background-color: #fff;
}

.addInfo {
  float: left;
  width: 35rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);
  border-radius: 10px;
  position: absolute;
  left: 10rem;
  top: 10rem;
  padding: 2rem;
}


input {
  /*background-color: rgba(61, 73, 90, .8);*/
  /*background-color: #50689a;*/
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
  padding-left: 1rem;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 3%;
  border: none;
  width: 15vw;
  height: 3vw;
  border-radius: 10px;
}

.leftInput {
  width: 15rem;
  float: left;
}

.rightInput {
  width: 15rem;
  float: right;
}

.addInfoBtn {
  cursor: pointer;
  margin-left: 10rem;
  margin-bottom: 0;
}

</style>