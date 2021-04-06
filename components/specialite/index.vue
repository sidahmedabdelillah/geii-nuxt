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
              <a class="tittle-btn" :href="$fileFilter(specialite.file).url">
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
              v-for="item in specialite.extra"
              :key="item.title"
              v-html="render(item.Text)"
            ></div>

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
