<template>
  <div class="modal">
    <h1 class="heading">Sign up</h1>
    <form @submit="checkForm" class="login-form">
      <h2 class="sub-heading">Name</h2>
      <input type="text" name="name" />
      <h2 class="sub-heading">Username</h2>
      <input type="text" name="userName" />
      <h2 class="sub-heading">Email address</h2>
      <input type="text" name="emailAddress" />
      <Btn @click:="createUser" />
    </form>
  </div>
</template>

<script>
import axios from axios
import * as config from "../../config"
export default {
    props: [],
    name: "SignUp",
    data: function () {
        return {
            user: {
                name: "",
                userName: "",
                email: ""
            },
            	ohCrap: "",
				errors: [],
        }
    },
    methods: {
        checkForm: function(evt) {
			evt.preventDefault()
				this.errors = []
				if (this.ohCrap) {
					this.errors.push("Not so fast mate!!!")
				}
				if (!this.user.email) {
					this.errors.push("Email required")
				}
				if (!this.errors.length) {
					this.loginUser()
				}
            },
            createUser: function() {
                return axios
                    .post(`${config.apiUrl}/users`, User)
                    .then(function(){
                        this.$router.push({ path: "/" })
                    })
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>