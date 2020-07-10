<template>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    <div class="well well-sm">
      <h4>Encadrement</h4>
    </div>
    <div
      class="card"
      style="padding: 0; margin-bottom: 0.5rem;"
      v-for="en in Encadrement"
      :key="en.id"
    >
      <div class="card-body" style="padding: 0.5rem; text-align: left;">
        <div>
          <h5 style="display: inline-block; text-align: left;">Année :</h5>
          <p style="display: inline-block; margin: 0 20px;">{{en.Anne}}</p>
        </div>
        <div>
          <h5 style="display: inline-block; text-align: left;">Titre :</h5>
          <p style="display: inline-block; margin: 0 20px;">{{en.Titre}}</p>
        </div>
        <div>
          <h5 style="display: inline-block; text-align: left;">Spécialité :</h5>
          <p style="display: inline-block; margin: 0 20px;">{{en.Specialite}}</p>
        </div>
        <div>
          <h5 style="display: inline-block; text-align: left;">Nom des étudiants :</h5>
          <p style="display: inline-block; margin: 0 20px;">{{en.Condidat}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Encadrement"]
};
</script>

<style scoped>
.well-sm {
  padding: 9px;
  border-radius: 3px;
}
.img-responsive {
  display: block;
  max-width: 100%;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.tab-pane {
  background: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  text-align: center;
  padding: 10px;
}
</style>