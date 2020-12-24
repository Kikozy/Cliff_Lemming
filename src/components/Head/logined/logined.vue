<template>
  <div class="UserInfoBar">
    <div class="headInfo">
      <img class="qqHead" :src="qqHead">
      <h2 class="username">{{ username }}</h2>
      <p class="logout" @click="logout">退出</p>
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
  width: 10rem;
  height: 3.5rem;
  margin: .3rem;
  background-color: #017ca5;
  border-radius: 10px;
}

.username {
  color: #ffffff;
}

.headInfo {
  margin: .3rem;
}

.qqHead {
  width: 30%;
  border-radius: 50%;
}
.logout{
  cursor: pointer;
  padding: .2rem;
  background-color: #55a532;
  border-radius: 10px;
}
</style>