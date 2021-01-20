<template>
  <div>
    <msgbox/>
    <change-music_info/>
  </div>

</template>

<script>
import msgbox from "@/components/Head/msgBox/msgbox";
import changeMusic_info from "@/components/adminControls/musicFuncs/changeMusic_info";
export default {
  name: "Test",
  components:{
    msgbox,
    changeMusic_info
  }

}
</script>

<style scoped>
div{
  margin: 1rem;
}
</style>