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
              <input
                v-model="email"
                type="email"
                class="form-control"
                required
                placeholder="Email"
              />
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
          <div>
            <div class="row align-items-center mt-4">
              <div class="col">
                <select v-model="year" id="inputState" class="form-control">
                  <option selected>1ère année Ing</option>

                  <option>2ème année Ing</option>
                  <option>3ème année Ing</option>
                </select>
              </div>
              <div class="col">
                <select
                  v-model="specialite"
                  id="inputState"
                  class="form-control"
                >
                  <option selected="selected"
                    >Système de Télécommunications & Réseaux</option
                  >
                  <option>Automatique & Informatique Industrielle</option>
                  <option>Système embarqué</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row  mt-4">
            <div class="col justify-content-space-around">
              <button v-if="loading" class="btn btn-primary">
                <span class="spinner-border spinner-border-sm"></span>
                Loading..
              </button>
              <button
                v-else
                @click.prevent="register"
                class="btn btn-primary mt-4"
              >
                Continue
              </button>
              <nuxt-link to="login"
                ><button class="btn btn-warning mt-4 text-right">
                  Se Connecter
                </button></nuxt-link
              >
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
      year: "1ère année Ing",
      specialite: "Système de Télécommunications & Réseaux",
      fullname: "",
      passwordco: "",
      student: false,
      error: [],
      valid: false,
      loading: false
    };
  },
  methods: {
    register() {
      this.error = [];
      //email check
      if (!this.email.includes("@enst.dz")) {
        this.error.push("inscription avec email @enst.dz");
      }
      //password check
      if (
        this.password !== this.passwordco ||
        this.password == "" ||
        this.passwordco == ""
      ) {
        this.error.push("passwords must match");
      }

      // username check
      if (this.username == "") {
        this.error.push("user name is required");
      }

      // fullname check

      if (this.fullname == "") {
        this.error.push("full name is required");
      }
      if (this.error.length > 0) {
        let self = this;
        this.error.forEach(function(item) {
          self.$toast.error(item);
        });
      } else {
        this.loading = true;
        this.studentregister();
        this.loading = false;
        this.$router.push("/");
      }
    },

    studentregister() {
      const newstudent = {
        username: this.username,
        password: this.password,
        email: this.email,
        role: "student",
        info: {
          Year: this.year,
          Full_name: this.fullname,
          specialite: this.specialite
        }
      };

      this.postToServer(newstudent);
    },

    async postToServer(newuser) {
      try {
        this.loading = true;
        respond = await this.$axios.post(
          "/auth/local/registerStudent",
          newuser
        );
        if (respond.status == 200) {
          const loggeduser = {
            username: respond.data.user.username,
            token: respond.data.jwt,
            loggedIn: true,
            userinfo: respond.data.user.userinfo
          };
        }
      } catch (error) {
        this.loading = false;
        const response = error.response.data.message[0].messages[0].message;
        this.error.push(response);
        if (!response) error.push("unknown error");
      }
    }
  }
};
</script>

<style scoped>
.justify-content-space-around {
  display: flex;
  justify-content: space-between;
}

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
