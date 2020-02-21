<template>
    <div class="container" id="nav">
        <nav>
            <nuxt-link to="/" class="logo"><img src="/logo.png" alt="logo"></nuxt-link>
          <ul class="smnone">
            <li><nuxt-link to="/">首页</nuxt-link></li>
            <li><nuxt-link to="/about">关于</nuxt-link></li>
          </ul>
          <div class="search smnone">
            <el-autocomplete class="inline-input" v-model="query" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="search" @keyup.enter.native="search">
              <i class="el-icon-search el-input__icon" slot="suffix" @click="search"></i>
            </el-autocomplete>
          </div>

          <div class="rightNav">
            <nuxt-link to="/article/write" class="writer smnone"><i class="el-icon-edit-outline"></i>写文章</nuxt-link><span class="smnone">|</span>
            <div class="login" v-if="$store.state.token && $store.state.nickname">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">{{$store.state.nickname}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon=""><span>写文章</span></el-dropdown-item>
                  <el-dropdown-item icon=""><span @click="$store.commit('removeToken')">退出登录</span></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div v-else>
              <nuxt-link to="/login">登录</nuxt-link> ·
              <nuxt-link to="/register">注册</nuxt-link>
            </div>
          </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "topNav",
      data(){
          return{
            query: '',
            restaurants: [{"value": "python"}],
          }
      },
      methods:{
        querySearch(queryString, cb) {
          // 获取输入建议
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          // 调用 callback 返回建议列表的数据
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          };
        },
        search(){
          let query = this.query;
          console.log(query)
        }
      }
    }
</script>

<style scoped>
  @import url('assets/css/app/public/topNav.css');
</style>
