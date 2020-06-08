<template>
  <div class="container">
    <div class="box">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="form">
        <div class="item">
          <i class="iconfont icon-yonghu"></i>
          <input v-model="user.userName" type="text" placeholder="username">
        </div>
        <div class="item">
          <i class="iconfont icon-mima"></i>
          <input v-model="user.password" type="password" placeholder="password">
        </div>
        <div class="btn">
          <button @click="login">login</button>
          <button>reset</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        user: {
          userName: 'admin',
          password: 123456
        }
      }
    },
    methods: {
      login () {
        this.axios.post('/login?username=admin&password=123456').then(res => {
          console.log(res)
          if (res.data.meta.status == 200) {
            this.$message.success('登录成功')
            //将token存储到sessionStorage
            window.sessionStorage.setItem("token",res.data.data.token)
            this.$router.push("/home")
          } else {
            this.$message.error('登录失败')
          }

        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    background-color: #008c8c;
    /*使子元素居中*/
    display: flex;
    align-items: center;
    justify-content: center;

    .box {
      position: relative;
      width: 600px;
      height: 400px;
      background-color: white;

      .logo {
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 50%;
        background-color: white;
        box-shadow: 0 0 10px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        /*使用定位+calc函数上移自身高度50%*/
        /*position: relative;
        top: calc(-$height / 2);*/
        /*transform: translateY(-50%);是上移自身高度的一半*/
        /*transform: translateY(-50%);*/

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid #ccc;
        }
      }

      .form {
        width: 400px;
        height: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 30px;

        .item {
          width: 100%;
          height: 30px;
          margin-bottom: 30px;
          border: 1px solid #008c8c;
          line-height: 30px;

          i {
            display: block;
            box-sizing: border-box;
            float: left;
            width: 10%;
            height: 100%;
            background-color: #ccc;
            text-align: center;
          }

          input {
            float: left;
            box-sizing: border-box;
            height: 100%;
            width: 90%;
          }
        }

        .btn {
          width: 100%;
          display: flex;
          justify-content: space-around;

          button {
            background-color: #008c8c;
            width: 90px;
            height: 40px;
            border-radius: 10px;
            font-size: 18px;
          }

          button:active {
            background-color: green;
          }
        }
      }
    }
  }
</style>
