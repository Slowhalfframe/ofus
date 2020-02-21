<template>
    <div class="head">
      <img src="http://ofus.ink/static/articles/uepload/static/users/header/head.jpg" alt="" class="avatar">
      <img src="https://image-static.segmentfault.com/317/288/3172886366-5e1fd7bde339b_articlex" alt="" class="bg">
      <h3>{{$route.params.name}}</h3>
      <h5>个人说明</h5>
      <ul class="attention">
        <li>关注：11</li>
        <li>关注者：11</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "heads"
    }
</script>

<style scoped>
@import "assets/css/app/homepage/head.css";
</style>
