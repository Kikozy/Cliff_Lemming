<template>
  <div class="User_comments">
    <h1 class="comment">
      用户评论({{ this.message.length }}条)
    </h1>
    <div class="user_message">
      <div class="write_message">
        <msgbox/>
      </div>
      <ul>
        <li v-for="item in this.message">
          <img :src="getHead(item.mail)" alt="">
          <div class="message_info">
            <p>{{ item.message_userid }}</p>
            <p>{{ item.datetime }}</p>
            <p>{{ item.message }}</p>
          </div>
          <p class="replay">回复</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Msgbox from "@/components/Head/msgBox/msgbox";
import {request} from "@/network/requests";

export default {
  name: "comment",
  components: {Msgbox},
  data() {
    return {
      message: []
    }
  },
  computed: {
    // 获取头像
    getHead() {
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
    get_message() {
      request({
        url: 'get_message',
        method: 'POST',
        data: {
          'id': this.$route.query.id
        }
      }).then(res => {
        this.message = res.data.data
        console.log(this.message)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.get_message()
  }
}
</script>

<style scoped>
.User_comments{
  background-color: #171b21;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, .5);
}
.comment {
  padding: 1rem;
  margin-top: 2rem;
  color: #FFF;
}

.user_message {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.write_message {
  z-index: 2;
  width: 95%;
}

.user_message ul {
  width: 90%;
  margin-top: 2rem;
}

.user_message ul li {
  margin-top: .5rem;
  position: relative;
  /* box-shadow: 1px 1px 3px #000; */
  /* background-color: #262b34; */
  border-radius: 10px;
  padding: .5rem;
  display: flex;
  transition: all ease .3s;
}

.user_message ul li img {
  background-color: #ee9900;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  align-self: center;
}

.message_info {
  color: #999999;
  align-self: center;
}
.message_info p:nth-child(1) {
  color: #999;
  padding-left: .4rem;
  
}
.message_info p:nth-child(2) {
  padding: .4rem;
  font-size: .5em;
  position: absolute;
  right: 0;
  top: 0;
}
.message_info p:nth-child(3) {
  color: #fff;
  padding: .4rem;
  font-weight: lighter;
}

.replay {
  opacity: 0;
  color: #cfcfcf;
  cursor: pointer;
  background-color: #0077aa;
  display: unset;
  position: absolute;
  padding: .3rem;
  border-radius: 5px;
  font-weight: bold;
  right: 0;
  bottom: 0;
  margin: .5rem;
  box-shadow: 0 0 10px #0077aa;
  transition: ease all .5s;
}

.user_message ul li:hover .replay {
  opacity:1;
}

.user_message ul li:hover {
  background-color: #262b34;
}
</style>