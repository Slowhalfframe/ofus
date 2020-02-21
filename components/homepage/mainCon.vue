<template>
    <div class="maincon">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="文章" name="first">
          <articleList />
        </el-tab-pane>
        <el-tab-pane label="收藏" name="second">收藏</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import articleList from "../articleList";

    export default {
        name: "mainCon",
      components:{
        articleList
      },
      data() {
        return {
          activeName: 'first'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>
.maincon{
  width: 50%;
  margin: 0 auto;
}
  @media (max-width: 900px) {
    .maincon{
      width: 90%;
    }
  }
</style>
