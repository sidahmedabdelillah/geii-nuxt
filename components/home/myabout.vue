<template>
  <section id="mysection" class="section section-xl bg-default">
    <div class="">
      <div
        class="row row-50 text-md-left align-items-md-center justify-content-md-between"
      >
        <div class="col-md-5 col-lg-4 order-md-2">
          <a href="index.html">
            <img
              class="img-responsive d-inline-block"
              :src="imageUrl"
              alt
              width="326"
              height="329"
            />
          </a>
        </div>
        <div class="mydiv col-md-7 col-lg-7 order-md-1">
          <home-title text="Département GEII" />

          <div class="offset-top-35 offset-lg-top-60">
            <p>{{ home_about.Paragraph }}</p>
          </div>
          <div class="offset-top-30">
            <a class="btn btn-icon btn-icon-right button-default" href="/about">
              <span>Learn More</span>
              <font-awesome-icon :icon="['fa', 'arrow-right']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import homeTitle from "@/components/PieceComponents/home/HomeTitle";
export default {
  name: "myabout",
  props: ["home_about"],
  components: {
    homeTitle
  },
  computed: {
    imageUrl() {
      return this.$imageFilter(this.home_about.Picture).image;
    }
  }
};
</script>
