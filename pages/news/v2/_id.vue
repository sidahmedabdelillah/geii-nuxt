<template>
  <div class="container">
    <div class="row">
      <div class="col col-md-8">
        <div class="article-container">
          <div class="image-header">
            <img class="fixed-size" :src="article.Picture.url" alt />
          </div>
          <div class="article-header">
            <h2>{{ article.Title }}</h2>
            <div class="post-meta mb-30">
              <div class="element">
                <img
                  src="https://colorlib.com/preview/theme/videomag/img/core-img/calendar2.png"
                  alt
                />
                {{ article.createdAt.slice(0, 10) }}
              </div>
            </div>
          </div>
          <div
            class="article-body"
            v-if="article.Text"
            v-html="render(article.Text)"
          ></div>
          <div class="row" v-if="article.Paragraph">
            <div class="col">
              <p>{{ p() }}</p>
            </div>
            <div class="col">
              <img class="fixed-size" :src="o()" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row align-items-end">
          <div class="side">
            <h2>Autre Actualité</h2>
            <div class="cards">
              <div v-for="item in articles" :key="item.id" class="my-card">
                <div class="row">
                  <div class="col">
                    <img class="fixed-size" :src="item.Picture.url" />
                  </div>
                  <div class="col info-space">
                    <div class="mini-info">
                      <a href>{{ item.Title }}</a>
                      <div class="post-meta mb-30">
                        <div class="element">
                          <img
                            src="https://colorlib.com/preview/theme/videomag/img/core-img/calendar2.png"
                            alt
                          />
                          {{ item.createdAt.slice(0, 10) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { link: [{ rel: "stylesheet", href: "/css/news/v2/id.css" }] };
  },
  async asyncData({ params, $axios }) {
    // called every time before loading the component
    return {
      id: params.id,
      article: await $axios.$get(`/Articles/${params.id}`),
      articles: await $axios.$get(`/Articles?_sort=createdAt:DESC&_limit=6`)
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
    },
    o() {
      return this.$md
        .render(this.article.Paragraph)
        .split('src="')[1]
        .split('"')[0];
    }
  }
};
</script>

<style scoped></style>
