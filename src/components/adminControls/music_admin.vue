<template>
  <div>
    <div class="Music_data">
      <el-table :data="music_data" border height="650">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="datetime" label="日期" width="100"
                         :filters="datetime"
                         :filter-method="filterTag" :formatter="formatter">
        </el-table-column>
        <el-table-column prop="id" label="id" width="50"></el-table-column>
        <el-table-column prop="name" label="歌名" width="100"></el-table-column>
        <el-table-column prop="singer" label="歌手" width="100"></el-table-column>
        <el-table-column prop="play_url" label="播放地址" width="500"></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="music_change(scope.row.id)">修改</el-button>
            <el-button type="text" size="small" @click="music_del(scope.row.id,scope.row.name)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="data_info">
      <div class="MusicCont BaseStyle">总{{ music_data.length }}首</div>
      <div id="Updata" class="UpdataInfo musicMove BaseStyle base_color" @click="updateMusic">更新音乐</div>
      <div id="Updating" class="UpdataInfo BaseStyle base_color Mhide">更新中..</div>
      <div class="addMusic BaseStyle musicMove base_color" @click="show =! show;addMusic()">添加音乐
        <div class="iscolor"></div>
      </div>
    </div>
    <transition name="showUp">
      <div v-if="show" class="addMusicFrom">
        <addMusic/>
      </div>
    </transition>
  </div>
</template>

<script>
import {request} from "@/network/requests";
import $ from 'jquery';
import addMusic from "@/components/adminControls/musicFuncs/addMusic";

export default {
  name: "music_admin",
  inject: ['reload'],// 组件刷新调用
  components: {
    addMusic
  },
  data() {
    // this.$forceUpdate();
    return {
      updateInfo: '',
      datetime: [],
      music_data: [],
      show: false,
    }
  },
  methods: {
    // 筛选
    formatter(row, column) {
      return row.datetime;
    },
    filterTag(value, row) {
      return row.datetime === value;
    },
    ///////////////////////
    music_change(id) {
      console.log(id)
    },
    music_del(id, name) {
      request({
        url: '/music_del',
        params: {id, password: '0609'}
      }).then(res => {
        this.reload();
        this.$message({
          message: name + '删除成功',
          type: 'success'
        });
      }).catch(err => {
        this.$message.error({
          message: name + '删除失败',
        });
        console.log('ERR', err)
      })
    },
    updateMusic() {
      $('#Updating').removeClass('Mhide')
      $('#Updata').addClass('Mhide')
      request({
        url: '/music_save',
        params: {id: '0609'},
        timeout: false,
      }).then(res => {
        if (res.data.code === 200) {
          this.reload() // 组件刷新
          this.$message({
            message: '音乐更新成功！',
            type: 'success'
          });
        } else if (res.data.code === 500) {
          $('#Updating').addClass('Mhide')
          $('#Updata').removeClass('Mhide')
          this.$message.error({
            message: '更新失败！',
          });
        }
      }).catch(err => {
        this.$message.error({
          message: '更新失败！',
        });
        console.log(err)
      })
    },
    addMusic() {
      if (this.show === false) {
        $('.iscolor').animate({width: '0%'}, 500);
        $('.addMusic').css('color', '#cfcfcf')
      } else if (this.show === true) {
        $('.iscolor').animate({width: '100%'}, 100);
        $('.addMusic').css('color', '#000000')
      }
      this.Mhide = !this.Mhide
    },
  },
  created() {
    request({
      url: "/muisic_info"
    }).then(res => {
      // console.log(res)
      this.music_data = res.data[0];
      for (let i = 0; i < res.data[1].length; i++) { // 循环添加内容
        this.datetime.push({value: res.data[1][i][0], text: res.data[1][i][0]})  // 筛选的日期
      }
    }).catch(err => {
      console.log('===musicControl Err!!===', err)
    })
    // this.$forceUpdate();
  },
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

.MusicCont {
  /*box-shadow: none;*/
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
}

.UpdataInfo {
  margin-top: 6rem;
}

.Mhide {
  display: none;
}

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

.musicMove:hover {
  transform: translateY(-5px);
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 2px 2px 6px rgba(0, 0, 0, .8);
}

.addMusic {
  margin-top: 10rem;
}

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

.base_color {
  background-color: rgba(252, 175, 183, .3);
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
}

.addMusicFrom {
  position: fixed;
  top: 0;
}

/*显示隐藏*/
/*.fade-enter-active, .fade-leave-active {*/
/*  transition: opacity .5s;*/
/*}*/

/*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *!*/
/*{*/
/*  opacity: 0;*/
/*}*/
/*显示隐藏end*/
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