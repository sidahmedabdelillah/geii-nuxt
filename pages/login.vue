<template>
  <form id="form" class="card-body">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-8 col-xl-6">
          <div class="row">
            <div class="col text-center">
              <h1>Login</h1>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mt-4">
              <input
                v-model="identifier"
                type="text"
                class="form-control"
                required
                placeholder="Nom d'utilisateur ou mot de pass"
              />
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input
                v-model="password"
                type="pasword"
                class="form-control"
                required
                placeholder="Mot de pass"
              />
            </div>
          </div>
          <div class="alertcontainer">
            <div class="alert alert-danger" role="alert" v-for="er in error" :key="er[0]">{{er}}</div>
          </div>
          <div class="row justify-content-start mt-4">
            <div class="col">
              <button v-if="loading" class="btn btn-primary mt-4">
                <span class="spinner-border spinner-border-sm"></span>
                Loading..
              </button>
              <button v-else @click.prevent="login" class="btn btn-primary mt-4">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
</template>

<script>
export default {
  data() {
    return {
      identifier: "",
      password: "",
      error: [],
      loading: false
    };
  },
  methods: {
    login() {
      this.error = [];
      if (this.identifier == "") {
        this.error.push("Identifier is required");
      }
      if (this.password == "") {
        this.error.push("Password is required");
      }
      if (this.error.length == 0) {
        this.postlogin();
      }
    },

    async postlogin() {
      const user = {
        identifier: this.identifier,
        password: this.password
      };
      try {
        this.loading = true;
        const respond = await this.$axios.post(
          "http://localhost:1337/auth/local/",
          user
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
          this.loading = false;
          this.$router.push("/");
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
.alertcontainer {
  margin-top: 5%;
}
#form {
  background-color: rgba(102, 102, 102, 0.2);
  width: 50vw;
  margin: 20vh auto !important ;
  border-radius: 10%;
}
</style>
