<template>
  <div class="header">
    <img class="logo" src="../../../img/artmarket.svg" alt="ARTmarket" />
    <ul>
      <li>Home</li>
      <li>List an item</li>
      <li v-if="login">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import GetIsLoggedIn from "../../services/auth-service";
import UserDetails from "../../services/get-user-details";
export default {
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
