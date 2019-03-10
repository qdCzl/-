<template>
  <div class="login">
    <el-form
      :model="fromData"
      status-icon
      :rules="rules"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm .el-form"
      label-position="top"
    >
      <h2>弟弟你来辣?</h2>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model.trim="fromData.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model.trim="fromData.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submitForm('ruleForm2')">冲冲冲</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromData: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          
          this.$http.post('login',this.fromData).then(res=>{
            if (res.data.meta.status === 400) {
              //登录失败
              this.$message.error(res.data.meta.msg);
            }else{
              //登录成功
              this.$message.success(res.data.meta.msg);
              //成功后,保存后台返回的taken  因为会话状态只存在浏览器打开状态,关闭后要清除 所以用sessionStorage
              window.sessionStorage.setItem('taken',res.data.data.token)
              //使用路由提供的方式进行跳转 编程式导航
              this.$router.push('/index')
            }
          })
        } else {
          this.$message.error('请输入正确的账号密码!');
          return false;
        }
      });
    }
  }
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body > div:first-of-type{
  height: 100%;
}
.login {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form {
  width: 580px;
  height: 440px;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
}
.login-btn {
  width: 100%;
}
</style>
