<template>
    <div class="detailed-item">
        <div class="left">
            <img src="" alt="">
        </div>
        <div class="right">
            <h1></h1>
            <span></span>
            <p class="description"></p>
        </div>
    </div>
</template>

<script>
    export default {
		name: "GridItem",
		props: ["itemData"],
	}
</script>

<style lang="sass" scoped>
@import "../lib/vars"
.detailed-item
    max-width: 
    background-color: white
    .left
        img
            object-fit: cover
            width: 200px
            height: 200px
    .right
        h1
            font-weght: bold
            font-size: 20px
        span
            color: $mainRed
            font-size: 20px
        .description
</style>