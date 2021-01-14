<template>
  <div id="MSGS">
    <ul>
      <li class="msg" v-for="msg in this.Msg_data">
        <div class="msgHead">
          <img class="head_icon" :src="matchHead(msg.mail)" alt="图片">
          <h3>{{ msg.userid }}</h3>
        </div>
        <div class="msgBody">
          <p class="message">{{ msg.message }}</p>
          <p class="datetime">{{ msg.datetime }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "Msgs",
  data() {
    return {
      Msg_data: ''
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
    }
  },
  methods: {
    getMsg() {
      request({
        url: 'msgs_show',
        params: {
          code: 'getMsgs069'
        }
      }).then(res => {
        //   reverse()倒序
        this.Msg_data = res.data.data.reverse()
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getMsg()
  }
}
</script>

<style scoped>
#MSGS {
  width: 52vw;
}

.msg {
  padding-bottom: 2rem;
  width: 100%;
}

.head_icon {
  width: 4rem;
  height: 4rem;
  border-radius: 10px;
  float: left;
}

.msgHead {
  color: #c9d1d9;
}

.msgBody {
  padding: 1rem;
  background-color: #0d1117;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);
}

.message {
  line-height: 1.4em;
  color: #8b949e;
  font-size: 1.4em;
}

.datetime {
  padding: .5rem;
  color: #c9d1d9;
}

@media screen and (max-width: 600px) {
  #MSGS {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 94%;
  }
}
</style>