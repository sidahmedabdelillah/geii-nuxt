import createPersistedState from "vuex-persistedstate";
export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: "vuex",
      paths: [],
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 999, secure: false }),
        removeItem: key => Cookies.remove(key)
      }
    })(store);
  });
};
