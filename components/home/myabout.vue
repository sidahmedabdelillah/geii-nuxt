<template>
  <section id="mysection" class="section section-xl bg-default">
    <div class="container">
      <div
        class="row row-50 text-md-left align-items-md-center justify-content-md-between"
      >
        <div class="col-md-5 col-lg-4 order-md-2">
          <a href="index.html">
            <img
              class="img-responsive d-inline-block"
              :src="imageUrl"
              alt
              width="326"
              height="329"
            />
          </a>
        </div>
        <div id="mydiv" class="col-md-7 col-lg-7 order-md-1">
          <h2 class="font-weight-bold">
            <!-- A Few Words -->
            <br class="d-none d-xl-inline-block" />Département GEII
          </h2>
          <hr class="divider bg-madison divider-md-0" />
          <div class="offset-top-35 offset-lg-top-60">
            <p>{{ home_about.Paragraph }}</p>
          </div>
          <div class="offset-top-30">
            <a class="btn btn-icon btn-icon-right button-default" href="/about">
              <span>Learn More</span>
              <font-awesome-icon :icon="['fa', 'arrow-right']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "myabout",
  props: ["home_about"],
  computed: {
    imageUrl() {
      return this.$imageFilter(this.home_about.Picture).image;
    }
  }
};
</script>
<style scoped>
h2 + .divider {
  margin-top: 29px;
}
.row-50 {
  margin-bottom: -50px;
}
.row-50 > * {
  margin-bottom: 50px;
}
@media (min-width: 992px) {
  .text-md-left {
    text-align: left;
  }
}
.section-xl {
  padding: 70px 0;
}
@media (max-width: 991.98px) {
  section.section-xl:first-of-type {
    padding-top: 40px;
  }
}
@media (min-width: 992px) {
  .section-xl {
    padding: 114px 0;
  }
}

img {
  display: inline-block;
  max-width: 100%;
  height: auto;
}

a,
a:active,
a:focus,
a:hover {
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}
.divider {
  width: 50px;
  height: 3px;
  padding: 0;
  margin: 0 auto;
  background: #b1b1b1;
  border: none;
}
* + .divider {
  margin-top: 21px;
}
.divider + * {
  margin-top: 21px;
}
@media (min-width: 768px) {
  .divider-md-0 {
    margin-left: 0;
  }
}

h2 {
  font-size: 32px;
  line-height: 1.5;
}
@media (min-width: 768px) {
  h2 {
    line-height: 1.27273;
    font-size: 44px;
  }
}

.bg-madison {
  background: #0d2d62;
  fill: #0d2d62;
}
.bg-default {
  background-color: #fff;
}
p {
  margin-top: 10px;
  margin-bottom: 10px;
  margin: 0;
}
.btn {
  position: relative;
  padding: 15px 27px;
  font-size: 16px;
  line-height: 16px;
  border-radius: 5px;
  white-space: nowrap;
  border-width: 2px;
  transition: 0.3s;
  backface-visibility: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.18);
}
.btn:active,
.btn:active:focus,
.btn:focus {
  outline: 0;
  box-shadow: none !important;
}
.button-default {
  color: #193c4e;
  background-color: transparent;
  border-color: #193c4e;
}

.button-default:active,
.button-default:hover {
  color: #fff !important;
  background-color: #193c4e;
  border-color: #193c4e;
}

.btn {
  margin-top: 5vh !important;
}
#mysection {
  padding: 0px 0 20px 0 !important;
}
#mydiv {
  padding-top: 2vh !important;
}
@media (max-width: 576px) {
  img {
    display: none !important;
  }
}
</style>
