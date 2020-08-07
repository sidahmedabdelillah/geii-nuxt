<template>
  <div class="container">
    <div
      class="row row-50 text-md-left align-items-md-center justify-content-md-between"
    >
      <div class="col-md-5 col-lg-4 order-md-2">
        <a href="index.html">
          <img
            class="img-responsive d-inline-block"
            :src="home_about.Picture.url"
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
          <a class="btn btn-icon btn-icon-right button-default">
            <span>Learn More</span>
            <font-awesome-icon :icon="['fa', 'arrow-right']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
