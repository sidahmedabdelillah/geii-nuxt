<template>
  <section>
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div id="hot-post" class="row hot-post">
          <div class="col-md-8 hot-post-left">
            <!-- post -->
            <div class="post post-thumb">
              <nuxt-link class="post-img" :to="getlink(articles[0].id)">
                <img :src="articles[0].Picture.url" alt />
              </nuxt-link>
              <div class="post-body">
                <h3 class="post-title title-lg">
                  <a>{{ articles[0].Title }}</a>
                </h3>
              </div>
            </div>
            <!-- /post -->
          </div>
          <div class="col-md-4 hot-post-right">
            <!-- post -->
            <div class="post post-thumb">
              <nuxt-link class="post-img" :to="getlink(articles[1].id)">
                <img :src="articles[1].Picture.url" alt />
              </nuxt-link>
              <div class="post-body">
                <h3 class="post-title">
                  <a href="blog-post.html">{{ articles[1].Title }}</a>
                </h3>
              </div>
            </div>
            <!-- /post -->

            <!-- post -->
            <div class="post post-thumb">
              <nuxt-link class="post-img" :to="getlink(articles[2].id)">
                <img :src="articles[2].Picture.url" alt />
              </nuxt-link>
              <div class="post-body">
                <h3 class="post-title">
                  <a href>{{ articles[1].Title }}</a>
                </h3>
              </div>
            </div>
            <!-- /post -->
          </div>
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /SECTION -->
    <!-- SECTION -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">
          <div class="col-md-12">
            <!-- post -->
            <div v-for="r in articles" :key="r.id">
              <articleline :article="r" />
            </div>
            <div class="section-row loadmore text-center">
              <a @click="click" class="primary-button">Load More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <myfooter />
  </section>
</template>

<script>
import articleline from "@/components/news/article";
import myfooter from "@/components/myfooter";
export default {
  async asyncData({ $axios }) {
    return {
      articles: await $axios.$get(`/Articles?_sort=createdAt:DESC&_limit=6`)
    };
  },
  data() {
    return {
      number: 6,
      articles: []
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
    getlink(id) {
      return "/news/v2/" + id;
    }
  },

  components: {
    articleline,
    myfooter
  }
};
</script>

<style scoped>
h1 {
  font-size: 32.437px;
}

h2 {
  font-size: 25.629px;
}

h3 {
  font-size: 20.25px;
}

h4 {
  font-size: 16px;
}

h5 {
}

p {
  margin: 0px 0px 20px;
}

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

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul.list-style,
ol.list-style {
  padding-left: 15px;
  margin-bottom: 10px;
}

ul.list-style {
  list-style-type: disc;
}

ol.list-style {
  list-style-type: decimal;
}

blockquote.blockquote {
  padding: 30px;
  margin: 0px 0px 20px;
  border: 2px solid #e8eaed;
}

blockquote.blockquote:before {
  content: "\f10d";
  font-family: fontAwesome;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  border-radius: 50%;
  color: #ee4266;
  font-size: 30px;
  background: #fff;
  border: 2px solid #e8eaed;
  float: left;
  margin-right: 10px;
}

blockquote.blockquote .blockquote-footer {
  color: #97989b;
}

figure {
  margin-bottom: 20px;
}

figure > img {
  width: 100%;
}

figure.pull-right {
  margin-left: 15px;
}

figure.pull-left {
  margin-right: 15px;
}

figure > figcaption {
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
  font-style: italic;
  color: #97989b;
}

/*----------------------------*\
	section
\*----------------------------*/

.section {
  padding-top: 30px;
}

/*----------------------------*\
	button
\*----------------------------*/

.primary-button,
.secondary-button {
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

/*=========================================================
	POST
===========================================================*/

.post {
  position: relative;
  margin-bottom: 30px;
}

.post .post-body {
  position: relative;
  margin: -50px 0px 0px 3%;
  padding: 5%;
  background: #fff;
  z-index: 10;
}

.post .post-img {
  display: block;
  overflow: hidden;
}

.post-img > img {
  width: 100%;
  -webkit-transition: 1.6s -webkit-transform;
  transition: 1.6s -webkit-transform;
  transition: 1.6s transform;
  transition: 1.6s transform, 1.6s -webkit-transform;
}
.fixocl > img {
  max-height: 30vh !important;
}

.post .post-title {
  font-size: 18px;
  color: black;
}

.post .post-title.title-sm {
  font-size: 16px;
}

.post .post-title.title-lg {
  font-size: 25.629px;
}

.post .post-category {
  margin-bottom: 10px;
}

.post-category a {
  color: #ee4266;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
}

.post-category a:after {
  content: ",";
  display: inline-block;
}

.post-category a:last-child:after {
  display: none;
}

.post .post-meta {
  margin-bottom: 10px;
}

.post-meta li {
  display: inline-block;
  color: #97989b;
  font-size: 12px;
  text-transform: uppercase;
}

.post-meta li a {
  color: #97989b;
  font-weight: 700;
}

.post-meta li a:hover,
.post-meta li a:focus {
  color: #ee4266;
}

.post-meta li:after {
  content: "•";
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}

.post-meta li:last-child:after {
  display: none;
}

/*----------------------------*\
	hot post
\*----------------------------*/

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

.hot-post .post {
  margin-bottom: 7px;
}

.hot-post {
  margin-bottom: 25px;
}

/*----------------------------*\
	post thumb
\*----------------------------*/

.post.post-thumb .post-body {
  position: absolute;
  margin: 0px;
  padding: 0px 5%;
  z-index: 20;
  bottom: 5%;
  background-color: transparent;
}

.post.post-thumb .post-title a {
  color: black;
}

.post.post-thumb .post-title a:hover,
.post.post-thumb .post-title a:focus {
  color: #ee4266;
}

.post.post-thumb .post-meta li {
  color: #fff;
}

.post.post-thumb .post-meta li a {
  color: #fff;
}

.post.post-thumb .post-meta li a:hover,
.post.post-thumb .post-meta li a:focus {
  color: #ee4266;
}

/*----------------------------*\
	post row
\*----------------------------*/

.post.post-row:after {
  content: "";
  display: table;
  clear: both;
}

.post.post-row .post-img {
  width: 40%;
  float: left;
}

.post.post-row .post-body {
  margin: 0px 0px 0px calc(40% + 30px);
  padding: 0;
}

/*=========================================================
	POST PAGE
===========================================================*/

/*----------------------------*\
	comments
\*----------------------------*/
.section {
  margin-top: 10vh !important ;
  margin-bottom: 10vh;
}
</style>
