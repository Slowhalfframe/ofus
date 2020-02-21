<template>
  <div class="lcf">
    <div class="like"><span class="iconfont">&#xe618;</span>99</div>
    <div class="comment"><span class="iconfont">&#xe62f;</span>99</div>
    <div class="fav"><span class="iconfont">&#xe62b;</span>99</div>
    <div class="share"></div>
    <div class="backTop"><span class="iconfont" @click="backTop()">&#xe62a;</span></div>
  </div>
</template>

<script>
    export default {
        name: "likeCommnetFav",
      methods:{
        backTop(){
          window.scrollTo(0, 0);
        }
      }
    }
</script>

<style scoped>
  @import "assets/css/app/article/detail/likeCommentFav.css";
</style>
