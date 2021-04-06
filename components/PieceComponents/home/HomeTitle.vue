<template>
  <div class="home-title">
    <h2 class="font-weight-bold">
      {{ text }}
      <br class="d-none d-xl-inline-block" />
    </h2>
    <hr class="divider bg-madison divider-md-0" />
  </div>
</template>

<script>
export default {
  name: "home-title",
  props: ["text"]
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 32px;
  line-height: 1.5;
  + .divider {
    margin-top: 29px;
  }
}

.divider {
  width: 50px;
  height: 3px;
  padding: 0;
  margin: 0 auto;
  background: #b1b1b1;
  border: none;
  margin-bottom: 21px;
}

.bg-madison {
  background: #0d2d62;
  fill: #0d2d62;
}

@media (min-width: 768px) {
  .divider-md-0 {
    margin-left: 0;
  }
}

@media (min-width: 768px) {
  h2 {
    line-height: 1.27273;
    font-size: 44px;
  }
}
</style>
