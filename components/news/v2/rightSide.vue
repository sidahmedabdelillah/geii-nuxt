<template>
  <div class="col-md-4">
    <div class="row align-items-end">
      <div class="side">
        <h2>Autre Actualité</h2>
        <div class="cards">
          <div v-for="item in articles" :key="item.id" class="my-card">
            <div class="row">
              <div class="col">
                <img class="fixed-size" :src="getImageUrl(item.Picture)" />
              </div>
              <div class="col info-space">
                <div class="mini-info">
                  <nuxt-link :to="`/news/v2/${item.id}`">
                    {{ item.Title }}
                  </nuxt-link>
                  <div class="post-meta mb-30">
                    <div class="element">
                      <img
                        src="https://colorlib.com/preview/theme/videomag/img/core-img/calendar2.png"
                        alt
                      />
                      {{ item.created_at.slice(0, 10) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["articles"],
  methods: {
    getImageUrl(img) {
      return this.$imageFilter(img).image;
    }
  }
};
</script>

<style></style>
