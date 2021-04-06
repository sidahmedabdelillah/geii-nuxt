<template>
  <div class="">
    <header class="masthead" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>Departement GEII</h1>
              <!-- <span class="subheading">This is what I do.</span> -->
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-10 mx-auto">
          <div class="" v-html="paragraph"></div>
          <h1>Comité Scientifique du Département</h1>

          <h3>Membre du CSD :</h3>
          <ul class="list-prof">
            <li v-for="prof in comite" :key="prof.id">
              <a :href="prof.url">
                <h6>{{ prof.nomAffichage }} :</h6>
              </a>
              <p>{{ prof.role }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutPage",
  async asyncData({ $axios }) {
    return {
      about: await $axios.$get("/about-page")
    };
  },
  computed: {
    imageUrl() {
      return this.$imageFilter(this.about.cover).image;
    },
    paragraph() {
      const para = this.$md.render(this.about.presentaion);
      return para;
    },
    comite() {
      return this.about.comite.map(prof => ({
        nomAffichage: prof.nomAffichage,
        role: prof.role,
        url: `/members/prof/${prof.user.id}`
      }));
    }
  }
};
</script>

<style scoped>
p {
  line-height: 1.5;
  margin: 30px 0;
}
li {
  padding: 5px 0;
}
.list-prof p {
  display: inline;
}
.list-prof h6 {
  display: inline;
}
.list-prof ul {
  list-style: square;
}
header.masthead {
  margin-bottom: 50px;
  background: no-repeat center center;
  background-color: #868e96;
  background-attachment: scroll;
  position: relative;
  background-size: cover;
}
header.masthead .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #212529;
  opacity: 0.5;
}
header.masthead .page-heading {
  padding: 200px 0 150px;
  color: #fff;
}

header.masthead .page-heading {
  text-align: center;
}
header.masthead .page-heading h1 {
  font-size: 50px;
  margin-top: 0;
}
.container {
  margin-bottom: 100px;
}
</style>
