<template>
  <el-container class="index">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../assets/logo.png" alt="">
          </div>
        </el-col>
        <el-col :span="16" class="title">
          <div class="grid-content bg-purple-light">
            后台管理页面
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple right" >
            <el-button type="success" class="btn-exit" @click="logout">退出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="container">
      <el-aside width="200px" class="aside">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  //用生命周期钩子,在实例化之前判断用户有没有登录,没有的话就直接打回登录页
    beforeCreate(){
    if (window.sessionStorage.getItem('taken')) {
        
    }else{
      this.$message.warning('弟弟,请先登录哦');
      this.$router.push('/login')
    }
  },
  methods: {
    //退出登录事假
    logout(){
      window.sessionStorage.removeItem('taken')
      this.$router.push('/login')
    }
  }
  }
  
</script>

<style>
.header{
  background-color: pink;
  line-height: 60px;
}
.header img{
  height: 60px;
  margin-left: 40px;
}
.header .title{
  font-size: 30px;
  color: white;
  text-align: center;
}
.right{
  text-align: right
}
.container{
  height: 100%;
}
.index{
  height: 100%;
}
.index .container .aside{
  background-color: #f2f2f2;
  height: 100%
}
.index .container .main{
 background-color: #ddd;
}
</style>
