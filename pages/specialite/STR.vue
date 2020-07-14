<template>
  <specialite
    tittle_color="#00467F"
    border_color="#375362"
    paragraph_tittle_color="#385370"
    table_second_color="#365262"
    paragraph_tittle_line_color="#747778"
    notre_mission_color="#385370"
    header_tittle="Systeme Telecommunication et Resaux"
    side_image="/page_str/tower.png"
    splash_image="/page_str/splash.png"
    body_image="/page_str/tele-splash.png"
    :specialite="specialite"
  ></specialite>
</template>

<script>
import specialite from "@/components/specialite/index";
export default {
  async asyncData({ $axios }) {
    return {
      specialite: await $axios.$get("/Telecom")
    };
  },
  components: {
    specialite
  }
};
</script>

<style></style>
