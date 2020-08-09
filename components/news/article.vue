<template>
  <!-- post -->
  <div class="post post-row">
    <nuxt-link :to="link" class="post-img fixocl" href>
      <img :src="article.Picture.url" />
    </nuxt-link>
    <div class="post-body">
      <h3 class="post-title">
        <nuxt-link :to="link">{{ article.Title }}</nuxt-link>
      </h3>
      <ul class="post-meta">
        <li>{{ date }}</li>
      </ul>
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "articleline",
  props: ["article"],
  data() {
    return {};
  },
  computed: {
    paragraph() {
      if (this.article.Text.length > 250) {
        this.article.Text = this.article.Text.substring(0, 300) + "...";
        return this.article.Text.substring(0, 300) + "...";
      }
      return this.article.Text;
    },
    date() {
      const date = this.article.createdAt.substring(0, 10);
      const mounths = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
      ][+date.substring(5, 7) - 1];
      return date.substring(8) + " " + mounths + " " + date.substring(0, 4);
    },
    link() {
      let str = "/news/v2/" + this.article.id;
      return str;
    }
  },
  methods: {}
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
  color: #11151c;
  font-weight: 700;
  margin: 0px 0px 15px;
}

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

.post-img:hover > img {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}

.post .post-title {
  font-size: 18px;
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
  color: #fff;
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
</style>
