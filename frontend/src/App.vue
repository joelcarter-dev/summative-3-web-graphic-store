<template>
  <div id="app">
	  <!-- <LogIn /> -->
	  <SignUp />
    <!-- v if show login dialog -->
    <router-view>
    </router-view>
    <!-- MODALS -->
  </div>
</template>

<script>
// import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
export default {
	components: { SignUp },
  	name: "App"
  // created: create listener for event that is fired using event bus
};
</script>

<style lang="sass">
@import "/lib/vars.sass"
body, html
	margin: 0
	padding: 0
	height: 100%
	background-color: #EBEBEB

*, *:before, *:after
	box-sizing: border-box

// MODAL STYLES
</style>
