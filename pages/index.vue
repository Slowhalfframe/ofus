<template>
  <div>
<!--    <topNav/>-->

    <main>
      <articleList class="articleList"/>
      <div class="sideBar smnone">
        <ad></ad>
        <footers/>
      </div>
    </main>
  </div>
</template>

<script>
// import topNav from "../components/public/topNav";
import articleList from "../components/articleList";
import footers from "../components/public/footer";
import ad from "../components/public/ad";

export default {
  components: {
    footers, articleList, ad
  }
}
</script>

<style scoped>
  @import "assets/css/app/index.css";
</style>
