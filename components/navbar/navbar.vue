<template>
  <div>
    <div class="my-navbar">
      <navbar-top></navbar-top>
      <hr />
      <nav-menu></nav-menu>
    </div>
  </div>
</template>

<script>
import navbarTop from "./navbarTop";
import navMenu from "./menu";
export default {
  components: {
    navbarTop,
    navMenu
  }
};
</script>

<style scoped>
hr {
  margin: 0 auto;
  width: 90%;
  background-color: #999;
}
.my-navbar {
  background-color: #193c4e;
  font-family: "Rubik", sans-serif;
  color: white;
}
</style>
