export default function({ $axios, app }) {
  $axios.onError(error => {
    console.log(error);
    app.$toast.error(error);
  });
}
