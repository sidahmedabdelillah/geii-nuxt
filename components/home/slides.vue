<template>
  <div
    id="carouselExampleindicatord"
    class="carousel slide"
    data-ride="carousel"
    data-interval="50000"
  >
    <!-----
    <ol class="carousel-indicators">
      <li
        v-for="(s , index) in slides"
        :key="s.id"
        data-target="#carouselExampleindicatord"
        :data-slide-to="index"
        :class="{ 'active': index === 0 }"
      ></li>
    </ol>
    -->
    <!---caroussel inner-->
    <div class="carousel-inner" role="listbox">
      <slide1
        v-for="(slide, index) in slides"
        :key="slide.id"
        :p="slide.Paragraph"
        :h1="slide.Title"
        :active="{ active: index === 0 }"
        :image="slide.Picture"
        :link="slide.link"
      ></slide1>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleindicatord"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleindicatord"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</template>
<script>
import slide1 from "./slides/silde1";
export default {
  name: "slides",
  components: {
    slide1,
  },
  props: ["slides"],
};
</script>
<style scoped>
/*---slider-----*/
.carousel-item {
  height: 60vh;
}
.no-repeat {
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: cover;
}
</style>
