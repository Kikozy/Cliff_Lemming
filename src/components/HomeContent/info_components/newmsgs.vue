<template>
  <div class="NEWMSG">
    <p class="iconfont icon-liuyan2">最新留言</p>
    <div class="msg" v-for="item in this.Msg_data">
      <a href="javascript:;"><img :src="matchHead(item.mail)" alt=""></a>
      <div class="Msg_content">
        <p>{{ item.userid }}</p>
        <p>{{ item.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "newmsgs",
  data() {
    return {
      Msg_data: []
    }
  },
  computed: {
    matchHead() {
      return function (qq) {
        if (qq === '') {
          return 'http://q1.qlogo.cn/g?b=qq&nk=1622455251&s=640'
        } else {
          return 'http://q1.qlogo.cn/g?b=qq&nk=' + qq.split('@')[0] + '&s=640'
        }
      }
    },
  },
  methods: {
    getMsg() {
      request({
        url: 'msgs_show',
        method: 'GET',
        params: {
          code: 'getMsgs069',
          num: 10
        }
      }).then(res => {
        //   reverse()倒序
        this.Msg_data = res.data.data.reverse()
        console.log(this.Msg_data)
      }).catch(err => {
        console.log(err)
      })
    },
  },
  created() {
    this.getMsg()
  }
}
</script>

<style scoped>
.icon-liuyan2{
  font-size: 1.2em;
  /*position: fixed;*/
  padding: .3rem;
  color: #cfcfcf;
  text-shadow: 2px 2px 2px #000;
}
.msg {
  padding: .5rem;
  display: flex;
}
.msg img {
  background-color: #005672;
  padding: .2rem;
  width: 3rem;
  border-radius: 50%;
  box-shadow: 2px 2px 4px #000000;
}

.Msg_content {
  word-wrap: break-word;
  padding-left: .5rem;
  width: 13vw;
  color: #fff;
  align-self: center;
  font-size: 1.2em;
  font-weight: lighter;
}

.Msg_content p:first-child {
  font-weight: bold;
  color: #999;
  font-size: .8em;
}

</style>