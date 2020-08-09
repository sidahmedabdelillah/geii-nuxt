<template>
  <div class="right">
    <!-- <div class="row">
      <div class="col-md-5" style="padding-bottom : 20px">
        <div class="search__container">
          <input class="search__input" type="text" placeholder="Search" />
        </div>
      </div>
      <div class="col-md-7">
        <div class="selector">
          <select required v-model="filter">
            <option v-for="s in specialite" :value="s.short" :key="s.name">{{
              s.name
            }}</option>
          </select>
        </div>
      </div>
    </div> -->
    <!-- search -->
    <module-row
      v-for="module in modules"
      :key="module.id"
      :cours="getcours(module)"
      :module="module.module"
    ></module-row>
  </div>
</template>

<script>
import cardCour from "../cardCour";
import moduleRow from "./pieces/moduleRow";
export default {
  components: {
    cardCour,
    moduleRow
  },
  data: () => {
    return {
      specialite: [
        {
          name: "Systeme Telecommunication Et Reseaux",
          short: "STR"
        },
        {
          name: "Automatique et Informatique indistruelle",
          short: "AUTO"
        },
        {
          name: "Systeme Ambarque",
          short: "SE"
        }
      ],
      filter: "STR"
    };
  },
  methods: {
    getcours(module) {
      return this.cours.filter(item => {
        return item.Module == module.module;
      });
    }
  },
  props: ["cours", "modules"]
};
</script>

<style>
.row {
  margin-bottom: 20px;
}
.selector select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  font-size: 16px;
  outline: none;
  border-radius: 50px;
  border: 1px solid #575756;
}

.selector select:focus {
  padding: 12px 0;
  outline: 0;
  border: 1px solid transparent;
  border-bottom: 1px solid #575756;
  border-radius: 0;
  background-position: 100% center;
  background-color: transparent;
  outline: none;
}
.selector option {
  font-weight: normal;
}

.selector ::before,
.selector ::after {
  content: "";
  display: block;
  position: absolute;
  pointer-events: none;
  border: 1px solid transparent;
  width: 0;
  height: 0;
  right: 16px;
}
.selector ::before {
  bottom: 55%;
  border-width: 0 6.5px 8px 6.5px;
  border-bottom-color: #d6d6d6;
}
.selector ::after {
  border-width: 8px 6.5px 0 6.5px;
  border-top-color: #d6d6d6;
  top: 55%;
}

.selector select {
  border-radius: 50px;
  border: 1px solid #575756;
  font-weight: 400;
  color: inherit;
  padding: 11px 15px;
  line-height: normal;
  -webkit-transition: border-color 0.2s ease, outline 0.2s ease;
  transition: border-color 0.2s ease, outline 0.2s ease;
}
</style>
