<template>
  <div class="row">
    <div class="col-md-4" v-for="image in extra.images" :key="image.id">
      <img :src="getImageUrl(image)" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: ["extra"],
  methods: {
    getImageUrl(img) {
      return this.$imageFilter(img).image;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>