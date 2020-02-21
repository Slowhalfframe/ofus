<template>
  <main>
    <div class="article">
      <auth />
      <h1>是时候抛弃Postman了，试试 VS Code 自带神器插件</h1>
      <contents />
      <likeCommnetFav />
    </div>
    <div class="about smnone">
      <aboutAuth />
      <span class="backTop"><span class="iconfont" @click="backTop()">&#xe62a;</span></span>
    </div>
  </main>
</template>

<script>
  import auth from "../../components/article/detail/auth";
  import contents from "../../components/article/detail/contents";
  import aboutAuth from "../../components/article/detail/aboutAuth";
  import likeCommnetFav from "../../components/article/detail/likeCommnetFav";

    export default {
        name: "detail",
      components:{
        auth, contents, aboutAuth, likeCommnetFav
      },
      methods:{
        backTop(){
          window.scrollTo(0, 0);
        }
      }
    }
</script>

<style scoped>
@import "assets/css/app/article/detail.css";
</style>
