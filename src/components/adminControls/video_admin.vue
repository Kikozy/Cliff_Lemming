<template>
  <div>
    <div class="data_info">
      <div class="DataCont">总{{ video_data.length }}部</div>
      <div class="">今日新增{{today_new_count}}部</div>
    </div>
    <div class="Video_data">
      <!--   @expand-change展开后执行方法   -->
      <el-table @expand-change='get_play_info' :data="video_data" border height="100%">
        <el-table-column type="expand" width="50" label="播放地址">
          <template slot-scope="prop">
            <el-form v-for="item in play_info">
              <el-form-item label-width="100" :label="item.other">
                <p> {{ item.playurl }} </p>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="id" width="50" label="id"></el-table-column>
        <el-table-column prop="name" width="120" label="影视名称"></el-table-column>
        <el-table-column width="130" label="海报">
          <template slot-scope="scope">
            <viewer>
              <img class="video_pic" :src="scope.row.videoimg">
            </viewer>
          </template>
        </el-table-column>
        <el-table-column prop="type" width="50" label="类型"></el-table-column>
        <el-table-column prop="videodate" width="80" label="上映时间"></el-table-column>
        <el-table-column prop="datetime" width="180" label="入库时间"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "video_admin",
  data() {
    return {
      video_data: [],
      play_info: [],
      today_num:0
    }
  },
  created() {
    this.get_video()
  },
  methods: {
    get_video() {
      request({
        url: 'video_admin',
        method: 'POST',
      }).then(res => {
        this.video_data = res.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    get_play_info(row) {
      request({
        url: 'get_play_info',
        method: 'POST',
        data: {
          id: row.id
        }
      }).then(res => {
        this.play_info = res.data.data
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    get_date(){
      let date = new Date();
      let year = date.getFullYear(); // 获取年份
      let month = date.getMonth() + 1; // 获取月份
      if (month < 10) {
        month = '0' + month;
      }
      let day = date.getDate(); //获取日
      let fullDate = year + '-' + month + '-' + day;
      return fullDate
    }
  },
  computed:{
    today_new_count(){
      let datetime = []
      let today = this.get_date()
      for (let i in this.video_data){
        datetime.push(this.video_data[i].datetime.slice(0,10))
      }
      for (let j in datetime){
        if (today === datetime[j]){
          this.today_num++
        }
      }
      return this.today_num
    }
  }
}
</script>

<style scoped>
.video_pic {
  width: 3rem;
}
</style>