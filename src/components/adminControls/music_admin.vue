<template>
  <div>
    <div class="data_info">
      <div class="DataCont BaseStyle">总{{ music_data.length }}首</div>
      <div id="Updata" class="UpdataInfo musicMove " @click="updateMusic">更新音乐</div>
      <div id="Updating" class="UpdataInfo baseHide">更新中..</div>
      <div class="addMusic musicMove" @click="show = 1">添加音乐</div>
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
            <el-button type="text" size="small" @click="show = 2;NewMusic_info(scope.row)">修改</el-button>
            <el-button type="text" size="small" @click="music_del(scope.row.id,scope.row.name)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <transition name="showUp">
      <div v-if="show === 1" class="MusicFrom">
        <NewMusic_info :info="music_info" :mode="1"/>
      </div>
      <div v-else-if="show === 2" class="MusicFrom">
<!--   :info="music_info"  把数据传给子组件  命名为info -->
        <NewMusic_info :info="music_info" :mode="2"/>
      </div>
    </transition>
  </div>
</template>

<script>
import {request} from "@/network/requests";
import $ from 'jquery';
import addMusic from "@/components/adminControls/musicFuncs/addMusic";
import NewMusic_info from "@/components/adminControls/musicFuncs/changeMusic_info";

export default {
  name: "music_admin",
  inject: ['reload'],// 组件刷新调用
  components: {
    NewMusic_info
  },
  data() {
    return {
      updateInfo: '',
      datetime: [],
      music_data: [],
      show: null,
      music_info:{
        id:'',
        name:'',
        singer:'',
        playurl:'',
        datetime:''
      }
    }
  },
  methods: {
    // 把值装好发给子组件
    NewMusic_info(info){
      this.music_info={
        id:info.id,
        name:info.name,
        playurl:info.play_url,
        singer:info.singer,
        datetime: info.datetime,
        picurl:''
      }
    },
    // 筛选
    formatter(row, column) {
      return row.datetime;
    },
    filterTag(value, row) {
      return row.datetime.slice(0,10) === value;
    },
    ///////////////////////
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
  },
  created() {
    request({
      url: "/muisic_info"
    }).then(res => {
      // console.log(res)
      this.music_data = res.data;
      console.log(res.data)
      let date = [];
      for (let i in res.data){
        date.push(res.data[i].datetime.slice(0,10))
      }
      // new Set();ES6的去重
      let norepeatdate = new Set(date)
      // ... 扩展 运算
      norepeatdate = [...norepeatdate]
      for (let i in norepeatdate){
        this.datetime.push({value:norepeatdate[i],text:norepeatdate[i]})
      }
    }).catch(err => {
      console.log('===musicControl Err!!===', err)
    })
    // this.$forceUpdate();
  },
}
</script>

<style scoped>
.MusicFrom{
  position: fixed;
  z-index: 999;
  right: 40%;
  top: 20%;

}
</style>