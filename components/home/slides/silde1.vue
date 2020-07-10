<template>
  <div v-bind:class="[active , carousel]" :style="{ backgroundImage: `url(${image})` }">
    <div class="carousel-caption">
      <h1>{{h1}}</h1>
      <p>{{p}}</p>
      <btn class="btn btn-primary">Formation</btn>
      <button type="button" class="btn btn-outline-secondary">See More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide",
  props: ["h1", "p", "active", "image"],
  data() {
    return {
      carousel: "carousel-item  no-repeat"
    };
  }
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

.btn-primary {
  align-items: center;
  padding: auto !important;
  margin-left: -5vw;
  background-color: #f04b4c !important;
  margin-right: 2vh;
  width: 15vw;
  font-size: 1.5vw;
  height: 6vw;
  max-height: 10vh;
  vertical-align: middle !important;
}

.btn-primary:hover {
  background-color: #782000 !important;
}

.btn-outline-secondary {
  max-height: 10vh;
  height: 6vw;
  padding: auto !important;
  font-size: 1.5vw;
  width: 15vw;
  margin-left: 2vh;
  color: white !important;
  border-color: white !important;
}

.btn-outline-secondary:hover {
  color: black !important;
  background-color: white !important;
}
</style>