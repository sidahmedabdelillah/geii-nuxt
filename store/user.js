export const state = () => {
  return {
    isLogged: false,
    user: {}
  };
};

export const mutations = {
  login(state, user) {
    state.user = user;
    state.isLogged = true;
  },
  logout(state) {
    state.user = {};
    state.isLogged = false;
  }
};
