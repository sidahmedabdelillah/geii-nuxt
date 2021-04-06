<template>
  <!-- post -->
  <div class="post post-row">
    <nuxt-link :to="link" class="post-img fixocl" href>
      <img :src="imageUrl" />
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
import JSSoup from "jssoup";

export default {
  name: "articleline",
  props: ["article"],
  data() {
    return {};
  },
  computed: {
    imageUrl() {
      return this.$imageFilter(this.article.Picture).thumbnail;
    },
    paragraph() {
      const md = this.$md.render(this.article.Paragraph);
      const soup = new JSSoup(md);
      return this.limit(soup.find("p").text);
    },
    date() {
      const date = this.article.created_at.substring(0, 10);
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
  methods: {
    limit: p => {
      if (p.length > 250) {
        return p.substring(0, 250) + "...";
      }
      return p;
    }
  }
};
</script>

<style scoped>
a {
  color: #193c4e;
  -webkit-transition: 0.2s color;
  transition: 0.2s color;
}

a:hover,
a:focus {
  color: #ee4266;
  text-decoration: none;
  outline: none;
}
h3 {
  font-size: 20.25px;
}

p {
  margin: 0px 0px 20px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
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
.fixocl > img {
  max-height: 30vh !important;
}

.post .post-title {
  font-size: 18px;
  color: black;
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

.post-meta li:after {
  content: "•";
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}

.post-meta li:last-child:after {
  display: none;
}

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
