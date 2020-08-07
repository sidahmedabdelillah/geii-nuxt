<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      id="navbarDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      href
      >{{ link.name }}</a
    >
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <nuxt-link
        v-for="item in link.subLinks"
        :key="item.name"
        :to="item.path"
        class="dropdown-item"
        >{{ item.name }}</nuxt-link
      >
    </div>
  </li>
</template>

<script>
export default {
  props: ["link"]
};
</script>

<style>
.nav-link {
  padding-left: 40px !important;
  padding-right: 40px !important;
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

.dropdown:hover > .dropdown-menu {
  display: block;
  background: #193c4e;
  color: white;
  position: absolute;
  top: 100%;
  border-radius: 0;
}
.dropdown-item:hover {
  color: #193c4e !important;
}
.dropdown-item {
  color: white !important;
}

.dropdown:hover a {
  color: #193c4e;
}
.nav-item {
  margin-bottom: 0;
}
</style>
