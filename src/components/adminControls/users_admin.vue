<template>
  <div>
    <div class="data_info">
      <div class="DataCont">总{{ User_data_info.length }}人</div>
    </div>
    <div class="userTable">
      <!--      :default-sort 默认排序为-->
      <el-table :data="User_data_info" border height="100%"
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
            <el-button class="worryStyle" type="text" size="small" @click="post_id_realdel(scope.row.id)">删除信息
            </el-button>
          </template>
        </el-table-column>
      </el-table>
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
        params: {id},
        method: 'POST'
      }).then(res => {

        if (res.data.code === 200) {
          this.$message({
            message: 'id:' + id + '  注销成功!',
            type: 'success'
          });
          this.reload();
        } else {
          this.$message.error({
            message: 'id:' + id + '  权限不足!',
          });
        }
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
        params: {id},
      }).then(res => {
        if (res.data.code === 200) {
          this.$message({
            message: 'id:' + id + '  移库成功!',
            type: "warning"
          });
          this.reload()
        } else {
          this.$message.error({
            message: '权限不足！'
          })
        }

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

</style>