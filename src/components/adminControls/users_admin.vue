<template>
  <div>
    <div class="userTable">
      <!--      :default-sort 默认排序为-->
      <el-table :data="User_data_info" border height="650"
                :default-sort="{prop: 'id', order: 'descending'}">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <!--        sortable需要排序的-->
        <el-table-column prop="datetime" label="日期" width="100" sortable></el-table-column>
        <el-table-column prop="id" label="id" width="80" sortable></el-table-column>
        <el-table-column prop="username" label="用户名" width="120"></el-table-column>
        <el-table-column prop="password" label="密码" width="120"></el-table-column>
        <el-table-column prop="mail" label="邮箱" width="200"></el-table-column>
        <el-table-column prop="isdelete" label="是否注销" width="120" sortable></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="post_id_fakedel(scope.row.id)">注销</el-button>
            <el-button class="worryStyle" type="text" size="small" @click="post_id_realdel(scope.row.id)">删除信息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="data_info">
      <div class="UserCont base_color">总{{ User_data_info.length }}人</div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";


export default {
  name: "users_admin",
  inject: ['reload'],
  data() {
    return {
      User_data_info: [],
    }
  },
  methods: {
    post_id_fakedel(id) {
      request({
        url: '/users_del_fake',
        params: {id}
      }).then(res => {
        this.reload();
        this.$message({
          message: 'id:' + id + '  注销成功!',
          type: 'success'
        });
      }).catch(err => {
        this.$message.error({
          message: 'id:' + id + '  注销失败!',
        });
        console.log('ERR', err)
      })
    }
    ,
    post_id_realdel(id) {
      request({
        url: '/users_del_real',
        params: {id}
      }).then(res => {
        this.reload()
        this.$message({
          message: 'id:' + id + '  移库成功!',
          type: "warning"
        });
      }).catch(err => {
        this.$message.error({
          message: 'id:' + id + '  移库失败!',
        });
        console.log('ERR', err)
      })
    }
  }
  ,
  created() {
    request({
      url: '/users_info_toshow'
    }).then(res => {
      this.User_data_info = res.data;
      // console.log(res)
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>
.UserCont {
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
.worryStyle{
  background-color: #A57983;
}

.el-button:hover {
  transform: translateX(2px);
}

/*elTable表格样式end*/

</style>