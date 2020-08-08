export default ({ store, router }) => {
  // If the user is not authenticated
  if (store.state.user.isLogged) {
    return router.go(-1);
  }
};
