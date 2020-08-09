<template>
  <div v-html="$md.render(data.aa)"></div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return {
      data: await $axios.$get("http://localhost:1338/test")
    };
  },
  mounted() {
    console.log(this.data.aa);
  }
};
</script>

<style>
</style>