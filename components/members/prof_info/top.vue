<template>
  <div class="row profile-head">
    <div class="col-md- col-sm-4 col-xs-12">
      <img src="https://cdn.onlinewebfonts.com/svg/img_504568.png" class="img-responsive" />
      <!---
            <div class="container" style="margin-left: 90px;">
                <span class="btn btn-default uplod-file">
                Upload Photo <input type="file" />
                </span>
            </div>
      -->
    </div>
    <div class="col-md-8 col-sm-8 col-xs-12">
      <h5>{{nom}}</h5>
      <p>{{grade}}</p>
      <ul>
        <li>
          <p class="Biographie">{{activite_pedagogique}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["activite_pedagogique", "nom", "grade"]
};
</script>

<style scoped>
.img-responsive {
  display: block;
  max-width: 100%;
}
.Biographie {
  width: 100%;
  text-align: justify;
  padding: 0px 5px 5px 5px;
  color: #fff;
  font-size: 17px;
  text-transform: none !important;
  margin: 0;
}

.profile-head {
  width: 100%;
  background-color: rgb(65, 105, 255);

  padding: 15px 5px;
  border-radius: 30px;
}
.profile-head img {
  height: 180px;
  width: 180px;
  margin: 0 auto;
  border: 5px solid #fff;
  border-radius: 5px;
}
.profile-head h5 {
  width: 100%;
  padding: 5px 5px 0px 5px;
  text-align: justify;
  font-weight: bold;
  color: #fff;
  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 0;
}
.profile-head p {
  width: 100%;
  text-align: justify;
  padding: 0px 5px 5px 5px;
  color: #fff;
  font-size: 17px;
  text-transform: capitalize;
  margin: 0;
}
.profile-head ul {
  list-style: none;
  padding: 0;
}
.profile-head ul li {
  display: block;
  color: #ffffff;
  padding: 5px;
  font-weight: 400;
  font-size: 15px;
}
</style>