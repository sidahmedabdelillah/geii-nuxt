<template>
  <form id="form">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-8 col-xl-6">
          <div class="row">
            <div class="col text-center">
              <h1>Inscription</h1>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col mt-4">
              <input
                v-model="username"
                type="text"
                class="form-control"
                required
                placeholder="Nom d'utilisateur"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input v-model="email" type="email" class="form-control" required placeholder="Email" />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input
                v-model="password"
                id="password"
                name="password"
                type="password"
                required
                class="form-control"
                placeholder="Mot de passe"
              />
            </div>

            <div class="col">
              <input
                v-model="passwordco"
                id="passwordco"
                name="passwordco"
                type="password"
                required
                class="form-control"
                placeholder="Confirmer le Mot de passe"
              />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mt-4">
              <input
                v-model="fullname"
                id="fullname"
                name="name"
                type="text"
                required
                class="form-control"
                placeholder="Nom complet"
              />
              <div id="error"></div>
            </div>
          </div>
          <div v-if="student">
            <div class="row align-items-center mt-4">
              <div class="col">
                <select v-model="year" id="inputState" class="form-control">
                  <option selected>1ère année Ing</option>

                  <option>2ème année Ing</option>
                  <option>3ème année Ing</option>
                </select>
              </div>
              <div class="col">
                <select v-model="specialite" id="inputState" class="form-control">
                  <option selected="selected">Système de Télécommunications & Réseaux</option>
                  <option>Automatique & Informatique Industrielle</option>
                  <option>Système embarqué</option>
                </select>
              </div>
            </div>
          </div>
          <div class="alertcontainer">
            <div class="alert alert-danger" role="alert" v-for="er in error" :key="er[0]">{{er}}</div>
          </div>
          <div class="row justify-content-start mt-4">
            <div class="col">
              <button @click.prevent="register" class="btn btn-primary mt-4">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  head() {
    return {
      link: [{ rel: "stylesheet", href: "/register/style.css" }]
    };
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      year: "",
      specialite: "",
      fullname: "",
      passwordco: "",
      student: false,
      error: [],
      valid: false,
      done: false
    };
  },
  methods: {
    register() {
      this.error = [];
      //email check
      if (!this.email.includes("@enst.dz")) {
        if (!this.error.includes("inscription avec email @enst.dz")) {
          this.error.push("inscription avec email @enst.dz");
        }
      } else {
        var indexofemail = this.error.indexOf(
          "inscription avec email @enst.dz"
        );
        if (indexofemail >= 0) {
          this.error.splice(indexofemail, 1);
        }

        console.log(indexofemail);
      }

      //password check
      if (
        this.password !== this.passwordco ||
        this.password == "" ||
        this.passwordco == ""
      ) {
        if (!this.error.includes("passwords must match")) {
          this.error.push("passwords must match");
        }
      } else {
        var indexofpass = this.error.indexOf("passwords must match");
        if (indexofpass >= 0) {
          this.error.splice(indexofpass, 1);
        }
      }

      // username check
      if (this.username == "") {
        if (!this.error.includes("user name is required")) {
          this.error.push("user name is required");
        }
      } else {
        let indexofuser = this.error.indexOf("user name is required");
        if (indexofuser >= 0) {
          this.error.splice(indexofuser, 1);
        }
      }

      // fullname check

      if (this.username == "") {
        if (!this.error.includes("full name is required")) {
          this.error.push("full name is required");
        }
      } else {
        let indexofuser = this.error.indexOf("full name is required");
        if (indexofuser >= 0) {
          this.error.splice(indexofuser, 1);
        }
      }

      console.log(
        "the length of the error is " + this.error.length + "+++  " + this.error
      );
      if (this.error.length == 0) {
        if (this.email[1] == "_") {
          if (!this.student) {
            this.student = true;
          } else {
            if (this.fullname !== "") {
              this.studentregister();
            }
          }
        } else {
          this.profregister();
        }
      }
    },
    studentregister() {
      const newstudent = {
        username: this.username,
        password: this.password,
        email: this.email,
        role: "student",
        info: {
          year: +this.year[0],
          fullname: this.fullname,
          specialite: this.specialite
        }
      };

      this.posttoserver(newstudent);
    },

    profregister() {
      const newprof = {
        username: this.username,
        password: this.password,
        email: this.email,
        role: "prof",
        info: {
          year: 4,
          fullname: this.fullname,
          specialite: "all"
        }
      };
      this.posttoserver(newsprof);
    },

    async posttoserver(newuser) {
      try {
        respond = await this.$axios.post(
          "http://localhost:1337/auth/local/register1",
          newuser
        );
        if (respond.status == 200) {
          const loggeduser = {
            username: respond.data.user.username,
            token: respond.data.jwt,
            loggedIn: true,
            userinfo: respond.data.user.userinfo
          };
          this.$store.commit("user/set", loggeduser);
          this.$axios.setToken(loggeduser.token, "Bearer");
          this.$router.push("/");
        }
      } catch (error) {
        const response = error.response.data.message[0].messages[0].message;
        this.error.push(response);
      }
    }
  }
};
</script>

<style scoped>
.alertcontainer {
  margin-top: 5%;
}
h1 {
  color: white;
}
#eror {
  color: white;
}
#error {
  color: white;
}
</style>
