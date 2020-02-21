<template>
  <div class="container">
    <div class="main">
      <nuxt-link to="/">
        <img src="/logo.png" alt="logo" class="logo">
      </nuxt-link>
      <div class="tips">
        <h1>Welcome Back</h1>
        <h5>Sign in with your account</h5>
      </div>
      <el-form :model="accountForm" :rules="rules" ref="accountForm" class="demo-ruleForm" @submit.native.prevent>
        <el-form-item label="" prop="email">
          <el-input v-model="accountForm.email" placeholder="账号/邮箱" autofocus="autofocus"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="accountForm.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button @click="submitForm('accountForm')" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="mark">
        <nuxt-link to="/forget_password">忘记密码？</nuxt-link>&nbsp;|&nbsp;
        <nuxt-link to="/register">注册</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchPost} from "../api/user/userAPI";

  export default {
    name: "login",
    layout: 'noNav',
    data() {
      return {
        accountForm: {
          email: 'zhanghaoran@qidufanyi.com',
          password: 'aaa123456',
        },
        rules: {
          email: [{required: true, message: '请输入您的邮箱', trigger: 'blur' },{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }],
          password: [{required: true, message: '请输入登录密码', trigger: 'blur' },{ min: 6, message: '密码最少为6位', trigger: 'blur' }],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = new FormData();
            params.append("email",  this.accountForm.email);
            params.append("password",  this.accountForm.password)
            var self = this;
            fetchPost('/login', params)
            .then(function (response) {
              console.log(response.data);
              if(response.data.code == 0){
                let token = response.data.data.token;
                if(response.data.data.profile.nickname){
                  var nickname = response.data.data.profile.nickname
                }else{
                  var nickname = response.data.data.email
                }
                self.$store.commit("addToken", token);
                self.$store.commit("addNickname", nickname);
                self.$message.success("登录成功");
                self.$router.push('/')
              }else{
                self.$message.error("账号或密码错误，请重新登录");
              }
            })
            .catch(function (error) {
              console.log(error);
              self.$message.error("网络错误，请重试");
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
    mounted() {
    }
  }
</script>

<style scoped>
  @import "assets/css/app/login.css";
</style>
