<template>
  <div>
    <div class="data_info">
      <div class="DataCont">总{{ data_num }}部</div>
      <div>当前页面{{ video_data.length }}部</div>
      <div>今日新增{{ today_new_count }}部</div>
      <div class="filters">
        筛选: 电影名<input
          type="text"
          placeholder="电影名"
          v-model="filter_data.name"
        />
        日期<input
          type="text"
          placeholder="年-月-日"
          v-model="filter_data.video_date"
        />
        推荐<input
          type="checkbox"
          @click="filter_data.recommend = !filter_data.recommend"
        />
        <button @click="post_filter_video">筛选</button>
      </div>
      <button id="otherBtnStyle" @click="post_recommend" :class="select_id!=''?'':'not_click'">修改推荐</button>
    </div>
    <div class="Video_data">
      <!--   @expand-change展开后执行方法   -->
      <!-- @selection-change选中后执行 -->
      <el-table
        @expand-change="get_play_info"
        :data="video_data"
        border
        height="100%"
        @selection-change="selection_change"
      >
        <el-table-column type="expand" width="50" label="播放地址">
          <template slot-scope="props">
            <el-form>
              <el-form-item label-width="100" label="电影简介:">
                <p>{{ props.row.content }}</p>
              </el-form-item>
            </el-form>
            <!-- <el-form v-for="item in play_info">
              <el-form-item label-width="100" :label="item.other">
                <p> {{ item.playurl }} </p>
              </el-form-item>
            </el-form> -->
          </template>
        </el-table-column>
        <el-table-column type="selection"></el-table-column>
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="id" width="80" label="id"></el-table-column>
        <el-table-column
          prop="name"
          width="120"
          label="影视名称"
        ></el-table-column>
        <el-table-column prop="type" width="50" label="类型"></el-table-column>
        <el-table-column width="130" label="海报">
          <template slot-scope="scope">
            <viewer>
              <img class="video_pic" :src="scope.row.pic" />
            </viewer>
          </template>
        </el-table-column>
        <el-table-column
          prop="video_type"
          width="50"
          label="电影类型"
        ></el-table-column>
        <el-table-column
          prop="video_date"
          width="220"
          label="上映时间"
        ></el-table-column>
        <el-table-column
          prop="datetime"
          width="180"
          label="入库时间"
        ></el-table-column>
        <el-table-column
          prop="isrecommend"
          width="50"
          label="是否推荐"
        ></el-table-column>
        <el-table-column
          prop="video_url_id"
          width="80"
          label="播放地址id"
        ></el-table-column>
        <el-table-column prop="pf" width="80" label="评分"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { request } from "@/network/requests";

export default {
  name: "video_admin",
  inject:['reload'],
  data() {
    return {
      filter_data: {
        recommend: false,
        video_date: "",
        name: "",
      },
      video_data: [],
      play_info: [],
      data_num: "",
      today_num: 0,
      select_id: [],
    };
  },
  created() {
    this.get_video();
  },
  methods: {
    get_video() {
      request({
        url: "/admin/get_video",
        method: "POST",
        data: {
          num: 20,
        },
      })
        .then((res) => {
          console.log(res);
          this.video_data = res.data.data;
          this.data_num = res.data.data_num;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    get_play_info(row) {
      request({
        url: "get_play_info",
        method: "POST",
        data: {
          id: row.id,
        },
      })
        .then((res) => {
          this.play_info = res.data.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    get_date() {
      let date = new Date();
      let year = date.getFullYear(); // 获取年份
      let month = date.getMonth() + 1; // 获取月份
      if (month < 10) {
        month = "0" + month;
      }
      let day = date.getDate(); //获取日
      let fullDate = year + "-" + month + "-" + day;
      return fullDate;
    },
    post_filter_video() {
      request({
        url: "/admin/get_video",
        method: "GET",
        params: {
          recommend: this.filter_data.recommend,
          video_date: this.filter_data.video_date,
          name: this.filter_data.name,
        },
      })
        .then((res) => {
          if (res.data.code === 0) {
            console.log("请输入值");
          } else {
            this.video_data = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 设置选中的值
    selection_change(val) {
      let id = [];
      for (let i in val) {
        id.push(val[i].id);
      }
      this.select_id = id;
    },
    // 修改推荐值
    post_recommend() {
      request({
        url:'/admin/change_recommend',
        method:'POST',
        data:{
          data:this.select_id
        }
      }).then(res=>{
        if (res.data.code == 2){
          this.$message({
            message:'id:'+this.select_id+'修改推荐成功！',
            type:'success'
          });
          this.reload();
        };
      }).catch(err=>{
        this.$message.error({
            message:'id:'+this.select_id+'修改推荐失败！',
          });
        console.log(err);
      })
    },
  },
  computed: {
    today_new_count() {
      let datetime = [];
      let today = this.get_date();
      for (let i in this.video_data) {
        datetime.push(this.video_data[i].datetime.slice(0, 10));
      }
      for (let j in datetime) {
        if (today === datetime[j]) {
          this.today_num++;
        }
      }
      return this.today_num;
    },
  },
};
</script>

<style scoped>
.video_pic {
  width: 5rem;
}
/* 不能点击 */
.not_click{
  background-color: #014f70;
  box-shadow: none;
  cursor: not-allowed;
  pointer-events: none;
}
</style>