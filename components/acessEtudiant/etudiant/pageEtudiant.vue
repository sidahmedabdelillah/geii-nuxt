<template>
  <div class="container">
    <welcome></welcome>
    <!-- end row1 -->
    <div class="row main">
      <div class="col-md-3">
        <div class="left">
          <left :buttons="buttons" @clickedbtn="sel($event)"></left>
        </div>
      </div>
      <div class="col-md-9">
        <h3></h3>
        <center
          :title="title"
          :cours="cours"
          :modules="modules"
          :select="selected"
        ></center>
      </div>
    </div>
  </div>
</template>

<script>
import left from "./left";
import welcome from "./welcome";
import center from "./center";
export default {
  data: () => {
    return {
      selected: 0,
      buttons: [
        "Tous les cours ",
        "Cours par Specialité",
        "Cours par module",
        "Autre Decumentaion"
      ]
    };
  },
  components: { welcome, left, center },
  props: ["cours", "modules"],
  methods: {
    sel: function(event) {
      console.log(event);
      this.selected = event;
    }
  },
  computed: {
    title() {
      return this.buttons[this.selected];
    }
  }
};
</script>

<style scoped></style>
