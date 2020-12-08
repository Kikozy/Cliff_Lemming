<template>
  <div>
    <div class="userTable">
      <!--      :default-sort 默认排序为-->
      <el-table :data="User_data_info" border style="width: 100%" :default-sort="{prop: 'id', order: 'descending'}">
        <el-table-column fixed type="index" label="序号" width="50"></el-table-column>
        <!--        sortable需要排序的-->
        <el-table-column prop="datetime" label="日期" width="100" sortable></el-table-column>
        <el-table-column prop="id" label="id" width="80" sortable></el-table-column>
        <el-table-column prop="username" label="用户名" width="120"></el-table-column>
        <el-table-column prop="password" label="密码" width="120"></el-table-column>
        <el-table-column prop="mail" label="邮箱" width="200"></el-table-column>
        <el-table-column class="isdelete" prop="isdelete" label="是否注销" width="120" sortable></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small">注销</el-button>
            <el-button type="text" size="small">删除信息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="data_info">
      <div class="UserCont">总{{ User_data_info.length }}人</div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "users_admin",
  data() {
    return {
      User_data_info: []
    }
  },
  methods: {},
  created() {
    request({
      url: '/users_info_toshow'
    }).then(res => {
      this.User_data_info = res.data
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.UserCont {
  color: #cfcfcf;
  font-weight: bold;
  position: fixed;
  padding: 2rem;
  background-color: #1e4655;
  right: 0;
  top: 0;
  margin: 2rem;
  border-radius: 10px;
}

.el-table .delete {
  background: #55a532;
}
</style>