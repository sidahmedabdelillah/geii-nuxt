<template>
  <div>
    <div class="row">
      <div class="col" id="col">
        <button class="btn btn-success" @click="select(1)">
          1ére Année
        </button>
      </div>
      <div class="col" id="col">
        <button class="btn btn-secondary" @click="select(2)">
          2eme Année
        </button>
      </div>
      <div class="col" id="col">
        <button class="btn btn-primary" @click="select(3)">
          3eme Année
        </button>
      </div>
    </div>
    <h3>Premier Semestre</h3>
    <div class="row">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Module</th>
              <th scope="col">Coefition</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in selected1">
              <tr
                :key="item.key"
                class="accordion-toggle collapsed"
                id="accordion1"
                data-toggle="collapse"
                data-parent="#accordion1"
                :href="'#collapseOne' + item.id"
              >
                <td class="expand-button"></td>
                <td>{{ item.module }}</td>
                <td>{{ item.Credit }}</td>
              </tr>
              <tr class="hide-table-padding" :key="item.key">
                <td></td>
                <td colspan="3">
                  <div :id="'collapseOne' + item.id" class="collapse in p-3">
                    <div class="row">
                      <div
                        class="col"
                        v-html="$md.render(item.discription)"
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>

    <h3>Deuxieme Semestre</h3>

    <div class="row">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Module</th>
              <th scope="col">Coefition</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in selected2">
              <tr
                :key="item.key"
                class="accordion-toggle collapsed"
                id="accordion1"
                data-toggle="collapse"
                data-parent="#accordion1"
                :href="'#collapseOne' + item.id"
              >
                <td class="expand-button"></td>
                <td>{{ item.module }}</td>
                <td>{{ item.Credit }}</td>
              </tr>
              <tr class="hide-table-padding" :key="item.key">
                <td></td>
                <td colspan="3">
                  <div :id="'collapseOne' + item.id" class="collapse in p-3">
                    <div class="row">
                      <div
                        class="col"
                        v-html="$md.render(item.discription)"
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "programme",
  data: function() {
    return {
      selected1: this.special_1_1,
      selected2: this.special_1_2
    };
  },
  methods: {
    select(n) {
      if (n == 1) {
        this.selected1 = this.special_1_1;
        this.selected2 = this.special_1_2;
      }
      if (n == 2) {
        this.selected1 = this.special_2_1;
        this.selected2 = this.special_2_2;
      }
      if (n == 3) {
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
h3 {
  padding: 2rem 0 1rem 0;
}
.btn {
  width: 100%;
  border-radius: 0 !important;
}

#col {
  padding: 0;
}
tr.hide-table-padding td {
  padding: 0;
}

.expand-button {
  position: relative;
}

.accordion-toggle .expand-button:after {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translate(0, -50%);
  content: "-";
}
.accordion-toggle.collapsed .expand-button:after {
  content: "+";
}
</style>
