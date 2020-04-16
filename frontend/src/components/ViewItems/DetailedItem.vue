<template>
    <router-link class="detailed-item" :to="{name: 'item', params: {itemId: itemData.id}}">
        <div class="left">
           <img src="https://cdn.shopify.com/s/files/1/0016/7232/files/graphic_art_illustration_43_2048x2048.jpg?v=1564887267" :alt="itemData.title" />
	        <!-- :src="itemData.image" -->
        </div>
        <div class="right">
            <h1>{{itemData.name}}</h1>
            <span>${{itemData.price}}</span>
            <p class="description">{{itemData.about}}</p>
        </div>
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
$imageHeight: 180px
.detailed-item
    max-width: 
    background-color: white
    box-shadow: 11px 12px 5px -6px rgba(222,222,222,0.20)
    display: flex
    max-width: 50rem
    margin-bottom: 20px
    border-radius: 5px
    text-decoration: none
    .left
        img
            object-fit: cover
            width: $imageHeight
            height: $imageHeight
            border-radius: 5px 0 0 5px
    .right
        *
            margin: 15px 30px
            font-family: 'Open Sans', sans-serif
        h1
            font-weght: bold
            font-size: 20px
            color: $fontBlack
        span
            color: $mainRed
            font-size: 20px
        .description
            font-weght: 100
            color: $fontBlack

</style>