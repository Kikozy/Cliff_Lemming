<template>
  <div id="MSGS">
    <ul>
      <li class="msg" v-for="(msg,index) in this.Msg_data">
        <div class="msgHead">
          <img class="head_icon" :src="matchHead(msg.mail)" alt="图片">
          <!--    Msg_data.length-index倒序      -->
          <h3>{{ msg.userid }}</h3>
        </div>
        <div class="msgBody">
          <p class="num">#{{ Msg_data.length - index }}</p>
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
  inject: ['reload'],
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
    },
  },
  methods: {
    getMsg() {
      request({
        url: 'msgs_show',
        method: 'GET',
        params: {
          code: 'getMsgs069'
        }
      }).then(res => {
        //   reverse()倒序
        this.Msg_data = res.data.data.reverse()
      }).catch(err => {
        console.log(err)
      })
    },
  },
  created() {
    this.getMsg()
  },
  watch: {
    // 实时监听vuex的内容是否发送改变！！
    // 如果只有改变就执行内容！
    '$store.state.posted_msg': function () {
      if (this.$store.state.posted_msg === true) {
        console.log(this.$store.state.posted_msg);
        this.reload();
        // 关掉
        this.$store.commit('isposted_msg', false)
      }
    }
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
  position: relative;
  z-index: 2;
  color: #c9d1d9;
}

.msgBody {
  position: relative;
  padding: 1rem;
  background-color: #0d1117;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);
}

.num {
  color: white;
  position: absolute;
  right: -.5rem;
  padding: .2rem;
  border-radius: 5px;
  background-color: #0077aa;
  box-shadow: 0 0 10px #0077aa;
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