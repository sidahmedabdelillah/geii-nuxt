<template>
  <specialite
    tittle_color="#FF4500"
    border_color="#FF7B00"
    paragraph_tittle_color="#FF7B00"
    table_second_color="#FF7B00"
    paragraph_tittle_line_color="#FF7B00"
    notre_mission_color="#FF7B00"
    header_tittle="Automatisme et Informatique industruel"
    side_image="/page_auto/side.png"
    splash_image="/page_auto/splash.png"
    body_image="/page_auto/body.png"
    :specialite="specialite"
  ></specialite>
</template>

<script>
import specialite from "@/components/specialite/index";
export default {
  async asyncData({ $axios }) {
    return {
      specialite: await $axios.$get("/auto")
    };
  },
  components: {
    specialite
  }
};
</script>

<style></style>
