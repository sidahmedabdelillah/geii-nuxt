<template>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <div class="well well-sm">
      <h4>Production Scientifique</h4>
    </div>
    <h4
      style="
                        text-align: left;
                        font-weight: 700;
                        margin: 1.5rem 0.5rem;
                        "
    >Publication</h4>
    <div
      class="card"
      style="padding: 0; margin-bottom: 0.5rem;"
      v-for="item in publications"
      :key="item.id"
    >
      <div class="card-body" style="padding: 0.5rem;">
        <p style="text-align: left; margin-bottom: 0;">{{item.Text}}</p>
      </div>
    </div>
    <h4
      style="
                        text-align: left;
                        font-weight: 700;
                        margin: 1.5rem 0.5rem;
                        "
    >Communications</h4>
    <div
      class="card"
      style="padding: 0; margin-bottom: 0.5rem;"
      v-for="item in communications"
      :key="item.id"
    >
      <div class="card-body" style="padding: 0.5rem;">
        <p style="text-align: left; margin-bottom: 0;">
          N.achour et O. Azaoui K.Rebai Road intersection detection
          and classification using hierchical SVM classifier , Avanced
          Robotique (2014) Vol 24 n14 292-941
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["publications", "communications"]
};
</script>

<style scoped>
.livre {
  display: flex;
}
.livre a {
  padding: 1rem;
}
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