<template>
  <div class="wrap">
    <el-form :model="formData" :rules="formRules" ref="formData" class="login_form" >
      <h1>登录</h1>
      <p class="sub_title">联众金融用户管理系统</p>
      <el-row>
        <el-col :span="24">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="formData.password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()" :disabled="!formValid">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "../../api"
export default {
  name: 'login',
  data () {
    return {
      formData: {
        name: '',
        password: '',
      },
      formRules: {
        name: { required: true, message: '必填项', trigger: ['change', 'blur'] },
        password: { required: true, message: '请输入密码', trigger: ['change', 'blur'] }
      }
    }
  },
  computed: {
    formValid() {
      return this.formData.name && this.formData.password
    }
  },
  methods: {
    onSubmit() {
      const { formData } = this
      api.auth.adminlogin({
        userAccount: formData.name,
        userPwd: formData.password
      }).then( res => {
          this.$store.commit('login', res.accessToken)
          this.$store.commit('updateUserInfo', res)
          this.$router.push('/')
      })
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
