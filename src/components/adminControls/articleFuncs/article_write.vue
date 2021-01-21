<!--tinymce富文本-->
<template>
  <div id="add_article" class="add_article_box">
    <h1 class="HeadTitle">文章{{ mode === 1 ? '添加' : '修改' }}</h1>
    <div class="iconfont icon-close" @click="close"></div>
    <div class="articleInfo">
      <div>
        <h2>标题</h2>
        <input class="titleInput" v-model="article.title" type="text" placeholder="博客标题">
      </div>
      <div></div>
      <div class="post_article buttonStyle" @click="postArticle">提交</div>
    </div>
    <vue-tinymce v-model="article.content" :setting="setting"></vue-tinymce>
  </div>
</template>

<script>
// import '../../../plugins/tinymcePrism/prism.js'
import VueTinymce from "@packy-tang/vue-tinymce"
import emojis from '../../../plugins/emojis' //导入表情
import Vue from 'vue'
import {request} from "@/network/requests";

Vue.use(VueTinymce)

export default {
  inject: ['reload'],
  name: "article_write",
  props: ['article', 'mode'],
  data() {
    return {
      // 临时保留原始数据
      title: this.article.title,
      content: this.article.content,
      id: this.article.id,
      setting: {
        // 强制给代码块设置样式
        content_style: "pre{background-color: #0c121a;\n" +
            "border-radius: 5px;\n" +
            "  text-shadow: 1px 1px 1px #000;\n" +
            "  padding: 5px;\n" +
            "  box-shadow: 2px 2px 2px #000;\n" +
            "  color: #cfcfcf;}",
        menubar: true,
        inline_boundaries: true,
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
    close() {
      this.reload()
    },
    postArticle() {
      if (this.mode === 1) {
        this.addArticle()
      } else {
        this.changeArticle()
      }
    },
    changeArticle() {
      request({
        url: '/change_article',
        method: 'post',
        data: {
          title: this.article.title,
          content: this.article.content,
          id: this.article.id
        }
      }).then(res => {
        this.reload()
        this.$message({
          message: '(原)' + this.title + ' 修改成功！',
          type: 'success'
        })
      }).catch(err => {
        this.$message.error({
          message: '(原)' + this.title + ' 修改失败！请查看控制台打印'
        })
        console.log(err)
      })
    },
    addArticle() {
      request({
        url: '/article_save',
        method: 'post',
        data: {
          title: this.article.title,
          content: this.article.content,
          code: 'article069'
        }
      }).then(res => {
        this.reload()
        this.$message({
          message: this.title + ' 文章添加成功！',
          type: 'success'
        })
      }).catch(err => {
        this.$message.error({
          message: this.title + ' 文章添加失败！！请查看控制台打印'
        })
        console.log(err)
      })
      console.log(this.content)
      console.log(this.title)
    }
  },

}
</script>

<style scoped>
.add_article_box {
  position: absolute;
  top: 5rem;
  left: 5rem;
  border-radius: 10px;
  background-image: linear-gradient(to right, #25427e, #39599a);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, .5);
}

.HeadTitle {
  color: white;
  margin: 1rem;
}

.icon-close {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  margin: 1rem;
  font-size: 1.5em;
}

.articleInfo {
  padding: 1rem;
}

.articleInfo div {
  display: flex;
  align-items: center;
}

.articleInfo div h2 {
  color: white;
  padding: .5rem;
}

.titleInput {
  width: 30rem;
  display: inline-block;
}

input {
  width: 15vw;
  height: 2.5rem;
  border-radius: 10px;
  border: none;
  font-size: large;
  font-weight: bold;
  padding-left: 1rem;
}

.buttonStyle {
  position: absolute;
  right: 0;
  top: 5rem;
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


</style>