<template>
  <div>
    <div class="data_info">
      <div class="articleCont BaseStyle">总{{ article_info.length }}篇</div>
      <div id="add_article" class="add_article articleMove" @click="show = 1">添加文章</div>
    </div>
    <div class="articleTable">
      <el-table :data="article_info" border height="100%">
        <el-table-column label="文章详情" width="50" type="expand">
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
        <el-table-column prop="changeDate" label="最近编辑时间" width="200"></el-table-column>
        <el-table-column prop="title" label="标题" width="200"></el-table-column>
        <el-table-column prop="click" label="点击量" width="50"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="show = 2;New_article(scope.row)">修改</el-button>
            <el-button type="text" size="small" @click="post_del(scope.row.id,scope.row.title)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <transition name="showUp">
<!--   添加文章   -->
      <div v-if="show === 1" class="addArticle">
        <article_write :article="article" :mode="1"/>
      </div>
<!--   修改文章   -->
      <div v-if="show === 2" class="addArticle">
        <article_write :article="article" :mode="2"/>
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
      show: null,
      article:{
        title:'',
        id:'',
        content:'',
        datetime:''
      }
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
      console.log(this.article_info)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    New_article(info){
      this.article={
        title: info.title,
        id:info.id,
        datetime:info.datetime,
        content:info.content
      }
    },
    post_del(id,title){
      request({
        url:'/article_del',
        params:{
          id:id,
          code:'LemmingArticleDel069'
        }
      }).then(res=>{
        this.reload();
        this.$message({
          message:title+' 删除成功！',
          type:'success'
        })
      }).catch(err=>{
        this.$message.error({
          message:title+' 删除失败！请查看控制台打印'
        })
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