export const state = () => ({
  user: {
    loggedIn: false,
    username: "",
    token: "",
    userinfo: {}
  }
});

export const mutations = {
  set(state, user1) {
    state.user = user1;
  },
  remove(state) {
    state.user = {
      loggedIn: false,
      username: "",
      token: ""
    };
  }
};
