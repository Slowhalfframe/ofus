<template>
    <div class="about">
      <h1>OFUS<small>python圈|Circle</small></h1>
      <p>这是网站的一段简介。</p>
      <br><br>
      <h2>发展历程</h2>
      <div class="tline">
        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
<!--      <h2>技术栈与开源说明</h2>-->
      &nbsp;&nbsp;<h2>技术栈</h2>
<!--      <h4>&nbsp;&nbsp;前端：</h4>-->
      <ul>
        <li>Docker</li>
        <li>Node</li>
        <li>NUXT.js</li>
        <li>Python</li>
        <li>Django</li>
        <li>UWSIG</li>
        <li>MySQL</li>
        <li>Redis</li>
        <li>Nginx</li>
      </ul>
<!--      <h4>&nbsp;&nbsp;后端：</h4>-->
<!--      <ul>-->
<!--        <li>django</li>-->
<!--      </ul>-->
<!--      <h4>&nbsp;&nbsp;数据库：</h4>-->
<!--      <ul>-->
<!--        <li>MySQL</li>-->
<!--        <li>Redis</li>-->
<!--      </ul>-->
<!--      <h4>&nbsp;&nbsp;服务器：</h4>-->
<!--      <ul>-->
<!--        <li>Ubuntu</li>-->
<!--      </ul>-->
      &nbsp;&nbsp;<h2>开源说明</h2>
      <p>欢迎各位前往GitHub访问源码：</p>
      <p>本源码仅限于交流学习，不可用于商业或违法目的，否则 <b>ofus</b> 将对其进行法律维权。</p>
      <p>欢迎诸位提供宝贵意见、建议和分支代码，可直接提交代码到GitHub。</p>
      <br><br>
      <p>ofus 团队</p>
      <p>2020-01-31</p>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            reverse: false,
            activities: [{
              content: '萌芽想法',
              timestamp: '2018-12-31'
            }, {
              content: 'V0.0.1版试运营',
              timestamp: '2019-03-01'
            }, {
              content: 'V0.9.0版试运营',
              timestamp: '2020-01-31'
            }]
          }
      }
    }
</script>

<style scoped>
@import "assets/css/app/about/index.css";
</style>
