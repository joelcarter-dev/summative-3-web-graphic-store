<template>
	<section class="item-grid">
		<div v-for="item in items" :key="item.id" class="item-holder">
			<DetailedItem :itemData="item" />
		</div>
	</section>
</template>

// TODO add if showDetailed
// TODO condinal style for grid to list

<script>
	import axios from "axios"
	import config from "../../config"
	//import GridItem from "./GridItem"
	import DetailedItem from "./DetailedItem"
	export default {
		name: "GetItems",
		components: {
			//GridItem,
			DetailedItem
		},
		// props may be used to pass in search data if we get to it
		props: ["searchParams", "showDetailed"],
		data: function() {
			return {
				items: [],
			}
		},
		methods: {
			getItems: function() {
				return axios
					.get(`${config.apiUrl}/items`)
					.then((response) => {
						//handle success
						return response.data.items
					})
					.catch(function(error) {
						//handle error
						console.log(error)
					})
			},
		},
		watch: {
			source: async function() {
				this.items = await this.getItems()
			},
		},
		created: async function() {
			this.items = await this.getItems()
		},
	}
</script>

<style lang="sass" scoped>
@import "../lib/vars"
.item-grid
	display: grid
	grid-template-columns: repeat(auto-fill, 200px)
	grid-column: span 4
	grid-column-gap: 20px
	grid-row-gap: 20px
	margin: 5rem auto
	padding: 0 5rem
	max-width: 90rem
	.item-holder
		box-shadow: 11px 12px 5px -6px rgba(222,222,222,0.98)
	// 	margin: 0 auto
</style>
