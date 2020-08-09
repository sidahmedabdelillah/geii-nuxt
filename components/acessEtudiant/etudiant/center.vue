<template>
  <div class="">
    <h2>{{ title }}</h2>
    <center-all v-if="select == 0" :cours="cours"></center-all>
    <center-specialite
      v-if="select == 1"
      :modules="modules"
      :cours="cours"
    ></center-specialite>
    <centre-module
      v-if="select == 2"
      :modules="modules"
      :cours="cours"
    ></centre-module>
  </div>
</template>

<script>
import centerAll from "./center/centerAll";
import centerSpecialite from "./center/centerSpecialite";
import centreModule from "./center/centreModule";
export default {
  components: {
    centerAll,
    centreModule,
    centerSpecialite
  },
  props: ["cours", "title", "select", "modules"]
};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}
</style>
