<template>
	<router-link class="item" :to="{name: 'item', params: {itemId: itemData.id}}">
		<img src="https://cdn.shopify.com/s/files/1/0016/7232/files/graphic_art_illustration_43_2048x2048.jpg?v=1564887267" :alt="itemData.title" />
	    <!-- :src="itemData.image" -->
    </router-link>
</template>

<script>
	export default {
		name: "GridItem",
		props: ["itemData"],
	}
</script>

<style lang="sass" scoped>
@import "../../lib/vars"
.item
    img
        margin-top: 5px
        object-fit: cover
        width: 200px
        height: 200px
</style>
