<template>
  <div>
    <div class="data_info">
      <div class="Cont">总{{ ip_data.length }}条</div>
      <div class="Cont">今日总{{ ContToday }}条</div>
      <div class="Cont">筛选总{{ filterNum }}条</div>
    </div>
    <div class="ipTable">
      <el-table :data="ip_data" border height="100%"
                :default-sort="{prop:'datetime', order: 'descending'}">
        <el-table-column type="index" :index="get_filterNum" label="序号" width="50"></el-table-column>
        <el-table-column prop="id" label="id" width="50"></el-table-column>
        <el-table-column prop="ip" label="ip地址" width="150"></el-table-column>
        <el-table-column prop="city" label="城市" width="150"></el-table-column>
        <el-table-column prop="from" label="请求内容" width="100"></el-table-column>
        <el-table-column prop="datetime" label="日期" width="180" sortable
                         :filters="norepeatdate"
                         :filter-method="filterTag" :formatter="formatter"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "ip_admin",
  data() {
    return {
      ip_data: [],
      norepeatdate: [],
      todayNum: 0,
      filterNum:null
    }
  },
  created() {
    this.get_ipdata()
  },
  methods: {
    get_filterNum(index){
      this.filterNum = index+1;
      return index+1
    },
    // 筛选
    formatter(row, column) {
      return row.datetime;
    },
    filterTag(value, row) {
      return row.datetime.slice(0,10) === value;
    },
    ///////////////////////
    get_ipdata() {
      request({
        url: 'show_ip',
        method: 'POST',
        data: {
          code: 'Lemming069ip'
        }
      }).then(res => {
        this.ip_data = res.data.data

        let datetime = [];
        for (let i in this.ip_data) {
          datetime.push(this.ip_data[i].datetime.slice(0, 10))
        }
        // new Set();ES6的去重
        let norepeatdate = new Set(datetime)
        // ... 扩展 运算
        norepeatdate = [...norepeatdate]
        for (let i in norepeatdate){
          this.norepeatdate.push({value:norepeatdate[i],text:norepeatdate[i]})
        }
      }).catch(err => {
        console.log(err)
      })
    },
  },
  computed: {

    ContToday() {
      let datetime = [];
      let date = new Date();
      let year = date.getFullYear(); // 获取年份
      let month = date.getMonth() + 1; // 获取月份
      if (month < 10) {
        month = '0' + month;
      }
      let day = date.getDate(); //获取日
      let fullDate = year + '-' + month + '-' + day;
      for (let i in this.ip_data) {
        datetime.push(this.ip_data[i].datetime.slice(0, 10))
      }
      for (let i in datetime) {
        if (fullDate === datetime[i]) {
          this.todayNum++
        }
      }
      return this.todayNum
    }
  }
}
</script>

<style scoped>

</style>