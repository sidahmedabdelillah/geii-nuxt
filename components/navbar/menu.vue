<template>
  <nav class="navbar navbar-expand-lg   my-nav">
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
      class="collapse navbar-collapse"
      style="justify-content: center;"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">
            Home
            <span class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/news">Actualité</nuxt-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href
            >Formation</a
          >
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <nuxt-link to="/specialite/STR" class="dropdown-item"
              >Telecome</nuxt-link
            >
            <nuxt-link to="/specialite/SE" class="dropdown-item"
              >System Embarqué</nuxt-link
            >
            <nuxt-link to="/specialite/AUTO" class="dropdown-item"
              >Automatisme</nuxt-link
            >
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link to="#" class="nav-link">Recherche</nuxt-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href
            >Membres</a
          >
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <nuxt-link to="/members/prof" class="dropdown-item">Prof</nuxt-link>
            <nuxt-link to="/" class="dropdown-item">Access Etudiant</nuxt-link>
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="#">Contact</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/login">
            Login
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.dropdown:hover > .dropdown-menu {
  display: block;
  background: #193c4e;
  color: white;
  position: absolute;
  top: 100%;
  border-radius: 0;
}
.dropdown-item:hover {
  color: #193c4e !important;
}
.dropdown-item {
  color: white !important;
}

.dropdown:hover a {
  color: #193c4e;
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
  font-size: 0.9 rem;
  letter-spacing: 0.1 rem;
}
.nav-link {
  padding-left: 40px !important;
  padding-right: 40px !important;
}

a {
  color: white;
}
a:hover {
  color: #193c4e;
}
.navbar ul li:hover {
  color: #193c4e !important;
  background-color: white;
}
.nuxt-link-exact-active {
  color: #193c4e !important;
  background-color: white;
}
</style>
