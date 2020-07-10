<template>
  <div class="panel panel-default info1">
    <div class="menu_title">
      <h4 style="text-align: center;">Information personel</h4>
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
            <label for="email">Nom et Prenom</label>
            <p>{{name}}</p>
          </div>
          <div class="form-group">
            <label for="email">Grade:</label>
            <p>{{grade}}</p>
          </div>
          <div class="form-group">
            <label for="email">Fonction Actuelle :</label>
            <p>{{fonctionnement}}</p>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <p>{{email}}</p>
          </div>
          <div class="form-group">
            <label for="email">Courdone:</label>
            <p>{{bureau}}</p>
          </div>
          <div class="form-group">
            <label for="email">lien:</label>
            <div class="social-links">
              <a target="_blank" rel="noopener noreferrer" :href="Profile_g" v-if="Profile_g">
                <img src="https://img.icons8.com/ios-filled/50/000000/google-scholar--v2.png" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="Profile_linked"
                v-if="Profile_linked"
              >
                <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" />
              </a>
              <a target="_blank" rel="noopener noreferrer" :href="Profile_id" v-if="Profile_id">
                <img src="https://img.icons8.com/windows/64/000000/orcid.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "side",
  props: [
    "name",
    "email",
    "grade",
    "fonctionnement",
    "bureau",
    "Profile_id",
    "Profile_linked",
    "Profile_g"
  ]
};
</script>

<style scoped>
.info1 {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border-color: #ddd !important;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
.panel-body {
  padding: 15px;
}
</style>