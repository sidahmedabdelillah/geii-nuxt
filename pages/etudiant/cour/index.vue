<template>
  <div class="padding">
    <page-etudiant :cours="cours" :modules="modules"></page-etudiant>
  </div>
</template>

<script>
import pageEtudiant from "../../../components/acessEtudiant/etudiant/pageEtudiant";
export default {
  async asyncData({ $axios }) {
    const cours = await $axios.$get("/cours");
    const moduleStr = await $axios.$get("/modules-telecomes");
    const moduleSe = await $axios.$get("/modules-ses");
    const moduleAuto = await $axios.$get("/module-autos");
    const modules = [...moduleStr, ...moduleSe, ...moduleAuto];

    return {
      cours,
      modules
    };
  },
  components: {
    pageEtudiant
  }
};
</script>

<style scoped>
.padding {
  padding: 30px 0;
  font-family: "Rubik", sans-serif;
  color: #777777;
}
</style>
