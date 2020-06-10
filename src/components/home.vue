<template>
  <el-container>
    <el-header>
      <div class="logo">
        <h1>
          <router-link to="/home" title="电商后台管理系统">
            <img src="../assets/logo.png" alt="">电商后台管理系统
          </router-link>
        </h1>
        <span>电商后台管理系统</span>
      </div>
      <el-button @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="fold?'64px':'200px'">
        <el-button type="primary" :icon="fold ? 'el-icon-s-fold':'el-icon-s-unfold'" @click="fold=!fold"></el-button>
        <el-menu
          :collapse="fold"
          router
          unique-opened
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#323744"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu :index="item.id+''" v-for="(item,i) in menulist" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span v-text="item.authName"></span>
            </template>
            <el-menu-item :index="'/'+subItem.path" v-for="(subItem,index) in item.children" :key="subItem.id">
              <i class="el-icon-menu"></i>
              <span slot="title" v-text="subItem.authName"></span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        fold: false,
        menulist: []
      }
    },
    methods: {
      logout () {
        window.sessionStorage.removeItem('token')
        this.$router.push('/login')
      },
      getMenus () {
        this.axios.get('/menus').then(res => {
          console.log(res.data)
          if (res.data.meta.status == 200) {
            this.menulist = res.data.data
          }
        })
      }
    },
    created () {
      this.getMenus()
    }
  }
</script>

<style lang="less" scoped>
  .el-container {
    height: 100%;
  }

  .el-header {
    background-color: #008c8c;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;

      h1 a {
        font-size: 0;
      }

      img {
        width: 60px;
        height: 60px;
      }

      span {
        margin-left: 15px;
      }
    }

  }

  .el-aside {
    background-color: #323744;

    .el-menu {
      border-right: 0;
    }

    .el-button {
      font-size: 30px;
      padding: 0;
      width: 100%;
    }
  }

  .el-main {
    background-color: #ccc;
  }
</style>
