<template>
  <section class="home">
    <slides :slides="slides" />
    <div class="mycontainer">
      <myabout :home_about="home_about" />
      <formation class="formation" />
      <newssection :articles="articles" />
    </div>
  </section>
</template>

<script>
import slides from "@/components/home/slides";
import formation from "@/components/home/cardSection/formation";
import myabout from "@/components/home/myabout";
import newssection from "@/components/home/newssection";

export default {
  async asyncData({ $axios }) {
    const articles = await $axios.$get("/Articles?_sort=created_At:ASC");
    return {
      articles,
      home_about: await $axios.$get("/home-about"),
      slides: await $axios.$get("/slides")
    };
  },

  components: {
    slides,
    formation,
    myabout,
    newssection
  }
};
</script>

<style scoped>
.mycontainer {
  width: 80%;
  margin: auto;
}
.margin {
  margin: 6vh 0;
}
</style>
