<template>
  <div class="login-form">
    <h2 class="text-center">Sign in</h2>
    <div class="text-center social-btn">
      <a @click="login" href="#" class="btn btn-danger btn-block">
        <font-awesome-icon :icon="['fab', 'google']" />
        Sign in with
        <b>Google</b>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith("google");
    }
  }
};
</script>

<style scoped>
.login-form {
  color: white;
  border-radius: 5%;
  background-color: #777;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  margin: 30px auto;
  margin-top: 25vh !important;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
  color: white;
}
.login-form .hint-text {
  color: white;
  padding-bottom: 15px;
  text-align: center;
}
.form-control,
.btn {
  min-height: 38px;
  border-radius: 2px;
  width: 50%;
  margin: auto !important;
}
.or-seperator i {
  padding: 0 10px;
  background: #f7f7f7;
  position: relative;
  top: -11px;
  z-index: 1;
}
.social-btn .btn {
  margin: 10px 0;
  font-size: 15px;
  text-align: center;
  line-height: 24px;
}
.social-btn .btn i {
  float: left;
  margin: 4px 15px 0 5px;
  min-width: 15px;
}
.login-btn {
  font-size: 15px;
  font-weight: bold;
}
</style>
