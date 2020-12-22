<template>
  <div id="div1">
    <vue-tinymce
        v-model="content"
        :setting="setting"/>
  </div>
</template>

<script>
import VueTinymce from "@packy-tang/vue-tinymce"
import Vue from 'vue'

Vue.use(VueTinymce)

export default {
  name: "article_admin",
  data() {
    return {
      content: "",
      setting: {
        menubar: false,
        toolbar: "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
        toolbar_drawer: "sliding",
        quickbars_selection_toolbar: "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
        plugins: "link image media table lists fullscreen quickbars",
        // language: 'zh_CN',
        height: 350
      }
    }
  },
  methods: {
    setup(editor) {
      console.log(editor)
    }
  }

}
</script>

<style scoped>
#div1 {
  padding-left: 50%;
}
</style>