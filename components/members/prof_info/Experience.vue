<template>
  <div class="tab-pane fade" id="Experience" role="tabpanel" aria-labelledby="Experience-tab">
    <div class="well well-sm">
      <h4>Experience</h4>
    </div>
    <p>{{Experience}}</p>
  </div>
</template>

<script>
export default {
  props: ["Experience"]
};
</script>

<style scoped>
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.tab-pane {
  background: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  text-align: center;
  padding: 10px;
}
</style>