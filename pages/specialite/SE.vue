<template>
  <specialite
    tittle_color="#087504"
    border_color="#087504"
    paragraph_tittle_color="#087504"
    table_second_color="#066924"
    paragraph_tittle_line_color="#087504"
    notre_mission_color="#087504"
    header_tittle="Système embarqué "
    side_image="/page_se/side.png"
    splash_image="/page_se/splash.png"
    body_image="/page_se/body.png"
    :specialite="specialite"
  ></specialite>
</template>

<script>
import specialite from "@/components/specialite/index";
export default {
  async asyncData({ $axios }) {
    return {
      specialite: await $axios.$get("/se")
    };
  },
  components: {
    specialite
  }
};
</script>

<style></style>
