<template>
  <el-card class="box-card">
    <el-input @clear="getUsers" clearable v-model="queryInfo.query" placeholder="请输入内容"  class="input-with-select">
      <el-button @click="getUsers" slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-button type="primary">添加用户</el-button>
    <el-table
      border
      :data="userList"
      stripe
      style="width: 100%">
      <el-table-column

        type="index"
        label="#"
      >
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="role_name"
        label="角色">
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top">
            <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button size="mini" type="danger" icon="el-icon-delete"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="设置" placement="top">
            <el-button size="mini" type="warning" icon="el-icon-setting"></el-button>
          </el-tooltip>
        </template>

      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </el-card>
</template>

<script>
  export default {
    name: 'users',
    data () {
      return {
        queryInfo: {
          query: '',
          pagenum: 1,
          pagesize: 2
        },
        userList: [],
        total: 0
      }
    },
    methods: {
      handleSizeChange (val) {
        this.queryInfo.pagesize = val
        this.getUsers()
      },
      handleCurrentChange (val) {
        this.queryInfo.pagenum = val
        this.getUsers()
      },
      getUsers () {
        this.axios.get('/users', {
          params: this.queryInfo
        }).then(res => {
          if (res.data.meta.status == 200) {
            this.total = res.data.data.total
            this.userList = res.data.data.users
          }
        })
      }
    },
    created () {
      this.getUsers()
    }
  }
</script>

<style lang="less">
  .el-card {
    .el-card__body {
      > .el-input {
        width: 300px;
      }
    }

    .el-button {
      margin-left: 10px;
    }

    .el-table {
      margin-top: 20px;
    }

  }
</style>
