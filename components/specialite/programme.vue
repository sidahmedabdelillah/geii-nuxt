<template>
  <div>
    <div class="row">
      <div class="col" id="col">
        <button class="btn btn-success">
          1ére Année
        </button>
      </div>
      <div class="col" id="col">
        <button class="btn btn-secondary">
          2eme Année
        </button>
      </div>
      <div class="col" id="col">
        <button class="btn btn-primary">
          3eme Année
        </button>
      </div>
    </div>
    <table-tab :semestre="selected1" title="premier Semestre" />

    <table-tab :semestre="selected2" title="Deuxieme Semestre" />
  </div>
</template>

<script>
import tableTab from "./tableTab";
export default {
  name: "programme",
  components: { tableTab },
  data: function() {
    return {
      selected1: this.special_1_1,
      selected2: this.special_1_2
    };
  },
  methods: {
    select(n) {
      if (n == "1") {
        this.selected1 = this.special_1_1;
        this.selected2 = this.special_1_2;
      }
      if (n == "2") {
        this.selected1 = this.special_2_1;
        this.selected2 = this.special_2_2;
      }
      if (n == "3") {
        this.selected1 = this.special_3_1;
        this.selected2 = this.special_3_2;
      }
    }
  },
  props: [
    "special_1_1",
    "special_2_1",
    "special_3_1",
    "special_1_2",
    "special_2_2",
    "special_3_2"
  ]
};
</script>

<style scoped>
.btn {
  width: 100%;
  border-radius: 0 !important;
}
</style>
