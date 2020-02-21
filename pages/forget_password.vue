<template>
  <div class="container">
    <div class="main">
      <nuxt-link to="/">
        <img src="/logo.png" alt="logo" class="logo">
      </nuxt-link>
      <div class="tips">
        <h2>Forget Password</h2>
      </div>
      <el-form :model="accountForm" :rules="rules" ref="accountForm" class="demo-dynamic" @submit.native.prevent>
        <el-form-item label="" prop="email">
          <el-input v-model="accountForm.email" placeholder="邮箱" autofocus="autofocus"></el-input>
        </el-form-item>
        <el-form-item label="" prop="verificationCode">
          <input type="text" class="email" placeholder="验证码" v-model="accountForm.verificationCode">
          <span class="send">{{sendEmail}}</span>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="accountForm.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button @click="submitForm('accountForm')" native-type="submit">修改密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forget_password",
    layout: 'noNav',
    data() {
      return {
        sendEmail: '发送验证码',
        accountForm: {
          email: '',
          password: '',
          confirmPassword: '',
        },
        rules: {
          email: [{required: true, message: '请输入您的邮箱', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }],
          password: [{required: true, message: '请输入注册密码', trigger: 'blur' },{ min: 6, message: '密码最少为6位', trigger: 'blur' }],
          confirmPassword: [{required: true, message: '请确认您的注册密码', trigger: 'blur' },{ min: 6, message: '密码最少为6位', trigger: 'blur' }],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
  @import "assets/css/app/register.css";
</style>
