<template></template>

<script>
import slides from "@/components/slides";
import formation from "@/components/formation";

export default {
  name: "home",
  components: {
    slides,
    formation
  }
};
</script>

<style>
.home {
  position: absolute !important;
  top: 0 !important;
  z-index: 1000;
}
</style>
