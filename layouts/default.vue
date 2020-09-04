<template>
  <div>
    <navbar />
    <nuxt />
    <myfooter />
  </div>
</template>
<script>
import navbar from "../components/navbar/navbar";
import myfooter from "@/components/home/footer/footers";

export default {
  components: {
    navbar,
    myfooter,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@100;200;300;400;500;700&display=swap");
</style>
