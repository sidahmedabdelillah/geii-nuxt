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
        <template v-for="link in links">
          <nav-link
            :key="link.name"
            v-if="link.subLinks.length == 0"
            :link="link"
          ></nav-link>
          <nav-link-drop v-else :link="link" :key="link.name"></nav-link-drop>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import navLink from "./parts/navLink";
import navLinkDrop from "./parts/navLinkDrop";
export default {
  name: "navMenu",
  components: {
    navLink,
    navLinkDrop
  },
  data: () => {
    return {
      links: [
        {
          name: "Home",
          path: "/",
          subLinks: []
        },
        {
          name: "Actualite",
          path: "/news",
          subLinks: []
        },
        {
          name: "Formation",
          path: "/",
          subLinks: [
            {
              name: "Telecommuniccation",
              path: "/specialite/STR"
            },
            {
              name: "Automatique",
              path: "/specialite/SE"
            },
            {
              name: "Electronique",
              path: "/specialite/AUTO"
            }
          ]
        },
        {
          name: "Recherche",
          path: "#",
          subLinks: []
        },
        {
          name: "Membre",
          path: "/",
          subLinks: [
            {
              name: "Profs",
              path: "/members/prof"
            },
            {
              name: "Access etudiants",
              path: "/etudiant/cour/"
            }
          ]
        },
        {
          name: "About",
          path: "#",
          subLinks: []
        },
        {
          name: "Login",
          path: "/login",
          subLinks: []
        }
      ]
    };
  }
};
</script>

<style scoped>
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
</style>
