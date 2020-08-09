<template>
  <div class="row" v-if="cours.length > 0">
    <div class="col-sm-12">
      <h5>{{ module }}</h5>
    </div>
    <div class="col-md-4 col-sm-6" v-for="cour in cours" :key="cour.id">
      <card-cour :cour="cour"></card-cour>
    </div>
  </div>
</template>

<script>
import cardCour from "../../cardCour";
export default {
  components: {
    cardCour
  },
  props: ["module", "cours"]
};
</script>

<style></style>
