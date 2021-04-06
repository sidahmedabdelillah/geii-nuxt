<template>
  <nuxt-link
    :to="link"
    class="h-entry mb-30 v-height gradient"
    :style="{ backgroundImage: `url(${imageUrl})` }"
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
    imageUrl() {
      return this.$imageFilter(this.article.Picture).thumbnail;
    },
    link() {
      return "/news/v2/" + this.article.id;
    },
    date() {
      const date = this.article.created_at.substring(0, 10);
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
