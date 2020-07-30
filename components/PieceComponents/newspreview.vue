<template>
  <nuxt-link
    :to="link"
    class="h-entry mb-30 v-height gradient"
    :style="{ backgroundImage: `url(${article.Picture.url})` }"
  >
    <div class="text">
      <h2>{{ article.Title }}</h2>
      <span class="date">{{ date }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "newspreview",
  props: ["article"],
  computed: {
    link() {
      return "/news/" + this.article.id;
    },

    date() {
      const date = this.article.createdAt.substring(0, 10);
      const mounths = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
      ][+date.substring(5, 7) - 1];
      return date.substring(8) + " " + mounths + " " + date.substring(0, 4);
    }
  }
};
</script>

<style scoped>
.retro-layout-2 .text {
  position: absolute;
  bottom: 0;
  z-index: 10;
  padding: 20px;
  max-width: 350px;
}
.retro-layout-2 .text h2 {
  color: #fff;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 0;
}
.retro-layout-2 .text span {
  color: rgba(255, 255, 255, 0.5);
}
/*** uncss> filename: css/style.css ***/
/* Base */
body {
  line-height: 1.7;
  color: gray;
  font-weight: 300;
  font-size: 1rem;
  background: #fff;
  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

::-moz-selection {
  background: #000;
  color: #fff;
}

::selection {
  background: #000;
  color: #fff;
}

a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
  color: #2f89fc;
}
a:hover {
  color: #046df4;
  text-decoration: none;
}

h2 {
  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  color: #000;
}
</style>
