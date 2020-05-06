<template>
  <section class="home">
    <slides />
    <div class="mycontainer">
      <myabout />
      <formation class="formation" />
      <newssection :articles="articles" />
    </div>
    <div class="margin"></div>
    <myfooter />
  </section>
</template>

<script>
import slides from "../components/slides";
import formation from "../components/formation";
import myfooter from "../components/myfooter";
import myabout from "@/components/myabout";
import newssection from "@/components/newssection";
export default {
  async asyncData({ $axios }) {
    return {
      articles: await $axios.$get(
        "http://localhost:1337/News?_sort=createdAt:DESC"
      )
    };
  },
  date: () => {
    return {};
  },
  mounted: function() {},

  components: {
    slides,
    formation,
    myfooter,
    myabout,
    newssection
  }
};
</script>

<style>
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
