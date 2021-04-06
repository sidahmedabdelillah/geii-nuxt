<template>
  <div class="Formation-card">
    <h3>{{ card.title }}</h3>
    <ul>
      <li v-for="item in card.list" :key="item">
        <img class="card-image" :src="item.img" alt srcset />
        <p>{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["card"]
};
</script>

<style scoped>
h3 {
  font-size: 2.5vw;
  text-align: center;
}
.card-image {
  width: 8vw;
}
.Formation-card {
  padding: 2vh 0 0.2vh 0;
  background: #193c4e;
  border-radius: 1vw;
}
.Formation-card h3 {
  color: #f04b4c;
}
.Formation-card ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: flex-start;
}
.Formation-card ul li {
  padding: 2vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}
.Formation-card ul li p {
  margin: auto;
  color: #fff !important;
  font-weight: 400;
  font-size: 1.4vw;
  margin-left: 1vw;
}
@media (max-width: 576px) {
  .card-image {
    width: 4.5vw;
  }
  h3 {
    font-size: 8vw;
  }
  .Formation-card ul li p {
    font-size: 4vw;
    margin-right: 2vw;
  }
  .Formation-card {
    width: 70vw;
    margin: 5vh auto;
  }
}
</style>
