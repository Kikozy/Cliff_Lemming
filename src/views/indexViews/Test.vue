<template>
  <button @click="md5click">
    md5
  </button>
</template>

<script>
import md5 from 'js-md5'
export default {
  name: "Test",

  methods:{
    md5click(){
      console.log(md5('Lemming069'))
    }
  }

}
</script>

<style scoped>
</style>