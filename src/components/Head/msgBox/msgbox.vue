<template>
  <div class="MSGBOX">
    <div class="msgWrite">
      <textarea @keyup="match" v-model="msgContent" maxlength="100"
                placeholder="说点什么吧~(都要写点东西才能给提交哦)" class="msgArea"></textarea>
      <button disabled="true" @click="Post_Msg" class="post_msg_btn"><p id="clickMove">发送✉</p>
      </button>
      <p class="maxLength">{{ this.msgLen }}/100</p>
    </div>
    <div class="userInfo">
      <div class="avatar">
        <img :src="qq_icon">
      </div>
      <div class="msgUsername">
        <input maxlength="11" @keyup="match" v-model="userid" required type="text">
        <h3>用户名💢</h3>
      </div>
      <div class="msgMail">
        <input @keyup="match" v-model="mail" required type="text">
        <h3>邮箱💢</h3>
      </div>
      <div class="isOpen" title="开启即可和博主说悄悄话">
        <el-switch
            v-model="isopen"
            active-text="私密"
            active-color="#017ca5"
            inactive-color="#ff4949">
        </el-switch>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";
import $ from 'jquery'


export default {
  name: "msgbox",
  inject: ['reload'],
  data() {
    return {
      userid: '',
      isopen: false,
      qq_icon: '',
      mail: '',
      msgContent: '',
      msgLength: null,
    }
  },
  methods: {
    sendMove() {
      if ($('.post_msg_btn').attr('disabled') === 'disabled') {
        return false;
      } else {
        $('#clickMove').animate({
          top: '-30px'
        }, 500).animate({
          top: '0'
        }, 500);
        this.userid = ''
        this.isopen = false
        this.msgContent = ''
        this.mail = ''
      }
    },
    match() {
      if (this.mail.indexOf('@') >= 0 && this.userid.length > 1 && this.msgContent.length > 5) {
        let qq = this.mail.split('@')[0]
        this.qq_icon = 'http://q1.qlogo.cn/g?b=qq&nk=' + qq + '&s=640'
        $('.post_msg_btn').css('cursor', 'pointer').attr('disabled', false);
      } else {
        this.qq_icon = ''
        $('.post_msg_btn').css('cursor', 'not-allowed').attr('disabled', true);
      }
    },
    Post_Msg() {
      let piatad = JSON.parse(unescape(localStorage.getItem('piatad')))
      request({
        url: '/msg_save',
        method: 'post',
        data: {
          isopen: this.isopen,
          msgContent: this.msgContent,
          mail: this.mail,
          ip: piatad.cip,
          city: piatad.cname,
          userid: this.userid,
          code: 'msg_save069',
          article_id : this.$route.query.id
        }
      }).then(res => {
        if (res.data.code === 200) {
          console.log('留言成功！');
        }else if(res.data.code === 403){
          this.$router.push('/login')
          this.$message.error({
            message:'登陆一下吧！'
          })
        }
      }).catch(err => {
        this.$message.error({
          message: '异常出错',
        });
      });
      this.sendMove()
      this.$store.commit('isposted_msg',true)
    },
    matchIslogined() {
      if (localStorage.getItem('keepLogin')) {
        let logined_info = JSON.parse(localStorage.getItem('keepLogin'))
        this.userid = logined_info.username
        this.mail = logined_info.mail
        this.qq_icon = logined_info.qqHead
      }
    },
  },
  computed: {
    msgLen() {
      this.msgLength = this.msgContent.length
      return this.msgLength
    }
  },
  created() {
    this.matchIslogined()
  }
}
</script>

<style scoped>

.MSGBOX {
  /* background-color:#0d1117; */
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, .5); */
  padding: .5rem;
  position: relative;
}

.msgWrite {
  position: relative;
}

.msgArea {
  background-color: rgb(219, 219, 219);
  font-size: 1em;
  padding: 10px;
  resize: none;
  border-radius: 5px;
  width: 97%;
  height: 6rem;
  transition: ease all .3s;
}

.msgArea:focus {
  background-color: #999;
}

.post_msg_btn {
  color: #cfcfcf;
  cursor: not-allowed;
  font-weight: bold;
  font-size: 1em;
  position: absolute;
  right: .5rem;
  bottom: .5rem;
  border-radius: 5px;
  border: none;
  width: 4rem;
  height: 2rem;
  background-color: #017ca5;
  box-shadow: 0 0 10px #017ca5;
  transition: all ease .3s;
}

.post_msg_btn:hover {
  box-shadow: 0 0 20px #017ca5;
}

#clickMove {
  position: relative;
}

.maxLength {
  text-shadow: none;
  position: absolute;
  color: #fff;
  bottom: .5rem;
  left: .5rem;
  padding: .2rem;
  border-radius: 5px;
  background-color: #262b34;
  box-shadow: 0 0 10px #262b34;
}

.userInfo {
  width: 100%;
  height: 4rem;
  display: flex;
  color: white;
  font-weight: bold;
  justify-content: space-between;
}

.userInfo > * {
  float: left;
  /*垂直居中*/
  align-self: center;
  margin-right: 1rem;
  flex: 2;
}

input {
  position: absolute;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  z-index: 2;
  color: #fff;
  font-weight: bold;
  width: 25%;
  font-size: 1em;
}

h3 {
  font-size: 1em;
  color: white;
  pointer-events: none;
  transition: ease all .3s;
}

input:focus + h3,
input:valid + h3 {
  font-size: smaller;
  text-shadow: 1px 1px 2px #000;
  color: #666666;
  transform: translateY(-1rem);
}

input:focus,
input:valid {
  border-bottom: 2px solid #666666;
}

.avatar {
  flex: .8;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  /*background-color: #cfcfcf;*/
}

.avatar > img {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
}

/* 没有图片时不显示边框 */
img[src=""], img:not([src]) {
  opacity: 0;
}

.isOpen {
  margin-right: 0;
  position: relative;
  left: 1rem;
  flex: 1.5;
}

::v-deep .el-switch__label {
  color: #a0a0a0;
  font-weight: bold;
}

::v-deep .el-switch__label * {
  line-height: 1.1rem;
}


</style>