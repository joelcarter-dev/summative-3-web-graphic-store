<template>
	<div class="">
		<Navbar />
		<div class="profile-holder">

			<div class="about-holder">
				<div class="top">
					<img src="https://cdn.shopify.com/s/files/1/0016/7232/files/graphic_art_illustration_43_2048x2048.jpg?v=1564887267" :alt="info.firstName"  class="profile-image">
	    			<!-- :src="itemData.image" -->
					<div class="left">
						<h1 class="name">{{info.userName}}</h1>
						<span>{{info.email}}</span>
						<span></span>
					</div>
				</div>
				<div class="bio profile-item">
					<div class="title">Bio</div>
					<p class="content">{{info.bio}}</p>
				</div>
				<div class="contact profile-item">
					<div class="title">Contact Details</div>
					<p class="content">{{info.phone}}</p>
				</div>
				<div class="qualifications profile-item">
					<div class="title">Qualifications</div>
					<p class="content">{{info.qualifications}}</p>
				</div>
			</div>

			<GetItems :userItems="info.items" showDetailed="true"/>

		</div>
	</div>
</template>

<script>
	import Navbar from "../components/shared-components/Navbar"
	import GetItems from "../components/ViewItems/GetItems"
	import getUserDetails from "../services/get-user-details"
	export default {
		name: "UserProfilePage",
		components: {GetItems, Navbar},
		data: function() {
			return {
				info: {},
			}
		},
		created: async function() {
			this.info = await getUserDetails.getUser(this.$route.params.user)
		}
	}
</script>

<style lang="sass" scoped>
@import "../lib/vars.sass"
.profile-holder
	max-width: 90rem
	display: flex
	justify-content: space-evenly
	background-color: lightgray
	margin: 0 auto
.about-holder
	background-color: $white
	box-shadow: 2px 2px 21px -7px rgba(0,0,0,0.75)
	border-radius: 5px
	height: max-content
	padding-bottom: 30px
	div
		padding: 30px 30px 0 30px
	p
		color: $fontBlack
	p, h1, span
		font-family: 'Open Sans', sans-serif
	.top
		display: flex
		border-bottom: 3px solid $mainRed
		margin: 30px
		padding: 0 0 30px 0
		.profile-image
			width: 100px
			height: 100px
			border-radius: 50%
		.left
			padding: 0 0 0 30px
		.left > h1
			padding: 0
			margin-top: 0
	.title
		color: $mainRed
		font-family: 'Open Sans', sans-serif
		padding: 0 30px 0 0
		font-size: 20px
	.profile-item
		max-width: 340px
</style>
