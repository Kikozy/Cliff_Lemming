<template>
  <div>
    <div class="Music_data">
      <el-table :data="music_data" border style="width: 100%">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="datetime" label="日期" width="100"
                         :filters="datetime"
                         :filter-method="filterTag" :formatter="formatter">
        </el-table-column>
        <el-table-column prop="id" label="id" width="50"></el-table-column>
        <el-table-column prop="name" label="歌名" width="100"></el-table-column>
        <el-table-column prop="singer" label="歌手" width="100"></el-table-column>
        <el-table-column prop="play_url" label="播放地址" width="600"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="music_change(scope.row.id)">修改</el-button>
            <el-button type="text" size="small" @click="music_del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="data_info">
      <div class="MusicCont BaseStyle">总{{ music_data.length }}首</div>
      <div id="Updata" class="UpdataInfo BaseStyle" @click="updateMusic">更新音乐</div>
      <div id="Updating" class="UpdataInfo BaseStyle Mhide">更新中..</div>
      <div class="addMusic BaseStyle">自添音乐</div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";
import $ from 'jquery';

export default {
  name: "music_admin",
  inject: ['reload'],// 组件刷新调用
  data() {
    // this.$forceUpdate();
    return {
      updateInfo: '',
      datetime: [],
      music_data: []
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
    music_del(id) {
      console.log(id)
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
        } else if (res.data.code === 500) {
          $('#Updating').addClass('Mhide')
          $('#Updata').removeClass('Mhide')
        }
      }).catch(err => {
        console.log(err)
      })
    }
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
  color: #cfcfcf;
  font-weight: bold;
  position: fixed;
  background-color: #1e4655;
  right: 0;
  top: 0;
  margin: 2rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, .4);
  transform: translateY(0px);
  transition: transform ease .4s, box-shadow ease .4s;
}

.MusicCont {
  box-shadow: none;
}

.UpdataInfo {
  margin-top: 8rem;
}

.Mhide {
  display: none;
}

.UpdataInfo:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 5px rgba(0, 0, 0, .4);
}

.addMusic {
  margin-top: 14rem;
}

.addMusic:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 5px rgba(0, 0, 0, .4);
}

.el-table .active {
  background: #55a532;
}
</style>