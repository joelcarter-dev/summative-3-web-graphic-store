<template>
  <div class="header">
    <img class="logo" src="../../../img/ARTmarket.png" alt="ARTmarket" />
    <ul>
      <li>Home</li>
      <li>List an item</li>
      <li v-if="login">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
var loggedIn = require('../../services/auth-service')
var getUserDetails = require('../../services/get-user-details')
import config from "../../../config";
import axios from "axios"
export default {
  name: "Navbar",
  data() {
    return {
      nav: {
        name: "Chris",
        login: true
      },
      methods: {
        getUser: getUserDetails(),
        logIn: loggedIn()
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
  padding: 1rem 2rem
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

// getUser: function() {
//           return axios
//             .get(`${config.apiUrl}/users/`)
//             .then(function(response) {
//               return response.data.users
//             })
//             .catch(function(error) {
//               // handle error
//               console.log(error)
//             });
//         },
