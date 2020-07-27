<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8" style="padding : 0">
        <div class="list-container">
          <div class="row" style="margin: 10px 0;">
            <div class="col-md-7" style="padding : 0">
              <div class="search__container">
                <input
                  class="search__input"
                  type="text"
                  placeholder="Search"
                  v-model="query"
                />
              </div>
            </div>
            <div class="col-md-5">
              <div class="selector">
                <select required v-model="filter">
                  <option value="1" selected>No Filter selected</option>
                  <option value="2">Professeur</option>
                  <option value="3">Maitre de conference A</option>
                  <option value="4">Maitre de conference B</option>
                  <option value="5">Maitre Assistant A</option>
                  <option value="6">Maitre Assistant B</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              <table
                id="dtBasicExample"
                class="table table-striped table-bordered table-sm"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th class="th-sm">Nom et Prenom</th>
                    <th class="th-sm">Position</th>
                    <th class="th-sm">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="user in listOfUsers"
                    :key="user.id || this.item.id"
                    @click="selected = user"
                  >
                    <td>{{ user.prof_info.Full_name }}</td>
                    <td>{{ user.prof_info.Fonction_actuel }}</td>
                    <td>{{ user.email }}</td>
                  </tr>
                  <tr v-if="listOfUsers.length == 0">
                    <td colspan="3" style="text-align : center">
                      Aucun element correspend a vos cherche
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="my-card" v-if="selected == null">
          <div class="my-card-header" style="text-align : center">
            <h1>La pages des prof</h1>
            <p>Selectioneun prof de la liste pour obtenire ces info</p>
          </div>
        </div>
        <div class="my-card" v-else>
          <nuxt-link :to="'/members/prof/' + selected.id">
            <div class="my-card-header" style="text-align : center">
              <img
                src="https://cdn.onlinewebfonts.com/svg/img_87237.png"
                alt=""
              />
              <h4>{{ selected.prof_info.Full_name }}</h4>
            </div>
          </nuxt-link>
          <div class="my-card-body">
            <h5>{{ selected.prof_info.Fonction_actuel }}</h5>
            <ul>
              <li>
                <i class="fas fa-university"></i
                >{{ selected.prof_info.Specialite }}
              </li>
              <li><i class="fas fa-at"></i>{{ selected.email }}</li>
              <li>
                <i class="fas fa-building" v-if="selected.prof_info.Bureau"></i
                >{{ selected.prof_info.Bureau }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/datatables.min.css"
        }
      ],
      script: [
        { src: "/datatables.min.js", body: true },
        { src: "/lala.js", body: true }
      ]
    };
  },
  async asyncData({ $axios }) {
    const users = await $axios.$get(`/users/Teachers/`);
    const options = {
      includeScore: true,
      threshold: 0.2,
      // Search in `author` and in `tags` array
      keys: [
        "email",
        "prof_info.Full_name",
        "prof_info.Grade",
        "prof_info.Specialite"
      ]
    };
    return {
      users,
      options
    };
  },
  data: function() {
    return {
      selected: null,
      query: "",
      filter: "1"
    };
  },

  // TODO change the selection in the backend to an enumiratore
  computed: {
    listOfUsers() {
      let fuze = new Fuse(this.filteredUsers, this.options);

      if (this.query == "" || this.query == null) {
        return this.filteredUsers;
      }
      let result = fuze.search(this.query);
      let userss = result.map(item => {
        return { ...item.item };
      });
      return userss;
    },
    filteredUsers() {
      const list = [
        "Professeur",
        "Maitre de conference A",
        "Maitre de conference B",
        "Maitre Assistant A",
        "Maitre Assistant B"
      ];
      if (+this.filter == 1) {
        return this.users;
      } else {
        const userp = this.users.filter(item => {
          if (list[+this.filter - 2] === item.prof_info.Grade) {
            return true;
          }
        });
        return userp;
      }
    }
  }
};
</script>

<style scoped>
.list-container {
  margin-top: 100px;
}

.search__input {
  width: 100%;
  padding: 12px 24px;
  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;

  color: #575756;
  background-color: transparent;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
  border-radius: 50px;
  border: 1px solid #575756;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.search__input:hover,
.search__input:focus {
  padding: 12px 0;
  outline: 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #575756;
  border-radius: 0;
  background-position: 100% center;
}

.selector select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  font-size: 16px;
  outline: none;
  border-radius: 50px;
  border: 1px solid #575756;
}

.selector select:focus {
  padding: 12px 0;
  outline: 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #575756;
  border-radius: 0;
  background-position: 100% center;
  background-color: transparent;
  outline: none;
}
.selector option {
  font-weight: normal;
}

.selector ::before,
.selector ::after {
  content: "";
  display: block;
  position: absolute;
  pointer-events: none;
  border: 1px solid transparent;
  width: 0;
  height: 0;
  right: 16px;
}
.selector ::before {
  bottom: 55%;
  border-width: 0 6.5px 8px 6.5px;
  border-bottom-color: #d6d6d6;
}
.selector ::after {
  border-width: 8px 6.5px 0 6.5px;
  border-top-color: #d6d6d6;
  top: 55%;
}

.selector select {
  border-radius: 50px;
  border: 1px solid #575756;
  font-weight: 400;
  color: inherit;
  padding: 11px 15px;
  line-height: normal;
  -webkit-transition: border-color 0.2s ease, outline 0.2s ease;
  transition: border-color 0.2s ease, outline 0.2s ease;
}
.my-card {
  color: white;
  margin-top: 100px;
  border: solid 1px #575756;
  border-radius: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgba(10, 10, 10, 0.5);
}
.my-card-header {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.my-card-header img {
  width: 100px;
  margin: auto;
}

.my-card-body {
  text-align: center;
}
.my-card-body ul {
  text-align: left;
  text-decoration: none;
  list-style: none;
  padding-left: 10px;
}

i {
  margin: 0 5px;
}

h4 {
  margin: 20px 0;
}
h5 {
  font-weight: 500;
}
.my-custom-scrollbar {
  position: relative;
  height: 80vh;
  width: 100%;
  overflow: auto;
}
.table-wrapper-scroll-y {
  display: block;
  padding: 0 10px;
}
tr {
  cursor: pointer;
}
</style>
