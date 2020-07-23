<template>
  <div class="holder" :style="colors">
    <section class="section1">
      <div>
        <div class="splash" :style="splash"></div>
        <div class="row">
          <div class="col">
            <div class="tittle">
              <p class="tittle-top">Ing et master</p>
              <h1 class="tittle-h1">{{ header_tittle }}</h1>
              <p class="tittle-text">{{ specialite.discription }}</p>
              <a class="tittle-btn" href>
                Telecharger Pdf
                <i class="fas fa-cloud-download-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-2"></div>
        <div class="col col-lg-8 col-md-8">
          <div class="tab-formation">
            <div class="quick-facts">
              <div class="row">
                <div class="col-md">
                  <dl class="quick-facts__list">
                    <dt class="quick-facts__heading">
                      <i class="fas fa-history"></i>
                      Periode de foramtion
                    </dt>
                    <dd>Full-time: 3 ans</dd>
                  </dl>
                </div>
                <div class="col-md odd">
                  <dl class="quick-facts__list">
                    <dt class="quick-facts__heading">
                      <i class="fas fa-history"></i>
                      Type de foramtion
                    </dt>
                    <dd>Foramtion ingenieur</dd>
                    <dd>Formaion complementaire master</dd>
                  </dl>
                </div>
                <div class="col-md">
                  <dl class="quick-facts__list">
                    <dt class="quick-facts__heading">
                      <i class="fas fa-history"></i>
                      Methode dacess
                    </dt>
                    <dd>Concour daccess aux ecole superieur</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </section>
    <section class="section2">
      <div class="container">
        <div class="row">
          <img :src="body_image" alt class="background-image" />
          <div class="col col-md-8 col-sm-12">
            <div
              class="paragraph"
              v-for="item in specialite.paragraphs"
              :key="item.title"
            >
              <h1>{{ item.tittle }}</h1>

              <div class="myp" v-html="render(item.paragraph)"></div>
            </div>
            <div class="paragraph con">
              <h1>Notre mission</h1>
              <div v-html="$md.render(specialite.Notre_mission)"></div>
            </div>
          </div>

          <div class="col-md-4 my-flex">
            <div class="mission">
              <h1>Notre mission</h1>
              <div v-html="$md.render(specialite.Notre_mission)"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="paragraph">
        <h1>Programme et Module</h1>
        <programme
          :special_1_1="special_1_1"
          :special_1_2="special_1_2"
          :special_2_1="special_2_1"
          :special_2_2="special_2_2"
          :special_3_1="special_3_1"
          :special_3_2="special_3_2"
        ></programme>
      </div>
    </div>
  </div>
</template>

<script>
import programme from "./programme.vue";
export default {
  head() {
    return { link: [{ rel: "stylesheet", href: "/css/specialite/style.css" }] };
  },
  components: {
    programme
  },
  props: [
    "tittle_color",
    "border_color",
    "paragraph_tittle_color",
    "table_second_color",
    "paragraph_tittle_line_color",
    "notre_mission_color",
    "header_tittle",
    "side_image",
    "splash_image",
    "body_image",
    "specialite",
    "special_1_1",
    "special_2_1",
    "special_3_1",
    "special_1_2",
    "special_2_2",
    "special_3_2"
  ],
  methods: {
    render(item) {
      var re = new RegExp("em>", "g");
      return this.$md
        .render(item)
        .replace(re, "span>")
        .replace("span", 'span class="colored"');
    }
  },
  computed: {
    colors() {
      return {
        "--tittle-color": this.tittle_color,
        "--border-color": this.border_color,
        "--paragraph-tittle-color": this.paragraph_tittle_color,
        "--table-second-color": this.table_second_color,
        "--paragraph-tittle-line-color": this.paragraph_tittle_line_color,
        "--notre-mission-color": this.notre_mission_color
      };
    },
    splash() {
      return { "background-image": `url("${this.splash_image}")` };
    }
  }
};
</script>

<style scoped>
.colored {
  color: red;
}
em {
  color: red !important;
}
.holder {
  --tittle-color: #ffffff;
  --border-color: #ffffff;
  --paragraph-tittle-color: #ffffff;
  --table-second-color: #ffffff;
  --paragraph-tittle-line-color: #ffffff;
  --notre-mission-color: black;
}

body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  line-height: 1.5;
  font-size: 16px;
}
a {
  text-decoration: none;
}
i {
  overflow: hidden;
  vertical-align: middle;
}
dd {
  float: none;
  width: auto;
}

.section1 {
  /*height: 120vh;*/
  position: relative;
}

.splash {
  background-size: cover;
  height: 40vh;
  z-index: -1;
}

.tittle {
  -webkit-box-shadow: 1px 2px 9px 2px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 1px 2px 9px 2px rgba(0, 0, 0, 0.36);
  box-shadow: 1px 2px 9px 2px rgba(0, 0, 0, 0.36);
  border-top: solid 5px var(--border-color);
  background-color: white;
  margin-bottom: 2rem;
  width: 80%;
  margin: auto;
  margin-top: -10%;
  padding: 0.5 1rem 0 1rem;
}

.tittle .tittle-top {
  color: var(--border-color);
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 400;
  line-height: 1em;
}
.tittle .tittle-h1 {
  width: auto;
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
  color: var(--tittle-color);
  font-weight: 900;
}
.tittle .tittle-text {
  width: auto;
  margin: 0.5rem 0;
  text-align: center;
  line-height: 1.4;
  padding: 0 1.4rem;
}
.tittle .tittle-btn {
  background-color: #ff4a4a;
  color: white;
  border-radius: 1.7rem;
  max-width: 388px;
  padding: 0.75rem 4.16rem 0.9em 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  transition: 0.3s;
  line-height: 1.2;
  outline: none;
  display: inline-block;
  vertical-align: middle;
  font-family: NationalBold, sans-serif;
  padding-right: 1.5rem;
  border: none;
  position: relative;
  vertical-align: middle;
  left: 50%;
  transform: translateX(-50%);
  margin: 0.5rem 0 0.75rem 0;
}
.tittle .tittle-btn img {
  display: inline-block;
  height: 1.5rem;
  margin: 0;
}

.tab-formation {
  color: var(--border-color);
  width: 100%;
  margin-top: 5%;
}
.quick-facts {
  background-color: var(--tittle-color);
  width: 100%;
  color: #ffffff;
  margin-bottom: 0.5rem;
}
.quick-facts__list {
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  padding: 1.1rem 1.33rem 1.1rem 2.33rem;
  margin: 0;
}
.odd {
  background-color: var(--table-second-color);
}

.quick-facts__heading i {
  size: 1.2vw;
  font-size: 2rem;
  top: 2px;
  position: relative;
  margin-right: 0.83rem;
  vertical-align: text-top;
  top: 0;
  left: 0;
}
.quick-facts__heading {
  float: none;
  width: auto;
  padding-right: 0;

  min-height: 3.2rem;
  border-bottom: solid 1px rgba(255, 255, 255, 0.5);
  padding-bottom: 0.9rem;
  margin-bottom: 0.5rem;
  display: block;
  font-weight: normal;
  line-height: 1.2;
  padding-bottom: 0.9rem;
  margin-bottom: 0.5rem;
  padding-left: 0;
  position: relative;
  top: 0.22rem;
  font-weight: 700 !important;
}

.quick-facts__list dd {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}
.image-container {
  width: 100%;
  padding-left: 20%;
  margin-top: 100%;
}
.section1 .tower {
  width: 150%;
}

.section2 {
  position: relative;
}
.section2 img {
  width: 60%;
  min-width: 500px !important;
  position: absolute;
  top: 0;
  right: 0;
}
.paragraph {
  margin: 5vh 0;
}
.paragraph h1 {
  color: var(--paragraph-tittle-color);
  margin-bottom: 1.4rem;
  position: relative;
  font-size: 2rem;
  font-weight: 600;
}
.paragraph h1::after {
  content: "";
  height: 2px;
  bottom: -35%;
  position: absolute;
  margin: 0;
  left: 0;
  right: 0;
  width: 30%;
  background: var(--paragraph-tittle-line-color);
}

.paragraph pre {
  font-size: 1rem;
  overflow: visible;
}

.mission {
  background-color: var(--notre-mission-color);
  width: 25vw;
  padding: 1rem;
  color: white;
  border-radius: 5%;
  margin: 1rem;
}
.my-flex {
  max-width: 33.333333%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  justify-content: end;
}
.con {
  display: none;
}
@media (max-width: 800px) {
  .background-image {
    display: none;
  }
  .my-flex {
    display: none;
  }
  .con {
    display: block;
  }
}
@media (max-width: 600px) {
}
</style>
