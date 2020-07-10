<template>
  <div class="my">
    <div class="container">
      <top
        :nom="user.prof_info.Full_name"
        :grade="user.prof_info.Grade"
        :activite_pedagogique="user.prof_info.Activite_pedagogique"
      ></top>

      <br />
      <br />

      <div class="row">
        <div class="col-sm-8">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link"
                id="Experience-tab"
                data-toggle="tab"
                href="#Experience"
                role="tab"
                aria-controls="Experience"
                aria-selected="false"
              >Enseignement</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >Enseignement</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >Production Scientifique</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >Encadrement</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <!---enseignement-->
            <Enseignement :Enseignement="user.prof_info.Enseignement"></Enseignement>
            <!--fin Enseignement-->

            <!--Prodcution-->
            <Production
              :communications="user.prof_info.communications"
              :publications="user.prof_info.publications"
            ></Production>
            <!--fin Production-->

            <!--Encadrement-->
            <Encadrement :Encadrement="user.prof_info.encadrements"></Encadrement>
            <!--fin Encadrement-->

            <!--Experience-->
            <Experience :Experience="user.prof_info.Experience"></Experience>
            <!--fin experience-->
          </div>
        </div>
        <div class="col-sm-4">
          <!-- Side-->
          <Side
            :name="user.prof_info.Full_name"
            :email="user.email"
            :grade="user.prof_info.Grade"
            :fonctionnement="user.prof_info.Fonction_actuel"
            :bureau="user.prof_info.Bureau"
            :Profile_id="user.prof_info.Profile_id"
            :Profile_g="user.prof_info.Profile_g"
            :Profile_linked="user.prof_info.Profile_linked"
          ></Side>
          <!-- End Side-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "@/components/members/prof_info/top";
import Enseignement from "@/components/members/prof_info/Enseignement";
import Production from "@/components/members/prof_info/Production";
import Encadrement from "@/components/members/prof_info/Encadrement";
import Experience from "@/components/members/prof_info/Experience";
import Side from "@/components/members/prof_info/Side";

export default {
  async asyncData({ params, $axios }) {
    return {
      user: await $axios.$get(`/users/Teachers/${params.id}`),
      id: params.id
    };
  },
  components: {
    top,
    Enseignement,
    Production,
    Encadrement,
    Experience,
    Side
  },
  mounted() {
    console.log(this.id);
  }
};
</script>

<style scoped>
.my {
  margin: 10vh 0;
}
body {
  background: #ffffff;
}
.social-links {
  display: flex;
  justify-content: space-around;
}
.social-links img {
  width: 50px;
  height: 50px;
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

.nav-tabs {
  margin: 0;
  padding: 0;
  border: 0;
}
.nav-tabs > li > a {
  background: #dadada;
  border-radius: 0;
  box-shadow: inset 0 -8px 7px -9px rgba(0, 0, 0, 0.4),
    -2px -2px 5px -2px rgba(0, 0, 0, 0.4);
}
.tab-pane {
  background: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  text-align: center;
  padding: 10px;
}

/* edit profile css*/

/***
Bootstrap Line Tabs by @keenthemes
A component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme
Licensed under MIT
***/

/* Tabs panel */

/* Default mode */

/* Below tabs mode */

.menu_title {
  padding: 15px 10px;
  border-bottom: 1px solid #eee;
  margin: 0 5px;
}
</style>