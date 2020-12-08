<template>
  <div>
    <div class="Music_data">
      <el-table :data="music_data" border="width:100%">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="id" label="id" width="50"></el-table-column>
        <el-table-column prop="name" label="歌名" width="100"></el-table-column>
        <el-table-column prop="singer" label="歌手" width="100"></el-table-column>
        <el-table-column prop="play_url" label="播放地址" width="600"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
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
    return {
      music_data: []
    }
  },
  created() {
    request({
      url: "/muisic_info"
    }).then(res => {
      this.music_data = res.data
    }).catch(err => {
      console.log('===musicControl Err!!===', err)
    })
  }
}
</script>

<style scoped>
.BaseStyle {
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
</style>