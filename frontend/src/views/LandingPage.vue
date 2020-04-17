<template>
	<div class="">
		<GetItems :showDetailed="false"/>
	</div>
</template>

<script>
	import GetItems from '../components/GetItems'
	export default {
		name: "LandingPage",
		components: {GetItems}
	}
</script>

<style lang="sass" scoped></style>
