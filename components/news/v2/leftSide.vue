<template>
  <div class="col col-md-8">
    <div class="article-container">
      <div class="image-header">
        <img class="fixed-size" :src="imageUrl" alt />
      </div>
      <div class="article-header">
        <h2>{{ article.Title }}</h2>
        <div class="post-meta mb-30">
          <div class="element">
            <img src="https://colorlib.com/preview/theme/videomag/img/core-img/calendar2.png" alt />
            {{ article.createdAt.slice(0, 10) }}
          </div>
        </div>
      </div>
      <div class="article-body" v-if="article.Text" v-html="render(article.Text)"></div>
      <div class="row" v-for="ex in article.extra" :key="ex.id">
        <extra-paragraph v-if="ex.__component == 'article.extra-article'" :extra="ex"></extra-paragraph>
        <extra-image v-if="ex.__component == 'images.images'" :extra="ex"></extra-image>
      </div>
    </div>
  </div>
</template>

<script>
import extraParagraph from "./extraParagraph";
import extraImage from "./extraImage";
export default {
  name: "articleLeftSide",
  components: {
    extraParagraph,
    extraImage,
  },
  props: ["article"],
  computed: {
    imageUrl() {
      return this.$imageFilter(this.article.Picture).image;
    },
  },
  methods: {
    render(item) {
      return this.$md.render(item);
    },
  },
};
</script>

<style>
</style>