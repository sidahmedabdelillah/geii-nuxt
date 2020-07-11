<template>
  <div class="container">
    <div class="row">
      <div class="col col-lg-12">
        <div class="bg-white p-3 text-center rounded box profile">
          <img class="img-responsive rounded-circle" src="/avatar.png" width="90" />
          <h5 class="mt-3 name">{{selected.prof_info.Full_name}}</h5>
          <span class="work d-block">{{selected.prof_info.Grade}}</span>
          <span class="mail d-block">{{selected.email }}</span>
          <div class="mt-4 about">
            <span>Un petit bio</span>
          </div>
          <div class="mt-4">
            <nuxt-link :to="getlink()">
              <h6 class="v-profile">Visit profile</h6>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-lg-12 members nano-content">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Nom et Prenom</th>
              <th scope="col">Grade</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item  in users" :key="item.id" @click="select(item)">
              <td>{{item.prof_info.Full_name}}</td>
              <td>{{item.prof_info.Grade}}</td>
              <td>{{item.email}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const users = await $axios.$get(`/users/Teachers/`);
    let selected = users[0];
    return {
      users,
      selected
    };
  },
  data: function() {
    return {
      selected: this.users
    };
  },
  mounted() {
    console.log();
  },
  methods: {
    select(item) {
      this.selected = item;
    },
    getlink() {
      return "/members/prof/" + this.selected.id;
    }
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

.name {
  color: blue;
}

.work {
  font-weight: bold;
  font-size: 15px;
}
.mail {
  font-weight: 500;
}

.about span {
  font-size: 13px;
}

.v-profile {
  color: blue;
  cursor: pointer;
}

.box {
  -webkit-box-shadow: 13px 12px 5px -10px rgba(196, 194, 196, 0.72);
  -moz-box-shadow: 13px 12px 5px -10px rgba(196, 194, 196, 0.72);
  box-shadow: 13px 12px 5px -10px rgba(196, 194, 196, 0.72);
}

.members {
  height: 40vh;
  overflow-y: scroll;
}
</style>