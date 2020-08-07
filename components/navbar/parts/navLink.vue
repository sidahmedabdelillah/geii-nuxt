<template>
  <li class="nav-item">
    <nuxt-link :to="link.path" class="nav-link"> {{ link.name }}</nuxt-link>
  </li>
</template>

<script>
export default {
  props: ["link"]
};
</script>

<style scoped>
.nav-link {
  padding-left: 40px !important;
  padding-right: 40px !important;
}
.nav-item {
  margin-bottom: 0;
}

a {
  color: white;
}
a:hover {
  color: #193c4e;
}
.navbar ul li {
  transition: all 200ms ease-in;
}
.navbar ul li:hover {
  color: #193c4e !important;
  background-color: white;
}
.nuxt-link-exact-active {
  color: #193c4e !important;
  background-color: white;
}
</style>
