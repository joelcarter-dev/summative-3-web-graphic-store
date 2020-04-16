<template>
	<div class="">
		<GetItems :showDetailed="true"/>
	</div>
</template>

<script>
	import GetItems from '../components/ViewItems/GetItems'
	export default {
		name: "LandingPage",
		components: {GetItems}
	}
</script>

<style lang="sass" scoped></style>
