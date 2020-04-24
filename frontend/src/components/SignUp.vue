<template>
  <div>
    <!-- TESTING -->
    <button class="button-test" @click="showModal = true">Show Modal</button>
    <!-- TESTING ENDED -->

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false">
        <div class="modal-center">
          <div class="modal-signup">
            <h1 class="heading">Sign up</h1>
            <form @submit="checkForm" class="login-form">
              <h2 class="sub-heading">Name</h2>
              <input v-model="user.name" type="text" name="name" />
              <h2 class="sub-heading">Username</h2>
              <input type="text" name="userName" />
              <h2 class="sub-heading">Email address</h2>
              <input type="text" name="emailAddress" />
              <Btn class="button-modal" @click:="createUser" />
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Btn from "../components/shared-components/Btn";
import axios from "axios";
import * as config from "../../config";
export default {
  components: { Btn },
  props: [],
  name: "SignUp",
  data: function() {
    return {
      showModal: false,
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

// TESTING

.button-test
  appearance: none
  outline: none
  border: none
  background: none
  cursor: pointer

  display: inline-block
  padding: 15px 25px
  background-image: linear-gradient(to right, #CC2E5D, #FF5858)
  border-radius: 8px

  font-size: 18px
  color: #FFF
  font-weight: 700
  box-shadow: 3px 3px 9px rgba (0, 0, 0, 0.4)
  transition: 0.4s ease-out

.modal-overlay
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  // overflow-x: visible
  // overflow-y: visible
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 98
  background-color: rgba(0, 0, 0, 0.3)

</style>

// event bus will send an event for everything to listen to