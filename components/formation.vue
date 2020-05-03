<template>
  <section class="Foramtion-section jumbotron">
    <h1>Formation</h1>
    <div class="row cards-container">
      <div class="col-sm">
        <div class="Formation-card">
          <h3>Specialité</h3>
          <ul>
            <li>
              <img
                class="card-image"
                src="../assets/degree.png"
                alt=""
                srcset=""
              />
              <p>les specialit plus demandé au demain</p>
            </li>
            <li>
              <img
                class="card-image"
                src="../assets/check list.png"
                alt=""
                srcset=""
              />
              <p>les specialit plus demandé au demain</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm">
        <div class="Formation-card">
          <h3>Specialité</h3>
          <ul>
            <li>
              <img
                class="card-image"
                src="../assets/degree.png"
                alt=""
                srcset=""
              />
              <p>les specialit plus demandé au demain</p>
            </li>
            <li>
              <img
                class="card-image"
                src="../assets/check list.png"
                alt=""
                srcset=""
              />
              <p>les specialit plus demandé au demain</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm">
        <div class="Formation-card">
          <h3>Specialité</h3>
          <ul>
            <li>
              <img
                class="card-image"
                src="../assets/degree.png"
                alt=""
                srcset=""
              />
              <p>les specialit plus demandé au demain</p>
            </li>
            <li>
              <img
                class="card-image"
                src="../assets/check list.png"
                alt=""
                srcset=""
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

<style>
.Foramtion-section {
  margin-top: 0;
  text-align: center;
  padding: 2vh;
}

.Foramtion-section h1 {
  margin-bottom: 2vh;
  color: #193c4e;
}

.card-image {
  width: 55px;
}

.Formation-card {
  padding: 3vh 0;
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
  color: white !important;
  font-weight: 400;
  font-size: 1.8vw;
  margin-left: 1vw;
}

@media (max-width: 576px) {
  .Formation-card ul li p {
    font-size: 4vw;
    margin-right: 2vw;
  }

  .Formation-card {
    margin: 5vh 0;
  }
}
</style>
