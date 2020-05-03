<template>
  <div class="my-navbar">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top my-nav">
      <nuxt-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" alt="LOGO" />
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse go-right"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav go-right">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="#">
              Home
              <span class="sr-only">(current)</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#">News</nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Education</a
            >
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <nuxt-link to="#" class="dropdown-item">Telecome</nuxt-link>
              <nuxt-link to="#" class="dropdown-item"
                >System Embarqué</nuxt-link
              >
              <nuxt-link to="#" class="dropdown-item">Automatisme</nuxt-link>
            </div>
          </li>
          <li class="nav-item">
            <nuxt-link to="#" class="nav-link">Research</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#">Members</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#">Contact</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">
              <img
                id="profilePic"
                v-if="$auth.loggedIn"
                v-bind:src="$auth.user.picture"
                alt
              />
              <img v-else src="../assets/LOGIN.png" alt />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    login() {
      this.$auth.loginWith("google");
    }
  }
};
</script>
<style>
* {
  /*overflow-x: hidden;*/
  color: #505962;
  border: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif !important;
}

.no-repeat {
  background-repeat: no-repeat !important;
  background-position: center;
  background-size: cover;
}

.main {
  padding: 0 !important;
}

/*---- navbar-----*/
.navbar button {
  color: white;
}

.navbar .navbar-toggler-icon {
  background-image: url("https://mdbootstrap.com/img/svg/hamburger2.svg?color=fff");
}

.navbar {
  padding-top: 0;
  padding-bottom: 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9 rem;
  letter-spacing: 0.1 rem;
  background: rgba(0, 0, 0, 0.6) !important;
}

.navbar-brand {
  height: 4 rem;
}

.navbar ul li a {
  color: white !important;
}

.navbar ul li a:hover {
  color: #f04b4c !important;
}

.navbar-brand img {
  height: 3.5rem;
  padding: 0;
  margin: 0;
}

.navbar ul li {
  margin-left: 0.7rem !important;
}

.navbar ul li:last-child {
  margin-left: 40px !important;
}

.go-right {
  justify-content: right;
  color: white !important;
}

.show .show {
  background: rgba(0, 0, 0, 0.6) !important;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9 rem;
  letter-spacing: 0.1 rem;
}
#profilePic {
  height: 30px;
  vertical-align: middle;
  border-style: none;
  margin: 0 !important;
  padding: 0 !important;
  border-radius: 50%;
}
</style>
