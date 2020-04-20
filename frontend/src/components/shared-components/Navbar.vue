<template>
  <div class="header">
    <img class="logo" src="../../../img/artmarket.svg" alt="ARTmarket" />
    <ul>
      <router-link><li>Home</li></router-link>
      <router-link><li>List an item</li></router-link>
      <!-- SIGN IN OR PROFILE, DEPENDING ON LOGGED IN STATUS -->
      <router-link><li v-if="login">{{ name }}</li></router-link>
    </ul>
  </div>
</template>

<script>
import GetIsLoggedIn from "../../services/auth-service";
import UserDetails from "../../services/get-user-details";
export default {
  props: [],
  name: "Navbar",
  data() {
    return {
      nav: {
        name: "Chris",
        login: true
      },
      created: async function() {
        this.isLoggedIn = GetIsLoggedIn.isLoggedIn();
        this.GetUserDetails = UserDetails.GetUserDetails();
      }
    };
  }
};

</script>

<style lang="sass" scoped>
@import "../../lib/vars"

.header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1.5rem 3rem
  background-color: #1A1A1A
  color: white

ul
  display: flex
  justify-content: flex-end
  padding: 0

li
  text-align: right
  margin: 0rem 0rem 0rem 1rem
  list-style-type: none
  font-family: "Poppins", sans-serif

.logo
  height: 2rem
</style>