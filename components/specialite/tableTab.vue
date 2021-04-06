<template>
  <div>
    <h3>{{ title }}</h3>
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
            <template v-for="item in semestre">
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
                        class="col-md-12"
                        v-html="renderCourseDiscription(item.discription)"
                      ></div>
                      <div class="col-md-12">
                        <h5>document Suplementaire</h5>
                        <a
                          v-for="document in item.document"
                          :key="document.id"
                          target="__blanc"
                          :href="getUrl(document.document).url"
                          >{{ getUrl(document.document).name }}
                        </a>
                      </div>
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
  props: ["semestre", "title"],
  methods: {
    renderCourseDiscription(discription) {
      discription = discription.replace("![", "[");
      console.log({ discription });
      return this.$md.render(discription);
    },
    getUrl() {
      const f = this.semestre[0].document[0].document;
      const myFile = this.$fileFilter(this.semestre[0].document[0].document);
      return myFile;
    }
  },
  computed: {}
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
