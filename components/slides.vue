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
      <div class="carousel-item active no-repeat" style="background-image:url('./Telecom.png')">
        <div class="carousel-caption">
          <h1>Systeme Telecommunication et Reaseaux</h1>
          <p>The best telecommunication formation</p>
          <a class="btn btn-primary">Formation</a>
          <button type="button" class="btn btn-outline-secondary">See More</button>
        </div>
      </div>
      <!--slide 2 -->
      <div class="carousel-item no-repeat" style="background-image: url('./SE.png');"></div>
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
export default {
  name: "slides"
};
</script>
<style scoped>
/*---slider-----*/
.carousel-item {
  height: 100vh;
}

.carousel-caption {
  width: 80%;
  position: absolute !important;
  right: 0%;
  top: 35%;
  text-align: center;
}

.carousel-caption h1 {
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
  margin-left: -10vw;
  background-color: #f04b4c !important;
  margin-right: 2vh;
  width: 15vw;
  font-size: 1.5vw;
  height: 6vw;
  vertical-align: middle !important;
}

.btn-primary:hover {
  background-color: #782000 !important;
}

.btn-outline-secondary {
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
