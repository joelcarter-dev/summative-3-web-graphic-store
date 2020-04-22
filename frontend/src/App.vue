<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "App",
	}
</script>

<style lang="sass">
	@impport "../lib/vars.sass"
	body, html
		margin: 0
		padding: 0
		height: 100%
		background-color: #EBEBEB

	*, *:before, *:after
	    box-sizing: border-box
</style>
