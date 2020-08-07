<template>
  <div class="nav-top">
    <div class="inner">
      <img class="logo" src="/logo.png" alt="" />
      <div class="text">
        <p class="Ecole">Ecole Nationale Superieure de Tecknologie</p>
        <p class="geii">
          Departement Genie Electric Et Informatique Indistruelle
        </p>
      </div>
      <img class="enst" src="/enst.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-top {
  display: flex;
  width: 100%;
  height: 90px;
}

.nav-top .inner {
  padding: 10px;
  height: 100%;
  display: flex;
  margin: 0 auto;
}

.nav-top .inner .text {
  align-items: center;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.enst {
  height: auto;
  display: block;
  object-fit: contain;
}
.logo {
  width: 100px;
  object-fit: contain;
  height: auto;
  display: block;
}
p {
  margin: 0;
}
.Ecole {
  font-size: 18px;
  font-weight: 300;
}
.geii {
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

@media (max-width: 900px) {
  hr {
    margin-top: 10px;
  }
  .Ecole {
    font-size: 14px;
    font-weight: 300;
  }
  .geii {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
}

@media (max-width: 760px) {
  .logo {
    display: none;
  }
  .enst {
    display: none;
  }
}
</style>
