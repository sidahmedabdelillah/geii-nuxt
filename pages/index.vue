<template>
  <section class="home">
    <slides :slides="slides" />
    <div class="mycontainer">
      <myabout :home_about="home_about" />
      <formation class="formation" />
      <newssection :articles="articles" />
    </div>
    <div class="margin"></div>
    <myfooter />
  </section>
</template>

<script>
import slides from "@/components/home/slides";
import formation from "@/components/home/formation";
import myfooter from "@/components/myfooter";
import myabout from "@/components/home/myabout";
import newssection from "@/components/home/newssection";
export default {
  async asyncData({ $axios }) {
    return {
      articles: await $axios.$get(
        "https://geii-backend.herokuapp.com/Articles?_sort=createdAt:DESC"
      ),
      home_about: await $axios.$get(
        "https://geii-backend.herokuapp.com/home-about"
      ),
      slides: await $axios.$get("https://geii-backend.herokuapp.com/slides")
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
.formation {
}
.home {
  position: absolute !important;
  top: 0 !important;
  z-index: 1000;
}
.mycontainer {
  width: 80%;
  margin: auto;
}
.margin {
  margin: 6vh 0;
}
</style>
