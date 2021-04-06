<template>
  <ul class="links">
    <li>
      <a target="_blanc" class="link hover" href="http://www.enst.dz">
        Ecole Nationale Superieure de Tecknologie</a
      >
    </li>
    <li>
      <nuxt-link class="hover link" to="/members/prof">List des Pros</nuxt-link>
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
</template>

<script>
export default {};
</script>

<style scoped>
li {
  list-style: none;
  margin-bottom: 10px;
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
