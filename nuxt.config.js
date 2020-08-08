const URI = "https://admin.geii.me/";
const googleAuthID =
  "366986770967-cm1f8rg38ubercuqkqnfdodde0uesjnv.apps.googleusercontent.com";
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Departement GEII" || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/axios",
    "~/plugins/strapi",
    { src: "~/plugins/vuex-persist", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/dotenv"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    // mark down
    "@nuxtjs/markdownit",
    // strapi cms
    "@nuxtjs/strapi",
    //toast
    "@nuxtjs/toast"
  ],
  toast: {
    position: "top-center",
    duration: 1200
  },
  strapi: {
    // Options
    url: URI
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: URI,
    proxy: false
  },
  /*
   ** Build configuration
   */
  proxy: {
    "/api": URL
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  markdownit: {
    injected: true
  }
};
