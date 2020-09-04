<template>
  <div class>
    <div>
      <img class="extra-image" :src="imageUrl" alt />
      <p>{{extra.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["extra"],
  computed: {
    imageUrl() {
      return this.$imageFilter(this.extra.image).image;
    },
  },
};
</script>

<style scoped>
.extra-image {
  width: 60%;
  float: right;
  margin-left: 10px;
}
</style>