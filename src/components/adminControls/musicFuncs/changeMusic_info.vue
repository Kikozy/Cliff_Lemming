<template>
  <div id="change_info">
    <h1>音乐{{ mode === 1 ? '添加' : '修改' }}</h1>
    <p class="iconfont icon-close" @click="close"></p>
    <div>
      <p>音乐名称</p>
      <input type="text" v-model="info.name">
    </div>
    <div>
      <p>歌手</p>
      <input type="text" v-model="info.singer">
    </div>
    <div>
      <p>播放地址</p>
      <textarea v-model="info.playurl"></textarea>
    </div>
    <div>
      <p>图片地址</p>
      <input placeholder="选填" type="text" v-model="info.picurl">
    </div>
    <div>
      <p>id</p>
      <input type="text" v-model="info.id">
    </div>
    <div>
      <p>日期</p>
      <input placeholder="YYYY-MM-DD" type="text" v-model="info.datetime">
    </div>
    <button @click="post_music">提交</button>
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "changeMusic_info",
  inject: ['reload'],
  // 接收父组件传来的值
  props: ['info', 'mode'],
  data() {
    return {
      id: this.info.id,
      name: this.info.name,
      NewDate:''
    }
  },
  methods: {
    post_music() {
      if (this.mode === 1) {
        this.add_music()
      } else {
        this.change_music()
      }
    },
    add_music() {
      request({
        method: 'post',
        url: '/add_music',
        data: this.info
      }).then(res => {
        console.log(res.data)
        if (res.data.code === 201) {
          this.reload()
          this.$message({
            message: this.info.name + '  添加成功!',
            type: 'success'
          });
        } else if (res.data.code === 400) {
          this.$message.error({
            message: this.info.name + '  添加失败!',
          });
        }
      }).catch(err => {
        this.$message.error({
          message: this.info.name + '  添加失败!请查看控制台打印',
        });
        console.log(err)
      })
    },
    change_music() {
      request({
        url: '/change_music',
        method: 'post',
        data: {
          data: this.info,
          id: this.id
        }
      }).then(res => {
        this.reload()
        this.$message({
          message: '(原)' + this.name + ' 修改成功！',
          type: 'success'
        })
      }).catch(err => {
        this.$message.error({
          message: '(原)' + this.name + ' 修改失败！请查看控制台打印'
        });
        console.log(err)
      })
    },
    close() {
      this.reload()
    },
    getDate() {
      // 日期默认值
      let date = new Date();
      let year = date.getFullYear(); // 获取年份
      let month = date.getMonth() + 1; // 获取月份
      if (month < 10){
        month = '0'+ month
      }
      let day = date.getDate(); //获取日
      let hour = date.getHours();
      if (hour < 10){
        hour = '0'+ hour
      }
      let min = date.getMinutes();
      if (min < 10){
        min = '0'+ min
      }
      let sec = date.getSeconds();
      if (sec < 10){
        sec = '0'+ sec
      }
      let fullDate = year + '-' + month + '-' + day+' '+hour+':'+min+':'+sec;
      this.NewDate = fullDate // 日期默认值
    }
  },
  created() {
    if (this.mode === 1){
      this.getDate();
      this.info.datetime = this.NewDate;
    }
  }
}
</script>

<style scoped>
#change_info {
  position: relative;
  border-radius: 10px;
  padding: 1rem;
  width: 25rem;
  background-color: #2e4c8a;
  font-weight: bold;
  color: #cfcfcf;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
}

.icon-close {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
  font-size: 1.5em;
}

#change_info div {
  display: flex;
  align-items: center;
  align-content: end;
  padding-top: 1rem;
}

#change_info div p {
  flex: 2;
  text-align: center;
}

input {
  flex: 4;
  font-weight: bold;
  height: 2rem;
  font-size: 1em;
}

textarea {
  height: 5rem;
  font-size: .1em;
}

input, textarea {
  width: 16.5rem;
  border-radius: 5px;
  border: none;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #0077aa;
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  width: 6rem;
  height: 2rem;
  margin: 1rem;
  transition: ease all .3s;
}

button:hover {
  box-shadow: 0 0 10px #017ca5;
}
</style>