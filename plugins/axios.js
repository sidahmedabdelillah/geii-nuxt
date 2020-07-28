export default function({ $axios, app }) {
  $axios.onError(error => {
    pp.$toast.error(error);
  });
}
