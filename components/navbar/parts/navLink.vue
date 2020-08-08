<template>
  <li class="nav-item">
    <nuxt-link v-if="!isLogout" :to="link.path" class="nav-link">
      {{ link.name }}</nuxt-link
    >
    <a href v-if="isLogout" class="nav-link">
      {{ link.name }}
    </a>
  </li>
</template>

<script>
export default {
  props: ["link"],
  computed: {
    isLogout() {
      if (this.link.path == "logout") {
        return true;
      }
      return false;
    }
  }
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
p {
  color: white;
  margin-inline-end: 0;
}
p:hover {
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
