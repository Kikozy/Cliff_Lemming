<template>
  <div>
    <div class="data_info">
      <div class="DataCont base_color">总{{ Msg_data.length }}条</div>
    </div>
    <div class="msgTable">
      <el-table :data="Msg_data" border height="100%"
                :default-sort="{prop:'datetime', order: 'descending'}"
                :row-class-name="isopen_style">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="id" label="id" width="50"></el-table-column>
        <el-table-column prop="userid" label="用户名" width="100"></el-table-column>
        <el-table-column prop="isopen" label="是否私密💬" width="100"
                         :filters="isopen_value"
                         :filter-method="filterTag"
                         :formatter="formatter">
          <template slot-scope="scope">
            <div :class="scope.row.isopen?'notOpen':'open'">{{ scope.row.isopen ? "是" : '否' }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="message" label="留言内容" width="400"></el-table-column>
        <el-table-column prop="datetime" label="日期" width="100" sortable></el-table-column>
        <el-table-column prop="mail" label="邮箱" width="150"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text">修改</el-button>
            <el-button type="text" @click="post_del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";
import $ from 'jquery'

export default {
  name: 'MSGS_admin',
  inject: ['reload'],
  data() {
    return {
      Msg_data: [],
      isopen_value: [{value: true, text: '私密'}, {value: false, text: '公开'}]
    }
  },
  created() {
    this.get_msgs()
  },
  methods: {
    isopen_style({row}) {
      if (row.isopen === true) {
        console.log(row)
        return 'warning-row';
      }
      return ''
    },
    post_del(id) {
      request({
        url: 'del_msg069',
        method: 'POST',
        data: {
          id: id,
          code: 'lemming069del'
        }
      }).then(res => {
        this.$message({
          message: id + '删除成功！',
          type: 'success'
        })
        this.reload();
      }).catch(err => {
        this.$message.error({
          message: id + '删除失败！请查看控制台打印'
        })
        console.log(err);
      })
    },
    // 筛选
    formatter(row, column) {
      return row.isopen;
    },
    filterTag(value, row) {
      return row.isopen === value;
    },
    ///////////////////////
    get_msgs() {
      request({
        url: '/msgs_show',
        method: 'POST',
        data: {
          code: 'Lemming069'
        }
      }).then(res => {
        this.Msg_data = res.data.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.el-table .warning-row {
  background: pink;
}
</style>