<template>
  <div>
    <div class="data_info">
      <div class="articleCont BaseStyle">总{{ article_info.length }}篇</div>
      <div id="add_article" class="add_article articleMove" @click="show =! show;addArticle()">添加文章</div>
    </div>
    <div class="articleTable">
      <el-table :data="article_info" border height="100%">
        <el-table-column type="expand">
          <template slot-scope="prop">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="文章内容">
                <span v-html="prop.row.content.substr(0,1000)" ></span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="id" label="id" width="50"></el-table-column>
        <el-table-column prop="pushDate" label="添加日期" width="100"></el-table-column>
        <el-table-column prop="changeDate" label="修改日期" width="100"></el-table-column>
        <el-table-column prop="title" label="标题" width="200"></el-table-column>
        <el-table-column prop="content" label="内容" width="300">
          <template slot-scope="scope">
            <!--substr 只显示0,40的字符，超出显示...-->
            <p v-html="scope.row.content.substr(0,40)+'...'"></p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="">修改</el-button>
            <el-button type="text" size="small" @click="post_del(scope.row.id,scope.row.title)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <transition name="showUp">
      <div v-if="show" class="addArticle">
        <article_write/>
      </div>
    </transition>
  </div>
</template>

<script>
import $ from 'jquery';
import {request} from "@/network/requests";
import article_write from "@/components/adminControls/articleFuncs/article_write";

export default {
  inject:['reload'],
  name: "article_admin",
  components: {
    article_write
  },
  data() {
    return {
      article_info: [],
      show: false
    }
  },
  created() {
    request({
      url: '/article_show',
      params: {
        code: 'lemming069'
      }
    }).then(res => {
      this.article_info = res.data[0]
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    // addArticle() {
    //   if (this.show === false) {
    //     $('.iscolor').animate({width: '0%'}, 500);
    //     $('.add_article').css('color', '#cfcfcf')
    //   } else if (this.show === true) {
    //     $('.iscolor').animate({width: '100%'}, 200);
    //     $('.add_article').css('color', "#000000")
    //   }
    // },
    post_del(id,title){
      request({
        url:'/article_del',
        params:{
          id:id,
          code:'LemmingArticleDel069'
        }
      }).then(res=>{
        console.log(res)
        this.reload()
      }).catch(err=>{
        console.log(err)
      })

    }
  }

}
</script>

<style scoped>

.el-table >>> .el-table__body tr:hover > td {
    background-color: #d5d5d5;
}

.addArticle {
  z-index: 999;
  position: fixed;
  background-color: #0077aa;
  top: 0;
}

</style>