<template>
  <div>
    <div class="modal-center">
      <div class="modal-login">
        <h1 class="heading">Welcome</h1>
        <form @submit="checkForm" class="login-form">
          <h2 class="sub-heading">Name</h2>
          <input type="text" name="name" />
          <h2 class="sub-heading">Username</h2>
          <input type="text" name="userName" />
          <Btn class="button-modal" @click:="loginUser" />
        </form>
        <p class="sign-up">
          Don't have an account?
          <span class="bold-text">
            <a href>Sign up</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import GetIsLoggedIn from "../services/auth-service";
import Btn from "../components/shared-components/Btn"
import axios from "axios";
import * as config from "../../config";
export default {
  components: { Btn },
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

.modal-center
  display: flex
  justify-content: center
  .modal-login
    text-align: center
    background-color: $backgroundDark
    padding: 10px
    width: 15rem
    border: 2px solid $mainRed
    border-radius: 0.2rem

.heading
  margin: 1rem
  color: $mainRed
  font-family: $redHeading
  font-weight: bold

.sub-heading
  color: white
  font-family: $heading
  font-weight: 400
  font-size: 1rem

.sign-up
  color: white
  font-family: $heading
  font-weight: 300
  font-size: 0.8rem
  margin: 1.5rem 0 1rem 0
  .bold-text
    font-weight: 600
    a
      color: $mainRed

.button-modal
  display: flex
  justify-content: center

</style>
