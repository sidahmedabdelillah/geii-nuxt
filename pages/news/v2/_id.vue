<template>
  <div class="container">
    <div class="row">
      <left-side :article="article"></left-side>
      <right-side :articles="articles"></right-side>
    </div>
  </div>
</template>

<script>
import rightSide from "../../../components/news/v2/rightSide";
import leftSide from "../../../components/news/v2/leftSide";

export default {
  head() {
    return { link: [{ rel: "stylesheet", href: "/css/news/v2/id.css" }] };
  },
  components: {
    rightSide,
    leftSide
  },
  async asyncData({ params, $axios }) {
    return {
      id: params.id,
      article: await $axios.$get(`/Articles/${params.id}`),
      articles: await $axios.$get(`/Articles?_sort=created_at:ASC&_limit=6`)
    };
  },
  methods: {
    render(item) {
      var image = new RegExp("<img", "g");
      let val = this.$md
        .render(item)
        .replace(image, '<img class="mb-30 fixed-size"  ');
      return val;
    },
    p() {
      return this.$md
        .render(this.article.Paragraph)
        .split("p>")[1]
        .split("</")[0];
    }
  }
};
</script>
<style scoped>
p {
  font-family: "Montserrat", sans-serif;
  color: #6a6a6a;
  font-size: 14px;
  line-height: 2;
  font-weight: 500;
  padding-right: 1rem;
}
</style>
