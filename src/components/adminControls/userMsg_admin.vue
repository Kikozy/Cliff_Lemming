<template>
  <div>
    <div class="msgTable">
      <el-table :data="Msg_data" border height="650"
                :default-sort="{prop:'datetime', order: 'descending'}">
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
    <div class="data_info">
      <div class="MsgCont base_color">总{{ Msg_data.length }}条</div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";
import $ from 'jquery'

export default {
  name: 'MSGS_admin',
  inject:['reload'],
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
    post_del(id){
      request({
        url:'del_msg069',
        method:'POST',
        data:{
          id:id,
          code:'lemming069del'
        }
      }).then(res=>{
        this.$message({
          message:id+'删除成功！',
          type:'success'
        })
        this.reload();
      }).catch(err=>{
        this.$message.error({
          message:id+'删除失败！请查看控制台打印'
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
        console.log(this.Msg_data)
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.open {
  text-align: center;
  border-radius: 5px;
  background-color: #0077aa;
  color: white;
}

.notOpen {
  text-align: center;
  border-radius: 5px;
  background-color: #A57983;
  color: white;
}

.MsgCont {
  z-index: 99;
  color: #cfcfcf;
  font-weight: bold;
  position: fixed;
  padding: 1rem;
  right: 0;
  top: 0;
  margin: 2rem;
  border-radius: 10px;
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
}

.base_color {
  background-color: rgba(61, 73, 90, .1);
  backdrop-filter: blur(10px);
}

/*elTable表格样式*/
.el-table {
  border: none;
  margin: 1rem;
  width: 90%;
  height: 40rem;
}

/*表格外最外层样式*/
/deep/ .el-table, /deep/ .el-table__expanded-cell {
  border-radius: 10px;
  /*背景样式透明*/
  background-color: transparent;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .4);
}

/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  border: none;
  color: #000000;
  background-color: transparent;
}

.el-table::before {
  /*/ / 去除底部白线 */
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
}

/*/ / 去除侧边白线 */
.el-table--border::after, .el-table--group::after {
  top: 0;
  right: 0;
  width: 0px;
  height: 100%;
}

/*设置选中高亮*/
.el-table >>> .el-table__body tr:hover > td {
  background-color: #a3a3a3;
}

.el-button {
  border: none;
  color: white;
  padding: .6rem;
  border-radius: 10px;
  background-color: #017CA5;
  box-shadow: 1px 1px 0px inset rgba(226, 226, 226, .2);
  transform: translateX(0);
  transition: transform ease .4s;
}

.worryStyle {
  background-color: #A57983;
}

.el-button:hover {
  transform: translateX(2px);
}

/*elTable表格样式end*/
</style>