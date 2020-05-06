<template>
  <section class="Foramtion-section">
    <h1 class="font-weight-bold">Formation</h1>
    <div class="row cards-container">
      <div class="col-sm">
        <div class="Formation-card ">
          <h3>Specialité</h3>
          <ul>
            <li>
              <img class="card-image" src="../assets/degree.png" alt srcset />
              <p>les specialit plus demandé au demain</p>
            </li>
            <li>
              <img
                class="card-image"
                src="../assets/check list.png"
                alt
                srcset
              />
              <p>les specialit plus demandé au demain</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm  ">
        <div class="Formation-card">
          <h3>Specialité</h3>
          <ul>
            <li>
              <img class="card-image" src="../assets/degree.png" alt srcset />
              <p>les specialit plus demandé au demain</p>
            </li>
            <li>
              <img
                class="card-image"
                src="../assets/check list.png"
                alt
                srcset
              />
              <p>les specialit plus demandé au demain</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm ">
        <div class="Formation-card">
          <h3>Specialité</h3>
          <ul>
            <li>
              <img class="card-image" src="../assets/degree.png" alt srcset />
              <p>les specialit plus demandé au demain</p>
            </li>
            <li>
              <img
                class="card-image"
                src="../assets/check list.png"
                alt
                srcset
              />
              <p>les specialit plus demandé au demain</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "formation"
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
