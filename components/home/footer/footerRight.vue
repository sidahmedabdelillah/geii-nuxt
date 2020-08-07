<template>
  <ul>
    <li class="link" v-for="i in info" :key="i">
      <i class="fas fa-map-marker-alt" :class="i.icon"></i>{{ i.text }}
    </li>
  </ul>
</template>

<script>
export default {
  data: () => {
    return {
      info: [
        {
          text:
            "ENST Cité Diplomatique Ex Centre Biomédical Dergana-Bordj El Kiffan-",
          icon: "fa-map-marker-alt"
        },
        {
          text: " Phone: (+213) 78 29 83 435",
          icon: "fa-phone"
        },
        {
          text: "Geii@enst.dz",
          icon: "fa-at"
        }
      ]
    };
  }
};
</script>

<style>
.link {
  color: #707070;
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 100;
  transition: all 200ms ease-in;
}
li {
  list-style: none;
  margin-bottom: 10px;
}
i {
  margin-right: 20px;
}
</style>
