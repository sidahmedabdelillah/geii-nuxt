<template>
  <div class="footer">
    <div class="row">
      <div class="col">
        <footer-left></footer-left>
      </div>
      <div class="col">
        <div class="map-container"></div>
      </div>
      <div class="col">
        <footer-right></footer-right>
      </div>
    </div>
  </div>
</template>

<script>
import footerLeft from "./footerLeft";
import footerRight from "./footerRight";
export default {
  components: {
    footerLeft,
    footerRight
  }
};
</script>

<style>
.footer {
  padding-top: 30px;
  height: 60vh;
  background-color: #193c4e;
  color: #707070;
}
</style>
