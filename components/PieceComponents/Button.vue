<template>
    <div @click="click"  class="btn">
      {{text}}
    </div>
</template>

<script>
export default {
  props : ['text'],
  methods : {
    click(){
      this.$emit("clickedbtn" , this.text)
    }
  }
};
</script>


<style scoped>
.btn {
  background-color: #193c4e;
  border-radius: 1px;
  color: white;
  width: 100%;
  text-align: right;
  padding: 10px 40px;
}
.btn:hover {
  background-color: #777;
  color: #193c4e;
}
</style></style>
