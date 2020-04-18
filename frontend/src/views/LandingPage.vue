<template>
	<div class="">
		<!-- <Navbar /> -->
		<GetItems :showDetailed="false"  userId="5e98836d58912e2e2c97a736"/>
	</div>
</template>

<script>
	import GetItems from '../components/ViewItems/ViewItemsGetItems'
	// import Navbar from '../components/shared-components/Navbar'
	export default {
		name: "LandingPage",
		components: {GetItems}
	}
</script>

<style lang="sass" scoped></style>
