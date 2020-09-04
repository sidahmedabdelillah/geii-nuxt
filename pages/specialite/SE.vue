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
    :special_1_1="special_1_1"
    :special_1_2="special_1_2"
    :special_2_1="special_2_1"
    :special_2_2="special_2_2"
    :special_3_1="special_3_1"
    :special_3_2="special_3_2"
  ></specialite>
</template>

<script>
import specialite from "@/components/specialite/index";
export default {
  async asyncData({ $axios }) {
    const special_1_1 = await $axios.$get(
      "/modules-ses?Anne=Premiere_annee&Semestre=Premier"
    );
    const special_1_2 = await $axios.$get(
      "/modules-ses?Anne=Premiere_annee&Semestre=Deuxieme"
    );
    const special_2_1 = await $axios.$get(
      "/modules-ses?Anne=Deuxieme_annee&Semestre=Premier"
    );
    const special_2_2 = await $axios.$get(
      "/modules-ses?Anne=Deuxieme_annee&Semestre=Deuxieme"
    );
    const special_3_1 = await $axios.$get(
      "/modules-ses?Anne=Troisieme_annee&Semestre=Premier"
    );
    const special_3_2 = await $axios.$get(
      "/modules-ses?Anne=Troisieme_annee&Semestre=Deuxieme"
    );
    const specialite = await $axios.$get("/se");
    return {
      specialite,
      special_1_1,
      special_1_2,
      special_2_1,
      special_2_2,
      special_3_1,
      special_3_2,
    };
  },
  components: {
    specialite,
  },
};
</script>

<style></style>
