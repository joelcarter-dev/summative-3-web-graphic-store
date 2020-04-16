<template>
	<div class="">
		<!-- <Navbar /> -->
		<GetItems :showDetailed="true" userId="5e98836d58912e2e2c97a736"/>
	</div>
</template>

<script>
	import Navbar from "../components/shared-components/Navbar"
	import GetItems from "../components/ViewItems/GetItems"
	export default {
		name: "UserProfilePage",
		components: {Navbar, GetItems}
	}
</script>

<style lang="sass" scoped></style>
