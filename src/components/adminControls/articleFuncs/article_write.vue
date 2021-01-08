<!--tinymce富文本-->
<template>
  <div id="add_article" class="add_article_box">
    <div class="articleInfo">
      <input class="titleInput" v-model="title" type="text" placeholder="博客标题">
      <div class="post_article buttonStyle" @click="postArticle">提交</div>
      <div class="articleBack buttonStyle" @click="goback">取消</div>
    </div>
    <vue-tinymce v-model="content" :setting="setting"></vue-tinymce>
  </div>
</template>

<script>
// import Tiny from '../../tinymce/tinymce-editor'
import VueTinymce from "@packy-tang/vue-tinymce"
import emojis from '../../../plugins/emojis' //导入表情
import Vue from 'vue'
import {request} from "@/network/requests";

Vue.use(VueTinymce)

export default {
  inject: ['reload'],
  name: "article_write",
  // components: {
  //   Tiny
  // },
  data() {
    return {
      title: '',
      content: "",
        setting: {
          menubar: true,
          emoticons_database_url: emojis,
          toolbar: " |emoticons | code undo redo codesample| fullscreen |fontselect fontsizeselect forecolor backcolor |bold italic underline strikethrough | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table |   indent outdent | superscript subscript | removeformat |",
          toolbar_drawer: "sliding",
          quickbars_selection_toolbar: " removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
          plugins: "emoticons link image media table lists fullscreen quickbars code codesample ",
          language: 'zh_CN',
          width: 800,
          height: 350,
        }
    }
  },
  methods: {
    goback() {
      this.reload()
    },
    postArticle() {
      request({
        url: '/article_save',
        method: 'post',
        data: {
          title: this.title,
          content: this.content,
          code: 'article069'
        }
      }).then(res => {
        console.log(res.data)
        this.reload()
      }).catch(err => {
        console.log(err)
      })
      console.log(this.content)
      console.log(this.title)
    }
  },

}
</script>

<style scoped>
.articleInfo {
  padding: 1rem;
}

.titleInput {
  width: 30vw;
  height: 5vh;
  border-radius: 10px;
  border: none;
}

input {
  font-size: large;
  font-weight: bold;
  padding-left: 1rem;
}

.buttonStyle {
  cursor: pointer;
  color: white;
  font-weight: bold;
  padding: .7vw;
  box-shadow: 1px 1px 0px inset rgba(226, 226, 226, .2);
  border-radius: 10px;
  text-align: center;
}

.articleBack {
  margin-right: 2rem;
  background-color: pink;
  float: right;
}

.post_article {
  background-color: #017CA5;
  float: right;
}

.add_article_box {
  margin: 10rem;
  border-radius: 10px;
  background-color: rgba(62, 71, 88, .9);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, .5);
}
</style>