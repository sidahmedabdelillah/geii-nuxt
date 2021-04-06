<template>
  <div class="site-section">
    <div class="">
      <home-title text="Les actualité" />
      <div class="row align-items-stretch retro-layout-2">
        <div class="col-md-4">
          <newspreview :article="articles[0]" />
          <newspreview :article="articles[1]" />
        </div>
        <div class="col-md-4">
          <newspreview :article="articles[2]" />
          <newspreview :article="articles[3]" />
        </div>
        <div class="col-md-4">
          <newspreview :article="articles[4]" />
          <newspreview :article="articles[5]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeTitle from "@/components/PieceComponents/home/HomeTitle";
import newspreview from "@/components/PieceComponents/newspreview";
export default {
  name: "newssection",
  components: {
    newspreview,
    homeTitle
  },
  props: ["articles"]
};
</script>
