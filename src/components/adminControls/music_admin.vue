<template>
  <div>
    <div class="data_info">
      <div class="DataCont BaseStyle">总{{ music_data.length }}首</div>
      <div id="Updata" class="UpdataInfo musicMove " @click="updateMusic">更新音乐</div>
      <div id="Updating" class="UpdataInfo baseHide">更新中..</div>
      <div class="addMusic musicMove" @click="show =! show;addMusic()">添加音乐</div>
    </div>
    <div class="Music_data">
      <el-table :data="music_data" height="100%" border>
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="datetime" label="日期🗓" width="100"
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
      // if (this.show === false) {
      //   $('.iscolor').animate({width: '0%'}, 500);
      //   $('.addMusic').css('color', '#cfcfcf')
      // } else if (this.show === true) {
      //   $('.iscolor').animate({width: '100%'}, 100);
      //   $('.addMusic').css('color', '#000000')
      // }
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
.addMusicFrom{
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: #0077aa;
}
</style>