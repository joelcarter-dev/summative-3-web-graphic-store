<template>
    <router-link class="detailed-item" :to="{name: 'item', params: {itemId: itemData.id}}">
        <div class="left">
           <img src="https://cdn.shopify.com/s/files/1/0016/7232/files/graphic_art_illustration_43_2048x2048.jpg?v=1564887267" :alt="itemData.title" />
	        <!-- :src="itemData.image" -->
        </div>
        <div class="right">
            <h1>{{itemData.name}}</h1>
            <span>${{itemData.price}}</span>
            <p class="description">{{itemData.about}} </p>
            <div class="admin-buttons" v-if="isLoggedIn">
                <font-awesome-icon icon="pen" class="admin-icon" />
                <font-awesome-icon icon="trash" class="admin-icon" />
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
		name: "GridItem",
		props: ["itemData", "isLoggedIn"],
	}
</script>

<style lang="sass" scoped>
@import "../../lib/vars"
$imageHeight: 180px
.detailed-item
    max-width: 
    background-color: white
    box-shadow: 2px 2px 9px -2px rgba(0,0,0,0.30)
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
    .admin-buttons
        width: 30px
        margin: 0
        margin-top: -30px
        float: right
        *
            margin: 5px
            color: $fontBlack
</style>