<template>
  <div class="left">
    <my-btn
      @clickedbtn="set($event)"
      :text="btn"
      v-for="btn in buttons"
      :key="btn"
    ></my-btn>
  </div>
</template>

<script>
import myBtn from "../../PieceComponents/Button";
export default {
  components: { myBtn },
  props: ["buttons"],
  methods: {
    set: function(event) {
      console.log("left");
      this.$emit("clickedbtn", this.buttons.indexOf(event));
    }
  }
};
</script>

<style>
.left {
  margin-bottom: 30px;
}
</style>
