<template>
  <div class="header">
    <img class="logo" src="../../../img/artmarket.svg" alt="ARTmarket" />
    <div class="nav-links">
      <router-link class="link" to="">Home</router-link>
      <router-link class="link" to="">List an item</router-link>
      <font-awesome-icon class="fa-lg" :icon="['fas', 'bell']" />
      <!-- SIGN IN OR PROFILE, DEPENDING ON LOGGED IN STATUS -->
      <router-link><li v-if="nav.login">{{ nav.name }}</li></router-link>
    </div>
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

.fa-lg
  margin-left: 2rem

.fa-lg:hover
  color: $mainRed

.nav-links
  display: flex
  justify-content: flex-end
  padding: 0
  .link
    display: flex
    text-align: right
    margin: 0rem 0rem 0rem 2rem
    list-style-type: none
    font-family: "Poppins", sans-serif
    color: white
    text-decoration: none
  .link:hover
    color: $mainRed

.logo
  height: 2rem
</style>