<template>
    <div>
<!--      {{$route.params.name}}-->
      <heads />
      <mainCon />
    </div>
</template>

<script>
  import heads from "../../components/homepage/heads";
  import mainCon from "../../components/homepage/mainCon";

    export default {
        name: "name",
      components:{
        heads, mainCon
      }
    }
</script>

<style scoped>

</style>
