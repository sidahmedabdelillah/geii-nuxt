<template>
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div class="well well-sm">
      <h4>Enseignement</h4>
    </div>

    <h4
      style="
                    text-align: left;
                    font-weight: 700;
                    margin: 1.5rem 0.5rem;
                    "
    >Enseignement</h4>
    <table class="table bio-table">
      <thead>
        <tr>
          <th>Module</th>
          <th>Anne</th>
          <th>Specialte</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="en in Enseignement" :key="en.id">
          <td style="font-weight: 600;">{{en.Enseignement}}</td>
          <td>{{en.Anne}}</td>
          <td>{{en.Specialite}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["Enseignement"]
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
.bio-table {
  width: 100%;
  border: 0px solid;
}
.bio-table td {
  text-transform: capitalize;
  text-align: left;
  font-size: 15px;
}
.bio-table > tbody > tr > td {
  border: 0px solid;
  text-transform: capitalize;
  color: rgb(0, 4, 51);
  font-size: 15px;
}
@media all and (max-width: 430px) {
  .profile-head ul li {
    font-size: 12px !important;
  }
  .bio-table > tbody > tr > td {
    font-size: 13px;
  }
}
</style>