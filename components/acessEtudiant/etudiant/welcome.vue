<template>
  <div class="row">
    <div class="col-md-3">
      <div class="image-container">
        <img src="/logo.png" alt="" />
      </div>
    </div>
    <div class="col-md-9 welcome">
      <h1>Welcome</h1>
      <p>
        Bienvenu Dans votre coin comme un etudiant dans notre department. Dans
        cette page vous avez access a votre Documentation dans une maniere
        secret ..
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: #193c4e;
}
img {
  object-fit: contain;
  height: 70%;
}
.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
