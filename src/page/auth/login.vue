<template>
  <div class="wrap">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login_form" >
      <h1>登陆</h1>
      <p class="sub_title">联众金融用户管理系统</p>
      <el-row>
        <el-col :span="24">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'change' }
        ],
      }
    }
  },
  methods: {
    login () {
      const { formModel } = this
      // this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push('/')
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 1.6rem;
  }
  .wrap {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sub_title {
    line-height: 2rem;
    font-size: 0.8+83;
    color: #999;
    margin-bottom: 1rem;
  }
  .login_form {
    width: 20rem;
    height: 16rem;
    margin-top: -10rem;
  }
  button {
    width: 100%;
  }
</style>
