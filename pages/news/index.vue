<template>
  <section>
    <div class="section">
      <div class="container">
        <div id="hot-post" class="row hot-post">
          <div class="col-md-8 hot-post-left">
            <article-thumb :article="articles[0]"></article-thumb>
          </div>
          <div class="col-md-4 hot-post-right">
            <article-thumb :article="articles[1]"></article-thumb>
            <article-thumb :article="articles[2]"></article-thumb>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div v-for="article in articles" :key="article.id">
              <article-line :article="article" />
            </div>
            <div class="section-row loadmore text-center">
              <a @click="click" class="primary-button">Load More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import articleLine from "@/components/news/articleLine";
import articleThumb from "@/components/news/articleThumb";
export default {
  components: {
    articleLine,
    articleThumb,
  },
  async asyncData({ $axios }) {
    return {
      articles: await $axios.$get(`/Articles?_sort=createdAt:DESC&_limit=6`),
    };
  },
  data() {
    return {
      number: 6,
      articles: [],
    };
  },

  methods: {
    async click() {
      this.number = this.number + 6;
      this.articles = await this.$axios.$get(
        "/Articles?_sort=createdAt:DESC&_limit=" + this.number
      );
      console.log(this.articles);
      console.log(this.number);
    },
  },
};
</script>

<style scoped>
a {
  color: #11151c;
  -webkit-transition: 0.2s color;
  transition: 0.2s color;
}

a:hover,
a:focus {
  color: #ee4266;
  text-decoration: none;
  outline: none;
}

.section {
  padding-top: 30px;
}

.primary-button {
  display: inline-block;
  padding: 10px 40px;
  border-radius: 2px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.primary-button {
  background-color: #ee4266;
  color: #fff;
  -webkit-box-shadow: 0px 0px 0px 2px #ee4266 inset;
  box-shadow: 0px 0px 0px 2px #ee4266 inset;
}

.primary-button:hover,
.primary-button:focus {
  background-color: transparent;
  color: #ee4266;
}

.hot-post {
  padding: 0 15px;
}

.hot-post .hot-post-left {
  padding-right: 0px;
  padding-left: 0px;
}

.hot-post .hot-post-right {
  padding-right: 0;
  padding-left: 5px;
}

.hot-post {
  margin-bottom: 25px;
}
.section {
  margin-top: 10vh !important ;
  margin-bottom: 10vh;
}
</style>
