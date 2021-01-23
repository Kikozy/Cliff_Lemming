<template>
  <div>
    <h1 class="comment">
      用户评论({{ this.message.length }}条)
    </h1>
    <div class="user_message">
      <div class="write_message">
        <msgbox/>
      </div>
      <ul v-for="item in this.message">
        <li>
          <img :src="getHead(item.mail)" alt="">
          <div class="message_info">
            <p>{{ item.message_userid }}</p>
            <p>{{ item.message }}</p>
            <p>{{ item.datetime }}</p>
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

.comment {
  margin-top: 2rem;
  text-shadow: 0 0 20px #017ca5;
  color: #017ca5;
}

.user_message {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.write_message {
  border-radius: 10px;
  box-shadow: 0 4px 4px #000;
  z-index: 2;
  /*margin-bottom: 1rem;*/
  width: 90%;
}

.user_message ul {
  width: 88%;
  margin-bottom: .5rem;
}

.user_message ul li {
  position: relative;
  box-shadow: 1px 1px 3px #000;
  background-color: #141b24;
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

.message_info p:nth-child(2) {
  color: #fff;
  padding: .4rem;
}

.replay {
  opacity: 0;
  color: #fff;
  cursor: pointer;
  background-color: #0077aa;
  display: unset;
  position: absolute;
  padding: .3rem;
  border-radius: 5px;
  right: 0;
  bottom: 0;
  margin: .5rem;
  box-shadow: 0 0 10px #0077aa;
  transition: ease all .5s;
}

.user_message ul li:hover .replay {
  opacity: 100%;
}

.user_message ul li:hover {
  background-color: #18212b;
}
</style>