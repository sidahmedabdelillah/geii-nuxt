<template>
  <div class="site-section">
    <div class="container">
      <h1 class="font-weight-bold">Les actualité</h1>
      <div class="row align-items-stretch retro-layout-2">
        <div class="col-md-4">
          <newspreview :article="articles[0]" />
          <newspreview :article="articles[1]" />
        </div>
        <div class="col-md-4">
          <newspreview :article="articles[2]" />
          <newspreview :article="articles[3]" />
        </div>
        <div class="col-md-4">
          <newspreview :article="articles[4]" />
          <newspreview :article="articles[5]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newspreview from "@/components/PieceComponents/newspreview";
export default {
  name: "newssection",
  components: {
    newspreview
  },
  props: ["articles"]
};
</script>

<style scoped>
/*** uncss> filename: css/style.css ***/
/* Base */
body {
  line-height: 1.7;
  color: gray;
  font-weight: 300;
  font-size: 1rem;
  background: #fff;
  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}

::-moz-selection {
  background: #000;
  color: #fff;
}

::selection {
  background: #000;
  color: #fff;
}

a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
  color: #2f89fc;
}
a:hover {
  color: #046df4;
  text-decoration: none;
}

h2 {
  font-family: "Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  color: #000;
}

.site-wrap:before {
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
  background: rgba(0, 0, 0, 0.6);
  content: "";
  position: absolute;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
}

.site-section {
  padding: 2.5em 0;
}
@media (min-width: 768px) {
  .site-section {
    padding: 5em 0;
  }
}

/* Navbar */

/* Blocks */
.container {
  max-width: 1200px;
}

.retro-layout-2 .v-height {
  height: 200px;
}

.retro-layout-2 .h-entry {
  display: block;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
}
.retro-layout-2 .h-entry.mb-30 {
  margin-bottom: 30px;
}
.retro-layout-2 .h-entry .date {
  font-size: 15px;
}
.retro-layout-2 .h-entry.gradient {
  position: relative;
}
.retro-layout-2 .h-entry.gradient:before {
  z-index: 1;
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: -moz-linear-gradient(
    top,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.8) 99%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: -webkit-linear-gradient(
    top,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.8) 99%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    color-stop(18%, transparent),
    color-stop(99%, rgba(0, 0, 0, 0.8)),
    to(rgba(0, 0, 0, 0.8))
  );
  background: -o-linear-gradient(
    top,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.8) 99%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.8) 99%,
    rgba(0, 0, 0, 0.8) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#cc000000',GradientType=0 );
}

.retro-layout-2 .text {
  position: absolute;
  bottom: 0;
  z-index: 10;
  padding: 20px;
  max-width: 350px;
}
.retro-layout-2 .text h2 {
  color: #fff;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 0;
}
.retro-layout-2 .text span {
  color: rgba(255, 255, 255, 0.5);
}

.retro-layout-2 .gradient {
  position: relative;
}
.retro-layout-2 .gradient:before {
  z-index: 1;
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: -moz-linear-gradient(
    top,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.8) 99%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: -webkit-linear-gradient(
    top,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.8) 99%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    color-stop(18%, transparent),
    color-stop(99%, rgba(0, 0, 0, 0.8)),
    to(rgba(0, 0, 0, 0.8))
  );
  background: -o-linear-gradient(
    top,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.8) 99%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.8) 99%,
    rgba(0, 0, 0, 0.8) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#cc000000',GradientType=0 );
}
</style>