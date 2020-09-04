<template>
  <div v-bind:class="[active, carousel]" :style="{ backgroundImage: `url(${imageUrl.image})` }">
    <div class="carousel-caption">
      <nuxt-link :to="link" class="carousel-link">
        <h1>{{ h1 }}</h1>
        <p>{{ p }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide",
  props: ["h1", "p", "active", "image", "link"],
  data() {
    return {
      carousel: "carousel-item  no-repeat",
    };
  },
  computed: {
    imageUrl() {
      return this.$imageFilter(this.image);
    },
  },
};
</script>

<style scoped>
.carousel-item {
  height: 60vh;
}
.carousel-caption {
  width: 80%;
  position: absolute !important;
  right: 0%;
  top: 35%;
  text-align: center;
}
.carousel-caption h1 {
  margin-top: -10vh;
  width: 80% !important;
  font-weight: bold;
  font-size: 4vw;
  color: #f04b4c;
}

.carousel-caption p {
  margin-left: 4vw;
  text-align: center;
  font-weight: 600;
  width: 80% !important;
  font-size: 2vw;
  color: white;
}

.carousel-link:hover {
  text-decoration: none;
  opacity: 0.8;
}
</style>
