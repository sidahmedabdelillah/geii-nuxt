<template>
  <section class="Foramtion-section">
    <home-title text="Formation" />

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
import homeTitle from "@/components/PieceComponents/home/HomeTitle";

export default {
  name: "formation",
  components: { cardFormation, homeTitle },
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
.Foramtion-section {
  margin-top: 0;
  padding: 2vh;
}
</style>
