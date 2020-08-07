<template>
  <div class="padding">
    <page-etudiant :cours="cours"></page-etudiant>
  </div>
</template>

<script>
import pageEtudiant from "../../../components/acessEtudiant/etudiant/pageEtudiant";
export default {
  async asyncData({ $axios }) {
    let cours = [];
    try {
      cours = await $axios.$get("/cours");
    } catch (error) {}
    return {
      cours
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
