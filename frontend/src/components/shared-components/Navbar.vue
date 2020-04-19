<template>
	<div class="header">
		<div class="left">
			<img src="../../../img/ARTmarket.png" alt="ARTmarket" />
		</div>
		<div class="right">
			<ul>
				<li>Home</li>
				<li>List an item</li>
				<li>{{ login }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Navbar",
		data() {
			return {
				nav: {
					login: true,
				},
			}
		},
	}
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
  // not working, still aligns to the left of the container
  padding: 0

li
  text-align: right
  margin: 0rem 0rem 0rem 1rem
  list-style-type: none

.logo
  height: 2rem
</style>
