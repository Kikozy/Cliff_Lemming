<template>
  <div class="itemHtml">
    <ul class="htmlList">
      <li class="li active">
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/timeline">TimeLine</router-link>
      </li>
      <li>
        <router-link to="/lemming">Lemming</router-link>
      </li>
      <li>
        <router-link to="/test">Test</router-link>
      </li>
      <li>
        <router-link to="/lemming_admin/lccenter">Center</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "itemHtml"
}
</script>

<style scoped>
.itemHtml {
  background-color: pink;
  float: right;
  margin:.2rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(207, 207, 207, 0.2);
  box-shadow: 0px 5px 5px rgba(73, 73, 73, 0.5);
  backdrop-filter: blur(50px);
}

li {
  margin-left: 1rem;
  background-color: #617B88;
  border-radius: 10px;
  padding: 5px;
  transform: translateY(0);
  transition: transform ease .3s;
}

li > * {
  color: #cfcfcf;
}

.itemHtml > ul > li:hover {
  transform: translateY(5px);
}

.active {
  /*color: black;*/
  background-color: #305747;
}
</style>