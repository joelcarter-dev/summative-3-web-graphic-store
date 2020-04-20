<template>
  <div class="button">
      <button class="button-solid">{{value ? value : "Button"}}</button>
  </div>
</template>

<script>
export default {
    name: "ButtonInverse",
    props: ["value"]
}
</script>

<style lang="sass" scoped>
@import "../../lib/vars"

.button
    .button-solid
        background-color: none
        border-color: $mainRed
        box-shadow: 6px 6px 6px #C1C1C1
        font-size: 0.9rem
        font-weight: 500
        height: 2rem
        width: 8rem
        font-family: "Open Sans", sans serif
        border-radius: 5px
        margin: 1.5rem 0 0 2rem
</style>