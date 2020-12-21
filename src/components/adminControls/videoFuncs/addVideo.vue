<template>
  <div class="addInfo add_base_color">
    <div class="leftInput">
<!--      <input class="id_input" v-model="addvideoInfo.id" type="text" name='id' placeholder="影视id">-->
      <input class="name_input" v-model="addvideoInfo.name" type="text" name='name' placeholder="影视名称">
      <input class="type_input" v-model="addvideoInfo.type" type="text" name='type' placeholder="类型">
    </div>
    <div class="rightInput">
      <input class="url_input" v-model="addvideoInfo.url" type="text" name='url' placeholder="地址">
      <input class="score_input" v-model="addvideoInfo.score" type="text" name='score' placeholder="分数">
      <input class="about_input" v-model="addvideoInfo.about" type="text" name='about' placeholder="关于">
    </div>
    <input class="addInfoBtn" type="submit" value="添加" @click="post_addvideo">
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "addMusic",
  inject: ['reload'],// 组件刷新调用
  data() {
    return {
      addvideoInfo: {
        // id: '',
        type:'',
        name: '',
        url: '',
        score: '',
        about: '',
        code:'0609'
      }
    }
  },
  created() {
    // 日期默认值
    // let date = new Date();
    // let year = date.getFullYear(); // 获取年份
    // let month = date.getMonth() + 1; // 获取月份
    // let day = date.getDate(); //获取日
    // this.addvideoInfo.datetime = year + '-' + month + '-' + day // 日期默认值
  },
  methods: {
    post_addvideo() {
      request({
        method: 'post',
        url: '/video_add',
        data: this.addvideoInfo
      }).then(res => {
        if (res.data.code === 201) {
          this.reload()
          this.$message({
            message: this.addvideoInfo.name + '  添加成功!',
            type: 'success'
          });
        } else if (res.data.code === 400) {
          this.$message.error({
            message: this.addvideoInfo.name + '  添加失败!',
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
.addInfoBtn{
  cursor: pointer;
}
.add_base_color {
  background-color: rgba(61, 73, 90, .5);
  backdrop-filter: blur(10px);
}

.addInfo {
  float: left;
  width: 35rem;
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3) inset, 1px 1px 5px rgba(0, 0, 0, .5);
  border-radius: 10px;
  margin: 10rem;
  padding: 2rem;
}

input::-webkit-input-placeholder {
  color: #cfcfcf;
}

input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #cfcfcf;
}

input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: #cfcfcf;
}

input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #cfcfcf;
}

input {
  background-color: rgba(61, 73, 90, .8);
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
  padding-left: 1rem;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 3%;
  border: 0px;
  width: 15vw;
  height: 3vw;
  border-radius: 10pt;
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
  margin-left: 10rem;
  margin-bottom: 0;
}



</style>