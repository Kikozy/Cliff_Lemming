<template>
  <div>
    <div class="Game_data">
      <el-table :data="game_data" border height='650'>
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="platform" label="平台" width="100"></el-table-column>
        <el-table-column prop="name" label="游戏" width="100"></el-table-column>
        <el-table-column prop="pic" label="图片" width="300"></el-table-column>
        <el-table-column prop="starttime" label="开始时间" width="100"></el-table-column>
        <el-table-column prop="endtime" label="结束时间" width="100"></el-table-column>
        <el-table-column prop="datetime" label="添加时间" width="100"></el-table-column>
        <el-table-column prop="price" label="价格" width="100"></el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="change_game(scope.row.id)">修改</el-button>
            <el-button type="text" size="small" @click="del_game(scope.row.id,scope.row.name)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="game_control">
      <div class="contGame BaseStyle">总{{game_data.length}}个</div>
      <div class="updata_game BaseStyle base_color" @click="Updata_game">更新信息</div>
    </div>
  </div>
</template>

<script>
import {request} from "@/network/requests";

export default {
  name: "game_admin",
  inject: ['reload'],// 组件刷新调用
  data() {
    return {
      game_data: []
    }
  },
  created() {
    request({
      url: '/game_show'
    }).then(res => {
      this.game_data = res.data
      console.log(this.game_data)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    Updata_game() {
      request({
        url: '/game_save',
        params: {
          id: '0609'
        }
      }).then(res => {
        console.log(res)
      })
    },
    del_game(id, name) {
      request({
        url: '/game_del',
        params: {id, password: '0609'}
      }).then(res => {
        if (res.data.code === 200) {
          this.reload();
          this.$message({
            message: name + '删除成功',
            type: 'success'
          });
        }
      }).catch(err => {
        this.$message.error({
          message: name + '删除失败',
        });
        console.log('ERR', err)
      });
    },

    change_game() {
    }
  },
}
</script>

<style scoped>
.BaseStyle {
  z-index: 888;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  position: fixed;
  background-color: rgba(213, 213, 213, 0.1);
  backdrop-filter: blur(10px);
  right: 0;
  top: 0;
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
  transform: translateY(0px);
  transition: transform ease .4s, box-shadow ease .4s;
}
.updata_game{
  margin-top: 6rem;
}
.updata_game:hover {
  transform: translateY(-5px);
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 2px 2px 6px rgba(0, 0, 0, .8);
}

/* eltable 样式========================================*/
.el-table {
  margin: 1rem;
  width: 93%;
  height: 40rem;
}

/*最外层透明*/
/deep/ .el-table, /deep/ .el-table__expanded-cell {
  border: none;
  border-radius: 10px;
  background-color: transparent;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, .4);
}

.el-table::before {
  /*/ / 去除底部白线 */
  height: 0;
}

.el-table--border::after, .el-table--group::after {
  top: 0;
  right: 0;
  width: 0px;
  height: 100%;
}

.el-button {
  border: none;
  color: white;
  padding: .6rem;
  border-radius: 10px;
  background-color: rgb(1, 124, 165);
  box-shadow: 1px 1px 0px inset rgba(226, 226, 226, .2);
  transform: translateX(0);
  transition: transform ease .4s;
}

/*设置选中高亮*/
.el-table >>> .el-table__body tr:hover > td {
  background-color: #a3a3a3;
}

.el-button:hover {
  transform: translateX(2px);
}

/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  border: none;
  color: #000000;
  background-color: transparent;
}

/* eltable 样式========================================*/

.base_color {
  background-color: rgba(252, 175, 183, .3);
  box-shadow: .5px .5px 1px inset rgba(226, 226, 226, .5), 1px 1px 3px rgba(0, 0, 0, .5);
}
</style>