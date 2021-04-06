<template>
  <div class="footer">
    <div class="row">
      <div class="col">
        <div class="left">
          <ul class="links">
            <li>
              <a target="_blanc" class="link hover" href="http://www.enst.dz">
                Ecole Nationale Superieure de Tecknologie</a
              >
            </li>
            <li>
              <nuxt-link class="hover link" to="/members/prof"
                >List des Pros</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="hover link" to="/specialite/STR"
                >Systeme Telecommunications Et Reseaux</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="link hover" to="/specialite/AUTO"
                >Automatique Et Informatique Indistruelle</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="link hover" to="/specialite/SE"
                >Systeme Embarqué</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="map-container"></div>
      </div>
      <div class="col">
        <div class="right">
          <ul>
            <li class="link" v-for="i in info" :key="i">
              <i class="fas fa-map-marker-alt" :class="i.icon"></i>{{ i.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      info: [
        {
          text:
            "ENST Cité Diplomatique Ex Centre Biomédical Dergana-Bordj El Kiffan-",
          icon: "fa-map-marker-alt"
        },
        {
          text: " Phone: (+213) 78 29 83 435",
          icon: "fa-phone"
        },
        {
          text: "Geii@enst.dz",
          icon: "fa-at"
        }
      ]
    };
  }
};
</script>
