<template>
  <section id="mysection" class="section section-xl bg-default">
    <div class="container">
      <div class="row row-50 text-md-left align-items-md-center justify-content-md-between">
        <div class="col-md-5 col-lg-4 order-md-2">
          <a href="index.html">
            <img
              class="img-responsive d-inline-block"
              src="/GEII ENST 1.1 .png"
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
            <p>
              Le département Génie Électrique et Informatique Industrielle
              (GEII), forme en 3 ans des cadres techniques de haut niveau
              destinés à occuper dans le monde industriel des postes
              d’ingénieurs dans les secteurs de Telecommunication , de
              l’électronique, et de l’automatique.
            </p>
          </div>
          <div class="offset-top-30">
            <a class="btn btn-icon btn-icon-right button-default" href="history.html">
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
  name: "myabout"
};
</script>
<style scoped>
/*** uncss> filename: test.css ***/

@charset "UTF-8";
a:focus {
  outline: 0 !important;
}
:focus {
  outline: 0;
}
p {
  margin: 0;
}
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
body {
  font-weight: 400;
  overflow-x: hidden;
}
img {
  display: inline-block;
  max-width: 100%;
  height: auto;
}
a {
  transition: all 0.2s ease-in-out;
}
a,
a:active,
a:focus,
a:hover {
  text-decoration: none;
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
body {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.57143;
  font-weight: 400;
  color: #888;
  background-color: #fff;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: subpixel-antialiased;
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
html h2 + * {
  margin-top: 29px;
}
p {
  margin-top: 10px;
  margin-bottom: 10px;
}
.bg-madison {
  background: #0d2d62;
  fill: #0d2d62;
}
.bg-default {
  background-color: #fff;
}
p {
  margin: 0;
}
html .btn {
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
html .btn:active,
html .btn:active:focus,
html .btn:focus {
  outline: 0;
  box-shadow: none !important;
}
.button-default,
.button-default:focus {
  color: #0d2d62;
  background-color: transparent;
  border-color: #0d2d62;
}
.button-default:active,
.button-default:hover {
  color: #fff;
  background-color: #0d2d62;
  border-color: #0d2d62;
}
.btn.btn-icon {
  padding-left: 28px;
  padding-right: 28px;
}
.btn.btn-icon .icon {
  font-size: 14px;
  line-height: 14px;
  vertical-align: middle;
  transition: 0s;
}
.btn.btn-icon-right .icon {
  float: right;
  padding-left: 10px;
}
.icon {
  position: relative;
  display: inline-block;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  font-style: normal;
}
.icon:before {
  display: inline-block;
  position: relative;
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
