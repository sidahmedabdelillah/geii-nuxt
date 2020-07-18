<template>
  <div class="mydiv">
    <!-- HEADER -->
    <header id="header">
      <!-- PAGE HEADER -->
      <div id="post-header" class="page-header">
        <div
          class="page-header-bg"
          :style="{ backgroundImage: `url(${article.Picture.url})` }"
          data-stellar-background-ratio="0.5"
        ></div>
        <div class="container">
          <div class="row">
            <div class="col-md-10">
              <div class="post-category"></div>
              <h1>{{article.Title}}</h1>
              <ul class="post-meta">
                <li>{{getdate()}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- /PAGE HEADER -->
    </header>
    <!-- /HEADER -->

    <!-- section -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">
          <!-- post content -->
          <div class="section-row">
            <h3>{{article.Title}}</h3>
            <div v-html="$md.render(article.Paragraph)"></div>
          </div>
          <!-- /post content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    // called every time before loading the component
    return {
      id: params.id,
      article: await $axios.$get(`/Articles/${params.id}`)
    };
  },
  mounted() {
    //console.log(this.article.Paragraph.split("\n").shift());
  },
  methods: {
    getdate() {
      var date = this.article.createdAt.substring(0, 9);
      const mounths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ][date.substring(6, 7)];
      return date.substring(8, 9) + " " + mounths + " " + date.substring(0, 4);
    },
    getlink(id) {
      return "/news/" + id;
    }
  }
};
</script>

<style scoped>
.mydiv {
  margin-top: 8.9vh !important;
  margin-bottom: 10vh;
}
h1,
h2,
h3,
h4,
h5,
h6 {
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
  color: #11151c;
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

::-moz-selection {
  background-color: #ee4266;
  color: #fff;
}

::selection {
  background-color: #ee4266;
  color: #fff;
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

.section-row {
  margin-bottom: 30px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
}

.section-title {
  position: relative;
  margin-bottom: 20px;
}

.section-title .title {
  position: relative;
  display: inline-block;
  background-color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-right: 10px;
  z-index: 20;
}

.section-title:after {
  content: "";
  display: inline-block;
  height: 2px;
  background-color: #e8eaed;
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  z-index: 10;
}

/*----------------------------*\
	input
\*----------------------------*/

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

.secondary-button {
  background-color: #353535;
  color: #fff;
  -webkit-box-shadow: 0px 0px 0px 2px #353535 inset;
  box-shadow: 0px 0px 0px 2px #353535 inset;
}

.primary-button:hover,
.primary-button:focus {
  background-color: transparent;
  color: #ee4266;
}

.secondary-button:hover,
.secondary-button:focus {
  background-color: transparent;
  color: #353535;
}

/*----------------------------*\
	social colors
\*----------------------------*/

.social-facebook {
  background: #225b99 !important;
}

.social-twitter {
  background: #00adf2 !important;
}

.social-google-plus {
  background: #dc4d2d !important;
}

.social-pinterest {
  background: #cc2127 !important;
}

.social-instagram {
  background: #d341b2 !important;
}

/*=========================================================
	PAGE HEADER
===========================================================*/

.page-header {
  position: relative;
  margin: 0;
  padding-top: 120px;
  padding-bottom: 80px;
  background-color: #1b1c1e;
}

#post-header {
  padding-top: 240px;
  padding-bottom: 80px;
  max-width: 175vh;
  position: relative;
  top: 90%;
  left: 50%;
  margin-right: -50%;

  transform: translate(-50%, 0%);
}

.page-header .page-header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.page-header .page-header-bg:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(27, 28, 30, 0)),
    color-stop(90%, rgba(27, 28, 30, 0.8))
  );
  background: linear-gradient(
    180deg,
    rgba(27, 28, 30, 0) 0%,
    rgba(27, 28, 30, 0.8) 90%
  );
}

.page-header h1 {
  font-size: 41.053px;
  color: #fff;
}

.page-header p.lead {
  font-size: 20.25px;
  color: #fff;
}

/*=========================================================
	POST
===========================================================*/

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

.post.post-thumb .post-img:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(27, 28, 30, 0)),
    color-stop(90%, rgba(27, 28, 30, 0.8))
  );
  background: linear-gradient(
    180deg,
    rgba(27, 28, 30, 0) 0%,
    rgba(27, 28, 30, 0.8) 90%
  );
}

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
	post small
\*----------------------------*/

.post.post-sm .post-body {
  margin: 15px 0px 0px;
  background: transparent;
  padding: 0;
}

/*----------------------------*\
	post widget
\*----------------------------*/

.post.post-widget:after {
  content: "";
  display: table;
  clear: both;
}

.post.post-widget .post-img {
  float: left;
  width: 130px;
}

.post.post-widget .post-body {
  position: relative;
  background: transparent;
  margin: 0px 0px 0px 150px;
  padding: 0;
}

.post.post-widget .post-title {
  font-size: 16px;
  margin-bottom: 0px;
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
</style>