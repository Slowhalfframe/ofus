<template>
    <div class="ad">
      <a href="#">广告位</a>
    </div>
</template>

<script>
    export default {
        name: "ad"
    }
</script>

<style scoped>
.ad{
  width: 96%;
  padding: 2%;
  height: 100px;
  margin: 10px auto;
}
  a{
    display: block;
    width: 100%;
    height: 100%;
    background-color: #eee;
    font-size: 30px;
    line-height: 100px;
    text-align: center;
    color: #bbb;
    text-decoration: none;
    letter-spacing: 5px;
  }
</style>
