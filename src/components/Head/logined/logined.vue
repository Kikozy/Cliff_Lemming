<template>
  <div class="UserInfoBar">
    <div class="headInfo">
      <img class="qqHead" :src="qqHead">
      <div class="userInfo">
        <h2 class="username" :title="username">{{ username }}</h2>
        <p class="logout" @click="logout">退出</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logined",
  data() {
    return {
      qqHead: '',
      username: ''
    }
  },
  created() {
    // 读取本地local
    let local_infos = JSON.parse(localStorage.getItem('keepLogin'))
    this.qqHead = local_infos.qqHead
    this.username = local_infos.username
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$store.commit('logOut')
    }
  }
}
</script>

<style scoped>
.UserInfoBar {
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  margin: .3rem;
  background-color: transparent;
  border-radius: 10px;
  transition: ease all .5s;
}

.UserInfoBar:hover {
  width: 10rem;
  background-color: #0077aa;
  box-shadow: 0 0 15px  #0077aa;
}

.userInfo {
  /*background-color: red;*/
  display: none;
  color: white;
  position: absolute;
  left: 3.3rem;
  top: .4rem;
}

.UserInfoBar:hover .userInfo {
  display: block;
}

.username {
  font-size: 1em;
  margin: .2rem;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 6em; /*不允许出现半汉字截断*/
}

.headInfo {
  padding: .3rem;
}

.qqHead {
  width: 3rem;
  border-radius: 50%;
}

.logout {
  cursor: pointer;
  position: absolute;
  padding: .3rem;
  border-radius: 10px;
  transition: ease all .5s;
}
.logout:hover{
  background-color: #3e7eaf;
}
</style>