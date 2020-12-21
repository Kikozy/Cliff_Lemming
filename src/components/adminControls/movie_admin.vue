<template>
  <div>
    <div class="VIDEO_DATA">
      <el-table :data="video_data" border height="650">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="id" label="id" width="50"></el-table-column>
        <el-table-column prop="name" label="影视名称" width="100"></el-table-column>
        <el-table-column prop="score" label="分数" width="50"></el-table-column>
        <el-table-column prop="type" label="类型" width="80"></el-table-column>
        <el-table-column prop="url" label="海报" width="200">
          <template slot-scope="scope">
            <img class="video_img" :src="scope.row.url" alt="">
          </template>
        </el-table-column>
        <el-table-column prop="about" label="详情" width="300"></el-table-column>
        <el-table-column prop="datetime" label="日期" width="100"></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="">修改</el-button>
            <el-button type="text" size="small" @click="video_del(scope.row.id,scope.row.name)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="data_info">
      <div class="VideoCont BaseStyle">总{{ video_data.length }}部</div>
      <div id="VideoAdd" class="VideoAdd BaseStyle base_color" @click="show =! show">添加影视</div>
    </div>
    <transition name="showUp">
      <div v-if="show" class="addVideoFrom">
        <addVideo/>
      </div>
    </transition>
  </div>
</template>

<script>
import {request} from "@/network/requests";
import addVideo from "@/components/adminControls/videoFuncs/addVideo";


export default {
  name: "movie_admin",
  inject: ['reload'],// 组件刷新调用
  components: {
    addVideo
  },
  data() {
    return {
      show: false,
      video_data: [],
      video_add_info: []
    }
  },
  created() {
    request({
      url: '/video_show',
    }).then(res => {
      this.video_data = res.data[0]
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    video_del(id, name) {
      request({
        url: '/video_del',
        params: {id, "code": "0609"}
      }).then(res => {
        this.reload()
        if (res.data.code === 200) {
          this.$message({
            message: name + '  删除成功!',
            type: 'success'
          });
        }
      }).catch(err => {
        console.log(err)
        this.$message.error({
          message: name + '  删除失败!',
        });
      })
    }
  }
}
</script>

<style scoped>
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

.base_color {
  background-color: rgba(252, 175, 183, .3);
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
}

.video_img{
  width: 80%;
}

.VideoAdd {
  margin-top: 6rem;
}

.VideoAdd:hover {
  transform: translateY(-5px);
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 2px 2px 6px rgba(0, 0, 0, .8);
}


/*el-table样式开始============================================*/
.el-table {
  margin: 1rem;
  width: 93%;
  height: 40rem;
}

/*最外层透明*/
/deep/ .el-table, /deep/ .el-table__expanded-cell {
  border: none;
  border-radius: 10px;
  background-color: transparent;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .4);
}

.el-table::before {
  /*/ / 去除底部白线 */
  height: 0;
}

.el-table--border::after, .el-table--group::after {
  top: 0;
  right: 0;
  width: 0px;
  height: 100%;
}

.el-button {
  border: none;
  color: white;
  padding: .6rem;
  border-radius: 10px;
  background-color: rgb(1, 124, 165);
  box-shadow: 1px 1px 0px inset rgba(226, 226, 226, .2);
  transform: translateX(0);
  transition: transform ease .4s;
}

/*设置选中高亮*/
.el-table >>> .el-table__body tr:hover > td {
  background-color: #a3a3a3;
}

.el-button:hover {
  transform: translateX(2px);
}

/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  border: none;
  color: #000000;
  background-color: transparent;
}

/*el-table样式结束=========================================================*/
.addVideoFrom {
  position: fixed;
  top: 0;
}

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