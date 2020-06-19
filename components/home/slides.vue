<template>
  <div
    id="carouselExampleindicatord"
    class="carousel slide"
    data-ride="carousel"
    data-interval="50000"
  >
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleindicatord" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleindicatord" data-slide-to="1"></li>
    </ol>
    <!---caroussel inner-->
    <div class="carousel-inner" role="listbox">
      <!----slide 1 -->
      <slide1 p='The best telecommunication formation' h1="Systeme Telecommunication et Reaseaux"  active ="active" image='./Telecom.png'></slide1>
      <!--slide 2 -->
      <slide1 p='SE' h1="System Embarqué" image='./SE.png'></slide1>
      <!--slide 3 -->
      <slide1 p='SE' h1="Automatisme et infomatique industriel" image='./auto.jpg'></slide1>

      

    </div>
    <!---carousel inner end -->
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
import slide1 from "./slides/silde1"
export default {
  name: "slides",
  components : {
    slide1
  }
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
