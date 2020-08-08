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
                type="password"
                class="form-control"
                required
                placeholder="Mot de pass"
              />
            </div>
          </div>

          <div class="row justify-content-start mt-4">
            <div class="col  justify-content-space-around">
              <button v-if="loading" class="btn btn-primary mt-4">
                <span class="spinner-border spinner-border-sm"></span>
                Loading..
              </button>
              <button
                v-else
                @click.prevent="login"
                class="btn btn-primary mt-4"
              >
                Se connecter
              </button>
              <nuxt-link to="login"
                ><button class="btn btn-warning mt-4 text-right">
                  S'insecrit
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
import { mapMutations } from "vuex";
export default {
  middleware: "logged",
  data() {
    return {
      identifier: "",
      password: "",
      error: [],
      loading: false
    };
  },
  methods: {
    ...mapMutations({
      setUser: "user/login"
    }),
    check() {
      this.error = [];
      if (this.identifier == "") {
        this.error.push("Identifier is required");
      }
      if (this.password == "") {
        this.error.push("Password is required");
      }
      if (this.error.length > 0) {
        let self = this;
        this.error.forEach(function(item) {
          self.$toast.error(item);
        });
        return;
      }
      this.login();
    },
    async login() {
      try {
        this.loading = true;
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password
        });
        this.setUser(user);
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    }
  },

  computed: {
    links() {}
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
#form {
  background-color: rgba(102, 102, 102, 0.2);
  width: 50vw;
  margin: 20vh auto !important ;
  border-radius: 10%;
}
</style>
