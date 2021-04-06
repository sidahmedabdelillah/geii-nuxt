<template>
  <section class="Foramtion-section">
    <h1 class="font-weight-bold">Formation</h1>
    <div class="row cards-container">
      <div class="col-sm">
        <card-formation :card="cards[0]"></card-formation>
      </div>
      <div class="col-sm">
        <card-formation :card="cards[0]"></card-formation>
      </div>
      <div class="col-sm">
        <card-formation :card="cards[0]"></card-formation>
      </div>
    </div>
  </section>
</template>

<script>
import cardFormation from "./cardFormation";
export default {
  name: "formation",
  components: { cardFormation },
  data: () => {
    return {
      cards: [
        {
          title: "specialite",
          list: [
            {
              text: "les specialit plus demandé au demain",
              img: "/cardImages/degree.png"
            },
            {
              text: "les specialit plus demandé au demain",
              img: "/cardImages/check list.png"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
h3 {
  font-size: 2.5vw;
}
.Foramtion-section {
  margin-top: 0;
  text-align: center;
  padding: 2vh;
}
h1 {
  text-align: left !important;
}
</style>
