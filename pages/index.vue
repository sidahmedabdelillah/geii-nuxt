<template>
  <section class="home">
    <slides />
    <formation />
    <myfooter />
  </section>
</template>


<script>
import slides from "../components/slides";
import formation from "../components/formation";
import myfooter from "../components/myfooter";

export default {
  components: {
    slides,
    formation,
    myfooter
  }
};
</script>

<style>
.home {
  position: absolute !important;
  top: 0 !important;
  z-index: 1000;
}
</style>
