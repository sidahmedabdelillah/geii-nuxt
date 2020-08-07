<template>
  <section class="home">
    <slides :slides="slides" />
    <div class="mycontainer">
      <myabout :home_about="home_about" />
      <formation class="formation" />
      <newssection :articles="articles" />
    </div>
    <div class="margin"></div>
    <no-ssr>
      <myfooter />
    </no-ssr>
  </section>
</template>

<script>
import slides from "@/components/home/slides";
import formation from "@/components/home/cardSection/formation";
import myfooter from "@/components/home/footer/footers";
import myabout from "@/components/home/myabout";
import newssection from "@/components/home/newssection";
export default {
  async asyncData({ $axios }) {
    return {
      articles: await $axios.$get("/Articles?_sort=createdAt:DESC"),
      home_about: await $axios.$get("/home-about"),
      slides: await $axios.$get("/slides")
    };
  },
  date: () => {
    return {};
  },

  components: {
    slides,
    formation,
    myfooter,
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
