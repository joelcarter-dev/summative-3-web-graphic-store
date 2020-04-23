<template>
  <div class="modal-center">
    <div class="modal-signup">
      <h1 class="heading">Sign up</h1>
      <form @submit="checkForm" class="login-form">
        <h2 class="sub-heading">Name</h2>
        <input type="text" name="name" />
        <h2 class="sub-heading">Username</h2>
        <input type="text" name="userName" />
        <h2 class="sub-heading">Email address</h2>
        <input type="text" name="emailAddress" />
        <Btn class="button-modal" @click:="createUser" />
      </form>
    </div>
  </div>
</template>

<script>
import Btn from "../components/shared-components/Btn"
import axios from "axios";
import * as config from "../../config";
export default {
  components: { Btn },
  props: [],
  name: "SignUp",
  data: function() {
    return {
      user: {
        name: "",
        userName: "",
        email: ""
      },
      ohCrap: "",
      errors: []
    };
  },
  methods: {
    checkForm: function(evt) {
      evt.preventDefault();
      this.errors = [];
      if (this.ohCrap) {
        this.errors.push("Not so fast mate!!!");
      }
      if (!this.user.email) {
        this.errors.push("Email required");
      }
      if (!this.errors.length) {
        this.loginUser();
      }
    },
    createUser: function() {
      return axios.post(`${config.apiUrl}/users`).then(function() {
        this.$router.push({ path: "/" });
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
  .modal-signup
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
  font-family: $body
  font-weight: 300
  font-size: 0.8rem
  margin: 1rem 0 0.5rem 0

.sign-up
  color: white
  font-family: $body
  font-weight: 300
  font-size: 0.7rem
  letter-spacing: 0.3px
  margin: 1.5rem 0 1rem 0
  .bold-text
    font-weight: 600
    a
      color: $mainRed

.button-modal
  display: flex
  justify-content: center
  margin-bottom: 1rem
</style>