<template>
  <div class="container">
    <div class="main">
      <nuxt-link to="/">
        <img src="/logo.png" alt="logo" class="logo">
      </nuxt-link>
      <div class="tips">
        <h2>Create an account</h2>
        <h5>已有账号？
          <nuxt-link to="/login">登录</nuxt-link>
        </h5>
      </div>
      <el-form :model="accountForm" :rules="rules" ref="accountForm" class="demo-dynamic" @submit.native.prevent>
        <el-form-item label="" prop="email">
          <el-input v-model="accountForm.email" placeholder="邮箱" autofocus="autofocus"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="accountForm.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="" prop="confirmPassword">
          <el-input v-model="accountForm.confirmPassword" placeholder="确认密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="" prop="verificationCode">
          <input type="text" class="email" placeholder="验证码" v-model="accountForm.verificationCode">
          <span class="send" @click="sendEmailCode()">{{sendEmail}}</span>
        </el-form-item>
        <el-form-item label="">
          <el-button @click="submitForm('accountForm')" native-type="submit">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {isEmail} from "../plugins/utils";
  import {fetchPost} from "../api/user/userAPI";
  import {mutations} from "../store";

  export default {
    name: "register",
    layout: 'noNav',
    data() {
      return {
        sendEmail: '发送验证码',
        accountForm: {
          email: 'zhanghaoran@qidufanyi.com',
          password: 'aaa123456',
          confirmPassword: 'aaa123456',
          verificationCode: '995927',
        },
        rules: {
          email: [{required: true, message: '请输入您的邮箱', trigger: 'blur'}, {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: 'blur'
          }],
          password: [{required: true, message: '请输入注册密码', trigger: 'blur'}, {
            min: 6,
            message: '密码最少为6位',
            trigger: 'blur'
          }],
          confirmPassword: [{required: true, message: '请确认您的注册密码', trigger: 'blur'}, {
            min: 6,
            message: '密码最少为6位',
            trigger: 'blur'
          }],
          verificationCode: [{required: true, message: '请输入邮箱验证码', trigger: 'blur'}, {
            min: 6,
            max: 6,
            message: '验证码为6位',
            trigger: 'blur'
          }],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = new FormData();
            params.append("email",this.accountForm.email );
            params.append("password",this.accountForm.password );
            params.append("confirm_password",this.accountForm.confirmPassword);
            params.append("code",this.accountForm.verificationCode );
            var self = this;
            fetchPost('/user/reg', params)
            .then(function (response) {
                console.log(response.data);
              if(response.data.code == 0){
                self.$message.success("注册成功！");
                // mutations.addToken(state, response.data.data.token);
                self.$store.commit("addToken", response.data.data.token);
                self.$router.push('/')
              }else{
                self.$message.error(response.data.error)
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
      sendEmailCode() {
        if(isEmail(this.accountForm.email)){
          let params = new FormData();
          params.append("email",this.accountForm.email );
          var slef = this;
          fetchPost("/send_code", params)
          .then(function (response) {
              console.log(response)
            if(response.data.data.code == 0){
              self.sendEmail = '已成功发送'
            }
          })
          .catch(function (error) {
            console.log(error)
          })
        }else{
          this.$message.error("请输入正确的邮箱地址")
        }
      },

    }
  }
</script>

<style scoped>
  @import "assets/css/app/register.css";
</style>
