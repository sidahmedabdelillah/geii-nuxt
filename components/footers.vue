<template>
  <div class="footer">
    <no-ssr>
      <div class="row">
        <div class="col">
          <ul class="links">
            <li>
              <a class="link hover" href="www.enst.dz">
                Ecole Nationale Superieure de Tecknologie</a
              >
            </li>
            <li>
              <nuxt-link class="hover link" to="/">List des Pros</nuxt-link>
            </li>
            <li>
              <nuxt-link class="hover link" to="/"
                >Systeme Telecommunications Et Reseaux</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="link hover" to="/"
                >Automatique Et Informatique Indistruelle</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="link hover" to="/">Systeme Embarqué</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="map-container">
            <no-ssr>
              <map-custom></map-custom>
            </no-ssr>
          </div>
        </div>
        <div class="col">
          <ul>
            <li class="link">
              <i class="fas fa-map-marker-alt"></i>ENST Cité Diplomatique Ex
              Centre Biomédical Dergana-Bordj El Kiffan-
            </li>
            <li class="link">
              <i class="fas fa-phone"></i> Phone: (+213) 78 29 83 435
            </li>
            <li class="link"><i class="fas fa-at"></i>Geii@enst.dz</li>
          </ul>
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import mapCustom from "./map/mapCustom";
export default {
  components: {
    mapCustom
  }
};
</script>

<style>
.map-container {
  height: 20vh;
}
i {
  margin-right: 20px;
}
li {
  list-style: none;
  margin-bottom: 10px;
}
.footer {
  padding-top: 30px;
  height: 60vh;
  background-color: #193c4e;
  color: #707070;
}
.link {
  color: #707070;
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 100;
  transition: all 200ms ease-in;
}
.hover:hover {
  color: #aaaaaa;
}
</style>
