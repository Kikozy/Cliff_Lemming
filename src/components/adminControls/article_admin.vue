<template>
  <div>
    <div class="articleTable">
      <el-table :data="article_info" border height="650">
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
            <el-button type="text" size="small" @click="">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="data_info">
      <div class="articleCont BaseStyle">总{{ article_info.length }}篇</div>
      <div id="add_article" class="add_article articleMove BaseStyle base_color" @click="show =! show;addArticle()">添加文章
        <div class="iscolor"></div>
      </div>
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
      params: {id: 'article069'}
    }).then(res => {
      this.article_info = res.data[0]
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    addArticle() {
      if (this.show === false) {
        $('.iscolor').animate({width: '0%'}, 500);
        $('.add_article').css('color', '#cfcfcf')
      } else if (this.show === true) {
        $('.iscolor').animate({width: '100%'}, 200);
        $('.add_article').css('color', "#000000")
      }
    },
  }

}
</script>

<style scoped>
.iscolor {
  border-radius: 10px;
  z-index: -1;
  position: absolute;
  background-color: #afafb0;
  width: 0%;
  height: 100%;
  right: 0;
  top: 0;
}

.BaseStyle {
  z-index: 888;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  position: fixed;
  background-color: rgba(213, 213, 213, 0.1);
  backdrop-filter: blur(10px);
  right: 0;
  top: 0;
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
  transform: translateY(0px);
  transition: transform ease .4s, box-shadow ease .4s;
}

.articleCont {
  z-index: 99;
  color: #cfcfcf;
  font-weight: bold;
  position: fixed;
  padding: 1rem;
  right: 0;
  top: 0;
  margin: 2rem;
  border-radius: 10px;
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
}

.add_article {
  margin-top: 6rem;
}

.articleMove:hover {
  transform: translateY(-5px);
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 2px 2px 6px rgba(0, 0, 0, .8);
}

.base_color {
  background-color: rgba(252, 175, 183, .3);
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
}

.addArticle {
  z-index: 999;
  position: fixed;
  top: 0;
}

/*elTable表格样式*/
.el-table {
  border: none;
  margin: 1rem;
  width: 90%;
  height: 40rem;
}

/*表格外最外层样式*/
/deep/ .el-table, /deep/ .el-table__expanded-cell {
  border-radius: 10px;
  /*背景样式透明*/
  background-color: transparent;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .4);
}

/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  border: none;
  color: #000000;
  background-color: transparent;
}

.el-table::before {
  /*/ / 去除底部白线 */
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
}

/*/ / 去除侧边白线 */
.el-table--border::after, .el-table--group::after {
  top: 0;
  right: 0;
  width: 0px;
  height: 100%;
}

/*设置选中高亮*/
.el-table >>> .el-table__body tr:hover > td {
  background-color: #a3a3a3;
}

.el-button {
  border: none;
  color: white;
  padding: .6rem;
  border-radius: 10px;
  background-color: #017CA5;
  box-shadow: 1px 1px 0px inset rgba(226, 226, 226, .2);
  transform: translateX(0);
  transition: transform ease .4s;
}

.el-button:hover {
  transform: translateX(2px);
}

/*elTable表格样式end*/
/*定义组件动画start*/

.showUp-enter, .showUp-leave-to {
  transform: translateX(500px);
  opacity: 0;
}

/*进入和离开执行的时间*/
.showUp-enter-active, .showUp-leave-active {
  transition: all .3s;
}

/*定义组件动画end*/
</style>