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
      "/modules-telecomes?Anne=Premiere_annee&Semestre=Premier"
    );
    const special_1_2 = await $axios.$get(
      "/modules-telecomes?Anne=Premiere_annee&Semestre=Deuxieme"
    );
    const special_2_1 = await $axios.$get(
      "/modules-telecomes?Anne=Deuxieme_annee&Semestre=Premier"
    );
    const special_2_2 = await $axios.$get(
      "/modules-telecomes?Anne=Deuxieme_annee&Semestre=Deuxieme"
    );
    const special_3_1 = await $axios.$get(
      "/modules-telecomes?Anne=Troisieme_annee&Semestre=Premier"
    );
    const special_3_2 = await $axios.$get(
      "/modules-telecomes?Anne=Troisieme_annee&Semestre=Deuxieme"
    );

    return {
      specialite: await $axios.$get("/Telecom"),
      special_1_1,
      special_1_2,
      special_2_1,
      special_2_2,
      special_3_1,
      special_3_2
    };
  },
  components: {
    specialite
  }
};
</script>

<style></style>
