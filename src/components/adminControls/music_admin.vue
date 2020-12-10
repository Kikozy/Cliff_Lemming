<template>
  <div>
    <div class="Music_data">
      <el-table :data="music_data" border style="width: 100%">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="datetime" label="日期" width="100"
                         :filters="[{ text: '2020-12-08', value: '2020-12-08' }, { text: '2020-12-10', value: '2020-12-10' }]"
                         :filter-method="filterTag" :formatter="formatter">
          <template slot-scope="scope">
            <el-tag
                :type="scope.row.datetime === '2020-12-8' ? 'primary' : 'success'"
                close-transition>{{ scope.row.datetime }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="id" width="50"></el-table-column>
        <el-table-column prop="name" label="歌名" width="100"></el-table-column>
        <el-table-column prop="singer" label="歌手" width="100"></el-table-column>
        <el-table-column prop="play_url" label="播放地址" width="600"></el-table-column>
        <el-table-column label="操作" width="100">
          <template>
            <el-button type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="data_info">
      <div class="MusicCont BaseStyle">总{{ music_data.length }}首</div>
      <div class="UpdataInfo BaseStyle">更新音乐</div>
      <div class="addMusic BaseStyle">自添音乐</div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "music_admin",
  data() {
    // this.$forceUpdate();
    return {
      datetime:[],
      music_data: []
    }
  },
  methods: {
    formatter(row, column) {
      return row.datetime;
    },
    filterTag(value, row) {
      return row.datetime === value;
    }
  },
  created() {
    request({
      url: "/muisic_info"
    }).then(res => {
      this.music_data = res.data;
      console.log(res);
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