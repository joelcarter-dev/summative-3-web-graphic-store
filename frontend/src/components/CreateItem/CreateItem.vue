<template>
	<div class="create-item-holder">
		<h2 class="create-item-title">List new item</h2>

		<div class="form-holder">
			<form @submit="checkForm">
				<div class="title wrapper">
					<label for="title">Title</label>
					<input type="text" v-model="itemData.title" />
				</div>
				<div class="-description wrapper">
					<label for="description">Description</label>
					<textarea
						name="description"
						v-model="itemData.about"
						rows="8"
					/>
				</div>

				<div class="image wrapper">
					<label for="title">Image URL</label>
					<input type="text" v-model="itemData.image" />
				</div>
				
				<div class="submit-wrapper">
					<input type="submit" class="button" value="Upload" />
					<input type="submit" class="button" value="Cancel" />
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import config from "../../../config"
	import GetIsLoggedIn from "../../services/auth-service"
	export default {
		name: "CreateItem",
		components: {

		},
		data: function() {
			return {
				itemData: {
					title: "",
					price: 0,
					about: "",
					imageUrl: ""
				},
				isLoggedIn: false,
			}
		},
		methods: {
			checkForm: function() {

			},
			createItem: function() {
				return axios
					.post(`${config.apiUrl}/item`, this.itemData)
					.then(() => {
					// handle success

					})
					.catch(function(error) {
					// handle error
					console.log(error);
					});
				},
		},
		created: async function() {
			this.isLoggedIn = GetIsLoggedIn.isLoggedIn() //typo dude haha, I just fixed it for you
		},
	}
</script>

<style lang="sass" scoped>
@import "../../lib/vars"
.create-item-holder
	background-color: $white
	box-shadow: 2px 2px 21px -7px rgba(0,0,0,0.30)
	border-radius: 5px
	min-width: 340px
	height: max-content
	.create-item-title
		font-family: 'Open Sans', sans-serif
		color: $mainRed
		font-size: 20px
		margin-left: 30px
	.form-holder
		padding: 20px 30px 30px 30px
	.wrapper
		margin-bottom: 30px
		input, textarea
			border-radius: 5px
			background-color: $background
			border: 0
			display: block
			width: 100%
			padding: 10px
			box-sizing: border-box
		label
			margin-bottom: 5px
			display: block
			font-family: 'Open Sans', sans-serif
			color: $fontBlack
		

</style>
