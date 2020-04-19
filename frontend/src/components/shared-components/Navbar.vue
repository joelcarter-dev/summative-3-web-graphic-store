<template>
  <div class="header">
    <img class="logo" src="../../../img/ARTmarket.png" alt="ARTmarket" />
    <ul>
      <li>Home</li>
      <!-- <li>{{ login }}</li> -->
      <li>List an item</li>
    </ul>
  </div>
</template>

<script>
// import GetIsLoggedIn from "../../services/auth-service";
export default {
  name: "Navbar",
  data() {
    return {
      nav: {
        login: true,
      },
    };
  },
};
</script>

<style lang="sass" scoped>
@import "../../lib/vars"

.header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1rem 2rem
  background-color: #1A1A1A
  color: white

ul
  display: flex
  justify-content: flex-end
  // not working, still aligns to the left of the container
  padding: 0

li
  text-align: right
  margin: 0rem 0rem 0rem 1rem
  list-style-type: none

.logo
  height: 2rem
</style>
