<template>
  <div class="modal">
    <h1>Sign up</h1>
    <form class="login-form">
      <h2>Name</h2>
      <input type="text" />
      <h2>Username</h2>
      <input type="text" />
      <h2>Email address</h2>
      <input type="text" />
    </form>
    <Btn @click: />
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
            }
        }
    },
    methods: {
        checkForm: function(event) {
			event.preventDefault()
				this.errors = []
				if (this.ohNoHoney) {
					this.errors.push("Gotcha")
				}
				if (!this.user.email) {
					this.errors.push("Email Address required")
				}
				if (!this.errors.length) {
					this.loginUser()
				}
		    },
        }
    }
</script>

<style lang="sass" scoped>
</style>