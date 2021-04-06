<template>
  <div @click="open" class="card" :class="cour.type">
    <div class="title-wrape">
      <h3 class="title">{{ cour.title || "" }}</h3>
    </div>
    <h6 class="module">{{ cour.Module || "" }}</h6>
    <div class="prof-wrape">
      <p class="prof">{{ username }}</p>
    </div>
    <div class="specilaite-wrape">
      <p class="specialite">{{ cour.specialite }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardCour",
  props: ["cour"],
  computed: {
    username() {
      if (this.cour.user) {
        return this.cour.user.username;
      } else {
        return "";
      }
    }
  },
  methods: {
    open() {
      var win = window.open(this.cour.document[0].url, "_blank");
      win.focus();
    }
  }
};
</script>

<style scoped>
.cour {
  background-color: rgba(22, 27, 44);
}
.td {
  background-color: rgba(3, 46, 2, 0.5);
}
.tp {
  background-color: rgba(100, 27, 0, 0.5);
}
.card {
  width: 100%;
  cursor: pointer;
  color: white;
  border: solid black 1px !important;
  border-radius: 5px !important;
  padding: 10px;
  margin-bottom: 30px;
  height: 200px;
  position: relative;
}
.title-wrape {
  max-height: 35%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.title {
  font-weight: 400;
  font-size: 20px;
}

.prof-wrape {
  position: absolute;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  bottom: 30%;
}
.prof {
  margin: 0;
  font-weight: 300;
  font-size: 14px;
}

.module {
  margin-bottom: 10px;
  font-weight: 300;
  font-size: 12px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.specilaite-wrape {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.specialite {
  bottom: 0;
  text-align: center;
  margin: 0;

  font-weight: 100;
  font-size: 12px;
}
</style>
