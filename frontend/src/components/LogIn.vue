<template>
  <div class="modal">
    <h1 class="heading">Welcome</h1>
    <form @submit="checkForm" class="login-form">
      <h2 class="sub-heading">Name</h2>
      <input type="text" name="name" />
      <h2 class="sub-heading">Username</h2>
      <input type="text" name="userName" />
      <Btn @click:="loginUser" />
    </form>
    <p class="sign-up">
      Don't have an account?
      <a href>Sign up</a>
    </p>
  </div>
</template>

<script>
import getIsLoggedIn from "../services/auth-service";
import axios from "axios";
import * as config from "../config";
export default {
  name: "Login",
  data: function() {
    return {
      user: {
        email: ""
      },
      ohCrap: "",
      errors: []
    };
  },
  methods: {
    checkForm: function(event) {
      event.preventDefault();

      this.errors = [];
      if (this.ohCrap) {
        this.errors.push("Gotcha");
      }
      if (!this.user.email) {
        this.errors.push("Email Address required");
      }
      if (!this.errors.length) {
        this.loginUser();
      }
    },
    loginUser: function() {
      return axios
        .post(`${config.apiUrl}users/login`, this.user)
        .then(response => {
          let user = response.data.user;
          if (user) {
            localStorage.userEmail = user.email;
          } else {
            //show message
          }

          console.log("logged in for user", response.data.user);
          // handle success
          this.$router.push({ path: "/" });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../lib/vars.sass"
</style>
