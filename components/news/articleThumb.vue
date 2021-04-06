<template>
  <div class="post post-thumb">
    <nuxt-link class="post-img" :to="getlink">
      <img :src="getImageUrl" alt />
    </nuxt-link>
    <div class="post-body">
      <h3 class="post-title title-lg">
        <a>{{ article.Title }}</a>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "articleThumb",
  props: ["article"],
  computed: {
    getImageUrl() {
      return this.$imageFilter(this.article.Picture).thumbnail;
    },
    getlink() {
      return "/news/v2/" + this.article.id;
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: 20.25px;
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

.post .post-title {
  font-size: 18px;
  color: black;
}

.post .post-title.title-lg {
  font-size: 25.629px;
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
  color: black;
}

.post.post-thumb .post-title a:hover,
.post.post-thumb .post-title a:focus {
  color: #ee4266;
}
</style>